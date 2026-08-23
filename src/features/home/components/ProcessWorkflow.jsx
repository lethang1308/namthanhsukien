import { CaretRight } from '@phosphor-icons/react'
import { FadeUpSection } from '../../../components/animations/FadeUpSection'
import { ScrollReveal } from '../../../components/animations/ScrollReveal'
import { StaggerContainer } from '../../../components/animations/StaggerContainer'
import { processSteps } from '../data/homeContent'

export function ProcessWorkflow() {
  return (
    <FadeUpSection
      id="process"
      className="mx-auto max-w-[1400px] px-4 py-14 md:py-20 lg:px-8"
      duration={800}
    >
      {/* Section Centered Title */}
      <ScrollReveal className="text-center mb-12" delay={80} duration={750}>
        <h2 className="font-[var(--font-display)] text-[24px] sm:text-[30px] md:text-[36px] font-black uppercase tracking-wider text-[#18181B]">
          QUY TRÌNH THỰC HIỆN
        </h2>
        <div className="mx-auto my-3 h-[3px] w-16 bg-gradient-to-r from-[#D97706] to-[#E5A93C] rounded-full" />
        <p className="mt-2 text-[14px] sm:text-[15px] text-[#71717A] max-w-lg mx-auto">
          5 bước chuẩn mực đảm bảo mỗi sự kiện diễn ra hoàn hảo, đúng tiến độ và vượt kỳ vọng
        </p>
      </ScrollReveal>

      {/* 5 Sequential Process Steps with Connecting Arrows */}
      <div className="relative">
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-2 items-start"
          delay={150}
          staggerDelay={100}
        >
          {processSteps.map((item, index) => (
            <div
              key={item.step}
              className="relative flex flex-col items-center text-center group px-2"
            >
              {/* Number Circle Badge */}
              <div className="relative mb-4 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border-2 border-[#D97706] bg-[#FFFBF2] shadow-[0_8px_20px_rgba(217,119,6,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D97706] group-hover:shadow-[0_12px_28px_rgba(217,119,6,0.4)]">
                <span className="font-[var(--font-display)] text-[22px] sm:text-[26px] font-black text-[#D97706] transition-colors duration-300 group-hover:text-white">
                  {item.step}
                </span>

                {/* Down small arrow indicator */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-[#D97706] group-hover:text-white transition-colors">
                  <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-current" />
                </div>
              </div>

              {/* Step Title */}
              <h3 className="font-[var(--font-display)] text-[14px] sm:text-[15px] font-black uppercase tracking-wider text-[#18181B] min-h-[44px] flex items-center justify-center">
                {item.title}
              </h3>

              {/* Step Description */}
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#71717A] max-w-[220px]">
                {item.description}
              </p>

              {/* Connecting Horizontal Line with Arrow (Visible on desktop between steps) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:flex absolute top-10 -right-[20%] w-[40%] items-center justify-center pointer-events-none z-0 text-[#D97706]/70">
                  <div className="w-full h-px border-t border-dashed border-[#D97706]/80" />
                  <CaretRight size={14} weight="fill" className="-ml-1 text-[#D97706]" />
                </div>
              )}
            </div>
          ))}
        </StaggerContainer>
      </div>
    </FadeUpSection>
  )
}
