import { useState } from 'react'
import {
  Alarm,
  CalendarCheck,
  CaretRight,
  ChefHat,
  CheckCircle,
  FishSimple,
  Gift,
  HandHeart,
  HouseLine,
  Medal,
  Phone,
  SealCheck,
  Star,
  User,
  Users,
  UsersThree,
} from '@phosphor-icons/react'
import { MobileBottomNav } from '../../components/mobile/MobileBottomNav'
import { MobileHeader } from '../../components/mobile/MobileHeader'
import paperBackground from '../../assets/b4002091-4a7b-4407-a4a9-992d5654bdd3.png'
import {
  comboCards,
  comboHero,
  comboHighlights,
  comboTabs,
  comboTestimonials,
  partyCombos,
  reasons,
} from './data/comboContent'

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

const mobileHighlights = [
  ...comboHighlights,
  {
    icon: 'HandHeart',
    title: 'Phục vụ',
    subtitle: 'chu đáo tận tâm',
  },
]

function MappedIcon({ name, className = '', size = 24, weight = 'regular' }) {
  const Icon = iconMap[name] || SealCheck
  return <Icon className={className} size={size} weight={weight} />
}

function SectionHeader({ title, actionLabel, href = '#contact' }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-3">
      <h2 className="flex min-w-0 items-center gap-1.5 font-[var(--font-display)] text-[18px] font-bold leading-tight text-[var(--color-green)]">
        <span>{title}</span>
        <FishSimple size={18} weight="regular" className="shrink-0 text-[var(--color-gold-strong)]" />
      </h2>
      {actionLabel && (
        <a
          href={href}
          className="inline-flex shrink-0 items-center gap-1 text-[12px] font-semibold text-[var(--color-green)]"
        >
          {actionLabel}
          <CaretRight size={13} weight="bold" />
        </a>
      )}
    </div>
  )
}

function Rating() {
  return (
    <div className="flex gap-0.5 text-[#f2a014]" aria-label="5 sao">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={13} weight="fill" />
      ))}
    </div>
  )
}

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

