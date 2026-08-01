import { useState } from 'react'
import AboutSection from '../best-lolama/AboutSection'
import Footer from '../best-lolama/Footer'
import Header, { type HeaderNavItem } from '../best-lolama/Header'
import PartnerMarqueeSection from '../best-lolama/PartnerMarqueeSection'
import VisionMissionSection from '../best-lolama/VisionMissionSection'
import {
  ABOUT_US_PARAGRAPHS,
  CORE_VALUES,
  MISSION_TEXT,
  PARTNERS,
  VALUE_POINTS,
  VISION_TEXT,
} from '../data/best-lolama.data'

type AboutPageProps = {
  onGoHome: () => void
  onGoMenu: () => void
  onGoFranchise: () => void
  onGoContact: () => void
}

function AboutPage({ onGoHome, onGoMenu, onGoFranchise, onGoContact }: AboutPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff9ef_0%,#fffdf9_40%,#fff6e8_100%)] text-[#3B1A0E]">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        onToggleMenu={() => setMobileMenuOpen((current) => !current)}
        onCloseMenu={() => setMobileMenuOpen(false)}
        onLogoClick={onGoHome}
        navItems={[
          { label: 'About Us', current: true },
          { label: 'Menu', onClick: onGoMenu },
          { label: 'Franchise', onClick: onGoFranchise },
          { label: 'Contact Us', onClick: onGoContact },
        ] satisfies readonly HeaderNavItem[]}
      />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-4xl border border-amber-100 bg-white/90 p-6 shadow-sm sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">About us</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-[#3B1A0E] sm:text-5xl">
            A family brand built from passion and consistency
          </h1>
          <div className="mt-4 space-y-4">
            {ABOUT_US_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-[#6e3d25]">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <div className="mt-10">
          <AboutSection valuePoints={VALUE_POINTS} showLabel={false} />
        </div>

        <div className="mt-10">
          <VisionMissionSection vision={VISION_TEXT} mission={MISSION_TEXT} coreValues={CORE_VALUES} />
        </div>

        <div className="mt-10">
          <PartnerMarqueeSection partners={PARTNERS} />
        </div>
      </main>

      <Footer
        navItems={[
          { label: 'About Us', current: true },
          { label: 'Menu', onClick: onGoMenu },
          { label: 'Franchise', onClick: onGoFranchise },
          { label: 'Contact Us', onClick: onGoContact },
        ] satisfies readonly HeaderNavItem[]}
      />
    </div>
  )
}

export default AboutPage
