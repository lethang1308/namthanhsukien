import { ArrowRight, Sparkle } from '@phosphor-icons/react'
import { FadeUpSection } from '../../../components/animations/FadeUpSection'
import { ScrollReveal } from '../../../components/animations/ScrollReveal'
import { StaggerContainer } from '../../../components/animations/StaggerContainer'
import { aboutData } from '../data/aboutContent'

export function AboutStorySection({ onOpenConsultation }) {
  const { story } = aboutData

  return (
    <FadeUpSection
      id="about-story"
      className="bg-white py-16 md:py-24 text-[#18181B] border-b border-gray-100"
      duration={800}
    >
      <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Stage Image with Luxury Gold Accent Rim */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" duration={750}>
              <div className="relative group overflow-hidden rounded-[20px] border-2 border-[#E5A93C]/40 bg-[#160404] shadow-[0_15px_40px_rgba(40,4,4,0.2)]">
                <img
                  src={story.image}
                  alt="Không gian tổ chức sự kiện chuyên nghiệp Nam Thành"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#200303]/85 via-transparent to-transparent opacity-80"
                  aria-hidden="true"
                />
                {/* Image Overlay Label */}
                <div className="absolute bottom-6 inset-x-6 text-white text-center">
                  <span className="font-['Playfair_Display',serif] text-[20px] font-bold text-[#F0C554] block">
                    Nam Thành Sự Kiện
                  </span>
                  <span className="text-[12px] uppercase tracking-widest text-white/90">
                    Trọn Gói • Đẳng Cấp • Chuyên Nghiệp
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Story & Highlights */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" duration={750}>
              {/* Tag */}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7D0D0D]/10 px-4 py-1 text-[12px] font-extrabold uppercase tracking-widest text-[#9E1C1C]">
                <Sparkle size={14} weight="fill" className="text-[#D97706]" />
                {story.tag}
              </span>

              {/* Title & Subtitle */}
              <h2 className="mt-3 font-[var(--font-display)] text-[26px] sm:text-[32px] md:text-[36px] font-black uppercase text-[#18181B] leading-tight">
                {story.mainTitle}
              </h2>
              <p className="mt-2 text-[16px] sm:text-[17px] font-bold text-[#B45309]">
                {story.subTitle}
              </p>

              <div className="my-4 h-[3px] w-20 bg-gradient-to-r from-[#D97706] to-[#E5A93C] rounded-full" />

              {/* Paragraphs */}
              <div className="space-y-3 text-[14.5px] sm:text-[15px] leading-relaxed text-[#52525B]">
                {story.paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>

              {/* 3 Core Highlights (TẬN TÂM, SÁNG TẠO, CHUYÊN NGHIỆP) */}
              <StaggerContainer
                className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
                delay={100}
                staggerDelay={80}
              >
                {story.highlights.map((item) => {
                  const IconComp = item.icon
                  return (
                    <div
                      key={item.title}
                      className="rounded-[12px] border border-[#E8E1D3] bg-[#FFFDF9] p-4 text-center shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#D97706]/40 hover:shadow-md"
                    >
                      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#7D0D0D]/10 text-[#7D0D0D]">
                        <IconComp size={20} weight="bold" />
                      </div>
                      <h3 className="font-['Montserrat',sans-serif] text-[13px] font-black uppercase tracking-wider text-[#18181B]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[11.5px] text-[#71717A] leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  )
                })}
              </StaggerContainer>

              {/* CTA Action */}
              <div className="mt-8">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 rounded-[8px] bg-[#C97A1E] hover:bg-[#D97706] px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(201,122,30,0.35)] transition-all duration-200 hover:scale-[1.02] active:translate-y-px"
                >
                  LIÊN HỆ TƯ VẤN NGAY
                  <ArrowRight size={15} weight="bold" />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </FadeUpSection>
  )
}
