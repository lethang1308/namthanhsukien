import {
  Armchair,
  CalendarCheck,
  Camera,
  CaretRight,
  FishSimple,
  Gift,
  HouseLine,
  LampPendant,
  LockKey,
  PaintBrush,
  Sparkle,
  UsersFour,
  UsersThree,
} from '@phosphor-icons/react'
import { MobileBottomNav } from '../../components/mobile/MobileBottomNav'
import { MobileHeader } from '../../components/mobile/MobileHeader'
import paperBackground from '../../assets/b4002091-4a7b-4407-a4a9-992d5654bdd3.png'
import {
  checkinCollage,
  featuredSpaces,
  groupSpaces,
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

function SectionHeader({ title, actionLabel, href = '#space' }) {
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

function FeaturedSpaceRow({ item }) {
  return (
    <article className="grid min-h-[96px] grid-cols-[1fr_44%] overflow-hidden rounded-[13px] border border-[rgba(184,137,53,0.22)] bg-white/82 shadow-[0_6px_14px_rgba(42,49,38,0.055)]">
      <div className="min-w-0 p-3">
        <h3 className="font-[var(--font-display)] text-[15px] font-bold leading-snug text-[var(--color-ink)]">
          {item.title}
        </h3>
        <p className="mt-1.5 text-[11.5px] font-medium leading-[1.48] text-[var(--color-muted)] line-clamp-3">
          {item.description}
        </p>
      </div>
      <div className="h-full min-h-[96px] overflow-hidden bg-[#fffaf1]">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
      </div>
    </article>
  )
}

function CheckinCollage() {
  return (
    <section className="px-5 pt-5">
      <SectionHeader title="GÓC CHECK-IN" actionLabel="Xem tất cả" />
      <div className="relative grid h-[176px] grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-[14px] border border-[rgba(184,137,53,0.24)] bg-[#fffdf8] p-2 shadow-[0_6px_14px_rgba(42,49,38,0.055)]">
        {checkinCollage.map((item, index) => (
          <figure key={index} className={`relative overflow-hidden rounded-[10px] ${item.className}`}>
            <img src={item.image} alt="Góc check-in tại Chả Cá Tràng An" className="h-full w-full object-cover" loading="lazy" />
            {index === 0 && (
              <figcaption className="absolute inset-0 grid place-items-center bg-[rgba(7,88,59,0.1)]">
                <span className="text-center font-[var(--font-display)] text-[16px] font-bold leading-tight text-[var(--color-gold)] drop-shadow-[0_2px_5px_rgba(8,59,37,0.55)]">
                  CHẢ CÁ
                  <br />
                  TRÀNG AN
                </span>
              </figcaption>
            )}
          </figure>
        ))}
        <a
          href="#space"
          className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full border-2 border-[#fffaf1] bg-[var(--color-green)] text-[var(--color-gold)] shadow-[0_8px_18px_rgba(7,88,59,0.22)]"
          aria-label="Xem góc check-in"
        >
          <Camera size={22} weight="regular" />
        </a>
      </div>
    </section>
  )
}

function GroupSpaces() {
  return (
    <section className="px-5 pt-5">
      <SectionHeader title="BÀN NHÓM & GIA ĐÌNH" actionLabel="Xem thêm" />
      <div className="grid gap-2.5">
        {groupSpaces.map((item) => (
          <a
            key={item.title}
            href="#dat-ban"
            className="grid min-h-[70px] grid-cols-[54px_1fr_28px] items-center rounded-[13px] border border-[rgba(184,137,53,0.2)] bg-white/78 px-3 shadow-[0_5px_12px_rgba(42,49,38,0.045)] active:translate-y-px"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--color-gold-strong)] text-[#fffaf1]">
              <MappedIcon name={item.icon} size={25} />
            </span>
            <span className="min-w-0">
              <span className="block font-[var(--font-display)] text-[14px] font-bold text-[var(--color-ink)]">
                {item.title}
              </span>
              <span className="mt-0.5 block text-[11.5px] font-semibold text-[var(--color-muted)]">{item.subtitle}</span>
            </span>
            <CaretRight size={21} weight="regular" className="text-[var(--color-green)]" />
          </a>
        ))}
      </div>
    </section>
  )
}

function InteriorDetails() {
  return (
    <section className="px-5 pt-5">
      <SectionHeader title="CHI TIẾT NỘI THẤT" />
      <div className="grid grid-cols-2 gap-x-3 gap-y-3">
        {interiorDetails.map((item) => (
          <article key={item.title} className="flex items-start gap-2">
            <MappedIcon name={item.icon} size={21} className="mt-0.5 shrink-0 text-[var(--color-green)]" />
            <p className="text-[10.8px] font-bold leading-[1.32] text-[var(--color-ink)]">
              {item.title}
              <br />
              <span className="font-medium text-[var(--color-muted)]">{item.description}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

function BookingBanner() {
  return (
    <section id="dat-ban" className="px-5 pt-5">
      <div className="relative isolate overflow-hidden rounded-[14px] bg-[linear-gradient(135deg,#07583B,#06422E)] p-4 text-white shadow-[0_10px_22px_rgba(7,88,59,0.22)]">
        <FishSimple
          size={110}
          weight="thin"
          className="pointer-events-none absolute -right-3 -top-4 -z-[1] rotate-[-14deg] text-[rgba(211,184,126,0.16)]"
        />
        <div className="relative flex items-start gap-3">
          <Gift size={29} weight="regular" className="shrink-0 text-[var(--color-gold)]" />
          <div className="min-w-0">
            <h2 className="font-[var(--font-display)] text-[17px] font-bold leading-tight text-[#fffaf1]">
              ĐẶT BÀN TRƯỚC - TRẢI NGHIỆM TRỌN VẸN HƯƠNG VỊ CHẢ CÁ CHÍNH THỐNG
            </h2>
            <p className="mt-1.5 text-[12px] leading-[1.35] text-[#fffaf1]/84">Ưu đãi đặc biệt dành cho bạn.</p>
            <a
              href="tel:0961374566"
              className="mt-3 inline-flex h-9 items-center gap-2 rounded-full bg-[var(--color-gold)] px-5 text-[12px] font-bold text-[var(--color-green)] active:translate-y-px"
            >
              Đặt bàn ngay
              <CaretRight size={13} weight="bold" />
            </a>
          </div>
          <CalendarCheck size={48} weight="thin" className="hidden shrink-0 text-[rgba(211,184,126,0.72)] min-[390px]:block" />
        </div>
      </div>
    </section>
  )
}

export function MobileSpacePage() {
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

        <main id="space" className="mx-auto max-w-[480px] overflow-hidden">
          <section className="relative isolate h-[clamp(330px,88vw,350px)] overflow-hidden bg-[#062d21]">
            <img
              src={spaceHero.images.main}
              alt="Không gian nhà hàng Chả Cá Tràng An"
              className="absolute inset-0 z-[1] h-full w-full object-cover object-[50%_48%]"
              fetchPriority="high"
            />
            <div
              className="absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(4,35,25,0.08)_0%,rgba(4,35,25,0.1)_38%,rgba(4,35,25,0.62)_74%,rgba(4,35,25,0.86)_100%)]"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-9 z-[3] px-6 text-center">
              <p className="font-script pb-1 text-[clamp(34px,9.2vw,41px)] leading-[1.12] text-[var(--color-gold)]">
                {spaceHero.script}
              </p>
              <h1 className="font-[var(--font-display)] text-[clamp(30px,8vw,36px)] font-bold leading-none text-[#F8E7B9]">
                {spaceHero.title}
              </h1>
              <p className="mt-2 font-[var(--font-display)] text-[14px] font-semibold leading-tight text-[#fffaf1]">
                Ấm cúng - Tinh tế - Gợi nhớ Hà Nội xưa
              </p>
            </div>
          </section>

          <section
            className="relative z-10 mx-auto -mt-7 grid min-h-[82px] w-[calc(100%-28px)] grid-cols-4 rounded-[18px] border border-[rgba(184,137,53,0.12)] bg-[#fffdf8]/96 px-2 py-2 shadow-[0_8px_22px_rgba(42,47,40,0.12)] backdrop-blur"
            aria-label="Điểm nổi bật không gian"
          >
            {spaceHighlights.map((item) => (
              <div key={item.title} className="flex min-w-0 flex-col items-center justify-center text-center">
                <MappedIcon name={item.icon} size={24} className="mb-1.5 text-[var(--color-gold-strong)]" />
                <span className="text-[10px] font-semibold leading-[1.2] text-[var(--color-ink)]">{item.title}</span>
              </div>
            ))}
          </section>

          <section className="px-5 pt-5">
            <SectionHeader title="KHÔNG GIAN NỔI BẬT" actionLabel="Xem tất cả" />
            <div className="grid gap-2.5">
              {featuredSpaces.slice(0, 3).map((item) => (
                <FeaturedSpaceRow key={item.title} item={item} />
              ))}
            </div>
          </section>

          <CheckinCollage />
          <GroupSpaces />
          <InteriorDetails />
          <BookingBanner />
        </main>

        <MobileBottomNav activeItem="space" />
      </div>
    </div>
  )
}
