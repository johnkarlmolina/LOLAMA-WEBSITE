import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const FRANCHISE_LOCATIONS = [
  { src: '/Images/FRANCHISE LOCATION/BestLolama South Molino Bacoor.png', label: 'Bacoor Cavite' },
  { src: '/Images/FRANCHISE LOCATION/Smbacoor.png', label: 'SM City Bacoor' },
  { src: '/Images/FRANCHISE LOCATION/tarlac.png', label: 'Tarlac City' },
  { src: '/Images/FRANCHISE LOCATION/laguna.png', label: 'Laguna' },
  { src: '/Images/FRANCHISE LOCATION/montalban.png', label: 'Montalban Rizal' },
  { src: '/Images/FRANCHISE LOCATION/taguig.png', label: 'Taguig City' },
  { src: '/Images/FRANCHISE LOCATION/DASMA.png', label: 'Dasmariñas' },
  { src: '/Images/FRANCHISE LOCATION/SM City Manila.png', label: 'SM City Manila' },
  { src: '/Images/FRANCHISE LOCATION/Sm tanza.png', label: 'SM Tanza' },
  { src: '/Images/FRANCHISE LOCATION/caloocan.png', label: 'Caloocan City' },
] as const

const TOTAL = FRANCHISE_LOCATIONS.length
// Render several back-to-back copies so every step (next/prev/drag) always
// moves exactly one slot — the "seam" where it wraps is never crossed on screen.
const COPIES = 5
const VIRTUAL_TOTAL = TOTAL * COPIES
const CENTER = TOTAL * Math.floor(COPIES / 2)
const VIRTUAL_ITEMS = Array.from({ length: VIRTUAL_TOTAL }, (_, i) => FRANCHISE_LOCATIONS[i % TOTAL])

const AUTO_ADVANCE_MS = 3500
const TRANSITION = 'transform 550ms cubic-bezier(0.22, 1, 0.36, 1)'

const SIZE_BREAKPOINTS = [
  { minWidth: 0, slot: 100, active: 132, neighbor: 78, far: 56 },
  { minWidth: 480, slot: 120, active: 156, neighbor: 92, far: 66 },
  { minWidth: 768, slot: 148, active: 188, neighbor: 116, far: 82 },
  { minWidth: 1024, slot: 176, active: 218, neighbor: 140, far: 98 },
]

function getSizes(containerWidth: number) {
  let sizes = SIZE_BREAKPOINTS[0]
  for (const breakpoint of SIZE_BREAKPOINTS) {
    if (containerWidth >= breakpoint.minWidth) sizes = breakpoint
  }
  return sizes
}

