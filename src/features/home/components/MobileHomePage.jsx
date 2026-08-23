import { useState } from 'react'
import {
  ArrowRight,
  Buildings,
  CheckCircle,
  Confetti,
  Gift,
  HeartStraight,
  Phone,
  Play,
  PresentationChart,
  Sparkle,
  Star,
  X,
} from '@phosphor-icons/react'
import { MobileBottomNav } from '../../../components/mobile/MobileBottomNav'
import { MobileHeader } from '../../../components/mobile/MobileHeader'
import {
  aboutUs,
  contact,
  featuredProjects,
  hero,
  processSteps,
  serviceCards,
  statsCounters,
  testimonials,
} from '../data/homeContent'

const serviceIconMap = {
  gift: Gift,
  party: Confetti,
  podium: PresentationChart,
  wedding: HeartStraight,
  construction: Buildings,
}

function MobileSectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-6">
      <div className="inline-flex items-center justify-center gap-2">
        <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#18181B]/40" />
        <h2 className="font-[var(--font-display)] text-[20px] font-black uppercase tracking-wider text-[#18181B]">
          {title}
        </h2>
        <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#18181B]/40" />
      </div>
      {subtitle && <p className="mt-1 text-[12px] text-[#71717A]">{subtitle}</p>}
    </div>
  )
}

function Rating() {
  return (
    <div className="flex gap-0.5 text-[#E5A93C]" aria-label="5 sao">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={13} weight="fill" />
      ))}
    </div>
  )
}