function ComboTabs({ selectedCombo, onSelectCombo }) {
  return (
    <section className="px-5 pt-5">
      <div className="mobile-scroll-row -mx-5 grid auto-cols-[250px] grid-flow-col gap-3 overflow-x-auto px-5 pb-2">
        {comboTabs.map((tab) => {
          const active = selectedCombo === tab.key

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onSelectCombo(tab.key)}
              className={`grid h-[72px] grid-cols-[44px_1fr] items-center gap-3 rounded-[15px] border px-4 text-left shadow-[0_7px_16px_rgba(42,49,38,0.07)] transition active:translate-y-px ${
                active
                  ? 'border-[var(--color-green)] bg-[var(--color-green)] text-[#fffaf1]'
                  : 'border-[rgba(184,137,53,0.24)] bg-[#fffdf8]/92 text-[var(--color-ink)]'
              }`}
            >
              <MappedIcon
                name={tab.icon}
                size={36}
                weight="regular"
                className={active ? 'text-[var(--color-gold)]' : 'text-[var(--color-gold-strong)]'}
              />
              <span>
                <span className="block font-[var(--font-display)] text-[16px] font-bold leading-tight">{tab.name}</span>
                <span className={`mt-1 block text-[12px] leading-tight ${active ? 'text-[#fffaf1]' : 'text-[var(--color-muted)]'}`}>
                  {tab.description}
                </span>
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}

function ComboCard({ combo, active }) {
  return (
    <article
      id={combo.name.toLowerCase().replaceAll(' ', '-')}
      className={`grid min-h-[196px] grid-cols-[43%_1fr] overflow-hidden rounded-[15px] border bg-white/88 shadow-[0_8px_18px_rgba(42,49,38,0.075)] ${
        active ? 'border-[rgba(15,81,52,0.5)]' : 'border-[rgba(184,137,53,0.24)]'
      }`}
    >
      <div className="relative h-full min-h-[196px] overflow-hidden bg-[#fffaf1]">
        <img src={combo.image} alt={combo.name} className="h-full w-full object-cover object-center" loading="lazy" />
        <div className="absolute left-2 top-0 rounded-b-[12px] bg-[var(--color-green)] px-2.5 pb-2 pt-1.5 text-center text-[#fffaf1] shadow-[0_8px_18px_rgba(15,81,52,0.22)]">
          <p className="text-[8px] font-bold leading-tight">TIẾT KIỆM</p>
          <p className="font-[var(--font-display)] text-[22px] font-bold leading-none">{combo.badge}</p>
        </div>
      </div>

      <div className="flex min-w-0 flex-col p-3">
        <h3 className="font-[var(--font-display)] text-[18px] font-bold leading-tight text-[var(--color-green)]">
          {combo.name}
        </h3>
        <ul className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1">
          {combo.items.slice(0, 6).map((item) => (
            <li key={item} className="flex min-w-0 items-start gap-1.5 text-[10.5px] font-semibold leading-[1.2] text-[var(--color-muted)]">
              <CheckCircle size={12} weight="bold" className="mt-0.5 shrink-0 text-[var(--color-gold-strong)]" />
              <span className="min-w-0">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto grid grid-cols-[0.8fr_1fr] items-end gap-2 pt-3">
          <div>
            <p className="text-[10px] text-[var(--color-muted)]">Giá gốc</p>
            <p className="mt-0.5 text-[11px] font-semibold text-[var(--color-muted)] line-through">{combo.oldPrice}</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-[var(--color-green)]">Giá ưu đãi</p>
            <p className="font-[var(--font-display)] text-[24px] font-bold leading-none text-[var(--color-green)]">
              {combo.price}
            </p>
          </div>
        </div>

        <a
          href="#contact"
          className="mt-3 inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-full bg-[var(--color-green)] text-[12px] font-bold text-white shadow-[0_8px_18px_rgba(15,81,52,0.18)] active:translate-y-px"
        >
          Xem chi tiết
          <CaretRight size={13} weight="bold" className="text-[var(--color-gold)]" />
        </a>
      </div>
    </article>
  )
}

function PartyComboGrid() {
  return (
    <section className="px-5 pt-5">
      <div className="rounded-[15px] border border-[rgba(184,137,53,0.22)] bg-white/68 p-3 shadow-[0_6px_14px_rgba(42,49,38,0.045)]">
        <SectionHeader title="COMBO TIỆC - TỤ HỌP ĐÔNG NGƯỜI" actionLabel="Xem chi tiết" />
        <div className="grid grid-cols-2 gap-2.5">
          {partyCombos.map((combo) => (
            <article
              key={combo.people}
              className="min-h-[100px] rounded-[12px] border border-[rgba(184,137,53,0.2)] bg-[#fffdf8]/84 p-3"
            >
              <MappedIcon name={combo.icon} size={30} className="text-[var(--color-gold-strong)]" />
              <h3 className="mt-1.5 font-[var(--font-display)] text-[14px] font-bold leading-tight text-[var(--color-ink)]">
                {combo.people}
              </h3>
              <p className="mt-1 text-[11px] font-semibold leading-tight text-[var(--color-muted)]">{combo.price}</p>
              <p className="mt-1 text-[10.5px] leading-tight text-[var(--color-green)]">{combo.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReasonsSection() {
  return (
    <section className="px-5 pt-5">
      <div className="rounded-[15px] border border-[rgba(184,137,53,0.22)] bg-[#fffdf8]/70 p-3">
        <SectionHeader title="VÌ SAO NÊN CHỌN COMBO TẠI CHẢ CÁ TRÀNG AN?" />
        <div className="mobile-scroll-row -mx-3 grid auto-cols-[148px] grid-flow-col gap-2 overflow-x-auto px-3 pb-1">
          {reasons.map((reason) => (
            <article key={reason.title} className="rounded-[12px] border border-[rgba(184,137,53,0.18)] bg-white/72 p-3">
              <MappedIcon name={reason.icon} size={28} className="text-[var(--color-gold-strong)]" />
              <p className="mt-2 text-[11px] font-bold leading-[1.3] text-[var(--color-ink)]">
                {reason.title}
                <br />
                <span className="font-semibold text-[var(--color-muted)]">{reason.subtitle}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="px-5 pt-5">
      <SectionHeader title="KHÁCH HÀNG NÓI GÌ VỀ COMBO CỦA CHÚNG TÔI" actionLabel="Xem tất cả" />
      <div className="mobile-scroll-row -mx-5 grid auto-cols-[260px] grid-flow-col gap-3 overflow-x-auto px-5 pb-2">
        {comboTestimonials.map((item) => (
          <article
            key={item.name}
            className="min-h-[132px] rounded-[13px] border border-[rgba(184,137,53,0.2)] bg-white/82 p-3 shadow-[0_6px_14px_rgba(42,49,38,0.06)]"
          >
            <div className="flex items-center gap-2.5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--color-green)] font-[var(--font-display)] text-[12px] font-bold text-[var(--color-gold)]">
                {getInitials(item.name)}
              </div>
              <div className="min-w-0">
                <h3 className="text-[12.5px] font-bold leading-tight text-[var(--color-ink)]">{item.name}</h3>
                <div className="mt-1">
                  <Rating />
                </div>
              </div>
            </div>
            <p className="mt-2.5 text-[11px] leading-[1.48] text-[var(--color-muted)]">{item.quote}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function BookingBanner() {
  return (
    <section id="contact" className="px-5 pt-5">
      <div className="relative isolate overflow-hidden rounded-[14px] bg-[linear-gradient(135deg,#07583B,#06422E)] p-4 text-white shadow-[0_10px_22px_rgba(7,88,59,0.22)]">
        <FishSimple
          size={104}
          weight="thin"
          className="pointer-events-none absolute -right-3 -top-3 -z-[1] rotate-[-14deg] text-[rgba(211,184,126,0.18)]"
        />
        <div className="relative flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[var(--color-gold)]">
              <Gift size={27} weight="regular" />
              <h2 className="font-[var(--font-display)] text-[17px] font-bold leading-tight">
                ĐẶT COMBO NGAY - TIẾT KIỆM HƠN HÔM NAY!
              </h2>
            </div>
            <p className="mt-2 text-[12px] leading-[1.35] text-[#fffaf1]">
              Liên hệ đặt bàn hoặc đặt trước combo tiệc để nhận ưu đãi tốt nhất.
            </p>
          </div>
          <a
            href="tel:0961374566"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-[12px] bg-[#fffaf1] text-[var(--color-green)] active:translate-y-px"
            aria-label="Gọi đặt combo"
          >
            <Phone size={22} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  )
}

export function MobileComboPage() {
  const [selectedCombo, setSelectedCombo] = useState('combo-2')

  return (
    <div className="md:hidden">
      <div
        className="min-h-[100dvh] bg-[var(--color-paper)] pb-[96px] text-[var(--color-ink)]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 250, 241, 0.18), rgba(255, 250, 241, 0.2)), url(${paperBackground})`,
          backgroundRepeat: 'repeat-y',
          backgroundPosition: 'top center',
          backgroundSize: '100% auto',
        }}
      >
        <MobileHeader />

        <main id="combo" className="mx-auto max-w-[480px] overflow-hidden">
          <section className="relative isolate h-[clamp(330px,88vw,350px)] overflow-hidden bg-[#fffaf1]">
            <img
              src={comboHero.image}
              alt="Combo ưu đãi Chả Cá Tràng An"
              className="absolute right-0 top-0 z-[1] h-full w-[72%] object-cover object-[58%_50%]"
              fetchPriority="high"
            />
            <div
              className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,#fffaf1_0%,#fffaf1_35%,rgba(255,250,241,0.98)_47%,rgba(255,250,241,0.66)_62%,rgba(255,250,241,0.12)_78%,rgba(255,250,241,0)_100%),linear-gradient(180deg,rgba(255,250,241,0)_56%,rgba(255,250,241,0.36)_80%,#fffaf1_100%)]"
              aria-hidden="true"
            />
            <div
              className="absolute left-0 top-7 z-[3] h-40 w-28 bg-[radial-gradient(circle_at_0%_30%,rgba(15,81,52,0.1),transparent_62%)]"
              aria-hidden="true"
            />
            <div className="relative z-[4] w-[56%] pl-5 pt-7 max-[374px]:w-[60%]">
              <p className="font-script mb-1 whitespace-nowrap pb-1 text-[clamp(32px,8.8vw,39px)] leading-[1.1] text-[var(--color-gold-strong)]">
                {comboHero.script}
              </p>
              <h1 className="font-[var(--font-display)] text-[clamp(48px,13vw,58px)] font-bold leading-[0.98] text-[var(--color-green)]">
                ƯU ĐÃI
              </h1>
              <div className="mt-2 flex items-center gap-2">
                <h2 className="font-[var(--font-display)] text-[15px] font-semibold leading-tight text-[var(--color-green)]">
                  Sum vầy trọn vị - Ưu đãi hết ý
                </h2>
                <FishSimple size={23} weight="fill" className="shrink-0 text-[var(--color-gold-strong)]" />
              </div>
              <p className="mt-2 max-w-[190px] text-[12.5px] font-medium leading-[1.5] text-[var(--color-ink)]">
                Combo dành cho gia đình, bạn bè và những buổi tụ họp ấm cúng với chả cá chuẩn vị Tràng An.
              </p>
            </div>
          </section>

          <section
            className="relative z-10 mx-auto -mt-5 grid min-h-[74px] w-[calc(100%-28px)] grid-cols-4 rounded-[18px] border border-[rgba(184,137,53,0.1)] bg-[#fffdf8]/95 px-2 py-2 shadow-[0_8px_22px_rgba(42,47,40,0.12)] backdrop-blur"
            aria-label="Điểm nổi bật combo"
          >
            {mobileHighlights.map((item) => (
              <div key={`${item.title}-${item.subtitle}`} className="flex min-w-0 flex-col items-center justify-center text-center">
                <MappedIcon name={item.icon} size={22} className="mb-1 text-[var(--color-gold-strong)]" />
                <span className="text-[8.5px] font-semibold leading-[1.22] text-[var(--color-ink)]">
                  {item.title}
                  <br />
                  {item.subtitle}
                </span>
              </div>
            ))}
          </section>

          <ComboTabs selectedCombo={selectedCombo} onSelectCombo={setSelectedCombo} />

          <section className="px-5 pt-2">
            <div className="grid gap-3">
              {comboCards.map((combo, index) => (
                <ComboCard key={combo.name} combo={combo} active={selectedCombo === comboTabs[index]?.key} />
              ))}
            </div>
          </section>

          <PartyComboGrid />
          <ReasonsSection />
          <TestimonialsSection />
          <BookingBanner />
        </main>

        <MobileBottomNav activeItem="combo" />
      </div>
    </div>
  )
}
