import {
  Clock,
  EnvelopeSimple,
  FacebookLogo,
  Globe,
  MapPin,
  Phone,
  YoutubeLogo,
} from '@phosphor-icons/react'
import { FadeUpSection } from '../../../components/animations/FadeUpSection'
import { StaggerContainer } from '../../../components/animations/StaggerContainer'
import { BrandMark } from '../../../components/BrandMark'
import { scrollToSection } from '../../../utils/navigation'
import { contact, serviceCards } from '../data/homeContent'

export function Footer({ _onOpenConsultation }) {
  const mapDirectUrl =
    'https://www.google.com/maps/place/8+H%C3%B2a+L%C3%A2n+2,+Thu%E1%BA%ADn+Giao,+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.9514146,106.7088701,1085m/data=!3m2!1e3!4b1!4m5!3m4!1s0x3174d7454b0485c1:0xca387deb2384e63a!8m2!3d10.9514146!4d106.711445'

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
              href={contact.facebook || 'https://www.facebook.com/Thanhnamsukien'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Thành Nam Sự Kiện"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#E5A93C] hover:text-[#140202] transition-colors cursor-pointer"
            >
              <FacebookLogo size={18} weight="fill" />
            </a>
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              aria-label="Youtube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#E5A93C] hover:text-[#140202] transition-colors cursor-pointer"
            >
              <YoutubeLogo size={18} weight="fill" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#E5A93C] hover:text-[#140202] transition-colors cursor-pointer"
            >
              <EnvelopeSimple size={18} weight="bold" />
            </a>
            <a
              href={contact.website}
              aria-label="Website"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#E5A93C] hover:text-[#140202] transition-colors cursor-pointer"
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
                  href="/"
                  onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                  className="hover:text-[#E5A93C] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#E5A93C] text-[10px]">♦</span>
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Google Map Location */}
        <div>
          <h3 className="footer-title">BẢN ĐỒ VỊ TRÍ</h3>
          <div className="mt-4 overflow-hidden rounded-[14px] border border-[#E5A93C]/40 bg-[#160202] shadow-lg">
            <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full bg-[#1A0303]">
              <iframe
                title="Bản đồ vị trí Thành Nam Sự Kiện"
                src="https://maps.google.com/maps?q=10.9514146,106.711445&hl=vi&z=16&output=embed"
                className="h-full w-full border-0 filter contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="flex items-center justify-between p-2.5 px-3 bg-[#110101] text-[11.5px] border-t border-white/10">
              <span className="text-white/70 truncate mr-2">8 Hòa Lân 2, Thuận Giao</span>
              <a
                href={mapDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 font-bold text-[#E5A93C] hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Mở Maps</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </StaggerContainer>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 bg-[#0E0202] py-4 text-center text-[12px] text-white/60">
        <p>© 2026 {contact.brandName}. Bản quyền thuộc về Thành Nam Sự Kiện. All rights reserved.</p>
      </div>
    </FadeUpSection>
  )
}
