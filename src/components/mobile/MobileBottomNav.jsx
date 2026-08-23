import {
  ChatCircleText,
  HouseLine,
  Images,
  Phone,
  SquaresFour,
} from '@phosphor-icons/react'
import { contact } from '../../features/home/data/homeContent'

const navItems = [
  { key: 'home', label: 'Trang chủ', href: '#home', Icon: HouseLine },
  { key: 'services', label: 'Dịch vụ', href: '#services', Icon: SquaresFour },
  { key: 'projects', label: 'Dự án', href: '#projects', Icon: Images },
  { key: 'contact', label: 'Tư vấn', href: '#contact', Icon: ChatCircleText },
]

export function MobileBottomNav({ activeItem = 'home', zIndexClass = 'z-40' }) {
  return (
    <nav
      className={`fixed inset-x-0 bottom-0 ${zIndexClass} border-t border-[#E5A93C]/30 bg-[#160404]/96 px-3 pb-[max(10px,env(safe-area-inset-bottom))] pt-2 shadow-[0_-12px_26px_rgba(0,0,0,0.5)] backdrop-blur-md`}
      aria-label="Điều hướng mobile"
    >
      <div className="mx-auto grid max-w-[480px] grid-cols-[1fr_1fr_86px_1fr_1fr] items-end">
        {navItems.slice(0, 2).map(({ key, label, href, Icon }) => {
          const active = activeItem === key

          return (
            <a
              key={key}
              href={href}
              className={`flex min-w-0 flex-col items-center gap-1 text-[11px] font-bold ${
                active ? 'text-[#E5A93C]' : 'text-white/70'
              }`}
            >
              <Icon size={22} weight={active ? 'fill' : 'regular'} />
              <span>{label}</span>
              <span
                className={`h-0.5 w-6 rounded-full ${
                  active ? 'bg-[#E5A93C]' : 'bg-transparent'
                }`}
              />
            </a>
          )
        })}

        {/* Center Quick Call Button */}
        <a
          href={`tel:${contact.hotline.replace(/\s/g, '')}`}
          className="-mt-8 flex h-[68px] w-[68px] flex-col items-center justify-center justify-self-center rounded-full bg-gradient-to-tr from-[#D97706] via-[#E5A93C] to-[#F59E0B] text-center text-[#140202] shadow-[0_8px_24px_rgba(217,119,6,0.45)] ring-4 ring-[#160404] active:scale-95 transition-transform"
          aria-label={`Gọi ngay hotline ${contact.hotline}`}
        >
          <Phone size={24} weight="fill" />
          <span className="mt-0.5 text-[10.5px] font-black uppercase tracking-tight">Gọi ngay</span>
        </a>

        {navItems.slice(2).map(({ key, label, href, Icon }) => {
          const active = activeItem === key

          return (
            <a
              key={key}
              href={href}
              className={`flex min-w-0 flex-col items-center gap-1 text-[11px] font-bold ${
                active ? 'text-[#E5A93C]' : 'text-white/70'
              }`}
            >
              <Icon size={22} weight={active ? 'fill' : 'regular'} />
              <span>{label}</span>
              <span
                className={`h-0.5 w-6 rounded-full ${
                  active ? 'bg-[#E5A93C]' : 'bg-transparent'
                }`}
              />
            </a>
          )
        })}
      </div>
    </nav>
  )
}
