import { useEffect } from 'react'
import {
  Armchair,
  CalendarCheck,
  FishSimple,
  HouseLine,
  LampPendant,
  LockKey,
  PaintBrush,
  Phone,
  Sparkle,
  UsersFour,
  UsersThree,
} from '@phosphor-icons/react'
import { Header } from '../home/components/Header'
import { Footer } from '../home/components/Footer'
import { FadeUpSection } from '../../components/animations/FadeUpSection'
import { ScrollReveal } from '../../components/animations/ScrollReveal'
import { StaggerContainer } from '../../components/animations/StaggerContainer'
import paperBackground from '../../assets/b4002091-4a7b-4407-a4a9-992d5654bdd3.png'
import {
  checkinCollage,
  featuredSpaces,
  groupSpaces,
  interiorBanner,
  interiorDetails,
  spaceHero,
  spaceHighlights,
} from './data/spaceContent'

const iconMap = {
  Armchair,
  FishSimple,
  HouseLine,
  LampPendant,
  LockKey,
  PaintBrush,
  Sparkle,
  UsersFour,
  UsersThree,
}

function MappedIcon({ name, size = 24, weight = 'regular', className = '' }) {
  const Icon = iconMap[name] || Sparkle
  return <Icon size={size} weight={weight} className={className} />
}

