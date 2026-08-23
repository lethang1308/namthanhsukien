import {
  Clock,
  EnvelopeSimple,
  FacebookLogo,
  Globe,
  MapPin,
  PaperPlaneTilt,
  Phone,
  YoutubeLogo,
} from '@phosphor-icons/react'
import { FadeUpSection } from '../../../components/animations/FadeUpSection'
import { StaggerContainer } from '../../../components/animations/StaggerContainer'
import { BrandMark } from '../../../components/BrandMark'
import { contact, serviceCards } from '../data/homeContent'

export function Footer({ onOpenConsultation }) {
  return (
    <FadeUpSection
      as="footer"
      id="contact"
      className="mt-6 overflow-hidden rounded-t-[28px] bg-gradient-to-b from-[#4A0707] via-[#2A0404] to-[#140202] text-white border-t-2 border-[#E5A93C]/40 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
      duration={800}
    >
      <StaggerContainer
        className="mx-auto grid max-w-[1400px] items-start gap-x-9 gap-y-8 px-5 py-12 sm:grid-cols-2 md:px-8 lg:grid-cols-[1.25fr_1.15fr_0.9fr_1.3fr] lg:py-14"
        staggerDelay={100}
      >
        {/* Brand Info */}
        <div>
          <BrandMark compact markClassName="h-[64px] w-[64px]" lightText={true} />
          <p className="mt-4 max-w-[280px] text-[13px] leading-[1.65] text-white/80">
            {contact.brandName} - Đơn vị tổ chức sự kiện chuyên nghiệp, trọn gói và đẳng cấp hàng đầu. Kiến tạo những khoảnh khắc đáng nhớ cho mọi khách hàng.
          </p>
          <div className="mt-5 flex items-center gap-3 text-[#E5A93C]">
            <a
              href="#contact"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#E5A93C] hover:text-[#140202] transition-colors"
            >
              <FacebookLogo size={18} weight="fill" />
            </a>
            <a
              href="#contact"
              aria-label="Youtube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#E5A93C] hover:text-[#140202] transition-colors"
            >
              <YoutubeLogo size={18} weight="fill" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#E5A93C] hover:text-[#140202] transition-colors"
            >
              <EnvelopeSimple size={18} weight="bold" />
            </a>
            <a
              href={contact.website}
              aria-label="Website"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#E5A93C] hover:text-[#140202] transition-colors"
            >
              <Globe size={18} weight="bold" />
            </a>
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="footer-title">THÔNG TIN LIÊN HỆ</h3>
          <ul className="mt-4 space-y-3 text-[13px] leading-relaxed text-white/85">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 shrink-0 text-[#E5A93C]" size={18} weight="bold" />
              <span>{contact.address}</span>
            </li>
            <li>
              <a
                className="flex gap-2.5 text-[#E5A93C] font-bold hover:underline transition-colors"
                href={`tel:${contact.hotline.replace(/\s/g, '')}`}
              >
                <Phone className="mt-0.5 shrink-0" size={18} weight="bold" />
                Hotline: {contact.hotline}
              </a>
            </li>
            <li>
              <a
                className="flex gap-2.5 break-all hover:text-[#E5A93C] transition-colors"
                href={`mailto:${contact.email}`}
              >
                <EnvelopeSimple className="mt-0.5 shrink-0 text-[#E5A93C]" size={18} weight="bold" />
                {contact.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 shrink-0 text-[#E5A93C]" size={18} weight="bold" />
              <span>Thời gian làm việc: {contact.hours} (24/7)</span>
            </li>
          </ul>
        </div>

        {/* Services List */}
        <div>
          <h3 className="footer-title">DỊCH VỤ CHÍNH</h3>
          <ul className="mt-4 space-y-2.5 text-[13px] leading-relaxed text-white/80">
            {serviceCards.map((service) => (
              <li key={service.id}>
                <a
                  href="#services"
                  className="hover:text-[#E5A93C] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#E5A93C] text-[10px]">♦</span>
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Consultation Request */}
        <div>
          <h3 className="footer-title">ĐĂNG KÝ TƯ VẤN NHANH</h3>
          <p className="mt-4 text-[13px] leading-relaxed text-white/80">
            Để lại số điện thoại hoặc email để nhận bảng báo giá chi tiết và concept sự kiện miễn phí.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (onOpenConsultation) onOpenConsultation()
            }}
            className="mt-4 flex h-11 w-full max-w-sm overflow-hidden rounded-[8px] border border-[#E5A93C]/60 bg-white/10 backdrop-blur-sm"
          >
            <label className="sr-only" htmlFor="footer-phone">
              Số điện thoại
            </label>
            <input
              id="footer-phone"
              type="tel"
              placeholder="Nhập số điện thoại của bạn..."
              className="min-w-0 flex-1 bg-transparent px-4 text-[13px] text-white outline-none placeholder:text-white/50 focus-visible:outline-none"
            />
            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 bg-gradient-to-r from-[#D97706] to-[#E5A93C] text-[#140202] font-bold text-[13px] transition-all hover:brightness-110 active:translate-y-px"
            >
              GỬI
              <PaperPlaneTilt size={16} weight="bold" />
            </button>
          </form>
          <div className="mt-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="text-[12.5px] font-semibold text-[#E5A93C] underline hover:text-white transition-colors"
            >
              Hoặc mở form đăng ký chi tiết có chọn loại sự kiện →
            </button>
          </div>
        </div>
      </StaggerContainer>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 bg-[#0E0202] py-4 text-center text-[12px] text-white/60">
        <p>© 2026 {contact.brandName}. Bản quyền thuộc về Nam Thành Sự Kiện. All rights reserved.</p>
      </div>
    </FadeUpSection>
  )
}
