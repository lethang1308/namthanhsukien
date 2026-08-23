import { FadeUpSection } from '../../../components/animations/FadeUpSection'
import { StaggerContainer } from '../../../components/animations/StaggerContainer'
import { statsCounters } from '../data/homeContent'

export function StatsCounterBar() {
  return (
    <FadeUpSection
      className="w-full bg-[#700909] text-white py-8 md:py-10 shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)] border-y border-[#911313]"
      duration={800}
    >
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#911313]/70"
          delay={100}
          staggerDelay={80}
        >
          {statsCounters.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center p-4 sm:p-6 text-center group"
            >
              <div className="font-[var(--font-display)] text-[36px] sm:text-[44px] md:text-[50px] font-black leading-none text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-108">
                {item.number}
              </div>
              <div className="mt-2.5 font-[var(--font-display)] text-[12px] sm:text-[13px] md:text-[14px] font-bold uppercase tracking-wider text-[#FDE68A]">
                {item.label}
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </FadeUpSection>
  )
}
