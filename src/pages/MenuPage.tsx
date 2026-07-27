import { PackageSearch } from 'lucide-react'
import { useMemo, useState } from 'react'
import Header, { type HeaderNavItem } from '../best-lolama/Header'
import { MENU_CATALOG_ITEMS, MENU_CATEGORIES } from '../data/best-lolama.catalog.data'

type MenuPageProps = {
  onGoAbout: () => void
  onGoFranchise: () => void
  onGoContact: () => void
  onBackHome: () => void
}

function MenuPage({ onGoAbout, onGoFranchise, onGoContact, onBackHome }: MenuPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<(typeof MENU_CATEGORIES)[number]>('All')

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') {
      return MENU_CATALOG_ITEMS
    }

    return MENU_CATALOG_ITEMS.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const categoryCount = activeCategory === 'All' ? MENU_CATALOG_ITEMS.length : filteredItems.length

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff9ef_0%,#fffdf9_40%,#fff6e8_100%)] text-[#3B1A0E]">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        onToggleMenu={() => setMobileMenuOpen((current) => !current)}
        onCloseMenu={() => setMobileMenuOpen(false)}
        onLogoClick={onBackHome}
        navItems={[
          { label: 'About Us', onClick: onGoAbout },
          { label: 'Menu', current: true },
          { label: 'Franchise', onClick: onGoFranchise },
          { label: 'Contact Us', onClick: onGoContact },
        ] satisfies readonly HeaderNavItem[]}
      />

      <div className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-amber-100 bg-white/90 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">Full menu page</p>
              <h1 className="text-4xl font-black leading-tight text-[#3B1A0E] sm:text-5xl">All Best Lolama menu items</h1>
              <p className="text-base leading-8 text-[#6e3d25]">
                Browse the full catalog of doughnuts and bite-sized favorites. Click any image to inspect the brand’s
                complete menu selection in one place.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-amber-50 px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-700">Items shown</p>
              <p className="mt-1 text-3xl font-black text-[#3B1A0E]">{categoryCount}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {MENU_CATEGORIES.map((category) => {
              const isActive = activeCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-[#3B1A0E] text-white shadow-lg shadow-amber-900/15'
                      : 'border border-amber-200 bg-white text-[#5b2d18] hover:bg-amber-50'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-[2rem] border border-amber-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-56 bg-amber-50">
                  <img
                    src={encodeURI(item.image)}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#3B1A0E] px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    {item.category}
                  </span>
                </div>

                <div className="space-y-3 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-xl font-black text-[#3B1A0E]">{item.name}</h2>
                    {item.tag ? (
                      <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-800">
                        {item.tag}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm leading-7 text-[#6f4a36]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-amber-100 bg-[#3B1A0E] p-8 text-white shadow-2xl shadow-amber-900/10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-200">Need help?</p>
              <h2 className="mt-2 text-2xl font-black sm:text-3xl">The full menu is ready for your customers</h2>
            </div>
            <button
              type="button"
              onClick={onBackHome}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#3B1A0E] transition hover:bg-amber-50"
            >
              <PackageSearch className="h-4 w-4" />
              Return to Home
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MenuPage
