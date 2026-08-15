import ContactSection from '../best-lolama/ContactSection'
import Footer from '../best-lolama/Footer'
import Header, { type HeaderNavItem } from '../best-lolama/Header'
import { useState } from 'react'

type ContactPageProps = {
  onGoHome: () => void
  onGoMenu: () => void
  onGoAbout: () => void
  onGoFranchise: () => void
  onGoRecognitionAwards: () => void
  onFranchiseNowClick: () => void
}

function ContactPage({
  onGoHome,
  onGoMenu,
  onGoAbout,
  onGoFranchise,
  onGoRecognitionAwards,
  onFranchiseNowClick,
}: ContactPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff9ef_0%,#fffdf9_40%,#fff6e8_100%)] text-[#3B1A0E]">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        onToggleMenu={() => setMobileMenuOpen((current) => !current)}
        onCloseMenu={() => setMobileMenuOpen(false)}
        onLogoClick={onGoHome}
        onFranchiseNowClick={onFranchiseNowClick}
        navItems={[
          { label: 'About Us', onClick: onGoAbout },
          { label: 'Menu', onClick: onGoMenu },
          { label: 'Franchise', onClick: onGoFranchise },
          { label: 'Achievement', onClick: onGoRecognitionAwards },
          { label: 'Contact Us', current: true },
        ] satisfies readonly HeaderNavItem[]}
      />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8">
        <section className="rounded-4xl border border-amber-100 bg-white/90 p-5 shadow-sm sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">Contact us</p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-[#3B1A0E] sm:text-4xl lg:text-5xl">
            Talk to the Best Lolama team
          </h1>
          <p className="mt-4 text-sm leading-7 text-[#6e3d25] sm:text-base sm:leading-8">
            Reach out for the latest franchise kit, site evaluation, and investment guidance. Our team can help you
            identify the right format for your location and target community.
          </p>
        </section>

        <div className="mt-10">
          <ContactSection />
        </div>
      </main>

      <Footer
        navItems={[
          { label: 'About Us', onClick: onGoAbout },
          { label: 'Menu', onClick: onGoMenu },
          { label: 'Franchise', onClick: onGoFranchise },
          { label: 'Achievement', onClick: onGoRecognitionAwards },
          { label: 'Contact Us', current: true },
        ] satisfies readonly HeaderNavItem[]}
      />
    </div>
  )
}

export default ContactPage