function FranchiseLocationsMarqueeSection() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const isHoveredRef = useRef(false)
  const dragStartXRef = useRef(0)
  const dragStartOffsetRef = useRef(0)
  const skipTransitionRef = useRef(false)

  const [containerWidth, setContainerWidth] = useState(0)
  const [activeIndex, setActiveIndex] = useState(CENTER)
  const [isDragging, setIsDragging] = useState(false)

  const sizes = getSizes(containerWidth)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return
    const observer = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width)
    })
    observer.observe(wrapper)
    return () => observer.disconnect()
  }, [])

  const offsetForIndex = (index: number) => containerWidth / 2 - sizes.slot / 2 - index * sizes.slot

  useEffect(() => {
    if (isDragging) return
    const track = trackRef.current
    if (!track) return
    const withTransition = !skipTransitionRef.current
    track.style.transition = withTransition ? TRANSITION : 'none'
    track.style.transform = `translate3d(${offsetForIndex(activeIndex)}px, 0, 0)`
    skipTransitionRef.current = false
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, containerWidth, isDragging])

  useEffect(() => {
    const id = setInterval(() => {
      if (isHoveredRef.current) return
      setActiveIndex((current) => current + 1)
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(id)
  }, [])

  // After a real (animated) move settles, silently re-centre if we've drifted
  // too far from the middle copy — same real item, so the jump is invisible.
  // transitionend bubbles from every card's own transitions too, so only react
  // to the track element's own transform transition.
  const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.target !== trackRef.current) return
    setActiveIndex((current) => {
      const diff = current - CENTER
      if (Math.abs(diff) <= TOTAL) return current
      skipTransitionRef.current = true
      return CENTER + (((diff % TOTAL) + TOTAL) % TOTAL)
    })
  }

  const moveBy = (delta: number) => {
    setActiveIndex((current) => current + delta)
  }

  const jumpToReal = (realIndex: number) => {
    setActiveIndex((current) => {
      const base = current - (((current % TOTAL) + TOTAL) % TOTAL)
      const candidates = [base + realIndex - TOTAL, base + realIndex, base + realIndex + TOTAL]
      return candidates.reduce((best, candidate) =>
        Math.abs(candidate - current) < Math.abs(best - current) ? candidate : best,
      )
    })
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true)
    dragStartXRef.current = event.clientX
    dragStartOffsetRef.current = offsetForIndex(activeIndex)
    event.currentTarget.setPointerCapture(event.pointerId)
    if (trackRef.current) trackRef.current.style.transition = 'none'
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !trackRef.current) return
    const delta = event.clientX - dragStartXRef.current
    trackRef.current.style.transform = `translate3d(${dragStartOffsetRef.current + delta}px, 0, 0)`
  }

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    setIsDragging(false)
    const delta = event.clientX - dragStartXRef.current
    const slotsMoved = Math.round(-delta / sizes.slot)
    moveBy(slotsMoved)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const activeRealIndex = ((activeIndex % TOTAL) + TOTAL) % TOTAL

  return (
    <section className="scroll-mt-28 py-8 sm:py-10" aria-label="Franchise locations section">
      {/* Title Header */}
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">Franchise</p>
        <h3 className="text-2xl font-black text-[#3B1A0E] sm:text-3xl">Our growing family</h3>
      </div>

      {/* Coverflow Slider */}
      <div
        className="group/slider relative"
        onMouseEnter={() => {
          isHoveredRef.current = true
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false
        }}
      >
        <button
          type="button"
          onClick={() => moveBy(-1)}
          aria-label="Previous franchise location"
          className="absolute left-1 top-1/2 z-20 -translate-y-1/2 rounded-full border border-amber-200 bg-white/90 p-2 text-[#3B1A0E] opacity-0 shadow-md transition hover:bg-amber-50 group-hover/slider:opacity-100 focus-visible:opacity-100 sm:left-3"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => moveBy(1)}
          aria-label="Next franchise location"
          className="absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-full border border-amber-200 bg-white/90 p-2 text-[#3B1A0E] opacity-0 shadow-md transition hover:bg-amber-50 group-hover/slider:opacity-100 focus-visible:opacity-100 sm:right-3"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div
          ref={wrapperRef}
          className="overflow-hidden rounded-4xl border border-amber-100 bg-white/90 py-10 shadow-sm"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <div
            ref={trackRef}
            className={`flex items-center ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ width: VIRTUAL_TOTAL * sizes.slot, touchAction: 'pan-y' }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerLeave={endDrag}
            onTransitionEnd={handleTransitionEnd}
          >
            {VIRTUAL_ITEMS.map((franchise, index) => {
              const distance = index - activeIndex
              const absDistance = Math.abs(distance)
              const isActive = distance === 0
              // Only render cards near the visible window — the rest sit inert offscreen.
              if (absDistance > 6) {
                return <div key={`${franchise.label}-${index}`} style={{ width: sizes.slot }} className="shrink-0" />
              }
              const targetSize = isActive ? sizes.active : absDistance === 1 ? sizes.neighbor : sizes.far
              const scale = targetSize / sizes.active
              const opacity = isActive ? 1 : absDistance === 1 ? 0.85 : absDistance === 2 ? 0.5 : 0.22
              const radius = Math.round(sizes.active * 0.16)

              return (
                <div
                  key={`${franchise.label}-${index}`}
                  className="flex shrink-0 flex-col items-center justify-center"
                  style={{ width: sizes.slot }}
                >
                  <button
                    type="button"
                    onClick={() => jumpToReal(index % TOTAL)}
                    aria-label={`Show ${franchise.label}`}
                    className="relative overflow-hidden transition-[transform,opacity,box-shadow,border-color] duration-500 ease-out will-change-transform"
                    style={{
                      width: sizes.active,
                      height: sizes.active,
                      borderRadius: radius,
                      transform: `scale(${scale})`,
                      opacity,
                      boxShadow: isActive
                        ? '0 20px 45px rgba(180,83,9,0.35)'
                        : '0 6px 16px rgba(59,26,14,0.12)',
                      border: isActive ? '4px solid #f59e0b' : '2px solid rgba(245,158,11,0.25)',
                    }}
                  >
                    <img
                      src={franchise.src}
                      alt={franchise.label}
                      draggable={false}
                      className="h-full w-full object-cover"
                    />
                  </button>
                  <p
                    className="mt-3 text-center text-sm font-bold text-[#3B1A0E] transition-opacity duration-300"
                    style={{ opacity: isActive ? 1 : 0 }}
                  >
                    {franchise.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="mt-2 flex justify-center gap-2">
          {FRANCHISE_LOCATIONS.map((franchise, index) => (
            <button
              key={franchise.label}
              type="button"
              onClick={() => jumpToReal(index)}
              aria-label={`Go to ${franchise.label}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeRealIndex ? 'w-6 bg-amber-600' : 'w-2 bg-amber-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FranchiseLocationsMarqueeSection
