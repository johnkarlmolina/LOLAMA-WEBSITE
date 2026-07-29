type FooterNavItem = {
  label: string
  href?: string
  onClick?: () => void
  current?: boolean
}

type FooterProps = {
  navItems: readonly FooterNavItem[]
}

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

          <div className="flex flex-wrap gap-4 text-sm font-semibold text-[#5b2d18]">
            {navItems.map((item) => (
              item.onClick ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={item.onClick}
                  className={`transition ${item.current ? 'text-amber-700' : 'hover:text-amber-700'}`}
                >
                  {item.label}
                </button>
              ) : item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={`transition ${item.current ? 'text-amber-700' : 'hover:text-amber-700'}`}
                >
                  {item.label}
                </a>
              ) : (
                <span key={item.label} className="text-amber-700">
                  {item.label}
                </span>
              )
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
