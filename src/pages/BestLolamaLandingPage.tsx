import { useState } from 'react'
import AboutSection from '../best-lolama/AboutSection'
import Footer from '../best-lolama/Footer'
import FranchiseLocationsMarqueeSection from '../best-lolama/FranchiseLocationsMarqueeSection'
import FranchiseSection from '../best-lolama/FranchiseSection'
import Header, { type HeaderNavItem } from '../best-lolama/Header'
import HeroSection from '../best-lolama/HeroSection'
import MenuHighlightsSection from '../best-lolama/MenuHighlightsSection'
import PartnerMarqueeSection from '../best-lolama/PartnerMarqueeSection'
import RecognitionAwardsSection from '../best-lolama/RecognitionAwardsSection'
import { FRANCHISE_STEPS, FRANCHISE_TIERS, MENU_ITEMS, PARTNERS, VALUE_POINTS } from '../data/best-lolama.data'

type BestLolamaLandingPageProps = {
  onGoAbout: () => void
  onGoMenu: () => void
  onGoFranchise: () => void
  onGoContact: () => void
  onGoRecognitionAwards: () => void
  onFranchiseNowClick: () => void
  onOpenMenuPage: () => void
}

function BestLolamaLandingPage({
  onGoAbout,
  onGoMenu,
  onGoFranchise,
  onGoContact,
  onGoRecognitionAwards,
  onFranchiseNowClick,
  onOpenMenuPage,
}: BestLolamaLandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

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
        onFranchiseNowClick={onFranchiseNowClick}
        navItems={[
          { label: 'About Us', onClick: onGoAbout },
          { label: 'Menu', onClick: onOpenMenuPage, current: false },
          { label: 'Franchise', onClick: onGoFranchise },
          { label: 'Recognition & Awards', onClick: onGoRecognitionAwards },
          { label: 'Contact Us', onClick: onGoContact },
        ] satisfies readonly HeaderNavItem[]}
      />

      <main id="home" className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <HeroSection onOpenMenuPage={onOpenMenuPage} />
        <AboutSection valuePoints={VALUE_POINTS} />
        <RecognitionAwardsSection onGoRecognitionAwards={onGoRecognitionAwards} />
        <MenuHighlightsSection
          filteredItems={MENU_ITEMS}
          imageErrors={imageErrors}
          onImageError={handleImageError}
          onOpenMenuPage={onOpenMenuPage}
        />
        <FranchiseSection franchiseTiers={FRANCHISE_TIERS} franchiseSteps={FRANCHISE_STEPS} />
        <FranchiseLocationsMarqueeSection />
        <PartnerMarqueeSection partners={PARTNERS} />
      </main>

      <Footer
        navItems={[
          { label: 'About Us', onClick: onGoAbout },
          { label: 'Menu', onClick: onGoMenu },
          { label: 'Franchise', onClick: onGoFranchise },
          { label: 'Recognition & Awards', onClick: onGoRecognitionAwards },
          { label: 'Contact Us', onClick: onGoContact },
        ] satisfies readonly HeaderNavItem[]}
      />
    </div>
  )
}

export default BestLolamaLandingPage