import { ArrowRight, CalendarCheck, FishSimple, Gift } from '@phosphor-icons/react'
import { combos } from '../data/homeContent'

export function ComboDeals() {
  return (
    <section id="combo" className="mx-auto max-w-[1400px] px-4 py-4 md:px-8">
      <div className="rounded-[22px] border border-[rgba(184,137,53,0.25)] bg-white/26 p-3.5 backdrop-blur-[2px] md:p-4">
        <div className="mb-3 flex items-center justify-between gap-4">
          <h2 className="flex items-center gap-2 font-[var(--font-display)] text-[21px] font-bold leading-tight text-[var(--color-green)] md:text-[23px]">
            COMBO ƯU ĐÃI
            <FishSimple size={23} weight="regular" className="text-[var(--color-gold-strong)]" />
          </h2>
          <a
            href="#combo"
            className="hidden items-center gap-1.5 text-[13px] font-semibold text-[var(--color-green)] md:inline-flex"
          >
            Xem tất cả combo
            <ArrowRight size={15} weight="bold" />
          </a>
        </div>

        <div className="grid gap-3.5 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_0.88fr]">
          {combos.map((combo) => (
            <article
              className="grid h-[150px] overflow-hidden rounded-[16px] border border-[rgba(184,137,53,0.25)] bg-[rgba(255,250,241,0.96)] grid-cols-[0.46fr_0.54fr]"
              key={combo.name}
            >
              <div className="h-full overflow-hidden">
                <img
                  src={combo.image}
                  alt={combo.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center p-3.5">
                <h3 className="font-[var(--font-display)] text-[14px] font-semibold leading-tight text-[var(--color-ink)] md:text-[15px]">
                  {combo.name}
                </h3>
                <p className="mt-1 text-[11.5px] leading-[1.45] text-[var(--color-muted)]">
                  {combo.description}
                </p>
                <p className="mt-2 font-[var(--font-display)] text-[18px] font-bold leading-tight text-[var(--color-green)]">
                  {combo.price}
                </p>
                <a
                  href="#dat-ban"
                  className="mt-3 inline-flex h-8 w-max items-center rounded-full bg-[var(--color-green)] px-4 text-[12px] font-bold text-white transition hover:bg-[var(--color-green-deep)] active:translate-y-px"
                >
                  Đặt ngay
                </a>
              </div>
            </article>
          ))}

          <aside
            id="dat-ban"
            className="relative flex h-[150px] flex-col items-center justify-center overflow-hidden rounded-[16px] bg-[linear-gradient(145deg,#075B3B,#064A31)] p-4 text-center text-white"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(211,184,126,0.18),transparent_36%)]"
              aria-hidden="true"
            />
            <Gift size={32} weight="duotone" className="relative text-[var(--color-gold)]" />
            <h3 className="relative mt-2 font-[var(--font-display)] text-[16px] font-bold leading-tight text-white">
              Ưu đãi đặc biệt
            </h3>
            <p className="relative mt-1.5 max-w-[210px] text-[12.5px] leading-[1.5] text-white/85">
              Giảm 10% cho khách đặt bàn qua website trong tuần khai trương.
            </p>
            <a
              href="tel:0961374566"
              className="relative mt-3 inline-flex h-9 items-center rounded-full border border-[rgba(211,184,126,0.78)] px-4 text-[12px] font-bold text-[var(--color-gold)] transition hover:bg-[var(--color-gold)] hover:text-[var(--color-green-deep)] active:translate-y-px"
            >
              <CalendarCheck className="mr-1.5" size={16} weight="bold" />
              Đặt bàn ngay
            </a>
            <p className="relative mt-2 text-[10px] leading-tight text-white/65">
              Không áp dụng cùng ưu đãi khác.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
