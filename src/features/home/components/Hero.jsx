import {
  BookOpen,
  CalendarCheck,
  ChefHat,
  HouseLine,
  Leaf,
} from '@phosphor-icons/react'
import { hero, serviceHighlights } from '../data/homeContent'

const highlightIcons = [Leaf, ChefHat, HouseLine]

export function Hero() {
  return (
    <section id="trang-chu" className="relative isolate overflow-x-clip overflow-y-visible">
      <div className="relative min-h-[720px] overflow-visible md:h-[520px] md:min-h-0 xl:h-[560px]">
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_28%_50%,rgba(255,250,241,0.92),rgba(255,250,241,0.62)_42%,rgba(255,250,241,0.18)_72%)]"
          aria-hidden="true"
        />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[60%] md:block">
          <img
            src={hero.facadeImage}
            alt="Mặt tiền nhà hàng Chả Cá Tràng An"
            className="h-full w-full object-cover object-[54%_42%]"
            fetchPriority="high"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 left-[34%] z-[2] hidden w-[38%] bg-[linear-gradient(90deg,var(--color-paper)_0%,rgba(255,250,241,0.96)_16%,rgba(255,250,241,0.72)_34%,rgba(255,250,241,0.24)_58%,rgba(255,250,241,0)_82%)] md:block"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] hidden h-28 bg-[linear-gradient(0deg,var(--color-paper)_0%,rgba(255,250,241,0.66)_38%,rgba(255,250,241,0)_100%)] md:block"
          aria-hidden="true"
        />

        <img
          src={hero.heroPanCutoutImage}
          alt="Chảo chả cá nóng với thì là và hành"
          className="pointer-events-none absolute bottom-2 left-[40.8%] z-[3] hidden w-[min(42vw,560px)] max-w-none drop-shadow-[0_28px_34px_rgba(16,45,30,0.26)] md:block xl:bottom-3 xl:left-[41.6%] xl:w-[560px]"
          fetchPriority="high"
        />

        <div className="relative z-[4] mx-auto flex max-w-[1400px] flex-col px-4 pt-9 md:h-full md:justify-center md:px-8 md:pt-0">
          <div className="max-w-xl md:w-[44%]">
            <p className="font-script mb-1 pb-1 text-[42px] leading-[1.12] text-[var(--color-green)] sm:text-[50px] md:text-[48px] xl:text-[58px]">
              {hero.script}
            </p>
            <h1 className="font-[var(--font-display)] text-[40px] font-bold leading-[1.02] text-[var(--color-green)] sm:text-[48px] md:text-[44px] xl:text-[56px]">
              {hero.title}
            </h1>
            <div className="my-5 h-px w-48 bg-[linear-gradient(90deg,transparent,var(--color-green),transparent)]" />
            <h2 className="mb-3 font-[var(--font-display)] text-xl font-semibold text-[var(--color-green)] md:text-[23px]">
              {hero.subtitle}
            </h2>
            <p className="max-w-[560px] text-base leading-7 text-[var(--color-muted)] md:text-[17px]">
              {hero.description}
            </p>

            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href="#dat-ban"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-green)] px-6 py-3 text-sm font-bold text-white shadow-[0_18px_34px_rgba(12,72,44,0.22)] transition hover:bg-[var(--color-green-deep)] active:translate-y-px sm:w-auto"
              >
                <CalendarCheck className="mr-2" size={18} weight="bold" />
                Đặt bàn ngay
              </a>
              <a
                href="#thuc-don"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(15,83,52,0.35)] bg-white/65 px-6 py-3 text-sm font-bold text-[var(--color-green)] transition hover:bg-white active:translate-y-px sm:w-auto"
              >
                <BookOpen className="mr-2" size={18} weight="bold" />
                Xem thực đơn
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-[3] mx-auto mt-8 h-[318px] max-w-[1400px] overflow-visible px-4 md:hidden">
          <div className="absolute inset-x-4 bottom-0 h-[260px] overflow-hidden">
            <img
              src={hero.facadeImage}
              alt="Mặt tiền nhà hàng Chả Cá Tràng An"
              className="h-full w-full object-cover object-[58%_42%]"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-paper)_0%,rgba(255,250,241,0.38)_26%,rgba(255,250,241,0)_56%),linear-gradient(90deg,rgba(255,250,241,0.78)_0%,rgba(255,250,241,0.16)_42%,rgba(255,250,241,0)_76%)]"
              aria-hidden="true"
            />
          </div>
          <img
            src={hero.heroPanCutoutImage}
            alt="Chảo chả cá nóng với thì là và hành"
            className="pointer-events-none absolute left-1/2 top-0 z-[3] w-[350px] max-w-[92vw] -translate-x-1/2 drop-shadow-[0_18px_26px_rgba(16,45,30,0.24)]"
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-3 px-4 pb-8 md:grid-cols-3 md:px-8">
        {serviceHighlights.map((item, index) => {
          const Icon = highlightIcons[index]
          return (
            <article
              className="flex items-start gap-4 border-l border-[rgba(211,184,126,0.55)] bg-white/35 px-5 py-4 backdrop-blur-sm"
              key={item.title}
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[rgba(211,184,126,0.8)] text-[var(--color-gold-strong)]">
                <Icon size={24} weight="duotone" />
              </div>
              <div>
                <h3 className="font-[var(--font-display)] text-base font-bold text-[var(--color-green)]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">{item.text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
