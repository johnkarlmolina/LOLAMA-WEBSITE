import { useState } from 'react'
import AboutSection from '../best-lolama/AboutSection'
import ContactSection from '../best-lolama/ContactSection'
import Footer from '../best-lolama/Footer'
import FranchiseSection from '../best-lolama/FranchiseSection'
import Header, { type HeaderNavItem } from '../best-lolama/Header'
import HeroSection from '../best-lolama/HeroSection'
import MenuHighlightsSection from '../best-lolama/MenuHighlightsSection'
import PartnerMarqueeSection from '../best-lolama/PartnerMarqueeSection'
import { FRANCHISE_STEPS, FRANCHISE_TIERS, MENU_ITEMS, PARTNERS, VALUE_POINTS } from '../data/best-lolama.data'

type BestLolamaLandingPageProps = {
  onGoAbout: () => void
  onGoMenu: () => void
  onGoFranchise: () => void
  onGoContact: () => void
  onOpenMenuPage: () => void
}

function BestLolamaLandingPage({
  onGoAbout,
  onGoMenu,
  onGoFranchise,
  onGoContact,
  onOpenMenuPage,
}: BestLolamaLandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const filteredItems =
    activeCategory === 'All'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory)

  const handleImageError = (itemId: number) => {
    setImageErrors((current) => (current[itemId] ? current : { ...current, [itemId]: true }))
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff9ef_0%,#fffdf9_40%,#fff6e8_100%)] text-[#3B1A0E]">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        onToggleMenu={() => setMobileMenuOpen((current) => !current)}
        onCloseMenu={() => setMobileMenuOpen(false)}
        onLogoClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        navItems={[
          { label: 'About Us', onClick: onGoAbout },
          { label: 'Menu', onClick: onOpenMenuPage, current: false },
          { label: 'Franchise', onClick: onGoFranchise },
          { label: 'Contact Us', onClick: onGoContact },
        ] satisfies readonly HeaderNavItem[]}
      />

      <main id="home" className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <HeroSection onOpenMenuPage={onOpenMenuPage} />
        <PartnerMarqueeSection partners={PARTNERS} />
        <AboutSection valuePoints={VALUE_POINTS} />
        <MenuHighlightsSection
          activeCategory={activeCategory}
          categories={[
            'All',
            'Royal Box',
            'Classic Cheese',
            'Dubai Collection',
            'Premium Box',
            'Starter Box',
            'Munkchin Bites',
            'Sari-Sari Box',
          ]}
          filteredItems={filteredItems}
          imageErrors={imageErrors}
          onCategoryChange={setActiveCategory}
          onImageError={handleImageError}
          onOpenMenuPage={onOpenMenuPage}
        />
        <FranchiseSection franchiseTiers={FRANCHISE_TIERS} franchiseSteps={FRANCHISE_STEPS} />
        <ContactSection />
      </main>

      <Footer
        navItems={[
          { label: 'About Us', onClick: onGoAbout },
          { label: 'Menu', onClick: onGoMenu },
          { label: 'Franchise', onClick: onGoFranchise },
          { label: 'Contact Us', onClick: onGoContact },
        ] satisfies readonly HeaderNavItem[]}
      />
    </div>
  )
}

export default BestLolamaLandingPage