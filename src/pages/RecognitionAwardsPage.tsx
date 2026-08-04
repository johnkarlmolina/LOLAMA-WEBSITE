import { useState } from 'react'
import Footer from '../best-lolama/Footer'
import Header, { type HeaderNavItem } from '../best-lolama/Header'

type RecognitionAwardsPageProps = {
  onGoHome: () => void
  onGoMenu: () => void
  onGoAbout: () => void
  onGoFranchise: () => void
  onGoContact: () => void
  onFranchiseNowClick: () => void
}

function RecognitionAwardsPage({
  onGoHome,
  onGoMenu,
  onGoAbout,
  onGoFranchise,
  onGoContact,
  onFranchiseNowClick,
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
        onFranchiseNowClick={onFranchiseNowClick}
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

        {/* GMA Video Section */}
        <section className="mt-8 rounded-4xl border border-amber-100 bg-white/90 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md">
                <iframe
                  src="https://www.youtube.com/embed/58oPB226pjM"
                  title="GMA Unang Hirit - Best Lolama"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute left-0 top-0 h-full w-full"
                ></iframe>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <blockquote className="border-l-4 border-amber-700 pl-6">
                <p className="text-justify text-base leading-8 text-[#6e3d25] md:text-lg">
                  &quot;Featured on <i>GMA Network&apos;s Unang Hirit</i> on November 2, 2023,
                  Best Lolama showcased its dedication to crafting freshly baked,
                  high-quality, and affordable doughnuts, delivering exceptional
                  taste and value to Filipino customers.&quot;
                </p>
                <footer className="mt-4">
                  <p className="font-bold uppercase tracking-wider text-amber-700">
                    <i>GMA Network</i>
                  </p>
                  <p className="text-sm text-[#6e3d25]">Unang Hirit · November 2, 2023</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* YouTube Video Section */}
        <section className="mt-8 rounded-4xl border border-amber-100 bg-white/90 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
            {/* Text - Left */}
            <div className="w-full md:w-1/2">
              <blockquote className="border-r-4 border-amber-700 pr-6 text-right">
                <p className="text-justify text-base leading-8 text-[#6e3d25] md:text-lg">
                  &quot;During an interview on <i>RDR Talks</i> on May 12, 2024,
                  the founders of Best Lolama shared the inspiring story behind
                  the brand&apos;s success, their entrepreneurial journey, and their
                  commitment to delivering freshly baked, high-quality doughnuts.&quot;
                </p>
                <footer className="mt-4">
                  <p className="font-bold uppercase tracking-wider text-amber-700">
                    <i>RDR Talks</i>
                  </p>
                  <p className="text-sm text-[#6e3d25]">May 12, 2024</p>
                </footer>
              </blockquote>
            </div>
            {/* YouTube Video - Right */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md">
                <iframe
                  src="https://www.youtube.com/embed/HgE8OK5Hnx8?enablejsapi=1"
                  title="RDR Talks - Best Lolama"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute left-0 top-0 h-full w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* DWIZ 882 Video Section */}
        <section className="mt-8 rounded-4xl border border-amber-100 bg-white/90 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md">
                <iframe
                  src="https://www.youtube.com/embed/6BLUUkxXRWM"
                  title="DWIZ 882 - Best Lolama"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute left-0 top-0 h-full w-full"
                ></iframe>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <blockquote className="border-l-4 border-amber-700 pl-6">
                <p className="text-justify text-base leading-8 text-[#6e3d25] md:text-lg">
                   &quot;On August 27, 2025, Best Lolama joined <i>DWIZ 882</i> as a guest co-host 
                  to discuss workplace issues affecting many businesses, including employee 
                  absenteeism, AWOL, and resignations without proper notice. The conversation 
                  emphasized the importance of professionalism, mutual respect, and effective 
                  communication in building a responsible and productive workplace culture.&quot;
                </p>
                <footer className="mt-4">
                  <p className="font-bold uppercase tracking-wider text-amber-700">
                    <i>DWIZ 882</i>
                  </p>
                  <p className="text-sm text-[#6e3d25]">August 27, 2025</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
           {/* Awards & Recognition Section */}
        <section className="mt-8 rounded-4xl border border-amber-100 bg-white/90 p-6 shadow-sm sm:p-8">
          <h3 className="mb-6 text-center text-2xl font-bold text-[#6e3d25] md:text-3xl">
            Awards &amp; Recognition
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {/* Award 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <img
                src="/Images/AWARDS & RECOGNITION/awards&recognition1.jpg"
                alt="Best Lolama Award"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="px-2 text-center text-sm font-semibold text-white">
                  Award Title Here
                </p>
              </div>
            </div>

            {/* Award 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <img
                src="/Images/AWARDS & RECOGNITION/BEST FRESHLY BAKED DONUTS AWARD.jpg"
                alt="Best Lolama Recognition"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="px-2 text-center text-sm font-semibold text-white">
                  Best Freshly Baked Special Dougnuts
                </p>
              </div>
            </div>

            {/* Award 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <img
                src="/Images/AWARDS & RECOGNITION/asia magazine award.jpg"
                alt="Best Lolama Certificate"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="px-2 text-center text-sm font-semibold text-white">
                  Asia Magazine Award
                </p>
              </div>
            </div>

            {/* Award 4 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <img
                src="/images/awards/award-4.jpg"
                alt="Best Lolama Plaque"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="px-2 text-center text-sm font-semibold text-white">
                  Plaque Title Here
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vloggers & Influencers Section */}
        <section className="mt-8 rounded-4xl border border-amber-100 bg-white/90 p-6 shadow-sm sm:p-8">
          <h3 className="mb-6 text-center text-2xl font-bold text-[#6e3d25] md:text-3xl">
            Media Features
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {/* Influencer 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <img
                src="/Images/MEDIA FEATURES/Newspaper.png"
                alt="Vlogger Name"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="px-2 text-center">
                  <p className="text-sm font-semibold text-white">Features in </p>
                  <p className="text-xs text-gray-300">News paper</p>
                </div>
              </div>
            </div>

            {/* Influencer 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <img
                src="/Images/MEDIA FEATURES/Featured in a Magazine.png"
                alt="Influencer Name"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="px-2 text-center">
                  <p className="text-sm font-semibold text-white">Features in</p>
                  <p className="text-xs text-gray-300">a Magazine</p>
                </div>
              </div>
            </div>

            {/* Influencer 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <img
                src="/Images/MEDIA FEATURES/junnie boy.png"
                alt="Content Creator"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="px-2 text-center">
                  <p className="text-sm font-semibold text-white">Junnie Boy (Marlon Velasquez)</p>
                  <p className="text-xs text-gray-300">Content Creator</p>
                </div>
              </div>
            </div>

            {/* Influencer 4 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <img
                src="/Images/MEDIA FEATURES/vien iligan-velasquez.png"
                alt="Food Critic"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="px-2 text-center">
                  <p className="text-sm font-semibold text-white">Vien Iligan-Velasquez</p>
                  <p className="text-xs text-gray-300">Content Creator</p>
                </div>
              </div>
            </div>

            {/* Influencer 5 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <img
                src="/Images/MEDIA FEATURES/pat velazquez-gaspar.png"
                alt="TikTok Creator"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="px-2 text-center">
                  <p className="text-sm font-semibold text-white">Pat Velasquez-Gaspar (Neneng Lamig)</p>
                  <p className="text-xs text-gray-300">Content Creator</p>
                </div>
              </div>
            </div>

            {/* Influencer 6 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <img
                src="/Images/MEDIA FEATURES/boss toyo.png"
                alt="YouTube Vlogger"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="px-2 text-center">
                  <p className="text-sm font-semibold text-white">Boss Toyo</p>
                  <p className="text-xs text-gray-300">Filipino Collector and Vlogger</p>
                </div>
              </div>
            </div>

            {/* Influencer 7 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <img
                src="/Images/MEDIA FEATURES/antonette and whamos cruz.jpg"
                alt="YouTube Vlogger"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="px-2 text-center">
                  <p className="text-sm font-semibold text-white">Antonette Gail and Whamos Cruz</p>
                  <p className="text-xs text-gray-300">Content Creator</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer navItems={navigationItems} />
    </div>
  )
}

export default RecognitionAwardsPage
