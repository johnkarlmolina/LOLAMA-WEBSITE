import { PackageSearch, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import Header, { type HeaderNavItem } from '../best-lolama/Header'
import { MENU_CATALOG_ITEMS, type CatalogMenuItem } from '../data/best-lolama.catalog.data'

type MenuPageProps = {
  onGoAbout: () => void
  onGoFranchise: () => void
  onGoContact: () => void
  onBackHome: () => void
}

const CATEGORY_GROUPS: { label: string; categories: readonly CatalogMenuItem['category'][] }[] = [
  {
    label: 'Food',
    categories: [
      'Starter Box',
      'Premium Box',
      'Sari-Sari Box',
      'Royal Box',
      'Classic Cheese',
      'Munkchin Bites',
      'Dubai Collection',
    ],
  },
  {
    label: 'Drinks',
    categories: ['Drinks'],
  },
]

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

function MenuListItem({ item }: { item: CatalogMenuItem }) {
  return (
    <div className="flex items-center gap-5">
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border border-amber-100 bg-amber-50">
        <img src={encodeURI(item.image)} alt={item.name} className="h-full w-full object-cover" />
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-[#3B1A0E]">{item.name}</p>
          {item.tag ? (
            <span className="shrink-0 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-black uppercase tracking-wide text-amber-800">
              {item.tag}
            </span>
          ) : null}
        </div>
        <p className="truncate text-sm text-[#7a513c]">{item.description}</p>
      </div>
    </div>
  )
}

function MenuPage({ onGoAbout, onGoFranchise, onGoContact, onBackHome }: MenuPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const normalizedQuery = searchQuery.trim().toLowerCase()

  const searchResults = useMemo(() => {
    if (!normalizedQuery) return null

    return MENU_CATALOG_ITEMS.filter(
      (item) =>
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.category.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery),
    )
  }, [normalizedQuery])

  const itemsByCategory = useMemo(() => {
    const map = new Map<CatalogMenuItem['category'], CatalogMenuItem[]>()

    for (const item of MENU_CATALOG_ITEMS) {
      const items = map.get(item.category) ?? []
      items.push(item)
      map.set(item.category, items)
    }

    return map
  }, [])

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
        <section className="rounded-4xl border border-amber-100 bg-white/90 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">Full menu page</p>
              <h1 className="text-4xl font-black leading-tight text-[#3B1A0E] sm:text-5xl">All Best Lolama menu items</h1>
              <p className="text-base leading-8 text-[#6e3d25]">
                Browse the full catalog of doughnuts, bites, and drinks organized by category — or search for
                something specific.
              </p>
            </div>

            <div className="relative w-full lg:max-w-sm">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-amber-500" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search our drinks, food..."
                className="w-full rounded-full border border-amber-200 bg-white py-3 pl-12 pr-4 text-sm text-[#3B1A0E] shadow-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[220px_1fr]">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {CATEGORY_GROUPS.map((group) => (
                  <div key={group.label}>
                    <a
                      href={`#${slugify(group.label)}`}
                      className="text-sm font-black uppercase tracking-wide text-[#3B1A0E] hover:text-amber-700"
                    >
                      {group.label}
                    </a>
                    <ul className="mt-2 space-y-1.5 border-l border-amber-100 pl-3">
                      {group.categories.map((category) => (
                        <li key={category}>
                          <a
                            href={`#${slugify(category)}`}
                            className="block text-sm text-[#7a513c] transition hover:text-amber-700"
                          >
                            {category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </aside>

            {/* Main content */}
            <div className="space-y-12">
              {searchResults ? (
                <div>
                  <h2 className="text-2xl font-black text-[#3B1A0E]">
                    {searchResults.length} result{searchResults.length === 1 ? '' : 's'} for “{searchQuery}”
                  </h2>
                  {searchResults.length === 0 ? (
                    <p className="mt-4 text-sm text-[#7a513c]">
                      No items matched your search. Try a different keyword.
                    </p>
                  ) : (
                    <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                      {searchResults.map((item) => (
                        <MenuListItem key={item.id} item={item} />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                CATEGORY_GROUPS.map((group) => (
                  <div key={group.label}>
                    <h2 id={slugify(group.label)} className="scroll-mt-28 text-3xl font-black text-[#3B1A0E]">
                      {group.label}
                    </h2>
                    <div className="mt-6 space-y-10">
                      {group.categories.map((category) => {
                        const items = itemsByCategory.get(category) ?? []
                        if (items.length === 0) return null

                        return (
                          <div key={category}>
                            <h3
                              id={slugify(category)}
                              className="scroll-mt-28 text-lg font-black text-amber-700"
                            >
                              {category}
                            </h3>
                            <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                              {items.map((item) => (
                                <MenuListItem key={item.id} item={item} />
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-4xl border border-amber-100 bg-[#3B1A0E] p-8 text-white shadow-2xl shadow-amber-900/10">
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
