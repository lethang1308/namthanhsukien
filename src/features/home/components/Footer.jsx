import {
  Clock,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  PaperPlaneTilt,
  Phone,
} from '@phosphor-icons/react'
import { FadeUpSection } from '../../../components/animations/FadeUpSection'
import { StaggerContainer } from '../../../components/animations/StaggerContainer'
import { BrandMark } from '../../../components/BrandMark'
import { contact, navItems } from '../data/homeContent'

export function Footer() {
  return (
    <FadeUpSection
      as="footer"
      id="contact"
      className="mt-4 overflow-hidden rounded-t-[24px] bg-[linear-gradient(135deg,#07583B_0%,#064D35_100%)] text-white"
      duration={800}
    >
      <StaggerContainer
        className="mx-auto grid max-w-[1400px] items-start gap-x-9 gap-y-7 px-5 py-8 sm:grid-cols-2 md:px-8 lg:grid-cols-[1.15fr_1.25fr_0.8fr_1fr_1.25fr] lg:py-9"
        staggerDelay={100}
      >
        <div>
          <BrandMark compact markClassName="h-[76px] w-[76px]" />
          <p className="mt-3.5 max-w-[215px] text-[12.5px] leading-[1.55] text-[#fffaf1]/82">
            Chả Cá Tràng An, hương vị truyền thống, trọn vẹn tinh hoa ẩm thực
            Hà Thành.
          </p>
          <div className="mt-4 flex gap-4 text-[var(--color-gold)]">
            <a href="#contact" aria-label="Facebook" className="transition hover:text-[#fffaf1]">
              <FacebookLogo size={21} weight="fill" />
            </a>
            <a href="#contact" aria-label="Instagram" className="transition hover:text-[#fffaf1]">
              <InstagramLogo size={21} weight="bold" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="footer-title">THÔNG TIN LIÊN HỆ</h2>
          <ul className="mt-3.5 space-y-2.5 text-[12.5px] leading-[1.45] text-[#fffaf1]/82">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 shrink-0 text-[var(--color-gold)]" size={17} weight="bold" />
              {contact.address}
            </li>
            <li>
              <a className="flex gap-2.5 transition hover:text-[var(--color-gold)]" href="tel:0961374566">
                <Phone className="mt-0.5 shrink-0 text-[var(--color-gold)]" size={17} weight="bold" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a className="flex gap-2.5 break-all transition hover:text-[var(--color-gold)]" href={`mailto:${contact.email}`}>
                <EnvelopeSimple className="mt-0.5 shrink-0 text-[var(--color-gold)]" size={17} weight="bold" />
                {contact.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 shrink-0 text-[var(--color-gold)]" size={17} weight="bold" />
              {contact.hours} mỗi ngày
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">LIÊN KẾT NHANH</h2>
          <ul className="mt-3.5 space-y-2 text-[12.5px] leading-[1.4] text-[#fffaf1]/82">
            {navItems.slice(0, 5).map((item) => (
              <li key={item.label}>
                <a className="transition hover:text-[var(--color-gold)]" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-title">HỖ TRỢ KHÁCH HÀNG</h2>
          <ul className="mt-3.5 space-y-2 text-[12.5px] leading-[1.4] text-[#fffaf1]/82">
            <li>Chính sách đặt bàn</li>
            <li>Chính sách giao hàng</li>
            <li>Điều khoản sử dụng</li>
            <li>Chính sách bảo mật</li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">ĐĂNG KÝ NHẬN TIN</h2>
          <p className="mt-3.5 max-w-[255px] text-[12.5px] leading-[1.55] text-[#fffaf1]/82">
            Nhận thông tin ưu đãi mới nhất từ Chả Cá Tràng An.
          </p>
          <form className="mt-4 flex h-10 w-full max-w-[260px] overflow-hidden rounded-full border border-[rgba(211,184,126,0.8)] bg-[#fffdf8]">
            <label className="sr-only" htmlFor="newsletter-email">
              Email nhận tin
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Nhập email của bạn"
              className="min-w-0 flex-1 bg-transparent px-4 text-[12px] text-[var(--color-ink)] outline-none placeholder:text-[rgba(43,46,35,0.55)] focus-visible:outline-none"
            />
            <button
              type="button"
              className="grid w-11 shrink-0 place-items-center border-l border-[rgba(211,184,126,0.8)] bg-[#07583B] text-[var(--color-gold)] transition hover:bg-[var(--color-green-deep)]"
              aria-label="Gửi email"
            >
              <PaperPlaneTilt size={20} weight="bold" />
            </button>
          </form>
        </div>
      </StaggerContainer>
    </FadeUpSection>
  )
}
