import { useEffect, useRef, useState } from 'react'
import { CheckCircle, Star } from 'lucide-react'
import type { FranchiseTier } from '../types/best-lolama.types'

type FranchiseSectionProps = {
  franchiseTiers: readonly FranchiseTier[]
  franchiseSteps: readonly string[]
}

function FranchiseSection({ franchiseTiers, franchiseSteps }: FranchiseSectionProps) {
  const [areStepsVisible, setAreStepsVisible] = useState(false)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = stepsRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAreStepsVisible(entry.isIntersecting)
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section id="franchise" className="scroll-mt-28 py-12 sm:py-16">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">Franchise opportunities</p>
          <h2 className="mt-2 text-3xl font-black text-[#3B1A0E] sm:text-4xl">Investment tiers with clear growth paths</h2>
          <p className="mt-3 text-sm leading-7 text-[#6e3d25]">
            The franchise structure is built for entrepreneurs who want a practical footprint, recognizable brand
            equity, and support that can scale with location and territory.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {franchiseTiers.map((tier) => (
            <article
              key={tier.title}
              className={`rounded-4xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                tier.featured ? 'border-amber-400 ring-1 ring-amber-400/40' : 'border-amber-100'
              }`}
            >
              {tier.featured ? (
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-amber-800">
                  <Star className="h-3.5 w-3.5" />
                  Featured
                </div>
              ) : null}
              <h3 className="text-2xl font-black text-[#3B1A0E]">{tier.title}</h3>
              <div className="mt-5 space-y-3 text-sm text-[#6e3d25]">
                <p>
                  <span className="font-bold text-[#3B1A0E]">Space:</span> {tier.space}
                </p>
                <p>
                  <span className="font-bold text-[#3B1A0E]">Total Capital:</span> {tier.capital}
                </p>
                <p>
                  <span className="font-bold text-[#3B1A0E]">ROI:</span> {tier.roi}
                </p>
                <p>
                  <span className="font-bold text-[#3B1A0E]">Admin Fee:</span> {tier.adminfee}
                </p>
                <p>
                  <span className="font-bold text-[#3B1A0E]">Franchise Fee:</span> {tier.franchisefee}
                </p>
                <p>
                  <span className="font-bold text-[#3B1A0E]">Training:</span> {tier.trainingopeningsupport}
                </p>
                <p>
                  <span className="font-bold text-[#3B1A0E]">Renewal:</span> {tier.renewalat50offranchisefee}
                </p>
                <p>
                  <span className="font-bold text-[#3B1A0E]">Full:</span> {tier.fullcafesetupwithproduction}
                </p>
                <p>
                  <span className="font-bold text-[#3B1A0E]">System:</span> {tier.systemstandard}
                </p>
              </div>
              <div className="mt-6 space-y-3 border-t border-amber-100 pt-5">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2 text-sm text-[#5b2d18]">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="scroll-mt-28 py-12 sm:py-16">
  <div className="mb-8 max-w-3xl">
    <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">How to franchise</p>
    <h2 className="mt-2 text-3xl font-black text-[#3B1A0E] sm:text-4xl">
      A clear 14-step journey from inquiry to launch
    </h2>
  </div>

  {/* Steps appear one by one as the section scrolls into view */}
  <div ref={stepsRef} className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
    {franchiseSteps.map((step, index) => (
      <div
        key={step}
        className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm transition duration-500 hover:shadow-md"
        style={{
          opacity: areStepsVisible ? 1 : 0,
          transform: areStepsVisible ? 'translateY(0)' : 'translateY(16px)',
          transitionProperty: 'opacity, transform',
          transitionDelay: `${index * 120}ms`,
        }}
      >
        <div className="flex items-center justify-between border-b border-amber-100/60 pb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Step</span>
          <span className="text-2xl font-black text-amber-600">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <h3 className="mt-4 text-base font-bold leading-relaxed text-[#3B1A0E]">
          {step}
        </h3>
      </div>
    ))}
  </div>
</section>
    </>
  )
}

export default FranchiseSection
