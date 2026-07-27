type PartnerMarqueeSectionProps = {
  partners: readonly string[]
}

const partnerImageMap: Record<string, string> = {
  sm: 'SM.jpg',
  robinsons: 'ROBINSONS .jpg',
  'vista mall': 'VISTA MALL.png',
  'filinvest land inc': 'Filinvest Land, Inc..png',
  'jetti gas station': 'JETTI GAS STATION.png',
}

function PartnerMarqueeSection({ partners }: PartnerMarqueeSectionProps) {
  return (
    <section className="scroll-mt-28 py-8 sm:py-10" aria-label="Partner section">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">Partner with</p>
          <h2 className="mt-2 text-3xl font-black text-[#3B1A0E] sm:text-4xl">Locations that move with families</h2>
        </div>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-amber-100 bg-white/90 p-4 shadow-sm">
        <div className="marquee-track gap-4 py-2">
          {[...partners, ...partners].map((partner, index) => {
            const normalizedPartner = partner.trim().toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
            const imageFile = partnerImageMap[normalizedPartner]

            return (
              <div
                key={`${partner}-${index}`}
                className="flex min-w-[220px] items-center justify-center rounded-3xl border border-amber-100 bg-amber-50 px-6 py-5 shadow-sm"
              >
                {imageFile ? (
                  <img
                    src={`/Images/PARTNERSHIP/${imageFile}`}
                    alt={`${partner} logo`}
                    className="h-16 w-full max-w-[180px] object-contain"
                  />
                ) : (
                  <p className="text-lg font-black tracking-[0.18em] text-[#3B1A0E]">{partner}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PartnerMarqueeSection