export function MobileHomePage({ onOpenConsultation, onOpenVideo }) {
  const [activePhoto, setActivePhoto] = useState(null)

  return (
    <div className="md:hidden">
      <div className="min-h-[100dvh] bg-[#FFFFFF] pb-[92px] text-[#18181B]">
        <MobileHeader zIndexClass="z-30" />

        <main id="home" className="mx-auto max-w-[480px] overflow-hidden">
          {/* Mobile Hero Banner */}
          <section className="relative isolate min-h-[460px] flex flex-col justify-between overflow-hidden bg-[#140404] px-4 pt-8 pb-4">
            <div className="absolute inset-0 z-0">
              <img
                src={hero.bannerImage}
                alt="Không gian tổ chức sự kiện chuyên nghiệp Nam Thành"
                className="h-full w-full object-cover object-[65%_25%]"
                fetchPriority="high"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#140404] via-[#140404]/80 to-[#140404]/50"
                aria-hidden="true"
              />
            </div>

            <div className="relative z-10">
              {/* Brand Header */}
              <div>
                <span className="font-['Playfair_Display',Georgia,serif] text-[26px] font-bold text-[#E5A93C] drop-shadow-sm">
                  {hero.brandSmall}
                </span>
                <span className="block text-[12px] font-extrabold tracking-[0.2em] text-[#E5A93C] uppercase mt-0.5">
                  {hero.brandCategory}
                </span>
              </div>

              {/* Headline */}
              <h1 className="mt-2 font-['Montserrat',sans-serif] text-[26px] font-extrabold uppercase text-white leading-[1.12]">
                TỔ CHỨC SỰ KIỆN
                <br />
                <span className="text-white">CHUYÊN NGHIỆP</span>
              </h1>

              {/* Script Text */}
              <p
                className="font-script text-[36px] leading-[1.25] text-[#E5A93C] my-1 select-none pt-1"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                {hero.script}
              </p>

              {/* Description */}
              <p className="mt-1 text-[13px] leading-relaxed text-white/95">
                {hero.description}
              </p>

              {/* Buttons */}
              <div className="mt-5 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="flex w-full items-center justify-center rounded-[6px] bg-[#C97A1E] hover:bg-[#D97706] py-3 text-[13px] font-bold uppercase text-white shadow-[0_4px_14px_rgba(201,122,30,0.4)] active:scale-[0.98]"
                >
                  KHÁM PHÁ DỊCH VỤ
                </button>
                <button
                  type="button"
                  onClick={onOpenVideo}
                  className="flex w-full items-center justify-center gap-2 rounded-[6px] bg-black/40 border border-white/25 py-2.5 text-[12.5px] font-bold uppercase text-white active:scale-[0.98]"
                >
                  <Play size={14} weight="fill" className="text-[#E5A93C]" />
                  XEM VIDEO
                </button>
              </div>
            </div>
          </section>

          {/* 5 Crimson Service Highlights */}
          <section id="services" className="bg-[#780D0D] py-4 px-3 border-y border-[#E5A93C]/40">
            <div className="mobile-scroll-row -mx-3 grid auto-cols-[140px] grid-flow-col gap-2.5 overflow-x-auto px-3">
              {serviceCards.map((service) => {
                const IconComponent = serviceIconMap[service.iconType] || Gift
                return (
                  <div
                    key={service.id}
                    onClick={onOpenConsultation}
                    className="flex flex-col items-center justify-center rounded-[10px] bg-[#640A0A] p-3 text-center border border-[#911313] active:bg-[#8F1111]"
                  >
                    <IconComponent size={26} weight="light" className="text-[#FDE68A] mb-1.5" />
                    <span className="text-[11px] font-bold uppercase tracking-tight text-white line-clamp-2">
                      {service.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </section>

          {/* About Us Mobile */}
          <section className="px-4 py-8">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#7D0D0D]/10 px-3 py-0.5 text-[11.5px] font-extrabold uppercase text-[#9E1C1C]">
              <Sparkle size={12} weight="fill" className="text-[#D97706]" />
              {aboutUs.tag}
            </span>
            <h2 className="mt-2 font-[var(--font-display)] text-[22px] font-black uppercase text-[#18181B] leading-snug">
              {aboutUs.title}
            </h2>
            <div className="my-3 h-[2px] w-14 bg-[#D97706]" />
            <p className="text-[13.5px] leading-relaxed text-[#52525B]">
              {aboutUs.description}
            </p>

            <div className="mt-4 overflow-hidden rounded-[14px] border border-[#E5A93C]/30 shadow-lg">
              <img
                src={aboutUs.image}
                alt={aboutUs.alt}
                className="w-full aspect-[16/10] object-cover"
                loading="lazy"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 text-[12px] font-semibold text-[#27272A]">
              <div className="flex items-center gap-1.5">
                <CheckCircle size={15} weight="fill" className="text-[#D97706] shrink-0" />
                <span>Âm thanh, ánh sáng hiện đại</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={15} weight="fill" className="text-[#D97706] shrink-0" />
                <span>Kịch bản độc bản</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={15} weight="fill" className="text-[#D97706] shrink-0" />
                <span>Điều phối 24/7</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={15} weight="fill" className="text-[#D97706] shrink-0" />
                <span>Chi phí tối ưu</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-gradient-to-r from-[#D97706] to-[#E5A93C] py-3 text-[13px] font-extrabold uppercase text-[#140202] active:scale-[0.98]"
            >
              TÌM HIỂU THÊM & NHẬN BÁO GIÁ
              <ArrowRight size={15} weight="bold" />
            </button>
          </section>

          {/* Featured Projects Mobile */}
          <section id="projects" className="bg-[#FBF9F6] px-4 py-8 border-y border-[#E4E4E7]">
            <MobileSectionTitle
              title="DỰ ÁN TIÊU BIỂU"
              subtitle="Những khoảnh khắc ấn tượng do Nam Thành Sự Kiện kiến tạo"
            />
            <div className="grid grid-cols-2 gap-3">
              {featuredProjects.map((project) => (
                <article
                  key={project.id}
                  onClick={() => setActivePhoto(project)}
                  className="group relative cursor-pointer overflow-hidden rounded-[12px] border border-[#E4E4E7] bg-white shadow-sm active:scale-95 transition-transform"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-[#180505]">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-85" />
                  <div className="absolute inset-x-0 bottom-0 p-2.5 text-white">
                    <span className="inline-block rounded-[3px] bg-[#780D0D] px-1.5 py-0.5 text-[9px] font-extrabold uppercase text-[#FDE68A]">
                      {project.category}
                    </span>
                    <h3 className="mt-1 text-[12px] font-bold leading-tight line-clamp-2 text-white">
                      {project.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 text-center">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full rounded-[8px] bg-[#780D0D] py-3 text-[13px] font-extrabold uppercase text-white active:scale-[0.98]"
              >
                XEM THÊM DỰ ÁN
              </button>
            </div>
          </section>

          {/* Stats Bar Mobile */}
          <section className="bg-[#700909] py-6 px-3 text-white border-b border-[#911313]">
            <div className="grid grid-cols-2 gap-4 text-center divide-x divide-[#911313]">
              {statsCounters.map((item, idx) => (
                <div key={item.label} className={idx % 2 === 1 ? 'pl-4' : ''}>
                  <div className="font-[var(--font-display)] text-[30px] font-black leading-none text-white">
                    {item.number}
                  </div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#FDE68A]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process Workflow Mobile */}
          <section className="px-4 py-8">
            <MobileSectionTitle
              title="QUY TRÌNH THỰC HIỆN"
              subtitle="5 bước chuyên nghiệp từ ý tưởng đến thành công"
            />
            <div className="space-y-4">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-3 rounded-[12px] border border-[#E4E4E7] bg-[#FFFDF8] p-3 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#D97706] bg-[#FFFBF2] font-[var(--font-display)] text-[16px] font-black text-[#D97706]">
                    {item.step}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-[var(--font-display)] text-[13.5px] font-black uppercase text-[#18181B]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[12px] leading-relaxed text-[#71717A]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Mobile */}
          <section className="bg-[#FBF9F6] px-4 py-8 border-t border-[#E4E4E7]">
            <MobileSectionTitle title="Ý KIẾN KHÁCH HÀNG" />
            <div className="mobile-scroll-row -mx-4 grid auto-cols-[260px] grid-flow-col gap-3 overflow-x-auto px-4 pb-2">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="rounded-[12px] border border-[#E4E4E7] bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#780D0D] font-[var(--font-display)] text-[12px] font-bold text-[#FDE68A]">
                      {item.name
                        .split(' ')
                        .map((p) => p[0])
                        .join('')}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[13px] font-bold text-[#18181B] truncate">{item.name}</h4>
                      <p className="text-[11px] text-[#71717A] truncate">{item.role}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Rating />
                  </div>
                  <p className="mt-2 text-[12px] leading-relaxed text-[#52525B]">{item.quote}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Quick CTA Banner */}
          <section className="p-4">
            <div className="rounded-[16px] bg-gradient-to-br from-[#780D0D] to-[#450505] p-5 text-white shadow-xl border border-[#E5A93C]/40 text-center">
              <span className="text-[12px] font-extrabold uppercase tracking-wider text-[#FDE68A]">
                Ưu Đãi Sự Kiện 2026
              </span>
              <h3 className="mt-1 font-[var(--font-display)] text-[20px] font-black uppercase">
                Tư Vấn & Lên Concept 3D Miễn Phí
              </h3>
              <p className="mt-1.5 text-[12.5px] text-gray-200">
                Liên hệ ngay hotline để nhận báo giá chi tiết và ưu đãi tốt nhất.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="w-full rounded-[8px] bg-gradient-to-r from-[#D97706] to-[#E5A93C] py-3 text-[13px] font-extrabold uppercase text-[#140202]"
                >
                  ĐĂNG KÝ BÁO GIÁ NGAY
                </button>
                <a
                  href={`tel:${contact.hotline.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-1.5 text-[12.5px] font-bold text-[#E5A93C] underline pt-1"
                >
                  <Phone size={14} weight="fill" />
                  Hotline: {contact.hotline}
                </a>
              </div>
            </div>
          </section>
        </main>

        <MobileBottomNav activeItem="home" />

        {/* Mobile Lightbox Modal */}
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 backdrop-blur-md"
            onClick={() => setActivePhoto(null)}
          >
            <div
              className="relative w-full max-w-sm rounded-[14px] bg-[#160505] border border-white/20 p-2 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white"
              >
                <X size={16} weight="bold" />
              </button>
              <img
                src={activePhoto.image}
                alt={activePhoto.alt}
                className="w-full rounded-[10px] object-cover"
              />
              <div className="p-3">
                <span className="text-[11px] font-bold text-[#E5A93C] uppercase">
                  {activePhoto.category}
                </span>
                <h4 className="text-[15px] font-bold">{activePhoto.title}</h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
