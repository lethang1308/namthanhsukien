import { Sparkle } from '@phosphor-icons/react'
import { FadeUpSection } from '../../../components/animations/FadeUpSection'
import { ScrollReveal } from '../../../components/animations/ScrollReveal'
import { StaggerContainer } from '../../../components/animations/StaggerContainer'
import { aboutData } from '../data/aboutContent'

export function AboutCoreValues() {
  const { coreValues } = aboutData

  return (
    <FadeUpSection
      id="core-values"
      className="bg-white py-16 md:py-24 border-b border-[#E8E1D3]"
      duration={800}
    >
      <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-14" delay={80} duration={750}>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7D0D0D]/10 px-4 py-1 text-[12px] font-extrabold uppercase tracking-widest text-[#9E1C1C]">
            <Sparkle size={14} weight="fill" className="text-[#D97706]" />
            NỀN TẢNG PHÁT TRIỂN
          </span>

          <h2 className="mt-3 font-[var(--font-display)] text-[26px] sm:text-[32px] md:text-[38px] font-black uppercase tracking-wide text-[#18181B]">
            GIÁ TRỊ CỐT LÕI
          </h2>

          <div className="mx-auto my-3.5 h-[3px] w-20 bg-gradient-to-r from-[#D97706] to-[#E5A93C] rounded-full" />

          <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#52525B] max-w-2xl mx-auto leading-relaxed">
            6 giá trị cốt lõi định hình văn hóa làm việc và cam kết chất lượng của Nam Thành Sự Kiện trong từng dự án.
          </p>
        </ScrollReveal>

        {/* 6 Core Values Grid (3x2 on desktop, 2 cols on mobile) */}
        <StaggerContainer
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          delay={120}
          staggerDelay={80}
        >
          {coreValues.map((item, index) => {
            const IconComp = item.icon
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[16px] border border-[#E8E1D3] bg-[#FFFDF9] p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D97706]/40 hover:shadow-[0_10px_30px_rgba(217,119,6,0.1)]"
              >
                {/* Top Number + Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7D0D0D]/10 text-[#7D0D0D] transition-colors group-hover:bg-[#D97706] group-hover:text-white">
                      <IconComp size={24} weight="bold" />
                    </span>
                    <span className="font-['Montserrat',sans-serif] text-[26px] font-black text-[#E8E1D3] group-hover:text-[#D97706]/40 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-['Montserrat',sans-serif] text-[15px] sm:text-[16px] font-extrabold uppercase tracking-wide text-[#18181B] group-hover:text-[#7D0D0D] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#52525B]">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom decorative accent line */}
                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#D97706]">
                  <span className="h-1 w-5 rounded-full bg-[#D97706]" />
                  <span>Cam kết chất lượng</span>
                </div>
              </div>
            )
          })}
        </StaggerContainer>
      </div>
    </FadeUpSection>
  )
}
