type PartnerMarqueeSectionProps = {
  partners: readonly string[]
}

const partnerImageMap: Record<string, string> = {
  sm: 'SM.png',
  robinsons: 'ROBINSONS.png',
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
  
  <div className="overflow-hidden rounded-4xl border border-amber-100 bg-white/90 p-4 shadow-sm">
    <div className="marquee-track gap-4 py-2">
      {[...partners, ...partners].map((partner, index) => {
        const normalizedPartner = partner.trim().toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
        const imageFile = partnerImageMap[normalizedPartner]

        return (
          <div
            key={`${partner}-${index}`}
            className="flex min-w-55 items-center justify-center rounded-3xl border border-amber-100 bg-amber-50 px-6 py-5 shadow-sm"
          >
            {imageFile ? (
              <img
                src={`/Images/PARTNERSHIP/${imageFile}`}
                alt={`${partner} logo`}
                className="h-16 w-full max-w-45 object-contain"
              />
            ) : (
              <p className="text-lg font-black tracking-[0.18em] text-[#3B1A0E]">{partner}</p>
            )}
          </div>
        )
      })}
    </div>
  </div>

      {/* FRANCHISE MARQUEE SECTION - CLEAN PERFECT LOOP */}
      <div className="mt-10">
        {/* Title Header */}
        <div className="mb-4">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
            Franchise
          </p>
          <h3 className="text-2xl font-black text-[#3B1A0E] sm:text-3xl">
            Our growing family
          </h3>
        </div>

        {/* Marquee Container */}
        <div className="overflow-hidden rounded-4xl border border-amber-100 bg-white/90 p-4 shadow-sm">
          
          {/* Inner Track */}
          <div className="marquee-track-perfect flex gap-4 py-2">
            
            {/* 1st Copy */}
            {[
              { src: '/Images/FRANCHISE LOCATION/BestLolama South Molino Bacoor.png', label: 'Bacoor Cavite' },
              { src: '/Images/FRANCHISE LOCATION/Smbacoor.png', label: 'SM City Bacoor' },
              { src: '/Images/FRANCHISE LOCATION/tarlac.png', label: 'Tarlac City' },
              { src: '/Images/FRANCHISE LOCATION/laguna.png', label: 'Laguna' },
              { src: '/Images/FRANCHISE LOCATION/montalban.png', label: 'Montalban Rizal' },
              { src: '/Images/FRANCHISE LOCATION/taguig.png', label: 'Taguig City' },
              { src: '/Images/FRANCHISE LOCATION/DASMA.png', label: 'Dasmariñas' },
              { src: '/Images/FRANCHISE LOCATION/SM City Manila.png', label: 'SM City Manila' },
              { src: '/Images/FRANCHISE LOCATION/Sm tanza.png', label: 'SM Tanza' },
              { src: '/Images/FRANCHISE LOCATION/caloocan.png', label: 'Caloocan City' }
            ].map((franchise, index) => (
              <div
                key={`1st-${index}`}
                className="flex-shrink-0 w-[200px] flex flex-col items-center rounded-3xl border border-amber-100 bg-amber-50 p-4 shadow-sm"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-inner">
                  <img
                    src={franchise.src}
                    alt={franchise.label}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-3">
                    <p className="text-sm font-bold text-white drop-shadow-md">{franchise.label}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* 2nd Copy (Duplicate seamless) */}
            {[
              { src: '/Images/FRANCHISE LOCATION/BestLolama South Molino Bacoor.png', label: 'Bacoor Cavite' },
              { src: '/Images/FRANCHISE LOCATION/Smbacoor.png', label: 'SM City Bacoor' },
              { src: '/Images/FRANCHISE LOCATION/tarlac.png', label: 'Tarlac City' },
              { src: '/Images/FRANCHISE LOCATION/laguna.png', label: 'Laguna' },
              { src: '/Images/FRANCHISE LOCATION/montalban.png', label: 'Montalban Rizal' },
              { src: '/Images/FRANCHISE LOCATION/taguig.png', label: 'Taguig City' },
              { src: '/Images/FRANCHISE LOCATION/DASMA.png', label: 'Dasmariñas' },
              { src: '/Images/FRANCHISE LOCATION/SM City Manila.png', label: 'SM City Manila' },
              { src: '/Images/FRANCHISE LOCATION/Sm tanza.png', label: 'SM Tanza' },
              { src: '/Images/FRANCHISE LOCATION/caloocan.png', label: 'Caloocan City' }
            ].map((franchise, index) => (
              <div
                key={`2nd-${index}`}
                className="flex-shrink-0 w-[200px] flex flex-col items-center rounded-3xl border border-amber-100 bg-amber-50 p-4 shadow-sm"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-inner">
                  <img
                    src={franchise.src}
                    alt={franchise.label}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-3">
                    <p className="text-sm font-bold text-white drop-shadow-md">{franchise.label}</p>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
      
          {/* CSS - CLEAN PERFECT LOOP */}
          <style>{`
            @keyframes marquee-perfect {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track-perfect {
              display: flex;
              width: max-content;
              animation: marquee-perfect 40s linear infinite;
            }

      `}</style>
</section>
  )
}

export default PartnerMarqueeSection
