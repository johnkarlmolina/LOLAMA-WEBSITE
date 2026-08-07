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

  // Helper function to open modal
  const openModal = (modalId: string) => {
    const dialog = document.getElementById(modalId) as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
    }
  };

  // Helper function to close modal
  const closeModal = (modalId: string) => {
    const dialog = document.getElementById(modalId) as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
  };

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

       {/* ========== 2023 ========== */}

      {/* GMA Video Section - November 2, 2023 */}
      {/* LAYOUT: Video LEFT | Text RIGHT */}
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

      {/* ========== 2024 ========== */}

      {/* RDR Talks - May 12, 2024 */}
      {/* LAYOUT: Video RIGHT | Text LEFT */}
      <section className="mt-8 rounded-4xl border border-amber-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
          <div className="w-full md:w-1/2 order-2 md:order-1">
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
          <div className="w-full md:w-1/2 order-1 md:order-2">
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

      {/* Masaraaap Nga - August 15, 2024 */}
      {/* LAYOUT: Video LEFT | Text RIGHT */}
      <section className="mt-8 rounded-4xl border border-amber-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.youtube.com/embed/DZMmxumeqfE"
                title="Masaraaap Nga"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute left-0 top-0 h-full w-full"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <blockquote className="border-l-4 border-amber-700 pl-6">
              <p className="text-justify text-base leading-8 text-[#6e3d25] md:text-lg">
                &quot;Featured on <i>Masaraap Nga</i>, Best Lolama showcased its visually elevated, world-class doughnuts, highlighting the brand's premium quality 
                and exceptional taste. The feature praised the delicious flavors while spotlighting two of Best Lolama's bestsellers—<b>Leche Flan ni Lola</b> and <b>Mango Pilipino</b>—for 
                their unique Filipino-inspired taste and outstanding presentation.&quot;
              </p>
              <footer className="mt-4">
                <p className="font-bold uppercase tracking-wider text-amber-700">
                  <i>Masaraaap Nga</i>
                </p>
                <p className="text-sm text-[#6e3d25]">August 15, 2024</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ========== 2025 ========== */}

      {/* Franchise Republic - April 4, 2025 */}
      {/* LAYOUT: Video RIGHT | Text LEFT */}
      <section className="mt-8 rounded-4xl border border-amber-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <blockquote className="border-r-4 border-amber-700 pr-6 text-right">
              <p className="text-justify text-base leading-8 text-[#6e3d25] md:text-lg">
                &quot;Featured on <i>Franchise Republic</i>, Best Lolama showcased its delicious doughnuts, diverse menu offerings, and comprehensive franchise packages. 
                The episode highlighted the franchise process, package inclusions, hands-on training, and full business support, while providing aspiring franchisees with 
                the information they need to start their journey with Best Lolama.&quot;
              </p>
              <footer className="mt-4">
                <p className="font-bold uppercase tracking-wider text-amber-700">
                  <i>Franchise Republic</i>
                </p>
                <p className="text-sm text-[#6e3d25]">April 4, 2025</p>
              </footer>
            </blockquote>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.youtube.com/embed/_YPl1UHPgbk"
                title="Franchise Republic - Best Lolama"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute left-0 top-0 h-full w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Kristina Po Shinjiru - April 17, 2025 */}
      {/* LAYOUT: Video LEFT | Text RIGHT */}
      <section className="mt-8 rounded-4xl border border-amber-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.youtube.com/embed/Db5LKomGjaM"
                title="Kristina Po Shinjiru"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute left-0 top-0 h-full w-full"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <blockquote className="border-l-4 border-amber-700 pl-6">
              <p className="text-justify text-base leading-8 text-[#6e3d25] md:text-lg">
                &quot;On April 17, 2025, Best Lolama was featured on <i>Kristina Po Shinjiru</i>,
                highlighting the brand&apos;s journey and its commitment to quality
                doughnuts that Filipinos love.&quot;
              </p>
              <footer className="mt-4">
                <p className="font-bold uppercase tracking-wider text-amber-700">
                  <i>Kristina Po Shinjiru</i>
                </p>
                <p className="text-sm text-[#6e3d25]">April 17, 2025</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* DWIZ 882 - August 27, 2025 */}
      {/* LAYOUT: Video RIGHT | Text LEFT */}
      <section className="mt-8 rounded-4xl border border-amber-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <blockquote className="border-r-4 border-amber-700 pr-6 text-right">
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
          <div className="w-full md:w-1/2 order-1 md:order-2">
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
        </div>
      </section>

      {/* ========== 2026 ========== */}

      {/* Best Finds Tv - July 14, 2026 */}
      {/* LAYOUT: Video LEFT | Text RIGHT */}
      <section className="mt-8 rounded-4xl border border-amber-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.youtube.com/embed/CjkmXkucXmo"
                title="Best Finds Tv - Best Lolama"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute left-0 top-0 h-full w-full"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <blockquote className="border-l-4 border-amber-700 pl-6">
              <p className="text-justify text-base leading-8 text-[#6e3d25] md:text-lg">
                &quot;Featured on <i>Best Finds Tv</i>, Best Lolama highlighted its simple and accessible franchise process, 
                premium-quality products, affordable pricing, comprehensive support, and no royalty fee. 
                It also emphasized that OFWs can conveniently monitor their franchise remotely through its digital system.&quot;
              </p>
              <footer className="mt-4">
                <p className="font-bold uppercase tracking-wider text-amber-700">
                  <i>Best Finds Tv</i>
                </p>
                <p className="text-sm text-[#6e3d25]">July 14, 2026</p>
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
            <div 
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal('modal-award1')}
            >
              <img
                src="/Images/AWARDS & RECOGNITION/awards&recognition1.jpg"
                alt="Best Lolama Award"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="px-2 text-center text-sm font-semibold text-white">
                  Award
                </p>
              </div>
            </div>

            {/* Award 2 */}
            <div 
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal('modal-award2')}
            >
              <img
                src="/Images/AWARDS & RECOGNITION/BEST FRESHLY BAKED DONUTS AWARD.jpg"
                alt="Best Lolama Recognition"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="px-2 text-center text-sm font-semibold text-white">
                  Best Freshly Baked Special Doughnuts
                </p>
              </div>
            </div>

            {/* Award 3 */}
            <div 
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal('modal-award3')}
            >
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
            <div 
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal('modal-award4')}
            >
              <img
                src="/Images/AWARDS & RECOGNITION/2NDFIFAGENERALMEMBERSHIP2024.png"
                alt="2nd General Membership Convention 2024"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="px-2 text-center text-sm font-semibold text-white">
                  2nd FIFA General Membership Convention 2024
                </p>
              </div>
            </div>

            {/* Award 5 - Certificate of Membership */}
            <div 
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal('modal-award5')}
            >
              <img
                src="/Images/AWARDS & RECOGNITION/CERTIFICATEOFMEMBERSHIP.png"
                alt="Certificate of Membership FIFA"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="px-2 text-center text-sm font-semibold text-white">
                  Certificate of Membership FIFA
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Media Features Section */}
        <section className="mt-8 rounded-4xl border border-amber-100 bg-white/90 p-6 shadow-sm sm:p-8">
          <h3 className="mb-6 text-center text-2xl font-bold text-[#6e3d25] md:text-3xl">
            Media Features
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {/* Influencer 1 */}
            <div 
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal('modal-media1')}
            >
              <img
                src="/Images/MEDIA FEATURES/Newspaper.png"
                alt="Vlogger Name"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="px-2 text-center">
                  <p className="text-sm font-semibold text-white">Features in</p>
                  <p className="text-xs text-gray-300">Newspaper</p>
                </div>
              </div>
            </div>

            {/* Influencer 2 */}
            <div 
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal('modal-media2')}
            >
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
            <div 
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal('modal-media3')}
            >
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
            <div 
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal('modal-media4')}
            >
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
            <div 
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal('modal-media5')}
            >
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
            <div 
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal('modal-media6')}
            >
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
            <div 
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal('modal-media7')}
            >
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

            {/* Influencer 8 */}
            <div 
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal('modal-media8')}
            >
              <img
                src="/Images/MEDIA FEATURES/AVIONASTARTOROFAMILY.png"
                alt="Media Feature 8"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="px-2 text-center">
                  <p className="text-sm font-semibold text-white">Aviona Star Toro Family</p>
                  <p className="text-xs text-gray-300">Vlogger</p>
                </div>
              </div>
            </div>

            {/* Influencer 9 */}
            <div 
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal('modal-media9')}
            >
              <img
                src="/Images/MEDIA FEATURES/KARLAESTRADA.png"
                alt="Media Feature 9"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="px-2 text-center">
                  <p className="text-sm font-semibold text-white">Karla Estrada</p>
                  <p className="text-xs text-gray-300">Actress and Television Host</p>
                </div>
              </div>
            </div>

            {/* Influencer 10 */}
            <div 
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal('modal-media10')}
            >
              <img
                src="/Images/MEDIA FEATURES/RDRTALKS.png"
                alt="Media Feature 10"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="px-2 text-center">
                  <p className="text-sm font-semibold text-white">Boss RDR (Reymond delos Reyes)</p>
                  <p className="text-xs text-gray-300">Filipino Brand Accelerator, business coach, and entrepreneur</p>
                </div>
              </div>
            </div>

            {/* Influencer 11 */}
            <div 
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal('modal-media11')}
            >
              <img
                src="/Images/MEDIA FEATURES/SMNI NEWS DZAR.png"
                alt="Media Feature 11"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="px-2 text-center">
                  <p className="text-sm font-semibold text-white">SMNI News DZAR</p>
                  <p className="text-xs text-gray-300">AM radio station in Metro Manila operated under Swara Sug Media Corporation, the parent company of SMNI News Channel</p>
                </div>
              </div>
            </div>

            {/* Influencer 12 */}
            <div 
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal('modal-media12')}
            >
              <img
                src="/Images/MEDIA FEATURES/DWIZNEWSTV.png"
                alt="Media Feature 12"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="px-2 text-center">
                  <p className="text-sm font-semibold text-white">DWIZ News Tv</p>
                  <p className="text-xs text-gray-300">DWIZ News TV is a digital television news and public affairs channel broadcasting on Channel 23</p>
                </div>
              </div>
            </div>

            {/* Influencer 13 */}
            <div 
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal('modal-media13')}
            >
              <img
                src="/Images/MEDIA FEATURES/ALIWCHANNEL23.png"
                alt="Media Feature 13"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="px-2 text-center">
                  <p className="text-sm font-semibold text-white">Aliw Channel 23</p>
                  <p className="text-xs text-gray-300">The network broadcasts on UHF Channel 23 via digital terrestrial television in Metro Manila.</p>
                </div>
              </div>
            </div>

            {/* Influencer 14 */}
            <div 
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal('modal-media14')}
            >
              <img
                src="/Images/MEDIA FEATURES/FACETOFACETV5.png"
                alt="Media Feature 14"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="px-2 text-center">
                  <p className="text-sm font-semibold text-white">Face to Face Tv 5</p>
                  <p className="text-xs text-gray-300">Philippine tabloid talk show featuring heated in-person confrontations, community dispute resolutions, and practical lifestyle advice</p>
                </div>
              </div>
            </div>

            {/* Influencer 15 - NEW SLOT */}
            <div 
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal('modal-media15')}
            >
              <img
                src="/Images/MEDIA FEATURES/china roces.png"
                alt="Media Feature 15"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="px-2 text-center">
                  <p className="text-sm font-semibold text-white">China Roces</p>
                  <p className="text-xs text-gray-300">Actress and Model</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ====== MODALS FOR AWARDS ====== */}
      {/* Modal Award 1 */}
      <dialog id="modal-award1" className="modal rounded-2xl backdrop:bg-black/70">
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
            <button 
              className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
              onClick={() => closeModal('modal-award1')}
            >
              ✕
            </button>
            <img
              src="/Images/AWARDS & RECOGNITION/awards&recognition1.jpg"
              alt="Award 1"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-xl font-semibold text-white">Award</p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Modal Award 2 */}
      <dialog id="modal-award2" className="modal rounded-2xl backdrop:bg-black/70">
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
            <button 
              className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
              onClick={() => closeModal('modal-award2')}
            >
              ✕
            </button>
            <img
              src="/Images/AWARDS & RECOGNITION/BEST FRESHLY BAKED DONUTS AWARD.jpg"
              alt="Best Freshly Baked Special Doughnuts"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-xl font-semibold text-white">Best Freshly Baked Special Doughnuts</p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Modal Award 3 */}
      <dialog id="modal-award3" className="modal rounded-2xl backdrop:bg-black/70">
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
            <button 
              className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
              onClick={() => closeModal('modal-award3')}
            >
              ✕
            </button>
            <img
              src="/Images/AWARDS & RECOGNITION/asia magazine award.jpg"
              alt="Asia Magazine Award"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-xl font-semibold text-white">Asia Magazine Award</p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Modal Award 4 */}
      <dialog id="modal-award4" className="modal rounded-2xl backdrop:bg-black/70">
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
            <button 
              className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
              onClick={() => closeModal('modal-award4')}
            >
              ✕
            </button>
            <img
              src="/Images/AWARDS & RECOGNITION/2NDFIFAGENERALMEMBERSHIP2024.png"
              alt="2nd General Membership Convention 2024"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-xl font-semibold text-white">2nd General Membership Convention 2024</p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Modal Award 5 - Certificate of Membership */}
      <dialog id="modal-award5" className="modal rounded-2xl backdrop:bg-black/70">
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
            <button 
              className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
              onClick={() => closeModal('modal-award5')}
            >
              ✕
            </button>
            <img
              src="/Images/AWARDS & RECOGNITION/CERTIFICATEOFMEMBERSHIP.png"
              alt="Certificate of Membership FIFA"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-xl font-semibold text-white">Certificate of Membership FIFA</p>
            </div>
          </div>
        </div>
      </dialog>

      {/* ====== MODALS FOR MEDIA FEATURES ====== */}
      {/* Modal Media 1 */}
      <dialog id="modal-media1" className="modal rounded-2xl backdrop:bg-black/70">
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
            <button 
              className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
              onClick={() => closeModal('modal-media1')}
            >
              ✕
            </button>
            <img
              src="/Images/MEDIA FEATURES/Newspaper.png"
              alt="Newspaper Feature"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-xl font-semibold text-white">Features in Newspaper</p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Modal Media 2 */}
      <dialog id="modal-media2" className="modal rounded-2xl backdrop:bg-black/70">
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
            <button 
              className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
              onClick={() => closeModal('modal-media2')}
            >
              ✕
            </button>
            <img
              src="/Images/MEDIA FEATURES/Featured in a Magazine.png"
              alt="Magazine Feature"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-xl font-semibold text-white">Features in a Magazine</p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Modal Media 3 */}
      <dialog id="modal-media3" className="modal rounded-2xl backdrop:bg-black/70">
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
            <button 
              className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
              onClick={() => closeModal('modal-media3')}
            >
              ✕
            </button>
            <img
              src="/Images/MEDIA FEATURES/junnie boy.png"
              alt="Junnie Boy"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-xl font-semibold text-white">Junnie Boy (Marlon Velasquez)</p>
              <p className="text-sm text-gray-300">Content Creator</p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Modal Media 4 */}
      <dialog id="modal-media4" className="modal rounded-2xl backdrop:bg-black/70">
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
            <button 
              className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
              onClick={() => closeModal('modal-media4')}
            >
              ✕
            </button>
            <img
              src="/Images/MEDIA FEATURES/vien iligan-velasquez.png"
              alt="Vien Iligan-Velasquez"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-xl font-semibold text-white">Vien Iligan-Velasquez</p>
              <p className="text-sm text-gray-300">Content Creator</p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Modal Media 5 */}
      <dialog id="modal-media5" className="modal rounded-2xl backdrop:bg-black/70">
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
            <button 
              className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
              onClick={() => closeModal('modal-media5')}
            >
              ✕
            </button>
            <img
              src="/Images/MEDIA FEATURES/pat velazquez-gaspar.png"
              alt="Pat Velasquez-Gaspar"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-xl font-semibold text-white">Pat Velasquez-Gaspar (Neneng Lamig)</p>
              <p className="text-sm text-gray-300">Content Creator</p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Modal Media 6 */}
      <dialog id="modal-media6" className="modal rounded-2xl backdrop:bg-black/70">
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
            <button 
              className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
              onClick={() => closeModal('modal-media6')}
            >
              ✕
            </button>
            <img
              src="/Images/MEDIA FEATURES/boss toyo.png"
              alt="Boss Toyo"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-xl font-semibold text-white">Boss Toyo</p>
              <p className="text-sm text-gray-300">Filipino Collector and Vlogger</p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Modal Media 7 */}
      <dialog id="modal-media7" className="modal rounded-2xl backdrop:bg-black/70">
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
            <button 
              className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
              onClick={() => closeModal('modal-media7')}
            >
              ✕
            </button>
            <img
              src="/Images/MEDIA FEATURES/antonette and whamos cruz.jpg"
              alt="Antonette Gail and Whamos Cruz"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-xl font-semibold text-white">Antonette Gail and Whamos Cruz</p>
              <p className="text-sm text-gray-300">Content Creator</p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Modal Media 8 */}
      <dialog id="modal-media8" className="modal rounded-2xl backdrop:bg-black/70">
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
            <button 
              className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
              onClick={() => closeModal('modal-media8')}
            >
              ✕
            </button>
            <img
              src="/Images/MEDIA FEATURES/AVIONASTARTOROFAMILY.png"
              alt="Media Feature 8"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-xl font-semibold text-white">Aviona Star Toro Family</p>
              <p className="text-sm text-gray-300">Vlogger</p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Modal Media 9 */}
      <dialog id="modal-media9" className="modal rounded-2xl backdrop:bg-black/70">
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
            <button 
              className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
              onClick={() => closeModal('modal-media9')}
            >
              ✕
            </button>
            <img
              src="/Images/MEDIA FEATURES/KARLAESTRADA.png"
              alt="Media Feature 9"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-xl font-semibold text-white">Karla Estrada</p>
              <p className="text-sm text-gray-300">Actress and Television Host</p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Modal Media 10 */}
      <dialog id="modal-media10" className="modal rounded-2xl backdrop:bg-black/70">
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
            <button 
              className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
              onClick={() => closeModal('modal-media10')}
            >
              ✕
            </button>
            <img
              src="/Images/MEDIA FEATURES/RDRTALKS.png"
              alt="Media Feature 10"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-xl font-semibold text-white">Boss RDR (Reymond delos Reyes)</p>
              <p className="text-sm text-gray-300">Filipino Brand Accelerator, business coach, and entrepreneur</p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Modal Media 11 */}
      <dialog id="modal-media11" className="modal rounded-2xl backdrop:bg-black/70">
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
            <button 
              className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
              onClick={() => closeModal('modal-media11')}
            >
              ✕
            </button>
            <img
              src="/Images/MEDIA FEATURES/SMNI NEWS DZAR.png"
              alt="Media Feature 11"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-xl font-semibold text-white">SMNI News DZAR</p>
              <p className="text-sm text-gray-300">AM radio station in Metro Manila operated under Swara Sug Media Corporation, the parent company of SMNI News Channel</p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Modal Media 12 */}
      <dialog id="modal-media12" className="modal rounded-2xl backdrop:bg-black/70">
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
            <button 
              className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
              onClick={() => closeModal('modal-media12')}
            >
              ✕
            </button>
            <img
              src="/Images/MEDIA FEATURES/DWIZNEWSTV.png"
              alt="Media Feature 12"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-xl font-semibold text-white">DWIZ News Tv</p>
              <p className="text-sm text-gray-300">DWIZ News TV is a digital television news and public affairs channel broadcasting on Channel 23</p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Modal Media 13 */}
      <dialog id="modal-media13" className="modal rounded-2xl backdrop:bg-black/70">
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
            <button 
              className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
              onClick={() => closeModal('modal-media13')}
            >
              ✕
            </button>
            <img
              src="/Images/MEDIA FEATURES/ALIWCHANNEL23.png"
              alt="Media Feature 13"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-xl font-semibold text-white">Aliw Channel 23</p>
              <p className="text-sm text-gray-300">The network broadcasts on UHF Channel 23 via digital terrestrial television in Metro Manila.</p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Modal Media 14 */}
      <dialog id="modal-media14" className="modal rounded-2xl backdrop:bg-black/70">
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
            <button 
              className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
              onClick={() => closeModal('modal-media14')}
            >
              ✕
            </button>
            <img
              src="/Images/MEDIA FEATURES/FACETOFACETV5.png"
              alt="Media Feature 14"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-xl font-semibold text-white">Face to Face Tv 5</p>
              <p className="text-sm text-gray-300">Philippine tabloid talk show featuring heated in-person confrontations, community dispute resolutions, and practical lifestyle advice</p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Modal Media 15 */}
      <dialog id="modal-media15" className="modal rounded-2xl backdrop:bg-black/70">
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
            <button 
              className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
              onClick={() => closeModal('modal-media15')}
            >
              ✕
            </button>
            <img
              src="/Images/MEDIA FEATURES/china roces.png"
              alt="Media Feature 15"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-xl font-semibold text-white">China Roces</p>
              <p className="text-sm text-gray-300">Actress and Model</p>
            </div>
          </div>
        </div>
      </dialog>

      <Footer navItems={navigationItems} />
    </div>
  )
}

export default RecognitionAwardsPage
