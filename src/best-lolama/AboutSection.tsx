import { Award } from 'lucide-react'
import type { ValuePoint } from '../types/best-lolama.types'

type AboutSectionProps = {
  valuePoints: readonly ValuePoint[]
}

function AboutSection({ valuePoints }: AboutSectionProps) {
  return (
    <section id="about" className="scroll-mt-28 py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        {/* LEFT SIDE */}
        <div className="space-y-5">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">About us</p>
          <h2 className="text-3xl font-black text-[#3B1A0E] sm:text-4xl">
            A family brand built from passion and consistency
          </h2>
          <p className="text-base leading-8 text-[#6e3d25]">
            Established in Novaliches, Quezon City, Best Lolama continues to serve families through its active
            branches in Novaliches Town Proper and Molino, Cavite. The brand is designed around warm service,
            memorable flavors, and a franchise model that can travel with the community.
          </p>

          {/* Built for Filipino families - original size, nasa left side na */}
          <div className="rounded-[2rem] border border-amber-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-black text-[#3B1A0E]">Built for Filipino families</p>
                <p className="text-sm text-[#7a513c]">Warm, welcoming, and easy to love from the first bite.</p>
              </div>
            </div>

            {/* Value points - nakalagay sa ilalim, same size as before */}
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {valuePoints.map((point) => {
                const Icon = point.icon

                return (
                  <div
                    key={point.title}
                    className="group rounded-2xl border border-amber-100 bg-amber-50/50 p-4 transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700 transition group-hover:bg-amber-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-3 text-sm font-black text-[#3B1A0E]">{point.title}</h4>
                    <p className="mt-1 text-xs leading-6 text-[#6f4a36]">{point.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Video */}
        <div className="flex items-center justify-center rounded-[2rem] bg-amber-50/50 p-4">
          <video
            src="/public/Video/Montages.mp4"  // Palitan mo ng actual filename mo
            autoPlay
            muted
            loop
            playsInline
            className="w-[80%] max-w-[400px] rounded-2xl shadow-lg pointer-events-none select-none"
            draggable={false}
            controls={false}
            disablePictureInPicture
            controlsList="nodownload noremoteplayback noplaybackrate"
            onContextMenu={(e) => e.preventDefault()}  // Pinipigilan ang right-click
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
