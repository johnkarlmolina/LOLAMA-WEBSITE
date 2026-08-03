import { ClipboardCheck, FileText, MapPin } from 'lucide-react'

type FranchiseRequirement = {
  title: string
  description: string
}

type FranchiseRequirementsSectionProps = {
  requirements: readonly FranchiseRequirement[]
}

const REQUIREMENT_ICONS = [FileText, ClipboardCheck, MapPin]

function FranchiseRequirementsSection({ requirements }: FranchiseRequirementsSectionProps) {
  return (
    <section className="scroll-mt-28 py-12 sm:py-16">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">Getting started</p>
        <h2 className="mt-2 text-3xl font-black text-[#3B1A0E] sm:text-4xl">Franchise application requirements</h2>
        <p className="mt-3 text-sm leading-7 text-[#6e3d25]">
          Here&apos;s what you&apos;ll need to prepare before we can move your franchise application forward.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {requirements.map((requirement, index) => {
          const Icon = REQUIREMENT_ICONS[index % REQUIREMENT_ICONS.length]

          return (
            <div
              key={requirement.title}
              className="group rounded-4xl border border-amber-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 transition group-hover:bg-amber-200">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-black text-[#3B1A0E]">{requirement.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#6e3d25]">{requirement.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FranchiseRequirementsSection
