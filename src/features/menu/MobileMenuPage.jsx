import { useState } from 'react'
import {
  BellSimple,
  BowlSteam,
  CalendarCheck,
  CaretRight,
  Coffee,
  Fish,
  FishSimple,
  Gift,
  Phone,
} from '@phosphor-icons/react'
import { MobileBottomNav } from '../../components/mobile/MobileBottomNav'
import { MobileHeader } from '../../components/mobile/MobileHeader'
import paperBackground from '../../assets/b4002091-4a7b-4407-a4a9-992d5654bdd3.png'
import { menuCategories, menuCombos, menuDishes, menuDrinks, menuHero } from './data/menuContent'

const iconMap = {
  Fish,
  BowlSteam,
  BellSimple,
  Gift,
  Coffee,
}

function SectionHeader({ title, actionLabel, href = '#menu' }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-3">
      <h2 className="flex min-w-0 items-center gap-1.5 font-[var(--font-display)] text-[19px] font-bold leading-tight text-[var(--color-green)]">
        <span>{title}</span>
        <FishSimple size={19} weight="regular" className="shrink-0 text-[var(--color-gold-strong)]" />
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

function getMenuItems(categoryId) {
  if (categoryId === 'combo') {
    return menuCombos
  }
  if (categoryId === 'drink') {
    return menuDrinks
  }
  return menuDishes.filter((dish) => dish.category === categoryId)
}

function CategoryTabs({ selectedCategory, onSelectCategory }) {
  return (
    <div className="mobile-scroll-row -mx-5 grid auto-cols-max grid-flow-col gap-2.5 overflow-x-auto px-5 pb-2">
      {menuCategories
        .filter((category) => category.id !== 'all')
        .map((category) => {
          const Icon = iconMap[category.icon]
          const active = selectedCategory === category.id

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelectCategory(category.id)}
              className={`inline-flex h-12 items-center gap-2 rounded-full border px-4 text-[13px] font-bold shadow-[0_5px_12px_rgba(42,49,38,0.06)] transition active:translate-y-px ${
                active
                  ? 'border-[var(--color-green)] bg-[var(--color-green)] text-[#fffaf1]'
                  : 'border-[rgba(184,137,53,0.34)] bg-[#fffdf8]/94 text-[var(--color-ink)]'
              }`}
            >
              {Icon && (
                <Icon
                  size={22}
                  weight={active ? 'fill' : 'regular'}
                  className={active ? 'text-[var(--color-gold)]' : 'text-[var(--color-gold-strong)]'}
                />
              )}
              <span className="whitespace-nowrap">{category.label}</span>
            </button>
          )
        })}
    </div>
  )
}

function DishImageFallback({ isDrink }) {
  const Icon = isDrink ? Coffee : FishSimple

  return (
    <div className="grid h-full w-full place-items-center bg-[linear-gradient(135deg,#fffaf1,#efe4cd)] text-[var(--color-gold-strong)]">
      <Icon size={38} weight="duotone" />
    </div>
  )
}

function Badge({ label }) {
  if (!label) {
    return null
  }

  return (
    <span className="absolute left-2 top-2 rounded-[7px] bg-[var(--color-green)] px-2 py-1 text-[10px] font-semibold leading-none text-[#fffaf1] shadow-[0_5px_12px_rgba(7,88,59,0.2)]">
      {label}
    </span>
  )
}

function FeaturedCard({ dish }) {
  return (
    <article className="overflow-hidden rounded-[12px] border border-[rgba(184,137,53,0.22)] bg-white shadow-[0_6px_14px_rgba(42,49,38,0.08)]">
      <div className="relative aspect-[1.18] overflow-hidden bg-[#fffaf1]">
        <img src={dish.image} alt={dish.name} className="h-full w-full object-cover" loading="lazy" />
        <Badge label={dish.tag} />
      </div>
      <div className="p-2.5">
        <h3 className="min-h-[34px] font-[var(--font-display)] text-[14px] font-semibold leading-[1.22] text-[var(--color-ink)]">
          {dish.name}
        </h3>
        <p className="mt-1 text-[11px] leading-[1.45] text-[var(--color-muted)] line-clamp-2">{dish.description}</p>
        <p className="mt-2 font-[var(--font-display)] text-[15px] font-bold text-[var(--color-green)]">{dish.price}</p>
      </div>
    </article>
  )
}

function MenuRow({ item, isDrink }) {
  return (
    <article className="grid min-h-[104px] grid-cols-[118px_1fr] overflow-hidden rounded-[13px] border border-[rgba(184,137,53,0.22)] bg-white/86 shadow-[0_6px_14px_rgba(42,49,38,0.055)]">
      <div className="relative h-full min-h-[104px] overflow-hidden bg-[#fffaf1]">
        {item.image ? (
          <img src={item.image} alt={item.name} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <DishImageFallback isDrink={isDrink} />
        )}
        <Badge label={item.tag} />
      </div>
      <div className="flex min-w-0 items-center justify-between gap-3 p-3">
        <div className="min-w-0">
          <h3 className="font-[var(--font-display)] text-[17px] font-bold leading-snug text-[var(--color-ink)]">
            {item.name}
          </h3>
          {item.description && (
            <p className="mt-1.5 text-[12px] leading-[1.45] text-[var(--color-muted)] line-clamp-2">
              {item.description}
            </p>
          )}
        </div>
        <p className="shrink-0 self-end pb-1 font-[var(--font-display)] text-[17px] font-bold text-[var(--color-green)]">
          {item.price}
        </p>
      </div>
    </article>
  )
}

