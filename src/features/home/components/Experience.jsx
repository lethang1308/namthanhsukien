import { ArrowRight, Star } from '@phosphor-icons/react'
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
    <section
      id="khong-gian"
      className="mx-auto grid max-w-[1400px] gap-6 px-4 pb-8 pt-4 md:px-8 lg:grid-cols-[0.48fr_0.52fr]"
    >
      <div>
        <SectionTitle
          title="KHÔNG GIAN NHÀ HÀNG"
          action={
            <a
              href="#khong-gian"
              className="hidden items-center gap-1.5 text-[13px] font-semibold text-[var(--color-green)] md:inline-flex"
            >
              Xem thêm
              <ArrowRight size={15} weight="bold" />
            </a>
          }
        />
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-4">
          {galleryImages.map((item) => (
            <figure
              key={item.alt}
              className="aspect-[4/3] overflow-hidden rounded-[12px] border border-[rgba(184,137,53,0.18)] bg-white/40"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>

      <div>
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
        <div id="khach-hang" className="grid gap-3.5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="min-h-[148px] rounded-[14px] border border-[rgba(184,137,53,0.25)] bg-white/58 p-4 backdrop-blur-[2px]"
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
        </div>
      </div>
    </section>
  )
}
