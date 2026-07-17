import {
  BookOpen,
  CalendarCheck,
  ChefHat,
  HouseLine,
  Leaf,
} from '@phosphor-icons/react'
import { FadeUpSection } from '../../../components/animations/FadeUpSection'
import { StaggerContainer } from '../../../components/animations/StaggerContainer'
import { hero } from '../data/homeContent'

const heroHighlights = [
  {
    Icon: Leaf,
    lines: ['Nguyên liệu', 'tươi mỗi ngày'],
  },
  {
    Icon: ChefHat,
    lines: ['Công thức', 'gia truyền'],
  },
  {
    Icon: HouseLine,
    lines: ['Không gian', 'ấm cúng'],
  },
]

export function Hero() {
  return (
    <FadeUpSection
      id="trang-chu"
      className="relative isolate overflow-x-clip overflow-y-visible"
      duration={800}
    >
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
          className="pointer-events-none absolute bottom-[-14px] left-[39.7%] z-[3] hidden w-[min(42vw,500px)] max-w-none origin-[48%_48%] rotate-[-4deg] [mask-image:linear-gradient(90deg,black_0%,black_88%,transparent_99%)] drop-shadow-[0_30px_36px_rgba(16,45,30,0.26)] [-webkit-mask-image:linear-gradient(90deg,black_0%,black_88%,transparent_99%)] md:block xl:bottom-[-44px] xl:left-[40%] xl:w-[580px] xl:rotate-[-6deg]"
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

            <StaggerContainer
              className="mt-8 grid max-w-[540px] grid-cols-3 items-center gap-0 sm:mt-10 md:mt-16"
              delay={180}
              aria-label="Điểm nổi bật của nhà hàng"
              staggerDelay={100}
            >
              {heroHighlights.map(({ Icon, lines }, index) => (
                <div
                  className={`flex min-w-0 items-center gap-2.5 ${
                    index > 0
                      ? 'border-l border-[rgba(184,137,53,0.34)] pl-3 sm:pl-5 md:pl-6'
                      : ''
                  }`}
                  key={lines.join(' ')}
                >
                  <Icon
                    className="h-6 w-6 shrink-0 text-[var(--color-gold-strong)] sm:h-7 sm:w-7 md:h-8 md:w-8"
                    weight="regular"
                  />
                  <span className="font-[var(--font-display)] text-[12px] font-semibold leading-[1.32] text-[var(--color-green)] sm:text-[13px] md:text-[13.5px]">
                    {lines[0]}
                    <br />
                    {lines[1]}
                  </span>
                </div>
              ))}
            </StaggerContainer>
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
            className="pointer-events-none absolute left-1/2 top-0 z-[3] w-[350px] max-w-[92vw] -translate-x-1/2 [mask-image:linear-gradient(90deg,black_0%,black_88%,transparent_99%)] drop-shadow-[0_18px_26px_rgba(16,45,30,0.24)] [-webkit-mask-image:linear-gradient(90deg,black_0%,black_88%,transparent_99%)]"
          />
        </div>
      </div>
    </FadeUpSection>
  )
}
