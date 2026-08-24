import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  CaretRight,
  CheckCircle,
  HouseLine,
  Images,
  MagnifyingGlassPlus,
  Phone,
  ShieldCheck,
  Sparkle,
  UsersThree,
  X,
} from '@phosphor-icons/react'
import { FadeUpSection } from '../../components/animations/FadeUpSection'
import { ScrollReveal } from '../../components/animations/ScrollReveal'
import { StaggerContainer } from '../../components/animations/StaggerContainer'
import { FloatingContactWidget } from '../../components/FloatingContactWidget'
import { MobileHeader } from '../../components/mobile/MobileHeader'
import { scrollToSection } from '../../utils/navigation'
import { CustomerFeedback } from '../home/components/CustomerFeedback'
import { Footer } from '../home/components/Footer'
import { Header } from '../home/components/Header'
import { contact } from '../home/data/homeContent'
import {
  audioServiceData,
  ledServiceData,
  lightServiceData,
} from './data/servicesContent'

export function ServiceDetailPage({ serviceType }) {
  const { serviceSlug } = useParams()
  const [activePhoto, setActivePhoto] = useState(null)

  // Determine current service data
  const slug = serviceType || serviceSlug || 'cho-thue-am-thanh'
  let service = audioServiceData

  if (slug === 'cho-thue-anh-sang' || slug === 'anh-sang') {
    service = lightServiceData
  } else if (slug === 'cho-thue-man-hinh-led' || slug === 'man-hinh-led') {
    service = ledServiceData
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  const handleOpenConsultation = () => scrollToSection('contact')

  return (
    <div className="min-h-[100dvh] bg-[#FFFFFF] text-[#18181B] selection:bg-[#E5A93C]/30 selection:text-[#780D0D]">
      {/* Desktop Header & Banner */}
      <div className="hidden md:block">
        <div className="relative isolate overflow-hidden bg-[#2D0404] text-white">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(229,169,60,0.22)_0%,rgba(92,11,11,0.55)_50%,#200303_100%)]"
              aria-hidden="true"
            />
          </div>

          <Header onOpenConsultation={handleOpenConsultation} />

          {/* Banner Centered Content */}
          <div className="relative z-10 mx-auto max-w-[1360px] px-6 py-14 sm:py-16 lg:px-12 text-center flex flex-col items-center justify-center">
            {/* Breadcrumb */}
            <div className="mb-3.5">
              <nav
                aria-label="Breadcrumb"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[12.5px] font-medium text-white/85 backdrop-blur-xs"
              >
                <Link to="/" className="hover:text-[#FDE68A] flex items-center gap-1 transition-colors">
                  <HouseLine size={14} weight="bold" />
                  Trang chủ
                </Link>
                <CaretRight size={13} weight="bold" className="text-[#E5A93C]" />
                <span className="text-white/80">Dịch vụ</span>
                <CaretRight size={13} weight="bold" className="text-[#E5A93C]" />
                <span className="font-semibold text-[#E5A93C]">{service.label || service.title}</span>
              </nav>
            </div>

            {/* Big Banner Title */}
            <h1 className="font-['Montserrat',sans-serif] text-[34px] sm:text-[42px] md:text-[48px] font-black uppercase tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              {service.title}
            </h1>

            {/* Eyebrow & Slogan */}
            <div className="mt-2">
              <span className="font-['Playfair_Display',serif] text-[20px] sm:text-[24px] font-bold text-[#F0C554] tracking-wide block">
                Thành Nam Sự Kiện
              </span>
              <p
                className="font-script text-[30px] sm:text-[36px] md:text-[40px] text-[#F1C95B] leading-tight select-none mt-1"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                {service.slogan}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header & Banner */}
      <div className="md:hidden">
        <MobileHeader onOpenConsultation={handleOpenConsultation} zIndexClass="z-40" />
        <section className="relative isolate overflow-hidden bg-[#2D0404] px-4 py-8 text-white text-center">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(229,169,60,0.25)_0%,rgba(92,11,11,0.6)_60%,#200303_100%)]"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/85 mb-3">
              <Link to="/" className="hover:text-[#FDE68A]">
                Trang chủ
              </Link>
              <CaretRight size={11} weight="bold" className="text-[#E5A93C]" />
              <span className="font-bold text-[#E5A93C]">Dịch vụ</span>
            </div>

            <h1 className="font-['Montserrat',sans-serif] text-[24px] font-black uppercase text-white leading-tight">
              {service.title}
            </h1>

            <p
              className="font-script text-[26px] leading-tight text-[#F1C95B] my-1"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              {service.slogan}
            </p>
          </div>
        </section>
      </div>

      {/* 1. Service Story & Equipment Overview */}
      <FadeUpSection
        id="service-story"
        className="bg-white py-14 sm:py-20 border-b border-[#E8E1D3]"
        duration={800}
      >
        <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Real Equipment Photo */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" duration={750}>
                <div className="relative group overflow-hidden rounded-[20px] border-2 border-[#E5A93C]/40 bg-[#160404] shadow-[0_15px_40px_rgba(40,4,4,0.2)]">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#200303]/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 inset-x-6 text-white text-center">
                    <span className="font-['Playfair_Display',serif] text-[20px] font-bold text-[#F0C554] block">
                      Thành Nam Sự Kiện
                    </span>
                    <span className="text-[12px] uppercase tracking-widest text-white/90">
                      Thiết Bị Đồng Bộ • Kỹ Thuật Chuyên Nghiệp
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Overview Text & Brand Trust Bar */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right" duration={750}>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7D0D0D]/10 px-4 py-1 text-[12px] font-extrabold uppercase tracking-widest text-[#9E1C1C]">
                  <Sparkle size={14} weight="fill" className="text-[#D97706]" />
                  CHUYÊN NGHIỆP & TẬN TÂM
                </span>

                <h2 className="mt-3 font-[var(--font-display)] text-[24px] sm:text-[30px] md:text-[34px] font-black uppercase text-[#18181B] leading-tight">
                  {service.introHeading}
                </h2>

                <div className="my-4 h-[3px] w-20 bg-gradient-to-r from-[#D97706] to-[#E5A93C] rounded-full" />

                <div className="space-y-3.5 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#52525B]">
                  <p className="font-semibold text-[#18181B]">{service.introText1}</p>
                  <p>{service.introText2}</p>
                  <p>{service.introText3}</p>
                </div>

                {/* Brands Trust Bar */}
                <div className="mt-7 pt-5 border-t border-gray-200">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#7D0D0D] block mb-2.5">
                    Thương hiệu & Thiết bị tiêu chuẩn:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {service.brands.map((brand) => (
                      <span
                        key={brand}
                        className="rounded-[6px] border border-[#E8E1D3] bg-[#FFFDF9] px-3 py-1 text-[12px] font-bold text-[#18181B] shadow-2xs"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Consultation CTA */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={`tel:${contact.hotline.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 rounded-[8px] bg-[#7D0D0D] hover:bg-[#911313] px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-[#FDE68A] shadow-md transition-all duration-200 hover:scale-[1.02] active:translate-y-px"
                  >
                    <Phone size={16} weight="fill" />
                    HOTLINE: {contact.hotline}
                  </a>

                  <a
                    href="https://zalo.me/0938161222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-[8px] bg-[#0068FF] hover:bg-[#0057D9] px-6 py-3.5 text-[13px] font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:scale-[1.02] active:translate-y-px"
                  >
                    NHẬN TƯ VẤN & BÁO GIÁ ZALO
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </FadeUpSection>

      {/* 2. Danh Mục Thiết Bị Cung Cấp */}
      <FadeUpSection
        id="equipment-list"
        className="bg-gradient-to-b from-[#FBF9F6] via-[#FFFDF9] to-[#FBF9F6] py-16 md:py-24 border-b border-[#E8E1D3]"
        duration={800}
      >
        <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-12">
          <ScrollReveal className="text-center mb-12" delay={80} duration={750}>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7D0D0D]/10 px-4 py-1 text-[12px] font-extrabold uppercase tracking-widest text-[#9E1C1C]">
              <Sparkle size={14} weight="fill" className="text-[#D97706]" />
              HỆ THỐNG THIẾT BỊ
            </span>
            <h2 className="mt-3 font-[var(--font-display)] text-[26px] sm:text-[32px] md:text-[36px] font-black uppercase tracking-wide text-[#18181B]">
              DANH MỤC THIẾT BỊ {service.title}
            </h2>
            <div className="mx-auto my-3.5 h-[3px] w-20 bg-gradient-to-r from-[#D97706] to-[#E5A93C] rounded-full" />
            <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#52525B] max-w-2xl mx-auto leading-relaxed">
              Trang thiết bị được đầu tư đồng bộ, kiểm tra kỹ thuật nghiêm ngặt và cập nhật liên tục các dòng sản phẩm tiên tiến nhất.
            </p>
          </ScrollReveal>

          <StaggerContainer
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            delay={100}
            staggerDelay={70}
          >
            {service.equipmentList.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={idx}
                  className="group rounded-[16px] border border-[#E8E1D3] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#D97706]/50 hover:shadow-md flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#7D0D0D]/10 text-[#7D0D0D] group-hover:bg-[#D97706] group-hover:text-white transition-colors">
                    <IconComp size={24} weight="bold" />
                  </div>
                  <div>
                    <h3 className="font-['Montserrat',sans-serif] text-[14.5px] font-bold uppercase text-[#18181B] group-hover:text-[#7D0D0D] transition-colors leading-tight">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 text-[13px] text-[#52525B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </StaggerContainer>
        </div>
      </FadeUpSection>

      {/* 3. 4 Ưu Điểm Nổi Bật */}
      <FadeUpSection
        id="service-advantages"
        className="bg-white py-16 md:py-24 border-b border-[#E8E1D3]"
        duration={800}
      >
        <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-12">
          <ScrollReveal className="text-center mb-12" delay={80} duration={750}>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7D0D0D]/10 px-4 py-1 text-[12px] font-extrabold uppercase tracking-widest text-[#9E1C1C]">
              <ShieldCheck size={14} weight="fill" className="text-[#D97706]" />
              CAM KẾT CHẤT LƯỢNG
            </span>
            <h2 className="mt-3 font-[var(--font-display)] text-[26px] sm:text-[32px] md:text-[36px] font-black uppercase tracking-wide text-[#18181B]">
              4 LÝ DO CHỌN THÀNH NAM SỰ KIỆN
            </h2>
            <div className="mx-auto my-3.5 h-[3px] w-20 bg-gradient-to-r from-[#D97706] to-[#E5A93C] rounded-full" />
          </ScrollReveal>

          <StaggerContainer
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            delay={100}
            staggerDelay={80}
          >
            {service.advantages.map((adv, idx) => {
              const IconComp = adv.icon
              return (
                <div
                  key={idx}
                  className="group flex flex-col justify-between rounded-[16px] border border-[#E8E1D3] bg-[#FFFDF9] p-6 text-center shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D97706]/50 hover:shadow-md"
                >
                  <div>
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#7D0D0D]/10 text-[#7D0D0D] group-hover:bg-[#D97706] group-hover:text-white transition-colors">
                      <IconComp size={28} weight="bold" />
                    </div>
                    <h3 className="font-['Montserrat',sans-serif] text-[15px] font-black uppercase text-[#18181B]">
                      {adv.title}
                    </h3>
                    <p className="mt-2 text-[13px] text-[#52525B] leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-center gap-1 text-[11px] font-bold text-[#D97706] uppercase">
                    <CheckCircle size={14} weight="fill" />
                    <span>Cam kết 100%</span>
                  </div>
                </div>
              )
            })}
          </StaggerContainer>
        </div>
      </FadeUpSection>

      {/* 4. Phù Hợp Với Nhiều Loại Hình Sự Kiện */}
      <FadeUpSection
        id="suitable-events"
        className="bg-gradient-to-b from-[#FBF9F6] via-[#FFFDF9] to-[#FBF9F6] py-16 md:py-24 border-b border-[#E8E1D3]"
        duration={800}
      >
        <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-12">
          <ScrollReveal className="text-center mb-12" delay={80} duration={750}>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7D0D0D]/10 px-4 py-1 text-[12px] font-extrabold uppercase tracking-widest text-[#9E1C1C]">
              <UsersThree size={14} weight="fill" className="text-[#D97706]" />
              ỨNG DỤNG ĐA DẠNG
            </span>
            <h2 className="mt-3 font-[var(--font-display)] text-[26px] sm:text-[32px] md:text-[36px] font-black uppercase tracking-wide text-[#18181B]">
              PHÙ HỢP CHO MỌI QUY MÔ SỰ KIỆN
            </h2>
            <div className="mx-auto my-3.5 h-[3px] w-20 bg-gradient-to-r from-[#D97706] to-[#E5A93C] rounded-full" />
          </ScrollReveal>

          <StaggerContainer
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            delay={100}
            staggerDelay={60}
          >
            {service.suitableFor.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={idx}
                  className="rounded-[14px] border border-[#E8E1D3] bg-white p-5 shadow-2xs hover:border-[#D97706]/40 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7D0D0D]/10 text-[#7D0D0D]">
                      <IconComp size={18} weight="bold" />
                    </div>
                    <h3 className="font-['Montserrat',sans-serif] text-[13.5px] font-bold uppercase text-[#18181B]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[12.5px] text-[#52525B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </StaggerContainer>
        </div>
      </FadeUpSection>

      {/* 5. Thư Viện Ảnh Thực Tế Của Dịch Vụ */}
      <FadeUpSection
        id="service-gallery"
        className="bg-white py-16 md:py-24 border-b border-[#E8E1D3]"
        duration={800}
      >
        <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-12">
          <ScrollReveal className="text-center mb-12" delay={80} duration={750}>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7D0D0D]/10 px-4 py-1 text-[12px] font-extrabold uppercase tracking-widest text-[#9E1C1C]">
              <Images size={14} weight="fill" className="text-[#D97706]" />
              HÌNH ẢNH THỰC TẾ
            </span>
            <h2 className="mt-3 font-[var(--font-display)] text-[26px] sm:text-[32px] md:text-[36px] font-black uppercase tracking-wide text-[#18181B]">
              DỰ ÁN ĐÃ TRIỂN KHAI
            </h2>
            <div className="mx-auto my-3.5 h-[3px] w-20 bg-gradient-to-r from-[#D97706] to-[#E5A93C] rounded-full" />
          </ScrollReveal>

          <StaggerContainer
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4.5"
            delay={100}
            staggerDelay={60}
          >
            {service.gallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActivePhoto(img)}
                className="group relative aspect-[4/3] overflow-hidden rounded-[14px] border border-[#E8E1D3] bg-[#180505] shadow-xs cursor-pointer hover:shadow-lg transition-all"
              >
                <img
                  src={img}
                  alt={`Dự án thực tế ${service.title} ${idx + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-xs">
                    <MagnifyingGlassPlus size={20} weight="bold" />
                  </span>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </FadeUpSection>

      {/* Customer Feedback */}
      <CustomerFeedback _onOpenConsultation={handleOpenConsultation} />

      {/* Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Floating Contact Widget */}
      <FloatingContactWidget />

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <button
            type="button"
            onClick={() => setActivePhoto(null)}
            className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white"
          >
            <X size={20} weight="bold" />
          </button>
          <div
            className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-[14px] bg-[#140202] border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePhoto}
              alt="Ảnh phóng to"
              className="max-h-[80vh] w-auto mx-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}
