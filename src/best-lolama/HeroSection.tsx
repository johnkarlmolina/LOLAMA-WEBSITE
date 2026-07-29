import { Award, CheckCircle, ChevronRight } from 'lucide-react'

type HeroSectionProps = {
  onOpenMenuPage: () => void
}

function HeroSection({ onOpenMenuPage }: HeroSectionProps) {
  return (
    <section className="scroll-mt-28 py-8 sm:py-12 lg:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-amber-700 shadow-sm">
            <Award className="h-4 w-4" />
            Handmade Love Doughnuts
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#3B1A0E] sm:text-5xl lg:text-6xl">
              Handmade Love Doughnuts — Made Fresh Daily For You
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[#6e3d25] sm:text-lg">
              Warm, affordable, and made with pure passion for Filipino families. Best Lolama brings premium taste,
              approachable pricing, and a franchise model designed for high-traffic communities.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3B1A0E] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-amber-900/15 transition hover:-translate-y-0.5 hover:bg-amber-700"
            >
              Inquire for Franchise
              <ChevronRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={onOpenMenuPage}
              className="inline-flex items-center justify-center rounded-full border border-amber-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#3B1A0E] transition hover:border-amber-400 hover:bg-amber-50"
            >
              Explore Menu
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { value: '9 Active Branches', label: 'Current stores' },
              { value: '3 Franchise Formats', label: 'Investment paths' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-amber-100 bg-white/90 p-4 shadow-sm">
                <p className="text-xl font-black text-[#3B1A0E]">{stat.value}</p>
                <p className="mt-1 text-sm text-[#7a513c]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      <button type="button" onClick={onOpenMenuPage} className="relative text-left">
        {/* Background Effects */}
        <div className="absolute -left-4 top-6 h-20 w-20 rounded-full bg-amber-300/35 blur-2xl" />
        <div className="absolute -right-6 bottom-8 h-24 w-24 rounded-full bg-amber-500/25 blur-2xl" />

        <div className="relative overflow-hidden rounded-[2rem] border border-amber-100 bg-white p-5 shadow-[0_20px_60px_rgba(123,64,27,0.12)]">
          <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,#fff7e8_0%,#fff0d1_100%)] p-6">

            {/* Logo na may umiikot na text */}
            <div className="flex justify-center mb-6">
              <div className="relative h-64 w-64">
                {/* Umiikot na text */}
                <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <defs>
                      <path
                        id="textCircle"
                        d="M 50, 50 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
                      />
                    </defs>
                    <text className="text-[6px] font-black fill-[#3B1A0E] tracking-[0.08em] uppercase">
                      <textPath href="#textCircle" startOffset="0%">
                        ✦ Fresh Daily • Made for Sharing • Quality • Since Day One ✦
                      </textPath>
                    </text>
                  </svg>
                </div>
                
                {/* Logo Image - BORDER COLOR BINAGO KO NA */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-44 w-44 overflow-hidden rounded-full border-4 border-[#8B4513] bg-white shadow-2xl">
                    <img
                      src={encodeURI("/Images/BEST LOLAMA LOGO.jpg")}
                      alt="Best Lolama Logo"
                      className="h-full w-full object-cover scale-[1.4]"
                      style={{
                        objectPosition: "center center",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content - HINDI GINAGALAW */}
            <div className="rounded-2xl bg-white/90 p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
                    Fresh Daily
                  </p>
                  <p className="mt-1 text-2xl font-black text-[#3B1A0E]">
                    Made for Sharing
                  </p>
                </div>

                <div className="rounded-2xl bg-amber-100 px-3 py-2 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">
                    Quality
                  </p>
                  <p className="text-sm font-black text-[#3B1A0E]">
                    Since Day One
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Warm doughnuts",
                  "Signature flavors",
                  "Easy franchise setup",
                  "Community favorite",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-2xl border border-amber-100 bg-amber-50/60 px-3 py-2 text-sm font-semibold text-[#5b2d18]"
                  >
                    <CheckCircle className="h-4 w-4 text-amber-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </button>
      </div>
    </section>
  )
}

export default HeroSection
