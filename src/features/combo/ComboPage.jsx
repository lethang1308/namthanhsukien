import { useEffect } from 'react'
import {
  Alarm,
  CalendarCheck,
  ChefHat,
  CheckCircle,
  FishSimple,
  Gift,
  HandHeart,
  HouseLine,
  Medal,
  PaperPlaneTilt,
  Phone,
  Plus,
  SealCheck,
  Star,
  User,
  Users,
  UsersThree,
} from '@phosphor-icons/react'
import { Header } from '../home/components/Header'
import { Footer } from '../home/components/Footer'
import { FadeUpSection } from '../../components/animations/FadeUpSection'
import { ScrollReveal } from '../../components/animations/ScrollReveal'
import { StaggerContainer } from '../../components/animations/StaggerContainer'
import paperBackground from '../../assets/b4002091-4a7b-4407-a4a9-992d5654bdd3.png'
import {
  comboCards,
  comboHero,
  comboHighlights,
  comboTabs,
  comboTestimonials,
  faqs,
  partyCombos,
  reasons,
} from './data/comboContent'
import { MobileComboPage } from './MobileComboPage'

const iconMap = {
  Alarm,
  CalendarCheck,
  ChefHat,
  FishSimple,
  Gift,
  HandHeart,
  HouseLine,
  Medal,
  SealCheck,
  User,
  Users,
  UsersFour: UsersThree,
  UsersThree,
}

function MappedIcon({ name, className = '', size = 24, weight = 'regular' }) {
  const Icon = iconMap[name] || SealCheck
  return <Icon className={className} size={size} weight={weight} />
}

function SectionDividerTitle({ children }) {
  return (
    <div className="my-4 flex items-center justify-center gap-4">
      <div className="h-px w-12 bg-[rgba(184,137,53,0.36)]" />
      <FishSimple size={19} weight="regular" className="text-[var(--color-gold-strong)]" />
      <h2 className="text-center font-[var(--font-display)] text-[18px] font-bold text-[var(--color-green)] md:text-[20px]">
        {children}
      </h2>
      <FishSimple size={19} weight="regular" className="scale-x-[-1] text-[var(--color-gold-strong)]" />
      <div className="h-px w-12 bg-[rgba(184,137,53,0.36)]" />
    </div>
  )
}

function Rating() {
  return (
    <div className="flex gap-0.5 text-[var(--color-gold-strong)]" aria-label="5 sao">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={13} weight="fill" />
      ))}
    </div>
  )
}

