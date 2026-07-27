import { Mail, MapPin, Phone } from 'lucide-react'

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 py-12 sm:py-16">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-stretch">
        <div className="rounded-[2rem] border border-amber-100 bg-[#3B1A0E] p-6 text-white shadow-2xl shadow-amber-900/10 sm:p-8 lg:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-200">Contact us</p>
          <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
            Let’s talk about your Best Lolama franchise
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-amber-50/90 sm:text-[0.95rem]">
            Reach out for the latest franchise kit, site evaluation, and investment guidance. Our team can help you
            identify the right format for your location and target community.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href="tel:09166976114"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-4 transition hover:bg-white/15"
            >
              <Phone className="h-5 w-5 text-amber-200" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">Phone</p>
                <p className="font-semibold text-sm sm:text-base">0916-697-6114</p>
              </div>
            </a>
            <a
              href="mailto:franchisebestlolama@gmail.com"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-4 transition hover:bg-white/15"
            >
              <Mail className="h-5 w-5 text-amber-200" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">Email</p>
                <p className="break-all font-semibold text-sm sm:text-base">franchisebestlolama@gmail.com</p>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-4 sm:col-span-2">
              <MapPin className="h-5 w-5 text-amber-200" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">Head office</p>
                <p className="font-semibold text-sm sm:text-base">Novaliches, Quezon City</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-amber-100 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
          <div className="flex items-center gap-3">
            <img
              src={encodeURI('/Images/BEST LOLAMA LOGO.jpg')}
              alt="Best Lolama"
              className="h-10 w-10 flex-none rounded-md object-contain sm:h-11 sm:w-11"
            />
            <div>
              <p className="text-base font-black text-[#3B1A0E] sm:text-lg">BEST LOLAMA</p>
              <p className="text-xs font-medium text-amber-700 sm:text-sm">Handmade Love Doughnuts</p>
            </div>
          </div>

          <div className="mt-6 space-y-4 rounded-[1.5rem] bg-amber-50/70 p-4 sm:p-5">
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-amber-700 sm:text-xs">
                General Franchise Manager
              </p>
              <p className="mt-1 text-sm font-semibold text-[#3B1A0E] sm:text-base">Cathlenn Japson</p>
            </div>
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-amber-700 sm:text-xs">Website</p>
              <a
                href="https://bestlolama.com.ph"
                className="mt-1 inline-block break-all font-semibold text-sm text-[#3B1A0E] hover:text-amber-700 sm:text-base"
              >
                bestlolama.com.ph
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'Facebook', href: 'https://www.facebook.com/best.lolama' },
              { label: 'Instagram', href: 'https://www.instagram.com/bestlolama' },
              { label: 'TikTok', href: 'https://www.tiktok.com/@bestlolama' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-[7.5rem] flex-1 items-center justify-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-[#5b2d18] transition hover:bg-amber-50 sm:flex-none"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
