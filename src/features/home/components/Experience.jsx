import { ArrowRight, Star } from '@phosphor-icons/react'
import { SectionTitle } from '../../../components/SectionTitle'
import { galleryImages, testimonials } from '../data/homeContent'

function Rating() {
  return (
    <div className="flex gap-0.5 text-[var(--color-gold-strong)]" aria-label="5 sao">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={15} weight="fill" />
      ))}
    </div>
  )
}

export function Experience() {
  return (
    <section id="khong-gian" className="mx-auto grid max-w-[1400px] gap-7 px-4 py-8 md:px-8 lg:grid-cols-[0.48fr_0.52fr]">
      <div>
        <SectionTitle
          title="KHÔNG GIAN NHÀ HÀNG"
          action={
            <a
              href="#khong-gian"
              className="hidden items-center gap-2 text-sm font-semibold text-[var(--color-green)] md:inline-flex"
            >
              Xem thêm
              <ArrowRight size={16} weight="bold" />
            </a>
          }
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          {galleryImages.map((item, index) => (
            <figure
              key={item.alt}
              className={`overflow-hidden border border-[rgba(211,184,126,0.45)] bg-white/60 shadow-[0_14px_34px_rgba(18,57,38,0.08)] ${
                index === 0 ? 'col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-full min-h-40 w-full object-cover"
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
              className="hidden items-center gap-2 text-sm font-semibold text-[var(--color-green)] md:inline-flex"
            >
              Xem tất cả
              <ArrowRight size={16} weight="bold" />
            </a>
          }
        />
        <div id="khach-hang" className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="border border-[rgba(211,184,126,0.45)] bg-white/62 p-5 shadow-[0_14px_34px_rgba(18,57,38,0.08)] backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[var(--color-green)] font-[var(--font-display)] text-sm font-bold text-[var(--color-gold)]">
                  {item.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-ink)]">{item.name}</h3>
                  <p className="text-xs text-[var(--color-muted)]">{item.role}</p>
                </div>
              </div>
              <div className="mt-3">
                <Rating />
              </div>
              <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">{item.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