export function ComboPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="hidden md:block">
        <div
          className="min-h-[100dvh] bg-[var(--color-paper)] text-[var(--color-ink)]"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 250, 241, 0.16), rgba(255, 250, 241, 0.18)), url(${paperBackground})`,
            backgroundRepeat: 'repeat-y',
            backgroundPosition: 'top center',
            backgroundSize: '100% auto',
          }}
        >
          <Header />

      <main className="pb-4">
        <FadeUpSection as="section" className="relative isolate overflow-hidden border-b border-[rgba(184,137,53,0.18)]">
          <div className="relative pb-0 pt-0">
            <div className="relative min-h-[430px] overflow-hidden md:h-[520px] md:min-h-0 xl:h-[560px]">
              <div className="absolute inset-0 z-0">
                <img
                  src={comboHero.image}
                  alt="Combo ưu đãi Chả Cá Tràng An"
                  className="h-full w-full object-cover object-[62%_50%] opacity-45 md:opacity-100"
                  fetchPriority="high"
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,250,241,0.98)_0%,rgba(255,250,241,0.9)_50%,rgba(255,250,241,0.82)_100%)] md:bg-[linear-gradient(90deg,var(--color-paper)_0%,rgba(255,250,241,0.98)_18%,rgba(255,250,241,0.82)_40%,rgba(255,250,241,0.24)_66%,rgba(255,250,241,0)_92%)]"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(0deg,var(--color-paper)_0%,rgba(255,250,241,0)_100%)]"
                  aria-hidden="true"
                />
              </div>

              <div className="relative z-[1] mx-auto flex min-h-[430px] w-full max-w-[1400px] flex-col justify-center px-4 py-8 md:h-[520px] md:min-h-0 md:px-8 xl:h-[560px]">
                <p className="font-script pb-1 text-[38px] leading-[1.05] text-[var(--color-green)] md:text-[54px]">
                  {comboHero.script}
                </p>
                <h1 className="font-[var(--font-display)] text-[50px] font-bold leading-[0.95] text-[var(--color-green)] md:text-[76px]">
                  {comboHero.title}
                </h1>
                <div className="my-3 flex items-center gap-3">
                  <div className="h-px w-20 bg-[rgba(184,137,53,0.55)]" />
                  <FishSimple size={20} weight="regular" className="text-[var(--color-gold-strong)]" />
                </div>
                <h2 className="font-[var(--font-display)] text-[20px] font-semibold text-[var(--color-green)] md:text-[23px]">
                  {comboHero.subtitle}
                </h2>
                <p className="mt-2 max-w-[500px] text-[13.5px] leading-[1.65] text-[var(--color-muted)] md:text-[15px]">
                  {comboHero.description}
                </p>

                <div className="mt-7 grid max-w-[640px] grid-cols-1 gap-3 sm:grid-cols-3 md:absolute md:bottom-14 md:left-0 md:w-[620px]">
                  {comboHighlights.map((item, index) => (
                    <div
                      key={item.title}
                      className={`flex items-center gap-2.5 ${
                        index > 0 ? 'sm:border-l sm:border-[rgba(184,137,53,0.32)] sm:pl-4' : ''
                      }`}
                    >
                      <MappedIcon
                        name={item.icon}
                        size={30}
                        className="shrink-0 text-[var(--color-gold-strong)]"
                      />
                      <span className="text-[12px] font-semibold leading-[1.35] text-[var(--color-green)]">
                        {item.title}
                        <br />
                        {item.subtitle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeUpSection>

        <section className="relative z-[2] mx-auto -mt-2 max-w-[1400px] px-4 md:-mt-4 md:px-8">
          <ScrollReveal>
            <div className="mx-auto w-full max-w-[420px] rounded-t-[20px] border border-b-0 border-[rgba(184,137,53,0.3)] bg-[#fffaf1]/90 px-5 py-3 text-center backdrop-blur-sm">
              <p className="font-[var(--font-display)] text-[16px] font-bold text-[var(--color-green)]">
                CHỌN COMBO PHÙ HỢP
              </p>
              <p className="text-[12px] text-[var(--color-muted)]">Dành cho mọi cuộc vui</p>
            </div>
            <div className="grid overflow-hidden rounded-[18px] border border-[rgba(184,137,53,0.25)] bg-[#fffaf1]/82 md:grid-cols-3">
              {comboTabs.map((tab) => (
                <article
                  key={tab.key}
                  className={`flex items-center justify-center gap-4 border-[rgba(184,137,53,0.18)] px-5 py-5 text-center md:border-l first:md:border-l-0 ${
                    tab.active
                      ? 'relative z-[1] rounded-[16px] border border-[rgba(184,137,53,0.72)] bg-[#fffdf8] shadow-[0_6px_20px_rgba(72,51,25,0.06)]'
                      : 'bg-white/30'
                  }`}
                >
                  <MappedIcon
                    name={tab.icon}
                    size={44}
                    className="hidden shrink-0 text-[var(--color-gold-strong)] sm:block"
                  />
                  <div>
                    <h3 className="font-[var(--font-display)] text-[18px] font-bold text-[var(--color-ink)]">
                      {tab.name}
                    </h3>
                    <p className="mt-1 text-[13px] text-[var(--color-muted)]">{tab.description}</p>
                    <p className="mt-1 text-[12px] font-semibold text-[var(--color-green)]">{tab.saving}</p>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section className="mx-auto mt-4 max-w-[1400px] px-4 md:px-8">
          <StaggerContainer className="grid gap-5 lg:grid-cols-3" staggerDelay={90}>
            {comboCards.map((combo) => (
              <article
                key={combo.name}
                data-combo-card
                className="overflow-hidden rounded-[20px] border border-[rgba(184,137,53,0.28)] bg-[#fffdf8] shadow-[0_4px_16px_rgba(34,51,42,0.04)]"
              >
                <div className="relative h-[210px] overflow-hidden md:h-[230px]">
                  <img src={combo.image} alt={combo.name} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute left-4 top-0 rounded-b-[16px] bg-[var(--color-green)] px-4 pb-3 pt-2 text-center text-[#fffaf1] shadow-[0_8px_18px_rgba(15,81,52,0.22)]">
                    <p className="text-[10px] font-bold">TIẾT KIỆM</p>
                    <p className="font-[var(--font-display)] text-[26px] font-bold leading-none">{combo.badge}</p>
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-center">
                    <h2 className="font-[var(--font-display)] text-[21px] font-bold text-[var(--color-green)]">
                      {combo.name}
                    </h2>
                    <p className="mt-1 text-[13px] font-semibold text-[var(--color-muted)]">{combo.description}</p>
                  </div>

                  <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
                    {combo.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12px] font-semibold text-[var(--color-muted)]">
                        <CheckCircle
                          size={15}
                          weight="bold"
                          className="mt-0.5 shrink-0 text-[var(--color-gold-strong)]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 grid grid-cols-[0.82fr_1fr_0.75fr] items-end gap-3">
                    <div>
                      <p className="text-[11px] text-[var(--color-muted)]">Giá gốc</p>
                      <p className="mt-1 text-[13px] font-semibold text-[var(--color-muted)] line-through">
                        {combo.oldPrice}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-[11px] font-semibold text-[var(--color-ink)]">Giá ưu đãi</p>
                      <p className="font-[var(--font-display)] text-[28px] font-bold leading-none text-[var(--color-green)]">
                        {combo.price}
                      </p>
                    </div>
                    <div className="rounded-[12px] border border-[rgba(184,137,53,0.35)] px-2 py-2 text-center">
                      <p className="text-[10px] font-bold text-[var(--color-green)]">Tiết kiệm</p>
                      <p className="text-[13px] font-bold text-[var(--color-gold-strong)]">{combo.saving}</p>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="mx-auto mt-4 flex h-9 max-w-[170px] items-center justify-center gap-2 rounded-full bg-[var(--color-green)] text-[13px] font-bold text-white transition hover:bg-[var(--color-green-deep)] active:translate-y-px"
                  >
                    Đặt ngay
                    <PaperPlaneTilt size={14} weight="bold" className="text-[var(--color-gold)]" />
                  </a>
                </div>
              </article>
            ))}
          </StaggerContainer>
        </section>

        <section className="mx-auto mt-4 max-w-[1400px] px-4 md:px-8">
          <ScrollReveal className="rounded-[18px] border border-[rgba(184,137,53,0.25)] bg-[#fffaf1]/72 p-4">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-[var(--font-display)] text-[20px] font-bold text-[var(--color-green)]">
                  COMBO TIỆC - TỤ HỌP ĐÔNG NGƯỜI
                </h2>
                <p className="text-[13px] text-[var(--color-muted)]">
                  Linh hoạt theo số lượng, ưu đãi đặc biệt
                </p>
              </div>
              <a
                href="#contact"
                className="rounded-full border border-[rgba(15,81,52,0.35)] bg-white/75 px-4 py-2 text-[12px] font-bold text-[var(--color-green)] transition hover:bg-white"
              >
                Xem chi tiết
              </a>
            </div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {partyCombos.map((combo) => (
                <article
                  key={combo.people}
                  className="flex items-center gap-4 rounded-[14px] border border-[rgba(184,137,53,0.2)] bg-[#fffdf8]/74 px-5 py-4"
                >
                  <MappedIcon name={combo.icon} size={38} className="shrink-0 text-[var(--color-gold-strong)]" />
                  <div>
                    <h3 className="font-[var(--font-display)] text-[16px] font-bold text-[var(--color-ink)]">
                      {combo.people}
                    </h3>
                    <p className="mt-0.5 text-[12px] font-semibold text-[var(--color-muted)]">{combo.price}</p>
                    <p className="mt-0.5 text-[12px] text-[var(--color-green)]">{combo.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section className="mx-auto mt-3 max-w-[1400px] px-4 md:px-8">
          <ScrollReveal className="rounded-[16px] border border-[rgba(184,137,53,0.22)] bg-[#fffaf1]/68 px-4 py-3">
            <SectionDividerTitle>VÌ SAO NÊN CHỌN COMBO TẠI CHẢ CÁ TRÀNG AN?</SectionDividerTitle>
            <div className="grid gap-3 md:grid-cols-5">
              {reasons.map((reason) => (
                <article key={reason.title} className="flex items-center gap-3">
                  <MappedIcon name={reason.icon} size={30} className="shrink-0 text-[var(--color-gold-strong)]" />
                  <p className="text-[12px] font-bold leading-[1.35] text-[var(--color-ink)]">
                    {reason.title}
                    <br />
                    <span className="font-semibold text-[var(--color-muted)]">{reason.subtitle}</span>
                  </p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section className="mx-auto mt-4 grid max-w-[1400px] gap-4 px-4 md:px-8 lg:grid-cols-[0.34fr_0.66fr]">
          <ScrollReveal className="rounded-[18px] border border-[rgba(184,137,53,0.25)] bg-[#fffdf8]/72 p-4">
            <h2 className="font-[var(--font-display)] text-[18px] font-bold text-[var(--color-green)]">
              CÂU HỎI THƯỜNG GẶP
            </h2>
            <div className="mt-3 space-y-2">
              {faqs.map((faq) => (
                <button
                  type="button"
                  key={faq}
                  className="flex w-full items-center justify-between rounded-[10px] border border-[rgba(184,137,53,0.2)] bg-white/58 px-3 py-2 text-left text-[12.5px] font-semibold text-[var(--color-ink)] transition hover:bg-white"
                >
                  {faq}
                  <Plus size={15} weight="bold" className="shrink-0 text-[var(--color-green)]" />
                </button>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="rounded-[18px] border border-[rgba(184,137,53,0.25)] bg-[#fffdf8]/72 p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="font-[var(--font-display)] text-[18px] font-bold text-[var(--color-green)]">
                KHÁCH HÀNG NÓI GÌ VỀ COMBO CỦA CHÚNG TÔI
              </h2>
              <a href="#contact" className="hidden text-[12px] font-bold text-[var(--color-green)] md:inline-flex">
                Xem tất cả
              </a>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {comboTestimonials.map((item) => (
                <article
                  key={item.name}
                  className="rounded-[14px] border border-[rgba(184,137,53,0.2)] bg-white/58 p-3"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--color-green)] text-[11px] font-bold text-[var(--color-gold)]">
                      {item.name
                        .split(' ')
                        .map((part) => part[0])
                        .join('')}
                    </div>
                    <div>
                      <h3 className="text-[13px] font-bold text-[var(--color-ink)]">{item.name}</h3>
                      <Rating />
                    </div>
                  </div>
                  <p className="mt-2.5 text-[11.5px] leading-[1.55] text-[var(--color-muted)]">{item.quote}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section className="mx-auto mt-4 max-w-[1400px] px-4 md:px-8">
          <ScrollReveal className="relative isolate overflow-hidden rounded-[18px] border border-[rgba(211,184,126,0.35)] bg-[linear-gradient(135deg,#07583B_0%,#064D35_100%)] px-5 py-4 text-white shadow-[0_14px_34px_rgba(8,59,37,0.14)] md:px-7">
            <div className="absolute inset-0 -z-[1] bg-[radial-gradient(circle_at_12%_20%,rgba(211,184,126,0.2)_0%,rgba(211,184,126,0)_26%),radial-gradient(circle_at_82%_10%,rgba(255,250,241,0.12)_0%,rgba(255,250,241,0)_28%)]" />
            <FishSimple
              size={92}
              weight="regular"
              className="absolute -bottom-7 left-7 -z-[1] rotate-[-18deg] text-[rgba(211,184,126,0.18)]"
              aria-hidden="true"
            />
            <Gift
              size={88}
              weight="regular"
              className="absolute right-[18%] top-1/2 -z-[1] -translate-y-1/2 text-[rgba(211,184,126,0.12)]"
              aria-hidden="true"
            />
            <HouseLine
              size={82}
              weight="regular"
              className="absolute -right-6 -top-5 -z-[1] text-[rgba(211,184,126,0.16)]"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-[1px] rounded-[17px] border border-[rgba(255,250,241,0.12)]" />
            <div className="relative flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
              <div>
                <h2 className="font-[var(--font-display)] text-[22px] font-bold text-[#fffaf1]">
                  ĐẶT COMBO NGAY - TIẾT KIỆM HƠN HÔM NAY!
                </h2>
                <p className="mt-1 text-[13px] text-[#fffaf1]/82">
                  Liên hệ đặt bàn hoặc đặt trước combo tiệc để nhận ưu đãi tốt nhất.
                </p>
              </div>
              <a
                href="tel:0961374566"
                className="flex items-center gap-3 font-[var(--font-display)] text-[26px] font-bold text-[var(--color-gold)]"
              >
                <Phone size={34} weight="regular" />
                0961 374 566
              </a>
              <a
                href="#contact"
                className="h-11 min-w-[150px] rounded-full bg-[#fffaf1] px-8 text-center text-[14px] font-bold leading-[44px] text-[var(--color-green)] transition hover:bg-white"
              >
                Đặt ngay
              </a>
            </div>
          </ScrollReveal>
        </section>
      </main>

          <Footer />
        </div>
      </div>
      <MobileComboPage />
    </>
  )
}
