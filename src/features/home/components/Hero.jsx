import {
  Buildings,
  Confetti,
  Gift,
  HeartStraight,
  Play,
  PresentationChart,
} from '@phosphor-icons/react'
import { FadeUpSection } from '../../../components/animations/FadeUpSection'
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
    <FadeUpSection
      id="home"
      className="relative isolate overflow-hidden bg-[#180202] text-white"
      duration={800}
    >
      {/* Background Banner with Event Tent Backdrop on the Right */}
      <div className="relative overflow-hidden pt-4 pb-8 md:pt-6 md:pb-10">
        {/* Real Banner Image Backdrop */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={hero.bannerImage}
            alt="Nam Thành Sự Kiện - Tổ chức sự kiện chuyên nghiệp"
            className="absolute right-0 top-0 h-full w-[60%] lg:w-[54%] object-cover object-[center_18%]"
            fetchPriority="high"
          />
          {/* Dark Red/Black Scrim Gradient overlay from left to right */}
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,#180202_0%,#180202_34%,rgba(24,2,2,0.96)_46%,rgba(24,2,2,0.65)_60%,rgba(24,2,2,0.18)_76%,rgba(24,2,2,0.02)_100%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,2,2,0.6)_0%,transparent_20%,transparent_75%,#180202_100%)]"
            aria-hidden="true"
          />
        </div>

        {/* Hero Left Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-8 lg:px-12 pt-6 pb-6 md:pt-10 md:pb-8">
          <div className="max-w-[580px]">
            {/* Brand Eyebrow */}
            <div className="mb-2">
              <span className="font-['Playfair_Display',Georgia,serif] text-[40px] sm:text-[46px] md:text-[50px] font-bold text-[#E5A93C] leading-none block drop-shadow-md">
                {hero.brandSmall}
              </span>
              <span className="font-['Montserrat',sans-serif] text-[22px] sm:text-[26px] md:text-[28px] font-black tracking-[0.2em] text-[#E5A93C] uppercase block mt-1 leading-tight">
                {hero.brandCategory}
              </span>
            </div>

            {/* Main Headline (2 lines strictly) */}
            <h1 className="font-['Montserrat',sans-serif] text-[38px] sm:text-[48px] md:text-[54px] lg:text-[58px] font-black uppercase tracking-tight text-white leading-[1.08] mt-3 drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)]">
              TỔ CHỨC SỰ KIỆN
              <br />
              <span className="text-white">CHUYÊN NGHIỆP</span>
            </h1>

            {/* Script Slogan in Great Vibes */}
            <div className="my-2">
              <p
                className="font-script text-[42px] sm:text-[48px] md:text-[54px] lg:text-[58px] leading-[1.2] text-[#E5A93C] drop-shadow-[0_2px_14px_rgba(229,169,60,0.45)] select-none pt-1 pb-1"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                {hero.script}
              </p>
            </div>

            {/* Value Proposition Description */}
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] max-w-[500px] mb-7">
              {hero.description}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex h-[50px] items-center justify-center rounded-[6px] bg-[#C97A1E] hover:bg-[#D97706] px-7 text-[13.5px] font-bold uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(201,122,30,0.4)] transition-all duration-200 hover:scale-[1.02] active:translate-y-px"
              >
                KHÁM PHÁ DỊCH VỤ
              </button>

              <button
                type="button"
                onClick={onOpenVideo}
                className="group inline-flex items-center gap-3 text-[13.5px] font-bold uppercase tracking-wider text-white transition-colors duration-200 hover:text-[#E5A93C] active:translate-y-px"
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
        <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-8 lg:px-12 mt-8 md:mt-12">
          <div className="overflow-hidden rounded-[10px] border border-[#E5A93C]/50 bg-gradient-to-b from-[#961212] to-[#6E0808] shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
            <StaggerContainer
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/15"
              delay={100}
              staggerDelay={80}
            >
              {serviceCards.map((service) => {
                const IconComponent = serviceIconMap[service.iconType] || Gift
                return (
                  <a
                    key={service.id}
                    href="#services"
                    className="group flex min-h-[115px] flex-col items-center justify-center py-5 px-3 text-center transition-colors duration-200 hover:bg-[#8F1212]"
                  >
                    {/* Outline Icon */}
                    <div className="mb-2 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-[#FDE68A]">
                      <IconComponent size={36} weight="light" />
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
    </FadeUpSection>
  )
}
