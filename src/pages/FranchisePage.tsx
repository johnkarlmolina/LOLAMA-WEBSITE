import { useState } from 'react'
import Footer from '../best-lolama/Footer'
import FranchiseSection from '../best-lolama/FranchiseSection'
import Header, { type HeaderNavItem } from '../best-lolama/Header'
import { FRANCHISE_STEPS, FRANCHISE_TIERS } from '../data/best-lolama.data'

type FranchisePageProps = {
  onGoHome: () => void
  onGoMenu: () => void
  onGoAbout: () => void
  onGoContact: () => void
}

function FranchisePage({ onGoHome, onGoMenu, onGoAbout, onGoContact }: FranchisePageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigationItems = [
    { label: 'About Us', onClick: onGoAbout },
    { label: 'Menu', onClick: onGoMenu },
    { label: 'Franchise', current: true },
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
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">Franchise</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-[#3B1A0E] sm:text-5xl">
            Investment tiers with clear growth paths
          </h1>
          <p className="mt-4 text-base leading-8 text-[#6e3d25]">
            The franchise structure is built for entrepreneurs who want a practical footprint, recognizable brand
            equity, and support that can scale with location and territory.
          </p>
        </section>

        <div className="mt-10">
          <FranchiseSection franchiseTiers={FRANCHISE_TIERS} franchiseSteps={FRANCHISE_STEPS} />
        </div>
      </main>

      <Footer
        navItems={navigationItems}
      />
    </div>
  )
}

export default FranchisePage
