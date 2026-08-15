type FooterNavItem = {
  label: string
  href?: string
  onClick?: () => void
  current?: boolean
}

type FooterProps = {
  navItems: readonly FooterNavItem[]
}

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/best.lolama',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M13.5 9H15V6.5h-1.5C11.57 6.5 10 8.07 10 10v2H8v2.5h2V21h2.5v-6.5H15l.5-2.5h-3V10c0-.55.45-1 1-1z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/bestlolama',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@bestlolama',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M16.5 3c.4 2.2 2 3.8 4.2 4v3c-1.5 0-2.9-.5-4.2-1.3v6.6c0 3.4-2.8 6.2-6.2 6.2S4.1 18.7 4.1 15.3s2.8-6.2 6.2-6.2c.4 0 .8 0 1.2.1v3.1c-.4-.1-.8-.2-1.2-.2-1.7 0-3.1 1.4-3.1 3.1s1.4 3.1 3.1 3.1 3.2-1.3 3.2-3V3h3z" />
      </svg>
    ),
  },
]

function Footer({ navItems }: FooterProps) {
  return (
    <footer className="border-t border-amber-100 bg-white/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={encodeURI('/Images/BEST LOLAMA LOGO.jpg')}
              alt="Best Lolama"
              className="h-10 w-auto rounded-md object-contain"
            />
            <div>
              <p className="text-base font-black text-[#3B1A0E]">BEST LOLAMA</p>
              <p className="text-sm text-amber-700">Handmade Love Doughnuts</p>
            </div>
          </div>

          <div className="flex flex-col divide-y divide-amber-100 border-y border-amber-100 text-base font-semibold text-[#5b2d18] lg:flex-row lg:flex-wrap lg:gap-4 lg:divide-y-0 lg:border-none lg:text-sm">
            {navItems.map((item) => {
              const stateClass = item.current ? 'text-amber-700' : 'hover:text-amber-700'

              return item.onClick ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={item.onClick}
                  className={`w-full py-4 text-left transition lg:w-auto lg:py-0 ${stateClass}`}
                >
                  {item.label}
                </button>
              ) : item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block py-4 transition lg:py-0 ${stateClass}`}
                >
                  {item.label}
                </a>
              ) : (
                <span key={item.label} className="block py-4 text-amber-700 lg:py-0">
                  {item.label}
                </span>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1f1f1f] text-white transition hover:bg-amber-700"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-amber-100 pt-5 text-sm text-[#7a513c] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Best Lolama. All rights reserved.</p>
          <p>Made fresh daily for communities, families, and future franchise partners.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
