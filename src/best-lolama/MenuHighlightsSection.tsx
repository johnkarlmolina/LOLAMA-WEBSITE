import { ShoppingBag } from 'lucide-react'
import type { MenuItem } from '../types/best-lolama.types'

type MenuHighlightsSectionProps = {
  activeCategory: string
  categories: readonly string[]
  filteredItems: readonly MenuItem[]
  imageErrors: Record<number, boolean>
  onCategoryChange: (category: string) => void
  onImageError: (itemId: number) => void
  onOpenMenuPage: () => void
}

function MenuHighlightsSection({
  activeCategory,
  categories,
  filteredItems,
  imageErrors,
  onCategoryChange,
  onImageError,
  onOpenMenuPage,
}: MenuHighlightsSectionProps) {
  return (
    <section id="menu" className="scroll-mt-28 py-12 sm:py-16">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">Menu highlights</p>
          <h2 className="mt-2 text-3xl font-black text-[#3B1A0E] sm:text-4xl">Popular boxes and drinks</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-[#6e3d25]">
          Browse the most requested items and see how the signature boxes and beverages fit into the Best Lolama
          experience.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = activeCategory === category

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
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

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredItems.map((item) => {
          const imageFailed = imageErrors[item.id]

          return (
            <button
              key={item.id}
              type="button"
              onClick={onOpenMenuPage}
              className="group overflow-hidden rounded-[2rem] border border-amber-100 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-48 bg-amber-50">
                {!imageFailed ? (
                  <img
                    src={encodeURI(item.image)}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={() => onImageError(item.id)}
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[linear-gradient(180deg,#fff6e6_0%,#fde7c7_100%)] text-center">
                    <ShoppingBag className="h-10 w-10 text-amber-600" />
                    <div>
                      <p className="text-sm font-bold text-[#3B1A0E]">Image unavailable</p>
                      <p className="text-xs text-[#7a513c]">Styled fallback preview</p>
                    </div>
                  </div>
                )}
                {item.tag ? (
                  <span className="absolute left-4 top-4 rounded-full bg-[#3B1A0E] px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    {item.tag}
                  </span>
                ) : null}
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-black text-[#3B1A0E]">{item.name}</h3>
                  {item.price ? (
                    <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-sm font-black text-amber-800">
                      {item.price}
                    </span>
                  ) : null}
                </div>
                <p className="text-sm leading-7 text-[#6f4a36]">{item.description}</p>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default MenuHighlightsSection
