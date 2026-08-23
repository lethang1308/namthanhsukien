import { Quotes, Sparkle, Star } from '@phosphor-icons/react'
import { FadeUpSection } from '../../../components/animations/FadeUpSection'
import { ScrollReveal } from '../../../components/animations/ScrollReveal'
import { StaggerContainer } from '../../../components/animations/StaggerContainer'
import { testimonials } from '../data/homeContent'

function Rating() {
  return (
    <div className="flex gap-1 text-[#F59E0B]" aria-label="Đánh giá 5 sao">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={16} weight="fill" />
      ))}
    </div>
  )
}

export function CustomerFeedback({ _onOpenConsultation }) {
  return (
    <FadeUpSection
      id="feedback"
      className="bg-gradient-to-b from-[#FAF8F5] via-[#FFFDF9] to-[#FAF8F5] py-16 md:py-24 border-t border-[#E8E1D3]"
      duration={800}
    >
      <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-14" delay={80} duration={750}>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7D0D0D]/10 px-4 py-1 text-[12px] font-extrabold uppercase tracking-widest text-[#9E1C1C]">
            <Sparkle size={14} weight="fill" className="text-[#D97706]" />
            Ý KIẾN KHÁCH HÀNG
          </span>

          <h2 className="mt-3 font-[var(--font-display)] text-[26px] sm:text-[32px] md:text-[38px] font-black uppercase tracking-wide text-[#18181B]">
            KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI
          </h2>

          <div className="mx-auto my-3.5 h-[3px] w-20 bg-gradient-to-r from-[#D97706] to-[#E5A93C] rounded-full" />

          <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#52525B] max-w-2xl mx-auto leading-relaxed">
            Sự hài lòng và tin tưởng của hàng trăm doanh nghiệp, tổ chức là minh chứng rõ nhất cho chất lượng và uy tín của Thành Nam Sự Kiện.
          </p>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <StaggerContainer
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          delay={120}
          staggerDelay={100}
        >
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="group relative flex flex-col justify-between rounded-[16px] border border-[#E8E1D3] bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D97706]/40 hover:shadow-[0_12px_30px_rgba(217,119,6,0.12)]"
            >
              {/* Decorative Quote Icon Background */}
              <div className="absolute top-6 right-6 text-[#E8E1D3]/50 group-hover:text-[#D97706]/20 transition-colors pointer-events-none">
                <Quotes size={48} weight="fill" />
              </div>

              <div>
                {/* 5-Star Rating */}
                <div className="mb-4">
                  <Rating />
                </div>

                {/* Testimonial Quote */}
                <p className="text-[14px] sm:text-[14.5px] leading-[1.7] text-[#3F3F46] italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7D0D0D] to-[#450505] font-['Playfair_Display',serif] text-[15px] font-bold text-[#FDE68A] shadow-md ring-2 ring-[#E5A93C]/40">
                  {item.name
                    .split(' ')
                    .slice(-2)
                    .map((p) => p[0])
                    .join('')}
                </div>

                <div className="min-w-0">
                  <h3 className="font-['Montserrat',sans-serif] text-[14px] font-bold text-[#18181B] truncate group-hover:text-[#7D0D0D] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[12px] text-[#71717A] truncate mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </StaggerContainer>

        {/* Bottom CTA within Feedback Section - Tạm thời comment theo yêu cầu
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center rounded-[8px] bg-[#C97A1E] hover:bg-[#D97706] px-8 py-3.5 text-[13.5px] font-bold uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(201,122,30,0.35)] transition-all duration-200 hover:scale-[1.02] active:translate-y-px"
          >
            ĐĂNG KÝ TƯ VẤN SỰ KIỆN CỦA BẠN
          </button>
        </div>
        */}
      </div>
    </FadeUpSection>
  )
}
