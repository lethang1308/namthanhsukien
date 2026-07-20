import {
  CalendarCheck,
  CaretRight,
  ChefHat,
  FishSimple,
  ForkKnife,
  Gift,
  HouseLine,
  List,
  Phone,
  Scooter,
  ShieldCheck,
  Star,
  Storefront,
} from '@phosphor-icons/react'
import paperBackground from '../../../assets/b4002091-4a7b-4407-a4a9-992d5654bdd3.png'
import {
  combos,
  contact,
  featuredDishes,
  galleryImages,
  hero,
  testimonials,
} from '../data/homeContent'

const mobileHighlights = [
  {
    Icon: ShieldCheck,
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
  {
    Icon: Scooter,
    lines: ['Giao hàng', 'nhanh chóng'],
  },
]

const bottomNavItems = [
  { label: 'Trang chủ', href: '#home', Icon: HouseLine, active: true },
  { label: 'Thực đơn', href: '#menu', Icon: ForkKnife },
  { label: 'Combo', href: '#combo', Icon: Gift },
  { label: 'Không gian', href: '#space', Icon: Storefront },
]

function MobileSectionHeader({ title, actionLabel, href = '#home' }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-3">
      <h2 className="flex min-w-0 items-center gap-1.5 font-[var(--font-display)] text-[18px] font-bold leading-tight text-[var(--color-green)]">
        <span>{title}</span>
        <FishSimple size={19} weight="regular" className="shrink-0 text-[var(--color-gold-strong)]" />
      </h2>
      <a
        href={href}
        className="inline-flex shrink-0 items-center gap-1 text-[12px] font-semibold text-[var(--color-green)]"
      >
        {actionLabel}
        <CaretRight size={13} weight="bold" />
      </a>
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

export function MobileHomePage() {
  return (
    <div className="md:hidden">
      <div
        className="min-h-[100dvh] bg-[var(--color-paper)] pb-[94px] text-[var(--color-ink)]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 250, 241, 0.18), rgba(255, 250, 241, 0.2)), url(${paperBackground})`,
          backgroundRepeat: 'repeat-y',
          backgroundPosition: 'top center',
          backgroundSize: '100% auto',
        }}
      >
        <header className="sticky top-0 z-30 border-b border-[rgba(211,184,126,0.34)] bg-[linear-gradient(135deg,#07583B,#063E2B)] px-5 py-3.5 text-white shadow-[0_14px_30px_rgba(6,62,43,0.18)]">
          <div className="mx-auto flex max-w-[480px] items-center justify-between">
            <a href="#home" className="flex items-center gap-2.5" aria-label="Chả Cá Tràng An">
              <span className="grid h-11 w-11 shrink-0 place-items-center border border-[var(--color-gold)] bg-[var(--color-green)] text-[var(--color-gold)] shadow-[0_8px_18px_rgba(5,38,25,0.18)]">
                <FishSimple size={27} weight="fill" />
              </span>
              <span className="font-[var(--font-display)] text-[17px] font-bold leading-[1.08] tracking-[0.04em] text-[#F8E7B9]">
                CHẢ CÁ
                <br />
                TRÀNG AN
              </span>
            </a>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full text-[#fffaf1] active:translate-y-px"
              aria-label="Mở menu"
            >
              <List size={34} weight="regular" />
            </button>
          </div>
        </header>

        <main id="home" className="mx-auto max-w-[480px] overflow-hidden">
          <section className="relative isolate h-[clamp(330px,88vw,350px)] overflow-hidden bg-[#fffaf1]">
            <img
              src={hero.facadeImage}
              alt="Mặt tiền nhà hàng Chả Cá Tràng An"
              className="absolute right-0 top-0 z-[1] h-full w-[62%] object-cover object-[90%_46%]"
              fetchPriority="high"
            />
            <div
              className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,#fffaf1_0%,#fffaf1_38%,rgba(255,250,241,0.99)_48%,rgba(255,250,241,0.86)_59%,rgba(255,250,241,0.36)_70%,rgba(255,250,241,0)_80%),linear-gradient(180deg,rgba(255,250,241,0)_54%,rgba(255,250,241,0.42)_76%,#fffaf1_100%)]"
              aria-hidden="true"
            />
            <div
              className="absolute left-0 top-10 z-[3] h-44 w-28 bg-[radial-gradient(circle_at_0%_30%,rgba(15,81,52,0.1),transparent_62%)]"
              aria-hidden="true"
            />

            <div className="relative z-[5] w-[51%] pl-5 pt-8 max-[374px]:w-[55%] max-[374px]:pl-5 max-[374px]:pt-8">
              <p className="font-script mb-1.5 whitespace-nowrap pb-1 text-[clamp(27px,7.5vw,34px)] leading-none text-[var(--color-gold-strong)]">
                {hero.script}
              </p>
              <h1 className="max-w-[190px] font-[var(--font-display)] text-[clamp(31px,8.7vw,38px)] font-bold leading-[1.06] tracking-0 text-[var(--color-green)] max-[374px]:max-w-[170px]">
                <span className="whitespace-nowrap">CHẢ CÁ</span>
                <br />
                <span className="whitespace-nowrap">TRÀNG AN</span>
              </h1>
              <p className="mt-3 max-w-[165px] font-[var(--font-display)] text-[clamp(13px,3.6vw,15px)] font-medium leading-[1.45] text-[var(--color-green)]">
                Hương vị truyền thống
                <br />
                - Trọn vị Hà Thành
              </p>
              <a
                href="#dat-ban"
                className="mt-4 inline-flex h-[42px] max-w-[145px] items-center justify-center whitespace-nowrap rounded-full bg-[var(--color-green)] px-5 text-[13px] font-bold text-white shadow-[0_12px_24px_rgba(7,88,59,0.22)] active:translate-y-px"
              >
                <CalendarCheck className="mr-1.5 text-[var(--color-gold)]" size={17} weight="bold" />
                Đặt bàn ngay
              </a>
            </div>

            <img
              src={hero.heroPanCutoutImage}
              alt="Chảo chả cá nóng với thì là và hành"
              className="pointer-events-none absolute bottom-[-24px] left-[70%] z-[4] w-[clamp(276px,76vw,330px)] max-w-none -translate-x-1/2 rotate-[-5deg] object-contain [mask-image:linear-gradient(90deg,black_0%,black_96%,transparent_100%)] drop-shadow-[0_14px_17px_rgba(42,36,25,0.22)] [-webkit-mask-image:linear-gradient(90deg,black_0%,black_96%,transparent_100%)] max-[374px]:bottom-[-20px] max-[374px]:left-[73%] max-[374px]:w-[clamp(250px,79vw,284px)]"
              fetchPriority="high"
            />
          </section>

          <section
            className="relative z-10 mx-auto -mt-6 grid min-h-[64px] w-[calc(100%-28px)] grid-cols-4 rounded-[18px] border border-[rgba(184,137,53,0.1)] bg-[#fffdf8]/95 px-2 py-2 shadow-[0_8px_22px_rgba(42,47,40,0.12)] backdrop-blur"
            aria-label="Điểm nổi bật của nhà hàng"
          >
            {mobileHighlights.map(({ Icon, lines }) => (
              <div key={lines.join(' ')} className="flex min-w-0 flex-col items-center text-center">
                <Icon size={22} weight="regular" className="mb-1 text-[var(--color-gold-strong)]" />
                <span className="text-[8.5px] font-semibold leading-[1.25] text-[var(--color-ink)]">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </span>
              </div>
            ))}
          </section>

          <section className="px-5 pt-7">
            <MobileSectionHeader title="MÓN NGON NỔI BẬT" actionLabel="Xem tất cả" href="#menu" />
            <div className="mobile-scroll-row -mx-5 grid auto-cols-[148px] grid-flow-col gap-3 overflow-x-auto px-5 pb-2">
              {featuredDishes.map((dish) => (
                <article
                  key={dish.name}
                  className="overflow-hidden rounded-[12px] border border-[rgba(184,137,53,0.22)] bg-white shadow-[0_6px_14px_rgba(42,49,38,0.08)]"
                >
                  <div className="aspect-[1.08] overflow-hidden bg-[#fffaf1]">
                    <img src={dish.image} alt={dish.alt} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-2.5">
                    <h3 className="min-h-[36px] font-[var(--font-display)] text-[13.5px] font-semibold leading-[1.28] text-[var(--color-ink)]">
                      {dish.name}
                    </h3>
                    <p className="mt-1 text-[13px] font-bold text-[var(--color-green)]">{dish.price}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="px-5 pt-5">
            <MobileSectionHeader title="COMBO ƯU ĐÃI" actionLabel="Xem tất cả combo" href="#combo" />
            <div className="mobile-scroll-row -mx-5 grid auto-cols-[246px] grid-flow-col gap-3 overflow-x-auto px-5 pb-2">
              {combos.map((combo) => (
                <article
                  key={combo.name}
                  className="grid h-[118px] grid-cols-[102px_1fr] overflow-hidden rounded-[12px] border border-[rgba(184,137,53,0.22)] bg-white shadow-[0_6px_14px_rgba(42,49,38,0.08)]"
                >
                  <img src={combo.image} alt={combo.alt} className="h-full w-full object-cover" loading="lazy" />
                  <div className="flex min-w-0 flex-col justify-center p-2.5">
                    <h3 className="font-[var(--font-display)] text-[12.5px] font-semibold leading-tight text-[var(--color-ink)]">
                      {combo.name}
                    </h3>
                    <p className="mt-1 text-[10px] leading-tight text-[var(--color-muted)]">{combo.description}</p>
                    <p className="mt-1.5 font-[var(--font-display)] text-[18px] font-bold leading-tight text-[var(--color-green)]">
                      {combo.price}
                    </p>
                    <a
                      href="#dat-ban"
                      className="mt-2 inline-flex h-8 w-max items-center rounded-full bg-[var(--color-green)] px-4 text-[11.5px] font-bold text-white active:translate-y-px"
                    >
                      Đặt ngay
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="px-5 pt-5">
            <MobileSectionHeader title="KHÔNG GIAN NHÀ HÀNG" actionLabel="Xem thêm" href="#space" />
            <div className="mobile-scroll-row -mx-5 grid auto-cols-[126px] grid-flow-col gap-2.5 overflow-x-auto px-5 pb-2">
              {galleryImages.map((item) => (
                <figure
                  key={item.alt}
                  className="aspect-[1.18] overflow-hidden rounded-[11px] border border-[rgba(184,137,53,0.18)] bg-white shadow-[0_5px_12px_rgba(42,49,38,0.07)]"
                >
                  <img src={item.image} alt={item.alt} className="h-full w-full object-cover" loading="lazy" />
                </figure>
              ))}
            </div>
          </section>

          <section className="px-5 pt-5">
            <MobileSectionHeader
              title="KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI"
              actionLabel="Xem tất cả"
              href="#khach-hang"
            />
            <div
              id="khach-hang"
              className="mobile-scroll-row -mx-5 grid auto-cols-[255px] grid-flow-col gap-3 overflow-x-auto px-5 pb-2"
            >
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="min-h-[128px] rounded-[12px] border border-[rgba(184,137,53,0.2)] bg-white/88 p-3 shadow-[0_6px_14px_rgba(42,49,38,0.07)]"
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

          <section id="dat-ban" className="px-5 pt-5">
            <div className="relative overflow-hidden rounded-[14px] bg-[linear-gradient(135deg,#07583B,#06422E)] p-4 text-white shadow-[0_10px_22px_rgba(7,88,59,0.22)]">
              <FishSimple
                size={96}
                weight="thin"
                className="pointer-events-none absolute -right-2 -top-2 rotate-[-14deg] text-[rgba(211,184,126,0.18)]"
              />
              <div className="relative flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[var(--color-gold)]">
                    <Gift size={27} weight="regular" />
                    <h2 className="font-[var(--font-display)] text-[20px] font-bold leading-tight">
                      Ưu đãi đặc biệt
                    </h2>
                  </div>
                  <p className="mt-2 text-[14px] leading-tight text-[#fffaf1]">
                    Giảm 10% cho khách đặt bàn qua website
                  </p>
                </div>
                <a
                  href="tel:0961374566"
                  className="inline-flex h-11 shrink-0 items-center gap-1.5 rounded-[12px] bg-[#fffaf1] px-4 text-[13px] font-bold text-[var(--color-green)] active:translate-y-px"
                >
                  Đặt bàn
                  <CaretRight size={14} weight="bold" />
                </a>
              </div>
            </div>
          </section>
        </main>

        <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[rgba(184,137,53,0.2)] bg-[#fffaf1]/96 px-3 pb-[max(10px,env(safe-area-inset-bottom))] pt-2 shadow-[0_-12px_26px_rgba(42,49,38,0.12)] backdrop-blur" aria-label="Điều hướng mobile">
          <div className="mx-auto grid max-w-[480px] grid-cols-[1fr_1fr_86px_1fr_1fr] items-end">
            {bottomNavItems.slice(0, 2).map(({ label, href, Icon, active }) => (
              <a
                key={label}
                href={href}
                className={`flex min-w-0 flex-col items-center gap-1 text-[11.5px] font-semibold ${
                  active ? 'text-[var(--color-green)]' : 'text-[rgba(38,51,39,0.72)]'
                }`}
              >
                <Icon size={24} weight={active ? 'fill' : 'regular'} />
                <span>{label}</span>
                <span className={`h-0.5 w-8 rounded-full ${active ? 'bg-[var(--color-green)]' : 'bg-transparent'}`} />
              </a>
            ))}

            <a
              href="tel:0961374566"
              className="-mt-8 flex h-[76px] w-[76px] flex-col items-center justify-center justify-self-center rounded-full bg-[var(--color-green)] text-center text-[#fffaf1] shadow-[0_8px_22px_rgba(7,88,59,0.28)] ring-4 ring-[#fffaf1]"
              aria-label={`Gọi ngay ${contact.phone}`}
            >
              <Phone size={24} weight="fill" className="text-[var(--color-gold)]" />
              <span className="mt-0.5 text-[11px] font-semibold leading-tight">Gọi ngay</span>
              <span className="text-[9px] font-bold leading-tight">{contact.phone}</span>
            </a>

            {bottomNavItems.slice(2).map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                className="flex min-w-0 flex-col items-center gap-1 text-[11.5px] font-semibold text-[rgba(38,51,39,0.72)]"
              >
                <Icon size={24} weight="regular" />
                <span>{label}</span>
                <span className="h-0.5 w-8 rounded-full bg-transparent" />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
