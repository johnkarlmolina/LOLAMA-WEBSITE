import { Compass, Target } from 'lucide-react'
import type { CoreValue } from '../types/best-lolama.types'

type VisionMissionSectionProps = {
  vision: string
  mission: string
  coreValues: readonly CoreValue[]
}

function VisionMissionSection({ vision, mission, coreValues }: VisionMissionSectionProps) {
  return (
    <section id="vision-mission" className="scroll-mt-28 py-12 sm:py-16">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">What drives us</p>
        <h2 className="mt-2 text-3xl font-black text-[#3B1A0E] sm:text-4xl">Our vision, mission, and values</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-4xl border border-amber-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-black text-[#3B1A0E]">Our Vision</h3>
          </div>
          <p className="mt-4 text-sm leading-7 text-[#6e3d25]">{vision}</p>
        </article>

        <article className="rounded-4xl border border-amber-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-black text-[#3B1A0E]">Our Mission</h3>
          </div>
          <p className="mt-4 text-sm leading-7 text-[#6e3d25]">{mission}</p>
        </article>
      </div>

      <div className="mt-8">
  <h3 className="text-2xl font-black text-[#3B1A0E]">Our Core Values</h3>
  <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {coreValues.map((value) => {
      const Icon = value.icon;

      return (
        <div
          key={value.title}
          className="group rounded-2xl border border-[#e8d9d0] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-100/50"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700 transition group-hover:bg-amber-100">
            <Icon className="h-5 w-5" />
          </div>
          <h4 className="mt-3 text-sm font-black text-[#3B1A0E]">{value.title}</h4>
          <p className="mt-1 text-xs leading-6 text-[#6f4a36]">{value.description}</p>
        </div>
      );
    })}
  </div>
</div>
    </section>
  )
}

export default VisionMissionSection
