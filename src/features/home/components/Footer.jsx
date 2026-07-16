import {
  Clock,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  PaperPlaneTilt,
  Phone,
} from '@phosphor-icons/react'
import { BrandMark } from '../../../components/BrandMark'
import { contact, navItems } from '../data/homeContent'

export function Footer() {
  return (
    <footer id="lien-he" className="mt-4 bg-[var(--color-green)] text-white">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-4 py-10 md:grid-cols-[1.25fr_1.35fr_0.8fr_1fr_1.15fr] md:px-8">
        <div>
          <BrandMark compact />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/76">
            Chả Cá Tràng An, hương vị truyền thống, trọn vẹn tinh hoa ẩm thực
            Hà Thành.
          </p>
          <div className="mt-5 flex gap-3 text-[var(--color-gold)]">
            <a href="#lien-he" aria-label="Facebook" className="hover:text-white">
              <FacebookLogo size={24} weight="fill" />
            </a>
            <a href="#lien-he" aria-label="Instagram" className="hover:text-white">
              <InstagramLogo size={24} weight="bold" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="footer-title">THÔNG TIN LIÊN HỆ</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/78">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 shrink-0 text-[var(--color-gold)]" size={18} weight="bold" />
              {contact.address}
            </li>
            <li>
              <a className="flex gap-3 hover:text-white" href="tel:0961374566">
                <Phone className="mt-0.5 shrink-0 text-[var(--color-gold)]" size={18} weight="bold" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a className="flex gap-3 hover:text-white" href={`mailto:${contact.email}`}>
                <EnvelopeSimple className="mt-0.5 shrink-0 text-[var(--color-gold)]" size={18} weight="bold" />
                {contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 shrink-0 text-[var(--color-gold)]" size={18} weight="bold" />
              {contact.hours} mỗi ngày
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">LIÊN KẾT NHANH</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/78">
            {navItems.slice(0, 5).map((item) => (
              <li key={item.label}>
                <a className="hover:text-white" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-title">HỖ TRỢ KHÁCH HÀNG</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/78">
            <li>Chính sách đặt bàn</li>
            <li>Chính sách giao hàng</li>
            <li>Điều khoản sử dụng</li>
            <li>Chính sách bảo mật</li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">ĐĂNG KÝ NHẬN TIN</h2>
          <p className="mt-4 text-sm leading-6 text-white/78">
            Nhận thông tin ưu đãi mới nhất từ Chả Cá Tràng An.
          </p>
          <form className="mt-4 flex overflow-hidden rounded-full border border-[rgba(211,184,126,0.65)] bg-white/95">
            <label className="sr-only" htmlFor="newsletter-email">
              Email nhận tin
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Nhập email của bạn"
              className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm text-[var(--color-ink)] outline-none placeholder:text-[rgba(43,46,35,0.58)]"
            />
            <button
              type="button"
              className="grid w-14 place-items-center bg-[var(--color-green)] text-[var(--color-gold)] transition hover:bg-[var(--color-green-deep)]"
              aria-label="Gửi email"
            >
              <PaperPlaneTilt size={21} weight="bold" />
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}