function TitleLine({ children, align = 'left' }) {
  return (
    <div className={`mb-4 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
      <FishSimple size={18} weight="regular" className="text-[var(--color-gold-strong)]" />
      <h2 className="font-[var(--font-display)] text-[22px] font-bold leading-none text-[var(--color-green)] md:text-[24px]">
        {children}
      </h2>
    </div>
  )
}

function ImageCard({ image, title, description }) {
  return (
    <article className="overflow-hidden rounded-[16px] border border-[rgba(184,137,53,0.32)] bg-[#fffdf8] shadow-[0_5px_18px_rgba(34,51,42,0.045)]">
      <div className="aspect-[16/10] overflow-hidden border-b border-[rgba(184,137,53,0.16)]">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]" loading="lazy" />
      </div>
      <div className="p-4">
        <h3 className="font-[var(--font-display)] text-[16px] font-bold text-[var(--color-ink)]">{title}</h3>
        <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[var(--color-muted)]">{description}</p>
      </div>
    </article>
  )
}

export function SpacePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div
      className="min-h-[100dvh] bg-[var(--color-paper)] text-[var(--color-ink)]"
      style={{
        backgroundImage: `linear-gradient(rgba(255,250,241,0.18), rgba(255,250,241,0.18)), url(${paperBackground})`,
        backgroundRepeat: 'repeat-y',
        backgroundPosition: 'top center',
        backgroundSize: '100% auto',
      }}
    >
      <Header />

      <main className="pb-5">
        <FadeUpSection
          as="section"
          className="relative isolate overflow-hidden border-b border-[rgba(184,137,53,0.18)] bg-[#fffaf1]/78"
        >
          <div className="mx-auto grid min-h-[520px] max-w-[1400px] items-center gap-7 px-4 py-8 md:px-8 lg:grid-cols-[0.34fr_0.66fr] lg:py-0">
            <div className="relative z-[2]">
              <p className="font-script pb-1 text-[42px] leading-[1.05] text-[var(--color-green)] md:text-[54px]">
                {spaceHero.script}
              </p>
              <h1 className="font-[var(--font-display)] text-[46px] font-bold leading-[0.98] text-[var(--color-green)] md:text-[66px]">
                {spaceHero.title}
              </h1>
              <div className="my-4 flex items-center gap-4">
                <div className="h-px w-20 bg-[rgba(184,137,53,0.55)]" />
                <FishSimple size={20} weight="regular" className="text-[var(--color-gold-strong)]" />
                <div className="h-px w-20 bg-[rgba(184,137,53,0.55)]" />
              </div>
              <p className="max-w-[470px] text-[14px] leading-[1.7] text-[var(--color-muted)] md:text-[15px]">
                {spaceHero.description}
              </p>

              <div className="mt-8 grid max-w-[520px] grid-cols-2 gap-y-5 sm:grid-cols-4">
                {spaceHighlights.map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex flex-col items-center gap-2.5 text-center ${
                      index > 0 ? 'sm:border-l sm:border-[rgba(184,137,53,0.3)]' : ''
                    }`}
                  >
                    <MappedIcon
                      name={item.icon}
                      size={36}
                      className="text-[var(--color-gold-strong)]"
                      weight="regular"
                    />
                    <span className="max-w-[86px] text-[13px] font-semibold leading-[1.3] text-[var(--color-green)]">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid h-[430px] gap-2.5 md:h-[470px] lg:grid-cols-[1.55fr_0.82fr]">
              <div className="overflow-hidden rounded-[12px] border border-[rgba(184,137,53,0.22)] bg-[#fffdf8] shadow-[0_10px_28px_rgba(34,51,42,0.08)]">
                <img
                  src={spaceHero.images.main}
                  alt="Không gian nhà hàng Chả Cá Tràng An"
                  className="h-full w-full object-cover object-[50%_52%]"
                  fetchPriority="high"
                />
              </div>
              <div className="hidden grid-rows-2 gap-2.5 lg:grid">
                <div className="overflow-hidden rounded-[12px] border border-[rgba(184,137,53,0.22)] bg-[#fffdf8]">
                  <img
                    src={spaceHero.images.sideTop}
                    alt="Góc bàn ăn xanh ấm cúng"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-[12px] border border-[rgba(184,137,53,0.22)] bg-[#fffdf8]">
                  <img
                    src={spaceHero.images.sideBottom}
                    alt="Khu bàn riêng tư trong nhà hàng"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeUpSection>

        <section className="mx-auto mt-7 max-w-[1400px] px-4 md:px-8">
          <TitleLine>KHÔNG GIAN NỔI BẬT</TitleLine>
          <StaggerContainer className="grid gap-4 md:grid-cols-4" staggerDelay={80}>
            {featuredSpaces.map((item) => (
              <ImageCard key={item.title} {...item} />
            ))}
          </StaggerContainer>
        </section>

        <section className="mx-auto mt-8 grid max-w-[1400px] gap-5 px-4 md:px-8 lg:grid-cols-[0.42fr_0.58fr]">
          <ScrollReveal>
            <TitleLine>GÓC CHECK-IN</TitleLine>
            <div className="grid h-[310px] grid-cols-4 grid-rows-2 gap-2.5 overflow-hidden rounded-[16px] border border-[rgba(184,137,53,0.3)] bg-[#fffdf8] p-2 shadow-[0_5px_18px_rgba(34,51,42,0.045)]">
              {checkinCollage.map((item, index) => (
                <div key={index} className={`relative overflow-hidden rounded-[10px] ${item.className}`}>
                  <img
                    src={item.image}
                    alt="Góc check-in tại Chả Cá Tràng An"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  {index === 0 && (
                    <div className="absolute inset-0 grid place-items-center bg-[rgba(7,88,59,0.08)]">
                      <div className="text-center font-[var(--font-display)] text-[26px] font-bold leading-tight text-[var(--color-gold)] drop-shadow-[0_2px_5px_rgba(8,59,37,0.55)]">
                        CHẢ CÁ
                        <br />
                        TRÀNG AN
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="font-script mt-2 text-center text-[22px] leading-[1.15] text-[var(--color-green)]">
              Mỗi góc nhỏ là một khung hình đẹp
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <TitleLine>BÀN NHÓM & GIA ĐÌNH</TitleLine>
            <div className="grid gap-4 md:grid-cols-3">
              {groupSpaces.map((item) => (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-[16px] border border-[rgba(184,137,53,0.32)] bg-[#fffdf8] shadow-[0_5px_18px_rgba(34,51,42,0.045)]"
                >
                  <div className="relative aspect-[16/10] border-b border-[rgba(184,137,53,0.16)]">
                    <div className="absolute inset-0 overflow-hidden">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="absolute -bottom-8 left-4 z-[2] grid h-16 w-16 place-items-center rounded-full border-[5px] border-[#fffdf8] bg-[var(--color-green)] text-[var(--color-gold)] shadow-[0_8px_18px_rgba(15,81,52,0.2)]">
                      <MappedIcon name={item.icon} size={34} weight="regular" />
                    </div>
                  </div>
                  <div className="p-4 pt-9">
                    <h3 className="font-[var(--font-display)] text-[16px] font-bold text-[var(--color-ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[13px] font-semibold text-[var(--color-ink)]">{item.subtitle}</p>
                    <p className="mt-2 text-[12.5px] leading-[1.55] text-[var(--color-muted)]">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="font-script mt-2 text-center text-[22px] leading-[1.15] text-[var(--color-green)]">
              Sắp xếp linh hoạt theo nhu cầu của bạn
            </p>
          </ScrollReveal>
        </section>

        <section className="mt-8 border-y border-[rgba(184,137,53,0.18)] bg-[#fffaf1]/62">
          <div className="mx-auto grid max-w-[1400px] items-center gap-5 px-4 py-5 md:px-8 lg:grid-cols-[0.32fr_0.68fr]">
            <ScrollReveal>
              <TitleLine>CHI TIẾT NỘI THẤT</TitleLine>
              <div className="grid gap-4 sm:grid-cols-2">
                {interiorDetails.map((item) => (
                  <article key={item.title} className="flex items-center gap-3">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[rgba(184,137,53,0.34)] bg-[#fffdf8] text-[var(--color-gold-strong)]">
                      <MappedIcon name={item.icon} size={23} weight="regular" />
                    </div>
                    <p className="text-[12.5px] font-semibold leading-[1.35] text-[var(--color-ink)]">
                      {item.title}
                      <br />
                      <span className="font-normal text-[var(--color-muted)]">{item.description}</span>
                    </p>
                  </article>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal className="h-[180px] overflow-hidden rounded-[16px] border border-[rgba(184,137,53,0.28)] bg-[#fffdf8] shadow-[0_5px_18px_rgba(34,51,42,0.045)]">
              <img src={interiorBanner.image} alt={interiorBanner.alt} className="h-full w-full object-cover object-[50%_48%]" />
            </ScrollReveal>
          </div>
        </section>

        <section className="mx-auto mt-5 max-w-[1400px] px-4 md:px-8">
          <ScrollReveal className="relative isolate overflow-hidden rounded-[18px] border border-[rgba(184,137,53,0.34)] bg-[#fffdf8]/92 px-5 py-4 shadow-[0_8px_24px_rgba(34,51,42,0.055)]">
            <div
              className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(circle_at_10%_20%,rgba(184,137,53,0.12)_0%,rgba(184,137,53,0)_26%),radial-gradient(circle_at_90%_0%,rgba(15,81,52,0.08)_0%,rgba(15,81,52,0)_30%)]"
              aria-hidden="true"
            />
            <FishSimple
              size={78}
              weight="regular"
              className="absolute -bottom-8 right-8 -z-[1] rotate-[-14deg] text-[rgba(184,137,53,0.13)]"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
              <div className="flex flex-col items-center gap-4 lg:flex-row">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[var(--color-green)] text-[var(--color-gold)] shadow-[0_10px_24px_rgba(15,81,52,0.18)]">
                  <CalendarCheck size={34} weight="regular" />
                </div>
                <div>
                  <h3 className="font-[var(--font-display)] text-[20px] font-bold leading-tight text-[var(--color-green)] md:text-[22px]">
                    ĐẶT BÀN TRƯỚC - TRẢI NGHIỆM TRỌN VẸN KHÔNG GIAN ẤM CÚNG
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-muted)]">
                    Không gian đẹp đang chờ bạn và những người thân yêu.
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 flex-wrap justify-center gap-3">
                <a
                  href="#dat-ban"
                  className="inline-flex h-10 items-center rounded-full bg-[var(--color-green)] px-7 text-[13px] font-bold text-white shadow-[0_8px_20px_rgba(15,81,52,0.18)] transition hover:bg-[var(--color-green-deep)] active:translate-y-px"
                >
                  Đặt bàn ngay
                </a>
                <a
                  href="tel:0961374566"
                  className="inline-flex h-10 items-center rounded-full border border-[rgba(15,81,52,0.35)] bg-white/70 px-5 text-[13px] font-bold text-[var(--color-green)] transition hover:bg-white active:translate-y-px"
                >
                  <Phone className="mr-2" size={17} weight="bold" />
                  0961 374 566
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  )
}
