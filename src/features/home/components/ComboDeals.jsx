import { ArrowRight, CalendarCheck, Gift, UsersThree } from '@phosphor-icons/react'
import { combos } from '../data/homeContent'

export function ComboDeals() {
  return (
    <section id="combo" className="mx-auto max-w-[1400px] px-4 py-5 md:px-8">
      <div className="border border-[rgba(211,184,126,0.55)] bg-white/50 p-4 shadow-[0_18px_50px_rgba(18,57,38,0.08)] backdrop-blur-sm md:p-5">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-green)] md:text-3xl">
            COMBO ƯU ĐÃI
          </h2>
          <a
            href="#combo"
            className="hidden items-center gap-2 text-sm font-semibold text-[var(--color-green)] md:inline-flex"
          >
            Xem tất cả combo
            <ArrowRight size={16} weight="bold" />
          </a>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_0.9fr]">
          {combos.map((combo) => (
            <article
              className="grid overflow-hidden border border-[rgba(211,184,126,0.45)] bg-white/72 shadow-[0_12px_30px_rgba(18,57,38,0.07)] sm:grid-cols-[0.95fr_1.05fr] lg:grid-cols-1 xl:grid-cols-[0.9fr_1.1fr]"
              key={combo.name}
            >
              <div className="aspect-[1.22] overflow-hidden">
                <img
                  src={combo.image}
                  alt={combo.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center p-5">
                <div className="mb-2 flex items-center gap-2 text-[var(--color-gold-strong)]">
                  <UsersThree size={20} weight="duotone" />
                  <h3 className="font-[var(--font-display)] text-lg font-bold text-[var(--color-ink)]">
                    {combo.name}
                  </h3>
                </div>
                <p className="text-sm text-[var(--color-muted)]">{combo.description}</p>
                <p className="mt-3 font-[var(--font-display)] text-2xl font-bold text-[var(--color-green)]">
                  {combo.price}
                </p>
                <a
                  href="#dat-ban"
                  className="mt-4 inline-flex w-max rounded-full bg-[var(--color-green)] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[var(--color-green-deep)] active:translate-y-px"
                >
                  Đặt ngay
                </a>
              </div>
            </article>
          ))}

          <aside
            id="dat-ban"
            className="flex flex-col justify-center bg-[radial-gradient(circle_at_20%_10%,rgba(211,184,126,0.28),transparent_34%),var(--color-green)] p-7 text-white shadow-[0_18px_40px_rgba(12,72,44,0.22)]"
          >
            <Gift size={38} weight="duotone" className="text-[var(--color-gold)]" />
            <h3 className="mt-4 font-[var(--font-display)] text-2xl font-bold">
              Ưu đãi đặc biệt
            </h3>
            <p className="mt-2 leading-7 text-white/86">
              Giảm 10% cho khách đặt bàn qua website trong tuần khai trương.
            </p>
            <a
              href="tel:0961374566"
              className="mt-6 inline-flex w-max items-center rounded-full border border-[rgba(211,184,126,0.7)] px-5 py-3 text-sm font-bold text-[var(--color-gold)] transition hover:bg-white/10 active:translate-y-px"
            >
              <CalendarCheck className="mr-2" size={18} weight="bold" />
              Đặt bàn ngay
            </a>
            <p className="mt-4 text-xs text-white/72">Không áp dụng cùng ưu đãi khác.</p>
          </aside>
        </div>
      </div>
    </section>
  )
}
