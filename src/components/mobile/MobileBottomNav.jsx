import { ForkKnife, Gift, HouseLine, Phone, Storefront } from '@phosphor-icons/react'

const phoneNumber = '0961 374 566'

const navItems = [
  { key: 'home', label: 'Trang chủ', href: '#home', Icon: HouseLine },
  { key: 'menu', label: 'Thực đơn', href: '#menu', Icon: ForkKnife },
  { key: 'combo', label: 'Combo', href: '#combo', Icon: Gift },
  { key: 'space', label: 'Không gian', href: '#space', Icon: Storefront },
]

export function MobileBottomNav({ activeItem = 'home', zIndexClass = 'z-40' }) {
  return (
    <nav
      className={`fixed inset-x-0 bottom-0 ${zIndexClass} border-t border-[rgba(184,137,53,0.2)] bg-[#fffaf1]/96 px-3 pb-[max(10px,env(safe-area-inset-bottom))] pt-2 shadow-[0_-12px_26px_rgba(42,49,38,0.12)] backdrop-blur`}
      aria-label="Điều hướng mobile"
    >
      <div className="mx-auto grid max-w-[480px] grid-cols-[1fr_1fr_86px_1fr_1fr] items-end">
        {navItems.slice(0, 2).map(({ key, label, href, Icon }) => {
          const active = activeItem === key

          return (
            <a
              key={key}
              href={href}
              className={`flex min-w-0 flex-col items-center gap-1 text-[11.5px] font-semibold ${
                active ? 'text-[var(--color-green)]' : 'text-[rgba(38,51,39,0.72)]'
              }`}
            >
              <Icon size={24} weight={active ? 'fill' : 'regular'} />
              <span>{label}</span>
              <span className={`h-0.5 w-8 rounded-full ${active ? 'bg-[var(--color-green)]' : 'bg-transparent'}`} />
            </a>
          )
        })}

        <a
          href="tel:0961374566"
          className="-mt-8 flex h-[76px] w-[76px] flex-col items-center justify-center justify-self-center rounded-full bg-[var(--color-green)] text-center text-[#fffaf1] shadow-[0_8px_22px_rgba(7,88,59,0.28)] ring-4 ring-[#fffaf1]"
          aria-label={`Gọi ngay ${phoneNumber}`}
        >
          <Phone size={25} weight="fill" className="mobile-call-shake text-[var(--color-gold)]" />
          <span className="mt-1 text-[12px] font-semibold leading-tight">Gọi ngay</span>
        </a>

        {navItems.slice(2).map(({ key, label, href, Icon }) => {
          const active = activeItem === key

          return (
            <a
              key={key}
              href={href}
              className={`flex min-w-0 flex-col items-center gap-1 text-[11.5px] font-semibold ${
                active ? 'text-[var(--color-green)]' : 'text-[rgba(38,51,39,0.72)]'
              }`}
            >
              <Icon size={24} weight={active ? 'fill' : 'regular'} />
              <span>{label}</span>
              <span className={`h-0.5 w-8 rounded-full ${active ? 'bg-[var(--color-green)]' : 'bg-transparent'}`} />
            </a>
          )
        })}
      </div>
    </nav>
  )
}
