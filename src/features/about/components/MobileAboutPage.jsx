import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CaretRight,
  Eye,
  FlagBanner,
  Phone,
  Quotes,
  Sparkle,
  Star,
  Target,
} from '@phosphor-icons/react'
import { MobileHeader } from '../../../components/mobile/MobileHeader'
import { processSteps, statsCounters, testimonials } from '../../home/data/homeContent'
import { Footer } from '../../home/components/Footer'
import { aboutData } from '../data/aboutContent'

export function MobileAboutPage({ onOpenConsultation }) {
  const { banner, story, visionMission, coreValues } = aboutData

  return (
    <div className="md:hidden min-h-[100dvh] bg-[#FFFFFF] text-[#18181B]">
      {/* Mobile Header */}
      <MobileHeader onOpenConsultation={onOpenConsultation} zIndexClass="z-40" />

      <main id="about-main">
        {/* 1. Mobile Banner */}
        <section className="relative isolate overflow-hidden bg-[#2D0404] px-4 py-8 text-white text-center">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(229,169,60,0.25)_0%,rgba(92,11,11,0.6)_60%,#200303_100%)]"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10">
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/85 mb-3">
              <Link to="/" className="hover:text-[#FDE68A]">
                Trang chủ
              </Link>
              <CaretRight size={11} weight="bold" className="text-[#E5A93C]" />
              <span className="font-bold text-[#E5A93C]">Giới thiệu</span>
            </div>

            {/* Title & Slogan */}
            <h1 className="font-['Montserrat',sans-serif] text-[26px] font-black uppercase text-white leading-tight">
              {banner.title}
            </h1>

            <span className="font-['Playfair_Display',serif] text-[18px] font-bold text-[#F0C554] block mt-1">
              {banner.eyebrow}
            </span>

            <p
              className="font-script text-[28px] leading-tight text-[#F1C95B] my-1"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              {banner.slogan}
            </p>
          </div>
        </section>

        {/* 2. About Story Section Mobile */}
        <section className="px-4 py-8 bg-white">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#7D0D0D]/10 px-2.5 py-0.5 text-[11px] font-extrabold uppercase text-[#9E1C1C]">
            <Sparkle size={12} weight="fill" className="text-[#D97706]" />
            {story.tag}
          </span>

          <h2 className="mt-2 font-[var(--font-display)] text-[20px] font-black uppercase text-[#18181B] leading-snug">
            {story.mainTitle}
          </h2>

          <p className="mt-1 text-[13.5px] font-bold text-[#B45309]">
            {story.subTitle}
          </p>

          <div className="my-2.5 h-[2px] w-12 bg-gradient-to-r from-[#D97706] to-[#E5A93C]" />

          {/* Stage Photo */}
          <div className="my-4 overflow-hidden rounded-[14px] border border-[#E5A93C]/30 shadow-md">
            <img
              src={story.image}
              alt="Thành Nam Sự Kiện"
              className="w-full aspect-[16/10] object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-2.5 text-[12.5px] leading-relaxed text-[#52525B]">
            {story.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* 3 Highlights Badges */}
          <div className="mt-6 grid grid-cols-3 gap-2 text-center">
            {story.highlights.map((item) => {
              const IconComp = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-[10px] border border-[#E8E1D3] bg-[#FFFDF9] p-2.5 shadow-xs"
                >
                  <div className="mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#7D0D0D]/10 text-[#7D0D0D]">
                    <IconComp size={16} weight="bold" />
                  </div>
                  <h3 className="text-[10.5px] font-black uppercase text-[#18181B]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[9px] text-[#71717A] line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-[8px] bg-[#C97A1E] py-3 text-[12.5px] font-bold uppercase text-white shadow-md active:scale-95"
          >
            LIÊN HỆ TƯ VẤN NGAY
            <ArrowRight size={14} weight="bold" />
          </button>
        </section>

        {/* 3. Stats Counter Bar */}
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

        {/* 4. Vision & Mission Mobile */}
        <section className="px-4 py-8 bg-[#FBF9F6] border-b border-[#E4E4E7]">
          <div className="text-center mb-5">
            <div className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#7D0D0D]/10 px-3 py-0.5 text-[11px] font-extrabold uppercase text-[#9E1C1C] mb-1">
              <FlagBanner size={12} weight="fill" className="text-[#D97706]" />
              ĐỊNH HƯỚNG PHÁT TRIỂN
            </div>
            <h2 className="font-[var(--font-display)] text-[18px] font-black uppercase tracking-wider text-[#18181B]">
              TẦM NHÌN & SỨ MỆNH
            </h2>
          </div>

          <div className="space-y-4">
            {/* Vision Card */}
            <div className="rounded-[14px] border border-[#E8E1D3] bg-white p-4 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="rounded-full bg-[#7D0D0D] px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-[#FDE68A]">
                  {visionMission.vision.tag}
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFFBEB] text-[#D97706]">
                  <Eye size={18} weight="duotone" />
                </div>
              </div>
              <h3 className="font-[var(--font-display)] text-[14px] font-bold text-[#18181B]">
                {visionMission.vision.title}
              </h3>
              <p className="mt-1 text-[12px] leading-relaxed text-[#52525B]">
                {visionMission.vision.desc}
              </p>
            </div>

            {/* Mission Card */}
            <div className="rounded-[14px] border border-[#E8E1D3] bg-white p-4 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="rounded-full bg-[#B45309] px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-[#FEF3C7]">
                  {visionMission.mission.tag}
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FEF2F2] text-[#9E1C1C]">
                  <Target size={18} weight="duotone" />
                </div>
              </div>
              <h3 className="font-[var(--font-display)] text-[14px] font-bold text-[#18181B]">
                {visionMission.mission.title}
              </h3>
              <p className="mt-1 text-[12px] leading-relaxed text-[#52525B]">
                {visionMission.mission.desc}
              </p>
            </div>
          </div>
        </section>

        {/* 5. Core Values Mobile */}
        <section className="px-4 py-8 bg-white border-b border-[#E4E4E7]">
          <div className="text-center mb-5">
            <div className="inline-flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-[#18181B]/30" />
              <h2 className="font-[var(--font-display)] text-[18px] font-black uppercase tracking-wider text-[#18181B]">
                GIÁ TRỊ CỐT LÕI
              </h2>
              <span className="h-px w-8 bg-[#18181B]/30" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {coreValues.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={item.id}
                  className="rounded-[12px] border border-[#E8E1D3] bg-[#FFFDF9] p-3 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7D0D0D]/10 text-[#7D0D0D]">
                        <IconComp size={15} weight="bold" />
                      </span>
                      <span className="text-[14px] font-black text-gray-300">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="font-['Montserrat',sans-serif] text-[11.5px] font-black uppercase text-[#18181B] leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[10px] text-[#52525B] leading-normal line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* 6. Process Workflow Mobile */}
        <section className="px-4 py-8 bg-[#FBF9F6] border-b border-[#E4E4E7]">
          <div className="text-center mb-5">
            <div className="inline-flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-[#18181B]/30" />
              <h2 className="font-[var(--font-display)] text-[18px] font-black uppercase tracking-wider text-[#18181B]">
                QUY TRÌNH THỰC HIỆN
              </h2>
              <span className="h-px w-8 bg-[#18181B]/30" />
            </div>
          </div>

          <div className="space-y-2.5">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-2.5 rounded-[12px] border border-[#E4E4E7] bg-white p-3 shadow-xs"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#D97706] bg-[#FFFBF2] font-[var(--font-display)] text-[13px] font-black text-[#D97706]">
                  {item.step}
                </div>
                <div className="min-w-0">
                  <h3 className="font-[var(--font-display)] text-[12.5px] font-black uppercase text-[#18181B]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-[#71717A]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Customer Feedback Mobile */}
        <section className="bg-white px-4 py-8 border-b border-[#E4E4E7]">
          <div className="text-center mb-5">
            <div className="inline-flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-[#18181B]/30" />
              <h2 className="font-[var(--font-display)] text-[18px] font-black uppercase tracking-wider text-[#18181B]">
                Ý KIẾN KHÁCH HÀNG
              </h2>
              <span className="h-px w-8 bg-[#18181B]/30" />
            </div>
          </div>

          <div className="mobile-scroll-row -mx-4 flex gap-3 overflow-x-auto px-4 pb-3 snap-x snap-mandatory">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="relative min-w-[260px] max-w-[280px] shrink-0 rounded-[14px] border border-[#E8E1D3] bg-[#FFFDF9] p-4 shadow-xs snap-start flex flex-col justify-between"
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
                  <p className="text-[12px] leading-relaxed text-[#3F3F46] italic line-clamp-4">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7D0D0D] to-[#450505] font-['Playfair_Display',serif] text-[12px] font-bold text-[#FDE68A]">
                    {item.name
                      .split(' ')
                      .slice(-2)
                      .map((p) => p[0])
                      .join('')}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-['Montserrat',sans-serif] text-[12px] font-bold text-[#18181B] truncate">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-[#71717A] truncate">
                      {item.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 8. Quick CTA Card */}
        <section className="px-3 py-6 bg-[#FAF8F5]">
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

        {/* 9. Footer */}
        <Footer onOpenConsultation={onOpenConsultation} />
      </main>
    </div>
  )
}
