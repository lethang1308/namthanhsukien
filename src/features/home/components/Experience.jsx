import { ArrowRight, Star } from '@phosphor-icons/react'
import { FadeUpSection } from '../../../components/animations/FadeUpSection'
import { ScrollReveal } from '../../../components/animations/ScrollReveal'
import { StaggerContainer } from '../../../components/animations/StaggerContainer'
import { SectionTitle } from '../../../components/SectionTitle'
import { galleryImages, testimonials } from '../data/homeContent'

function Rating() {
  return (
    <div className="flex gap-0.5 text-[var(--color-gold-strong)]" aria-label="5 sao">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={14} weight="fill" />
      ))}
    </div>
  )
}

export function Experience() {
  return (
    <FadeUpSection
      id="space"
      className="mx-auto grid max-w-[1400px] gap-6 px-4 pb-8 pt-4 md:px-8 lg:grid-cols-[0.48fr_0.52fr]"
      duration={800}
    >
      <div>
        <ScrollReveal duration={760}>
          <SectionTitle
          title="KHÔNG GIAN NHÀ HÀNG"
          action={
            <a
              href="#space"
              className="hidden items-center gap-1.5 text-[13px] font-semibold text-[var(--color-green)] md:inline-flex"
            >
              Xem thêm
              <ArrowRight size={15} weight="bold" />
            </a>
          }
          />
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-4" delay={100} staggerDelay={100}>
          {galleryImages.map((item) => (
            <figure
              key={item.alt}
              className="aspect-[4/5] overflow-hidden rounded-[12px] border border-[rgba(184,137,53,0.18)] bg-white/40"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </figure>
          ))}
        </StaggerContainer>
      </div>

      <div>
        <ScrollReveal delay={100} duration={760}>
          <SectionTitle
          title="KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI"
          action={
            <a
              href="#khach-hang"
              className="hidden items-center gap-1.5 text-[13px] font-semibold text-[var(--color-green)] md:inline-flex"
            >
              Xem tất cả
              <ArrowRight size={15} weight="bold" />
            </a>
          }
          />
        </ScrollReveal>
        <StaggerContainer id="khach-hang" className="grid gap-3.5 md:grid-cols-2 xl:grid-cols-3" delay={180} staggerDelay={100}>
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="min-h-[148px] lg:h-[200px] rounded-[14px] border border-[rgba(184,137,53,0.25)] bg-white/58 p-4 backdrop-blur-[2px]"
            >
              <div className="flex items-center gap-2.5">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--color-green)] font-[var(--font-display)] text-[12px] font-bold text-[var(--color-gold)]">
                  {item.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>
                <div>
                  <h3 className="text-[13.5px] font-bold leading-tight text-[var(--color-ink)]">
                    {item.name}
                  </h3>
                  <p className="mt-0.5 text-[10.5px] leading-tight text-[var(--color-muted)]">
                    {item.role}
                  </p>
                </div>
              </div>
              <div className="mt-2.5">
                <Rating />
              </div>
              <p className="mt-2.5 text-[11.5px] leading-[1.55] text-[var(--color-muted)]">
                {item.quote}
              </p>
            </article>
          ))}
        </StaggerContainer>
      </div>
    </FadeUpSection>
  )
}
