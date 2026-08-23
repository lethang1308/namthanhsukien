import { useState } from 'react'
import {
  ArrowRight,
  Buildings,
  Confetti,
  Gift,
  HeartStraight,
  Phone,
  Play,
  PresentationChart,
  Quotes,
  Sparkle,
  Star,
  X,
} from '@phosphor-icons/react'
import { MobileHeader } from '../../../components/mobile/MobileHeader'
import {
  aboutUs,
  featuredProjects,
  hero,
  processSteps,
  serviceCards,
  statsCounters,
  testimonials,
} from '../data/homeContent'
import { Footer } from './Footer'

const serviceIconMap = {
  gift: Gift,
  party: Confetti,
  podium: PresentationChart,
  wedding: HeartStraight,
  construction: Buildings,
}

const mobileProjects = featuredProjects

export function MobileHomePage({ onOpenConsultation, onOpenVideo }) {
  const [activePhoto, setActivePhoto] = useState(null)
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)

  return (
    <div className="md:hidden min-h-[100dvh] bg-[#FFFFFF] text-[#18181B]">
      {/* Mobile Top Header with Logo, LIÊN HỆ NGAY & Hamburger Drawer */}
      <MobileHeader onOpenConsultation={onOpenConsultation} zIndexClass="z-40" />

      <main id="home">
        {/* 1. Hero Banner Mobile (Warm Red Wine + Event Tent Backdrop) */}
        <section className="relative isolate overflow-hidden bg-[#3b0505] px-4 pt-6 pb-6 text-white">
          {/* Background image & gradient overlays */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={hero.bannerImage}
              alt="Không gian tổ chức sự kiện chuyên nghiệp Thành Nam"
              className="absolute right-0 top-0 h-full w-[70%] object-cover object-[center_35%] opacity-[0.92] [mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.15)_10%,#000_35%)]"
              fetchPriority="high"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#3b0505] via-[#3b0505]/92 to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#3b0505]/40 via-transparent to-[#3b0505]"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10">
            {/* Brand Eyebrow */}
            <div>
              <span className="font-['Playfair_Display',Georgia,serif] text-[28px] font-bold text-[#F0C554] leading-none block drop-shadow-sm">
                {hero.brandSmall}
              </span>
              <span className="font-['Montserrat',sans-serif] text-[13px] font-extrabold tracking-[0.2em] text-[#F0C554] uppercase block mt-0.5">
                {hero.brandCategory}
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-2 font-['Montserrat',sans-serif] text-[24px] font-black uppercase text-white leading-[1.12] drop-shadow-md">
              TỔ CHỨC SỰ KIỆN
              <br />
              <span className="text-white">CHUYÊN NGHIỆP</span>
            </h1>

            {/* Script Text */}
            <p
              className="font-script text-[32px] sm:text-[36px] leading-[1.2] text-[#F1C95B] my-1.5 select-none pt-0.5"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              {hero.script}
            </p>

            {/* Description */}
            <p className="text-[12.5px] leading-relaxed text-white/90 max-w-[340px] mb-4">
              {hero.description}
            </p>

            {/* CTA Buttons Row */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center rounded-[6px] bg-[#C97A1E] hover:bg-[#D97706] px-4 py-2.5 text-[12px] font-bold uppercase tracking-wider text-white shadow-[0_3px_12px_rgba(201,122,30,0.45)] active:scale-95 transition-transform"
              >
                KHÁM PHÁ DỊCH VỤ
              </button>

              <button
                type="button"
                onClick={onOpenVideo}
                className="inline-flex items-center gap-2 rounded-[6px] px-2.5 py-2 text-[12px] font-bold uppercase tracking-wider text-white hover:text-[#E5A93C] active:scale-95 transition-colors"
              >
                <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-white text-white">
                  <Play size={12} weight="fill" className="ml-0.5" />
                </span>
                XEM VIDEO
              </button>
            </div>
          </div>

          {/* 2. 5 Crimson Service Highlights Bar inside Hero */}
          <div id="services" className="relative z-10 mt-6">
            <div className="overflow-hidden rounded-[10px] border border-[#E5A93C]/45 bg-gradient-to-b from-[#8F0E0E] to-[#600606] shadow-lg">
              <div className="grid grid-cols-5 divide-x divide-white/15">
                {serviceCards.map((service) => {
                  const IconComponent = serviceIconMap[service.iconType] || Gift
                  return (
                    <button
                      type="button"
                      key={service.id}
                      onClick={onOpenConsultation}
                      className="flex flex-col items-center justify-center py-3 px-1 text-center active:bg-[#9E1414] transition-colors cursor-pointer"
                    >
                      <IconComponent size={24} weight="light" className="text-white mb-1" />
                      <span className="text-[9.5px] font-bold uppercase tracking-tighter text-white leading-tight line-clamp-2">
                        {service.name}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 3. About Us Mobile Section */}
        <section id="about" className="px-4 py-8 bg-white">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#7D0D0D]/10 px-2.5 py-0.5 text-[11px] font-extrabold uppercase text-[#9E1C1C]">
            <Sparkle size={12} weight="fill" className="text-[#D97706]" />
            {aboutUs.tag}
          </span>
          <h2 className="mt-2 font-[var(--font-display)] text-[20px] font-black uppercase text-[#18181B] leading-snug">
            {aboutUs.title}
          </h2>
          <div className="my-2.5 h-[2px] w-12 bg-gradient-to-r from-[#D97706] to-[#E5A93C]" />
          <p className="text-[13px] leading-relaxed text-[#52525B]">
            {aboutUs.description}
          </p>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="mt-3 inline-flex items-center gap-1.5 rounded-[6px] bg-[#C97A1E] px-4 py-2 text-[12px] font-bold uppercase tracking-wider text-white shadow-sm active:scale-95"
          >
            TÌM HIỂU THÊM
            <ArrowRight size={13} weight="bold" />
          </button>

          <div className="mt-4 overflow-hidden rounded-[14px] border border-[#E5A93C]/30 shadow-md">
            <img
              src={aboutUs.image}
              alt={aboutUs.alt}
              className="w-full aspect-[16/10] object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* 4. Featured Projects Carousel Mobile Section */}
        <section id="projects" className="bg-[#FBF9F6] px-4 py-8 border-y border-[#E4E4E7]">
          <div className="text-center mb-5">
            <div className="inline-flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-[#18181B]/30" />
              <h2 className="font-[var(--font-display)] text-[18px] font-black uppercase tracking-wider text-[#18181B]">
                DỰ ÁN TIÊU BIỂU
              </h2>
              <span className="h-px w-8 bg-[#18181B]/30" />
            </div>
          </div>

          {/* Horizontal Scrollable Carousel Cards */}
          <div
            className="mobile-scroll-row -mx-4 flex gap-3 overflow-x-auto px-4 pb-3 snap-x snap-mandatory"
            onScroll={(e) => {
              const scrollLeft = e.currentTarget.scrollLeft
              const itemWidth = 200
              const newIndex = Math.round(scrollLeft / itemWidth)
              setActiveProjectIndex(Math.min(newIndex, mobileProjects.length - 1))
            }}
          >
            {mobileProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => setActivePhoto(project)}
                className="min-w-[190px] max-w-[210px] shrink-0 overflow-hidden rounded-[12px] border border-[#E4E4E7] bg-white shadow-sm snap-start active:scale-98 transition-transform cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#180505]">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-[var(--font-display)] text-[12px] font-bold text-[#18181B] truncate">
                    {project.title}
                  </h3>
                  <span className="mt-0.5 inline-block text-[11px] font-semibold text-[#D97706]">
                    {project.scale}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Carousel Dots indicator */}
          <div className="flex justify-center items-center gap-1.5 mt-2">
            {mobileProjects.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all ${
                  idx === activeProjectIndex
                    ? 'w-4 bg-[#780D0D]'
                    : 'w-1.5 bg-[#D4D4D8]'
                }`}
              />
            ))}
          </div>
        </section>

        {/* 5. Stats Counter Bar Mobile */}
        <section className="bg-[#780D0D] py-5 px-2 text-white border-y border-[#911313]">
          <div className="grid grid-cols-4 divide-x divide-[#9E1C1C] text-center">
            {statsCounters.map((item) => (
              <div key={item.label} className="px-1">
                <div className="font-[var(--font-display)] text-[18px] sm:text-[20px] font-black leading-none text-white">
                  {item.number}
                </div>
                <div className="mt-1 text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-tight text-[#FDE68A] leading-tight">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Process Workflow Mobile */}
        <section id="news" className="px-4 py-8 bg-white">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-[#18181B]/30" />
              <h2 className="font-[var(--font-display)] text-[18px] font-black uppercase tracking-wider text-[#18181B]">
                QUY TRÌNH THỰC HIỆN
              </h2>
              <span className="h-px w-8 bg-[#18181B]/30" />
            </div>
          </div>

          <div className="space-y-3">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-3 rounded-[12px] border border-[#E4E4E7] bg-[#FFFDF8] p-3 shadow-xs"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#D97706] bg-[#FFFBF2] font-[var(--font-display)] text-[14px] font-black text-[#D97706]">
                  {item.step}
                </div>
                <div className="min-w-0">
                  <h3 className="font-[var(--font-display)] text-[13px] font-black uppercase text-[#18181B]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-[#71717A]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Customer Feedback Mobile Section */}
        <section id="feedback" className="bg-[#FAF8F5] px-4 py-8 border-y border-[#E4E4E7]">
          <div className="text-center mb-5">
            <div className="inline-flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-[#18181B]/30" />
              <h2 className="font-[var(--font-display)] text-[18px] font-black uppercase tracking-wider text-[#18181B]">
                Ý KIẾN KHÁCH HÀNG
              </h2>
              <span className="h-px w-8 bg-[#18181B]/30" />
            </div>
            <p className="mt-1 text-[11.5px] text-[#71717A] max-w-xs mx-auto">
              Đánh giá thực tế từ các doanh nghiệp & đối tác đã đồng hành cùng Thành Nam
            </p>
          </div>

          <div className="mobile-scroll-row -mx-4 flex gap-3 overflow-x-auto px-4 pb-3 snap-x snap-mandatory">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="relative min-w-[260px] max-w-[280px] shrink-0 rounded-[14px] border border-[#E8E1D3] bg-white p-4 shadow-xs snap-start flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex gap-0.5 text-[#F59E0B]" aria-label="5 sao">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={13} weight="fill" />
                      ))}
                    </div>
                    <Quotes size={24} weight="fill" className="text-[#E8E1D3]" />
                  </div>
                  <p className="text-[12.5px] leading-relaxed text-[#3F3F46] italic line-clamp-4">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7D0D0D] to-[#450505] font-['Playfair_Display',serif] text-[13px] font-bold text-[#FDE68A] ring-1 ring-[#E5A93C]/40">
                    {item.name
                      .split(' ')
                      .slice(-2)
                      .map((p) => p[0])
                      .join('')}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-['Montserrat',sans-serif] text-[12.5px] font-bold text-[#18181B] truncate">
                      {item.name}
                    </h4>
                    <p className="text-[10.5px] text-[#71717A] truncate mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 8. Quick Consultation CTA Card Mobile */}
        <section className="px-3 py-6">
          <div className="rounded-[14px] bg-gradient-to-r from-[#3B0505] via-[#280303] to-[#1F0202] border border-[#E5A93C]/40 p-4 text-white flex items-center justify-between gap-3 shadow-xl">
            <div className="flex items-start gap-2.5 min-w-0">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E5A93C]/20 border border-[#E5A93C]/40 text-[#E5A93C]">
                <Phone size={18} weight="fill" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-medium text-gray-300">
                  Sẵn sàng tạo nên sự kiện
                </span>
                <h4 className="text-[13px] font-bold text-[#FDE68A] leading-tight">
                  Đáng nhớ cùng bạn?
                </h4>
                <p className="text-[10px] text-gray-300 mt-0.5 line-clamp-1">
                  Đội ngũ Thành Nam luôn sẵn sàng tư vấn giải pháp phù hợp nhất!
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="shrink-0 whitespace-nowrap rounded-[6px] bg-[#C97A1E] hover:bg-[#D97706] px-3 py-2 text-[11px] font-extrabold uppercase text-white shadow-md active:scale-95"
            >
              LIÊN HỆ TƯ VẤN
            </button>
          </div>
        </section>

        {/* 8. Full Footer on Mobile */}
        <Footer onOpenConsultation={onOpenConsultation} />
      </main>

      {/* Lightbox Preview Modal */}
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
              aria-label="Đóng"
            >
              <X size={16} weight="bold" />
            </button>
            <img
              src={activePhoto.image}
              alt={activePhoto.alt}
              className="w-full rounded-[10px] object-cover max-h-[60vh]"
            />
            <div className="p-3">
              <span className="text-[11px] font-bold text-[#E5A93C] uppercase">
                {activePhoto.scale}
              </span>
              <h4 className="text-[15px] font-bold">{activePhoto.title}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
