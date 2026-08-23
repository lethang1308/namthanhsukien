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
      className="relative isolate overflow-hidden bg-[#1E0303]"
      duration={800}
    >
      {/* Banner Area */}
      <div className="relative min-h-[580px] lg:min-h-[620px] flex flex-col justify-between overflow-hidden">
        {/* Real Banner Image Backdrop on the Right */}
        <div className="absolute inset-0 z-0">
          <img
            src={hero.bannerImage}
            alt="Nam Thành Sự Kiện - Không gian tổ chức sự kiện chuyên nghiệp"
            className="h-full w-full object-cover object-[75%_center] md:object-[right_center]"
            fetchPriority="high"
          />
          {/* Dark Red/Black Scrim Gradient overlay from left to right */}
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,#1c0303_0%,#1c0303_36%,rgba(28,3,3,0.92)_48%,rgba(28,3,3,0.4)_65%,transparent_82%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,3,3,0.5)_0%,transparent_30%,transparent_70%,#1c0303_100%)]"
            aria-hidden="true"
          />
        </div>

        {/* Hero Left Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 pt-10 pb-12 md:pt-14 md:pb-16 lg:px-8">
          <div className="max-w-2xl">
            {/* Monogram / Brand Eyebrow */}
            <div className="mb-2">
              <span className="font-['Playfair_Display',Georgia,serif] text-[32px] sm:text-[38px] md:text-[42px] font-bold text-[#E5A93C] tracking-tight drop-shadow-md">
                {hero.brandSmall}
              </span>
              <span className="block text-[15px] sm:text-[17px] font-extrabold tracking-[0.22em] text-[#E5A93C] uppercase mt-0.5">
                {hero.brandCategory}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-['Montserrat',sans-serif] text-[36px] sm:text-[46px] md:text-[52px] lg:text-[56px] font-extrabold uppercase tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
              TỔ CHỨC SỰ KIỆN
              <br />
              <span className="text-white">CHUYÊN NGHIỆP</span>
            </h1>

            {/* Script Text with Great Vibes */}
            <div className="my-2">
              <p
                className="font-script text-[42px] sm:text-[50px] md:text-[56px] lg:text-[60px] leading-[1.25] text-[#E5A93C] drop-shadow-[0_2px_14px_rgba(229,169,60,0.45)] select-none pt-1 pb-1"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                {hero.script}
              </p>
            </div>

            {/* Value Proposition Description */}
            <p className="max-w-[490px] text-[14px] sm:text-[15.5px] leading-relaxed text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              {hero.description}
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center rounded-[6px] bg-[#C97A1E] hover:bg-[#D97706] px-6 py-3 text-[13.5px] font-bold uppercase tracking-wider text-white shadow-[0_4px_18px_rgba(201,122,30,0.45)] transition-all duration-200 hover:scale-[1.02] active:translate-y-px"
              >
                KHÁM PHÁ DỊCH VỤ
              </button>

              <button
                type="button"
                onClick={onOpenVideo}
                className="group inline-flex items-center gap-3 text-[13.5px] font-bold uppercase tracking-wider text-white transition-colors duration-200 hover:text-[#E5A93C] active:translate-y-px"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-white transition-all duration-300 group-hover:scale-110 group-hover:border-[#E5A93C] group-hover:text-[#E5A93C] group-hover:bg-white/10">
                  <Play size={14} weight="fill" className="ml-0.5" />
                </span>
                XEM VIDEO
              </button>
            </div>
          </div>
        </div>

        {/* 5 Crimson Service Cards Bar (Attached to bottom of Banner) */}
        <div className="relative z-10 w-full bg-[#780D0D] border-t border-[#A81E1E]/50 shadow-[0_-8px_25px_rgba(0,0,0,0.4)]">
          <div className="mx-auto max-w-[1400px] px-2 sm:px-4 lg:px-8">
            <StaggerContainer
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#941A1A]/70"
              delay={100}
              staggerDelay={80}
            >
              {serviceCards.map((service) => {
                const IconComponent = serviceIconMap[service.iconType] || Gift
                return (
                  <a
                    key={service.id}
                    href="#services"
                    className="group relative flex flex-col items-center justify-center py-4 px-3 sm:py-5 sm:px-4 text-center transition-all duration-300 hover:bg-[#8F1111]"
                  >
                    {/* Outline Icon */}
                    <div className="mb-2 flex h-10 w-10 items-center justify-center text-white/90 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#FDE68A]">
                      <IconComponent size={28} weight="light" />
                    </div>

                    {/* Service Name */}
                    <h3 className="font-['Montserrat',sans-serif] text-[12.5px] sm:text-[13.5px] font-bold uppercase tracking-wider text-white transition-colors duration-200 group-hover:text-[#FDE68A]">
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
