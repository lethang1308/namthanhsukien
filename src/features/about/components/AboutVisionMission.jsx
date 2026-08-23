import { Eye, FlagBanner, Target } from '@phosphor-icons/react'
import { FadeUpSection } from '../../../components/animations/FadeUpSection'
import { ScrollReveal } from '../../../components/animations/ScrollReveal'
import { aboutData } from '../data/aboutContent'

export function AboutVisionMission() {
  const { vision, mission } = aboutData.visionMission

  return (
    <FadeUpSection
      id="vision-mission"
      className="bg-gradient-to-b from-[#FBF9F6] via-[#FFFDF9] to-[#FBF9F6] py-16 md:py-24 border-b border-[#E8E1D3]"
      duration={800}
    >
      <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-14" delay={80} duration={750}>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7D0D0D]/10 px-4 py-1 text-[12px] font-extrabold uppercase tracking-widest text-[#9E1C1C]">
            <FlagBanner size={14} weight="fill" className="text-[#D97706]" />
            ĐỊNH HƯỚNG PHÁT TRIỂN
          </span>

          <h2 className="mt-3 font-[var(--font-display)] text-[26px] sm:text-[32px] md:text-[36px] font-black uppercase tracking-wide text-[#18181B]">
            TẦM NHÌN & SỨ MỆNH
          </h2>

          <div className="mx-auto my-3.5 h-[3px] w-20 bg-gradient-to-r from-[#D97706] to-[#E5A93C] rounded-full" />

          <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#52525B] max-w-2xl mx-auto leading-relaxed">
            Kim chỉ nam dẫn dắt Nam Thành Sự Kiện không ngừng vươn xa và mang lại giá trị thiết thực cho khách hàng.
          </p>
        </ScrollReveal>

        {/* 2 Big Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Card 1: Vision */}
          <ScrollReveal direction="left" duration={750}>
            <div className="relative flex flex-col justify-between h-full overflow-hidden rounded-[20px] border border-[#E8E1D3] bg-white p-7 sm:p-9 shadow-[0_6px_25px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[#D97706]/40 hover:shadow-[0_12px_35px_rgba(217,119,6,0.12)]">
              {/* Top Accent Icon */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7D0D0D] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#FDE68A]">
                    {vision.tag}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFFBEB] text-[#D97706] border border-[#FDE68A] shadow-xs">
                    <Eye size={26} weight="duotone" />
                  </div>
                </div>

                <h3 className="mt-5 font-[var(--font-display)] text-[20px] sm:text-[22px] font-black text-[#18181B] leading-snug">
                  {vision.title}
                </h3>

                <p className="mt-3 text-[14.5px] leading-relaxed text-[#52525B]">
                  {vision.desc}
                </p>
              </div>

              {/* Decorative Bottom Pattern Bar */}
              <div className="mt-8 pt-5 border-t border-gray-100 flex items-center gap-2 text-[12px] font-bold text-[#9E1C1C] uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D97706]" />
                Đổi mới công nghệ • Dẫn đầu xu hướng
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Mission */}
          <ScrollReveal direction="right" duration={750}>
            <div className="relative flex flex-col justify-between h-full overflow-hidden rounded-[20px] border border-[#E8E1D3] bg-white p-7 sm:p-9 shadow-[0_6px_25px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[#D97706]/40 hover:shadow-[0_12px_35px_rgba(217,119,6,0.12)]">
              {/* Top Accent Icon */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#B45309] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#FEF3C7]">
                    {mission.tag}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FEF2F2] text-[#9E1C1C] border border-[#FECACA] shadow-xs">
                    <Target size={26} weight="duotone" />
                  </div>
                </div>

                <h3 className="mt-5 font-[var(--font-display)] text-[20px] sm:text-[22px] font-black text-[#18181B] leading-snug">
                  {mission.title}
                </h3>

                <p className="mt-3 text-[14.5px] leading-relaxed text-[#52525B]">
                  {mission.desc}
                </p>
              </div>

              {/* Decorative Bottom Pattern Bar */}
              <div className="mt-8 pt-5 border-t border-gray-100 flex items-center gap-2 text-[12px] font-bold text-[#9E1C1C] uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D97706]" />
                Hiện thực hóa ý tưởng • Vận hành hoàn hảo
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </FadeUpSection>
  )
}
