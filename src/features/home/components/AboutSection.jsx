import { ArrowRight, CheckCircle, Sparkle } from '@phosphor-icons/react'
import { FadeUpSection } from '../../../components/animations/FadeUpSection'
import { ScrollReveal } from '../../../components/animations/ScrollReveal'
import { aboutUs } from '../data/homeContent'

export function AboutSection({ onOpenConsultation }) {
  return (
    <FadeUpSection
      id="about"
      className="mx-auto max-w-[1400px] px-4 py-14 md:py-20 lg:px-8"
      duration={800}
    >
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left Column: Content */}
        <ScrollReveal direction="left" delay={100} duration={750}>
          <div>
            {/* Tag / Eyebrow */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7D0D0D]/10 px-3.5 py-1 text-[13px] font-extrabold uppercase tracking-wider text-[#9E1C1C]">
              <Sparkle size={14} weight="fill" className="text-[#D97706]" />
              {aboutUs.tag}
            </span>

            {/* Main Heading */}
            <h2 className="mt-3.5 font-[var(--font-display)] text-[28px] sm:text-[34px] md:text-[40px] font-black uppercase leading-[1.18] tracking-tight text-[#18181B]">
              {aboutUs.title}
            </h2>

            {/* Accent Line */}
            <div className="my-5 h-[3px] w-20 bg-gradient-to-r from-[#D97706] to-[#E5A93C] rounded-full" />

            {/* Description Text */}
            <p className="text-[15.5px] md:text-[16.5px] leading-relaxed text-[#52525B]">
              {aboutUs.description}
            </p>

            <p className="mt-3 text-[14.5px] leading-relaxed text-[#71717A]">
              {aboutUs.subDescription}
            </p>

            {/* Highlights bullet points */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] font-semibold text-[#27272A]">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} weight="fill" className="text-[#D97706] shrink-0" />
                <span>Thiết bị âm thanh, ánh sáng hiện đại</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} weight="fill" className="text-[#D97706] shrink-0" />
                <span>Kịch bản sáng tạo, độc bản</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} weight="fill" className="text-[#D97706] shrink-0" />
                <span>Đội ngũ điều phối tận tâm 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} weight="fill" className="text-[#D97706] shrink-0" />
                <span>Chi phí tối ưu, minh bạch</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 rounded-[8px] bg-gradient-to-r from-[#D97706] via-[#E5A93C] to-[#D97706] bg-[length:200%_auto] px-7 py-3.5 text-[14px] font-extrabold uppercase tracking-wider text-[#140303] shadow-[0_6px_20px_rgba(217,119,6,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(229,169,60,0.5)] active:translate-y-px"
              >
                TÌM HIỂU THÊM
                <ArrowRight size={16} weight="bold" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Stage Image with rounded corners and elegant frame */}
        <ScrollReveal direction="right" delay={200} duration={800}>
          <div className="relative group overflow-hidden rounded-[20px] border-2 border-[#E5A93C]/30 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={aboutUs.image}
                alt={aboutUs.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Subtle glow border overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-white/15" />
          </div>
        </ScrollReveal>
      </div>
    </FadeUpSection>
  )
}
