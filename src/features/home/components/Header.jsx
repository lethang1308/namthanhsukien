import {
  Clock,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  Medal,
  Phone,
} from '@phosphor-icons/react'
import { BrandMark } from '../../../components/BrandMark'
import { contact, navItems } from '../data/homeContent'

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[rgba(211,184,126,0.35)] bg-[rgba(255,250,241,0.94)] shadow-[0_14px_40px_rgba(18,57,38,0.08)] backdrop-blur-md">
      <div className="bg-[var(--color-green)] text-sm text-[var(--color-gold)]">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-4 py-2 md:px-8">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
            <span className="inline-flex items-center gap-2">
              <MapPin size={18} weight="bold" />
              {contact.address}
            </span>
            <a className="inline-flex items-center gap-2 hover:text-white" href="tel:0961374566">
              <Phone size={18} weight="bold" />
              {contact.phone}
            </a>
            <span className="inline-flex items-center gap-2">
              <Clock size={18} weight="bold" />
              {contact.hours}
            </span>
          </div>
          <div className="hidden items-center gap-4 sm:flex" aria-label="Mạng xã hội">
            <a href="#contact" aria-label="Facebook" className="hover:text-white">
              <FacebookLogo size={18} weight="fill" />
            </a>
            <a href="#contact" aria-label="Instagram" className="hover:text-white">
              <InstagramLogo size={18} weight="bold" />
            </a>
            <a href="#about" aria-label="Giải thưởng" className="hover:text-white">
              <Medal size={18} weight="fill" />
            </a>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-5 px-4 py-3 md:px-8">
        <a href="#home" aria-label="Chả Cá Tràng An">
          <BrandMark />
        </a>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-7 text-[15px] font-semibold text-[var(--color-ink)] lg:flex">
          {navItems.map((item) => {
            const currentHash = typeof window !== 'undefined' ? window.location.hash : ''
            const isActive =
              (item.label === 'Thực đơn' && currentHash === '#menu') ||
              (item.label === 'Trang chủ' && currentHash !== '#menu')

            return (
              <a
                key={item.label}
                className={`whitespace-nowrap border-b-2 pb-1 transition ${
                  isActive
                    ? 'border-[var(--color-green)] text-[var(--color-green)] font-bold'
                    : 'border-transparent hover:border-[rgba(15,83,52,0.3)] hover:text-[var(--color-green)]'
                }`}
                href={item.href}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#dat-ban"
            className="hidden whitespace-nowrap rounded-full bg-[var(--color-green)] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_26px_rgba(12,72,44,0.2)] transition hover:bg-[var(--color-green-deep)] active:translate-y-px sm:inline-flex"
          >
            Đặt bàn ngay
          </a>
          <a
            href="tel:0961374566"
            className="inline-flex whitespace-nowrap rounded-full border border-[rgba(15,83,52,0.35)] bg-white/70 px-4 py-3 text-sm font-bold text-[var(--color-green)] transition hover:bg-white active:translate-y-px"
          >
            <Phone className="mr-2" size={18} weight="bold" />
            <span className="hidden min-[430px]:inline">{contact.phone}</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
