import { useState } from 'react'
import Footer from '../best-lolama/Footer'
import Header, { type HeaderNavItem } from '../best-lolama/Header'

type RecognitionAwardsPageProps = {
  onGoHome: () => void
  onGoMenu: () => void
  onGoAbout: () => void
  onGoFranchise: () => void
  onGoContact: () => void
}

function RecognitionAwardsPage({
  onGoHome,
  onGoMenu,
  onGoAbout,
  onGoFranchise,
  onGoContact,
}: RecognitionAwardsPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigationItems = [
    { label: 'About Us', onClick: onGoAbout },
    { label: 'Menu', onClick: onGoMenu },
    { label: 'Franchise', onClick: onGoFranchise },
    { label: 'Recognition & Awards', current: true },
    { label: 'Contact Us', onClick: onGoContact },
  ] satisfies readonly HeaderNavItem[]

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff9ef_0%,#fffdf9_40%,#fff6e8_100%)] text-[#3B1A0E]">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        onToggleMenu={() => setMobileMenuOpen((current) => !current)}
        onCloseMenu={() => setMobileMenuOpen(false)}
        onLogoClick={onGoHome}
        navItems={navigationItems}
      />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-4xl border border-amber-100 bg-white/90 p-6 shadow-sm sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">Recognition &amp; awards</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-[#3B1A0E] sm:text-5xl">
            The milestones we&apos;re proud of
          </h1>
          <p className="mt-4 text-base leading-8 text-[#6e3d25]">
            From local community recognition to franchise growth achievements, this is where we&apos;ll be sharing
            the awards and milestones that mark the Best Lolama journey.
          </p>
        </section>
      </main>

      <Footer navItems={navigationItems} />
    </div>
  )
}

export default RecognitionAwardsPage
