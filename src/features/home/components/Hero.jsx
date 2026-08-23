import {
  Buildings,
  Confetti,
  Gift,
  HeartStraight,
  Play,
  PresentationChart,
} from '@phosphor-icons/react'
import { StaggerContainer } from '../../../components/animations/StaggerContainer'
import { hero, serviceCards } from '../data/homeContent'

const serviceIconMap = {
  gift: Gift,
  party: Confetti,
  podium: PresentationChart,
  wedding: HeartStraight,
  construction: Buildings,
}

export function Hero({ onOpenConsultation, onOpenVideo }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden text-white"
    >
      <div className="relative pt-2 pb-10 md:pt-4 md:pb-12">
        {/* Hero Left Content */}
        <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-8 lg:px-12 pt-4 pb-2 md:pt-6 md:pb-4">
          <div className="max-w-[560px]">
            {/* Brand Eyebrow */}
            <div className="mb-3">
              <span className="font-['Playfair_Display',Georgia,serif] text-[40px] sm:text-[44px] md:text-[46px] lg:text-[48px] font-bold text-[#F0C554] leading-none block drop-shadow-[0_3px_14px_rgba(0,0,0,0.42)]">
                {hero.brandSmall}
              </span>
              <span className="font-['Montserrat',sans-serif] text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-black tracking-[0.2em] text-[#F0C554] uppercase block mt-1 leading-tight">
                {hero.brandCategory}
              </span>
            </div>

            {/* Main Headline (2 lines strictly) */}
            <h1 className="font-['Montserrat',sans-serif] text-[38px] sm:text-[46px] md:text-[50px] lg:text-[54px] font-black uppercase tracking-tight text-white leading-[1.08] mt-3 drop-shadow-[0_4px_18px_rgba(0,0,0,0.78)]">
              TỔ CHỨC SỰ KIỆN
              <br />
              <span className="text-white">CHUYÊN NGHIỆP</span>
            </h1>

            {/* Script Slogan in Great Vibes */}
            <div className="my-2 md:my-3">
              <p
                className="font-script whitespace-nowrap text-[38px] sm:text-[44px] md:text-[48px] lg:text-[52px] leading-[1.22] text-[#F1C95B] drop-shadow-[0_2px_14px_rgba(74,5,5,0.75)] select-none pt-1 pb-1"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                {hero.script}
              </p>
            </div>

            {/* Value Proposition Description */}
            <p className="text-[15.5px] sm:text-[16px] leading-[1.65] text-white/92 drop-shadow-[0_2px_8px_rgba(0,0,0,0.68)] max-w-[500px] mb-7">
              {hero.description}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex h-[50px] items-center justify-center rounded-[6px] bg-[#C87A1D] hover:bg-[#D88922] px-7 sm:px-8 text-[13.5px] font-bold uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(92,26,2,0.34)] transition-all duration-200 hover:scale-[1.02] active:translate-y-px"
              >
                KHÁM PHÁ DỊCH VỤ
              </button>

              <button
                type="button"
                onClick={onOpenVideo}
                className="group inline-flex items-center gap-3.5 text-[13.5px] font-bold uppercase tracking-wider text-white transition-colors duration-200 hover:text-[#E5A93C] active:translate-y-px"
              >
                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-white text-white transition-all duration-300 group-hover:scale-110 group-hover:border-[#E5A93C] group-hover:text-[#E5A93C] group-hover:bg-white/10">
                  <Play size={15} weight="fill" className="ml-0.5" />
                </span>
                XEM VIDEO
              </button>
            </div>
          </div>
        </div>

        {/* 5 Crimson Service Cards Bar (Floating Box inside Hero Container) */}
        <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-8 lg:px-12 mt-12 md:mt-16 lg:mt-20">
          <div className="overflow-hidden rounded-[8px] border border-[#E5A93C]/36 bg-[#7F0D0D]/58 shadow-[0_10px_30px_rgba(34,2,2,0.42)] backdrop-blur-[2px]">
            <StaggerContainer
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/14"
              delay={100}
              staggerDelay={80}
            >
              {serviceCards.map((service) => {
                const IconComponent = serviceIconMap[service.iconType] || Gift
                return (
                  <a
                    key={service.id}
                    href="#services"
                    className="group flex min-h-[112px] md:min-h-[118px] flex-col items-center justify-center py-5 sm:py-6 px-3 text-center transition-colors duration-200 hover:bg-[#8F1212]/55"
                  >
                    {/* Outline Icon */}
                    <div className="mb-2.5 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-[#FDE68A]">
                      <IconComponent size={38} weight="light" />
                    </div>

                    {/* Service Name */}
                    <h3 className="font-['Montserrat',sans-serif] text-[13px] sm:text-[13.5px] font-bold uppercase tracking-wider text-white transition-colors duration-200 group-hover:text-[#FDE68A]">
                      {service.name}
                    </h3>
                  </a>
                )
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
