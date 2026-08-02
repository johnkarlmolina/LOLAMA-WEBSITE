import { Menu, X } from 'lucide-react'

export type HeaderNavItem = {
  label: string
  href?: string
  onClick?: () => void
  current?: boolean
}

type HeaderProps = {
  mobileMenuOpen: boolean
  onToggleMenu: () => void
  onCloseMenu: () => void
  onLogoClick?: () => void
  onFranchiseNowClick: () => void
  navItems: readonly HeaderNavItem[]
}

function Header({ mobileMenuOpen, onToggleMenu, onCloseMenu, onLogoClick, onFranchiseNowClick, navItems }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button type="button" onClick={onLogoClick} className="flex items-center gap-3 text-left">
          <img
            src={encodeURI('/Images/bg-remove-logo.png')}
            alt="Best Lolama Logo"
            className="h-12 w-auto rounded-lg object-contain"
          />
          <div>
            <div className="text-lg font-extrabold tracking-[0.2em] text-[#3B1A0E]">BEST LOLAMA</div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-amber-700">Handmade Love Doughnuts</p>
          </div>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            item.onClick ? (
              <button
                key={item.label}
                type="button"
                onClick={item.onClick}
                className={`text-sm font-semibold transition ${
                  item.current ? 'text-amber-700' : 'text-[#5a2c16] hover:text-amber-600'
                }`}
              >
                {item.label}
              </button>
            ) : item.href ? (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-semibold transition ${
                  item.current ? 'text-amber-700' : 'text-[#5a2c16] hover:text-amber-600'
                }`}
              >
                {item.label}
              </a>
            ) : (
              <span key={item.label} className="text-sm font-semibold text-amber-700">
                {item.label}
              </span>
            )
          ))}
          <button
            type="button"
            onClick={onFranchiseNowClick}
            className="inline-flex items-center rounded-full bg-[#3B1A0E] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-amber-900/15 transition hover:-translate-y-0.5 hover:bg-amber-700"
          >
            Franchise Now
          </button>
        </nav>

        <button
          type="button"
          onClick={onToggleMenu}
          className="inline-flex items-center justify-center rounded-full border border-amber-200 bg-white p-2.5 text-[#3B1A0E] shadow-sm transition hover:bg-amber-50 md:hidden"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-amber-100 bg-white px-4 pb-5 pt-3 shadow-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              item.onClick ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    item.onClick?.()
                    onCloseMenu()
                  }}
                  className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                    item.current ? 'bg-amber-50 text-amber-700' : 'text-[#4d2312] hover:bg-amber-50'
                  }`}
                >
                  {item.label}
                </button>
              ) : item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={onCloseMenu}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    item.current ? 'bg-amber-50 text-amber-700' : 'text-[#4d2312] hover:bg-amber-50'
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <span key={item.label} className="rounded-2xl px-4 py-3 text-sm font-semibold text-amber-700">
                  {item.label}
                </span>
              )
            ))}
            <button
              type="button"
              onClick={() => {
                onFranchiseNowClick()
                onCloseMenu()
              }}
              className="inline-flex items-center justify-center rounded-2xl bg-[#3B1A0E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
            >
              Franchise Now
            </button>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Header