function PromoBanner() {
  return (
    <section id="dat-ban" className="px-3 pt-4">
      <div className="relative isolate overflow-hidden rounded-[14px] bg-[linear-gradient(135deg,#07583B,#06422E)] p-4 text-white shadow-[0_10px_22px_rgba(7,88,59,0.22)]">
        <FishSimple
          size={112}
          weight="thin"
          className="pointer-events-none absolute -right-2 -top-3 -z-[1] rotate-[-14deg] text-[rgba(211,184,126,0.18)]"
        />
        <div className="flex gap-3">
          <CalendarCheck size={28} weight="duotone" className="mt-0.5 shrink-0 text-[var(--color-gold)]" />
          <div className="min-w-0">
            <h2 className="font-[var(--font-display)] text-[17px] font-bold leading-tight text-[var(--color-gold)]">
              Đặt bàn trước - Trải nghiệm trọn vẹn hương vị
            </h2>
            <p className="mt-1.5 text-[12.5px] leading-[1.45] text-[#fffaf1]">
              Không gian ấm cúng, phục vụ tận tâm.
            </p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-[1fr_1.05fr] gap-2.5">
          <a
            href="#dat-ban"
            className="inline-flex h-10 items-center justify-center rounded-[11px] bg-[#fffaf1] px-3 text-[13px] font-bold text-[var(--color-green)] active:translate-y-px"
          >
            Đặt bàn ngay
          </a>
          <a
            href="tel:0961374566"
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-[11px] border border-[var(--color-gold)] px-3 text-[13px] font-bold text-[#fffaf1] active:translate-y-px"
          >
            <Phone size={16} weight="bold" className="text-[var(--color-gold)]" />
            0961 374 566
          </a>
        </div>
      </div>
    </section>
  )
}

export function MobileMenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('signature')
  const filteredItems = getMenuItems(selectedCategory)
  const featuredDishes = menuDishes.slice(0, 4)
  const isDrink = selectedCategory === 'drink'

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

        <main id="menu" className="mx-auto max-w-[480px] overflow-hidden">
          {/* <nav className="flex items-center gap-2 px-5 py-3.5 text-[13px] text-[rgba(38,51,39,0.72)]" aria-label="Breadcrumb">
            <HouseLine size={17} weight="regular" />
            <a href="#home" className="font-medium text-[rgba(38,51,39,0.72)]">
              Trang chủ
            </a>
            <CaretRight size={13} weight="bold" />
            <span className="font-bold text-[var(--color-ink)]">Thực đơn</span>
          </nav> */}

          <section className="relative isolate h-[clamp(330px,88vw,350px)] overflow-hidden bg-[#fffaf1]">
            <img
              src={menuHero.bannerBg}
              alt="Thực đơn Chả Cá Tràng An"
              className="absolute right-0 top-0 z-[1] h-full w-[72%] object-cover object-[60%_48%]"
              fetchPriority="high"
            />
            <div
              className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,#fffaf1_0%,#fffaf1_37%,rgba(255,250,241,0.98)_48%,rgba(255,250,241,0.72)_61%,rgba(255,250,241,0.12)_78%,rgba(255,250,241,0)_100%),linear-gradient(180deg,rgba(255,250,241,0)_55%,rgba(255,250,241,0.34)_79%,#fffaf1_100%)]"
              aria-hidden="true"
            />
            <div
              className="absolute left-0 top-8 z-[3] h-40 w-28 bg-[radial-gradient(circle_at_0%_30%,rgba(15,81,52,0.1),transparent_62%)]"
              aria-hidden="true"
            />
            <div className="relative z-[4] w-[55%] pl-5 pt-7 max-[374px]:w-[58%]">
              <p className="font-script mb-1 whitespace-nowrap pb-1 text-[clamp(31px,8.5vw,38px)] leading-[1.1] text-[var(--color-gold-strong)]">
                {menuHero.script}
              </p>
              <h1 className="font-[var(--font-display)] text-[clamp(39px,10.7vw,46px)] font-bold leading-[1.08] text-[var(--color-green)]">
                <span className="whitespace-nowrap">CHẢ CÁ</span>
                <br />
                <span className="whitespace-nowrap">TRÀNG AN</span>
              </h1>
              <FishSimple size={29} weight="fill" className="mt-2.5 text-[var(--color-gold-strong)]" />
              <p className="mt-2 max-w-[196px] text-[13.5px] font-medium leading-[1.55] text-[var(--color-ink)]">
                Tinh hoa ẩm thực Hà Thành - chả cá tươi ngon, tẩm ướp theo công thức gia truyền.
              </p>
            </div>
          </section>

          <section className="relative z-10 -mt-6 px-5">
            <CategoryTabs selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
          </section>

          <section className="px-5 pt-5">
            <SectionHeader title="MÓN NỔI BẬT" actionLabel="Xem tất cả" />
            <div className="mobile-scroll-row -mx-5 grid auto-cols-[176px] grid-flow-col gap-3 overflow-x-auto px-5 pb-2">
              {featuredDishes.map((dish) => (
                <FeaturedCard key={dish.name} dish={dish} />
              ))}
            </div>
          </section>

          <section className="px-5 pt-5">
            <SectionHeader title="THỰC ĐƠN" />
            <div className="grid gap-3">
              {filteredItems.map((item) => (
                <MenuRow key={item.name} item={item} isDrink={isDrink} />
              ))}
            </div>
          </section>

          <PromoBanner />
        </main>

        <MobileBottomNav activeItem="menu" />
      </div>
    </div>
  )
}
