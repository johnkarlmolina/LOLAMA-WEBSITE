import { Award, ChevronRight } from 'lucide-react'

type RecognitionAwardsSectionProps = {
  onGoRecognitionAwards: () => void
}

const FEATURED_ON = [
  { name: 'GMA Network', detail: 'Unang Hirit · Nov 2, 2023' },
  { name: 'RDR Talks', detail: 'Founders interview · May 12, 2024' },
  { name: 'DWIZ 882', detail: 'Guest co-host · Aug 27, 2025' },
] as const

const AWARD_HIGHLIGHTS = [
  {
    src: '/Images/MEDIA FEATURES/RDRTALKS.png',
    alt: 'RDR Talks feature',
    label: 'RDR Talks',
  },
  {
    src: '/Images/MEDIA FEATURES/DWIZNEWSTV.png',
    alt: 'DWIZ 882 feature',
    label: 'DWIZ 882',
  },
  {
    src: '/Images/AWARDS & RECOGNITION/BEST FRESHLY BAKED DONUTS AWARD.jpg',
    alt: 'Best Freshly Baked Special Doughnuts award',
    label: 'Best Freshly Baked Special Doughnuts',
  },
  {
    src: '/Images/AWARDS & RECOGNITION/asia magazine award.jpg',
    alt: 'Asia Magazine award',
    label: 'Asia Magazine Award',
  },
] as const

function RecognitionAwardsSection({ onGoRecognitionAwards }: RecognitionAwardsSectionProps) {
  return (
    <section id="recognition-awards" className="scroll-mt-28 py-12 sm:py-16">
      <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {/* LEFT SIDE */}
        <div className="space-y-5">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">Recognition &amp; awards</p>
          <h2 className="text-3xl font-black text-[#3B1A0E] sm:text-4xl">
            Trusted, awarded, and featured across the Philippines
          </h2>
          <p className="text-base leading-8 text-[#6e3d25]">
            From national TV features to radio guesting and franchise industry awards, Best Lolama&apos;s journey has
            been recognized by media outlets and organizations who share our love for freshly baked doughnuts.
          </p>

          <div className="rounded-4xl border border-amber-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-black text-[#3B1A0E]">As featured on</p>
                <p className="text-sm text-[#7a513c]">National TV and radio guesting</p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {FEATURED_ON.map((feature) => (
                <div
                  key={feature.name}
                  className="group rounded-2xl border border-amber-100 bg-amber-50/50 p-4 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h4 className="text-sm font-black text-[#3B1A0E]">{feature.name}</h4>
                  <p className="mt-1 text-xs leading-6 text-[#6f4a36]">{feature.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={onGoRecognitionAwards}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3B1A0E] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-amber-900/15 transition hover:-translate-y-0.5 hover:bg-amber-700"
          >
            Learn More
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* RIGHT SIDE - Award highlights */}
        <div className="rounded-4xl border border-amber-100 bg-white p-3 shadow-sm">
          <div className="grid grid-cols-2 gap-3">
            {AWARD_HIGHLIGHTS.map((award) => (
              <div
                key={award.src}
                className="group relative h-40 overflow-hidden rounded-2xl bg-amber-50 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:h-48"
              >
                <img src={encodeURI(award.src)} alt={award.alt} className="h-full w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="px-2 text-center text-sm font-semibold text-white">{award.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecognitionAwardsSection
