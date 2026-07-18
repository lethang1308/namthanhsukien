import { useState, useEffect } from 'react'
import {
  CookingPot,
  FishSimple,
  Egg,
  BowlFood,
  Gift,
  Coffee,
  CalendarCheck,
  Phone,
  Star,
} from '@phosphor-icons/react'
import { Header } from '../home/components/Header'
import { Footer } from '../home/components/Footer'
import { FadeUpSection } from '../../components/animations/FadeUpSection'
import { ScrollReveal } from '../../components/animations/ScrollReveal'
import { StaggerContainer } from '../../components/animations/StaggerContainer'
import paperBackground from '../../assets/b4002091-4a7b-4407-a4a9-992d5654bdd3.png'
import {
  menuHero,
  menuCategories,
  recommendedDish,
  menuDishes,
  menuCombos,
  menuDrinks,
} from './data/menuContent'

const iconMap = {
  CookingPot,
  FishSimple,
  Egg,
  BowlFood,
  Gift,
  Coffee,
}

export function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('signature')

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Filter items based on category
  const getFilteredItems = () => {
    if (selectedCategory === 'all') {
      return menuDishes
    }
    if (selectedCategory === 'combo') {
      return menuCombos
    }
    if (selectedCategory === 'drink') {
      return menuDrinks
    }
    return menuDishes.filter((dish) => dish.category === selectedCategory)
  }

  const filteredItems = getFilteredItems()

  // Featured dishes for the "Món nổi bật" grid (first 4 items of menuDishes)
  const featuredDishes = menuDishes.slice(0, 4)

  return (
    <div
      className="min-h-[100dvh] bg-[#FBF7EF] text-[#26382E]"
      style={{
        backgroundImage: `linear-gradient(rgba(251, 247, 239, 0.15), rgba(251, 247, 239, 0.15)), url(${paperBackground})`,
        backgroundRepeat: 'repeat-y',
        backgroundPosition: 'top center',
        backgroundSize: '100% auto',
      }}
    >
      <Header />

      <main className="pb-16">
        {/* Banner Section */}
        <FadeUpSection className="relative isolate overflow-hidden" duration={800}>
          <div className="relative min-h-[720px] md:h-[520px] md:min-h-0 xl:h-[560px] flex items-center bg-[#FBF7EF]">
            {/* Background image on the right with a soft radial fade overlay to match left bg */}
            <div className="absolute inset-y-0 right-0 z-0 w-full md:w-[65%] pointer-events-none">
              <img
                src={menuHero.bannerBg}
                alt="Banner thực đơn nhà hàng Chả Cá Tràng An"
                className="h-full w-full object-cover object-[62%_50%]"
              />
              {/* Fade gradient from left to right */}
              <div
                className="absolute inset-0 bg-[linear-gradient(90deg,#FBF7EF_0%,rgba(251,247,239,0.96)_20%,rgba(251,247,239,0.85)_40%,rgba(251,247,239,0.25)_65%,transparent_90%)]"
                aria-hidden="true"
              />
              {/* Bottom fade */}
              <div
                className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(0deg,#FBF7EF_0%,rgba(251,247,239,0.5)_40%,transparent_100%)]"
                aria-hidden="true"
              />
            </div>

            {/* Banner text content */}
            <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 md:px-8">
              <div className="max-w-xl md:w-[48%]">
                <p className="font-script mb-1 text-[42px] leading-tight text-[#075B3B] sm:text-[50px] md:text-[48px] xl:text-[58px]">
                  {menuHero.script}
                </p>
                <h1 className="font-[var(--font-display)] text-[40px] font-bold leading-none text-[#075B3B] sm:text-[48px] md:text-[44px] xl:text-[56px]">
                  {menuHero.title}
                </h1>
                <div className="my-4.5 flex items-center gap-3">
                  <div className="h-[1px] w-18 bg-[#B88935] opacity-50" />
                  <FishSimple size={18} className="text-[#B88935]" weight="bold" />
                  <div className="h-[1px] w-18 bg-[#B88935] opacity-50" />
                </div>
                <p className="text-base leading-[1.65] text-[#69736C] md:text-[17px] max-w-[500px]">
                  {menuHero.description}
                </p>
              </div>
            </div>
          </div>
        </FadeUpSection>

        {/* Categories Bar */}
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 -mt-6 md:-mt-8 relative z-10">
          <ScrollReveal delay={100} duration={700}>
            <div className="flex md:grid md:grid-cols-5 md:max-w-[960px] md:mx-auto gap-3 md:gap-3.5 overflow-x-auto pb-2 scrollbar-none justify-start items-center">
              {menuCategories
                .filter((cat) => cat.id !== 'all')
                .map((cat) => {
                  const IconComponent = iconMap[cat.icon]
                  const isActive = selectedCategory === cat.id

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex items-center justify-center gap-2.5 h-[46px] px-6 rounded-full text-[13.5px] md:text-[14.5px] font-bold transition whitespace-nowrap cursor-pointer select-none ${
                        isActive
                          ? 'bg-[#075B3B] text-[#FFFDF5] border border-[#075B3B] shadow-[0_4px_18px_rgba(42,55,47,0.06)]'
                          : 'bg-[#FFFDF9] text-[#075B3B] border border-[rgba(184,137,53,0.42)] hover:bg-[#FFFDF5] hover:border-[#075B3B]'
                      }`}
                    >
                      {IconComponent && (
                        <IconComponent
                          size={20}
                          weight={isActive ? 'fill' : 'bold'}
                          className={isActive ? 'text-[#FFFDF5]' : 'text-[#B88935]'}
                        />
                      )}
                      {cat.label}
                    </button>
                  )
                })}
            </div>
          </ScrollReveal>
        </div>

        {/* Featured Section (Visible only when selectedCategory is 'signature') */}
        {selectedCategory === 'signature' && (
          <div className="mx-auto max-w-[1400px] px-4 md:px-8 mt-10 md:mt-12 grid gap-6 lg:grid-cols-[3fr_1.1fr] items-start">
            {/* Left Column: MÓN NỔI BẬT */}
            <div>
              <ScrollReveal duration={700}>
                <h2 className="mb-3.5 flex items-center gap-2 font-[var(--font-display)] text-[20px] md:text-[22px] font-bold text-[#075B3B]">
                  MÓN NỔI BẬT
                  <FishSimple size={21} className="text-[#B88935]" weight="bold" />
                </h2>
              </ScrollReveal>

              <StaggerContainer className="grid gap-3.5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4" delay={150} staggerDelay={80}>
                {featuredDishes.map((dish) => (
                  <article
                    key={dish.name}
                    className="flex flex-col h-full overflow-hidden rounded-[14px] border border-[rgba(184,137,53,0.28)] bg-[#FFFDF9] transition hover:shadow-[0_8px_24px_rgba(42,55,47,0.05)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-[13px]">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      {dish.tag && (
                        <span className="absolute left-2.5 top-2.5 rounded bg-[#075B3B] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#FFFDF5] border border-[rgba(211,184,126,0.2)]">
                          {dish.tag}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col p-3">
                      <h3 className="font-[var(--font-display)] text-[14px] md:text-[14.5px] font-bold leading-snug text-[#26382E]">
                        {dish.name}
                      </h3>
                      <p className="mt-1 text-[11.5px] leading-relaxed text-[#69736C] line-clamp-2 flex-1">
                        {dish.description}
                      </p>
                      <p className="mt-2.5 font-[var(--font-display)] text-[16px] font-bold text-[#075B3B]">
                        {dish.price}
                      </p>
                    </div>
                  </article>
                ))}
              </StaggerContainer>
            </div>

            {/* Right Column: GỢI Ý HÔM NAY */}
            <div>
              <ScrollReveal duration={700} delay={100}>
                <h2 className="mb-3.5 flex items-center gap-2 font-[var(--font-display)] text-[20px] md:text-[22px] font-bold text-[#075B3B]">
                  GỢI Ý HÔM NAY
                  <Star size={20} weight="fill" className="text-[#B88935]" />
                </h2>
              </ScrollReveal>

              <ScrollReveal
                duration={760}
                delay={200}
                className="overflow-hidden rounded-[16px] border border-[rgba(184,137,53,0.32)] bg-[#FFFDF9] transition hover:shadow-[0_8px_24px_rgba(42,55,47,0.05)] flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-[15px]">
                  <img
                    src={recommendedDish.image}
                    alt={recommendedDish.name}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded bg-[#075B3B] px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-[#FFFDF5] border border-[rgba(211,184,126,0.2)]">
                    {recommendedDish.tag}
                  </span>
                </div>
                <div className="flex-1 flex flex-col p-4">
                  <h3 className="font-[var(--font-display)] text-[15.5px] md:text-[16px] font-bold text-[#26382E]">
                    {recommendedDish.name}
                  </h3>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-[#69736C] flex-1">
                    {recommendedDish.description}
                  </p>
                  <div className="mt-3.5 flex items-center justify-between gap-4 pt-2.5 border-t border-dashed border-[rgba(184,137,53,0.14)]">
                    <span className="font-[var(--font-display)] text-[17px] font-bold text-[#075B3B]">
                      {recommendedDish.price}
                    </span>
                    <a
                      href="#dat-ban"
                      className="inline-flex h-8.5 items-center rounded-full bg-[#075B3B] px-4.5 text-[11.5px] font-bold text-[#FFFDF5] transition hover:bg-[#064B34] active:translate-y-px"
                    >
                      Đặt thử ngay
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        )}

        {/* Main Menu Grid Section */}
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 mt-10 md:mt-12">
          <ScrollReveal duration={700}>
            <h2 className="mb-5 flex items-center gap-2 font-[var(--font-display)] text-[22px] font-bold text-[#075B3B]">
              {selectedCategory === 'combo'
                ? 'COMBO ƯU ĐÃI'
                : selectedCategory === 'drink'
                ? 'ĐỒ UỐNG'
                : 'THỰC ĐƠN'}
              <FishSimple size={22} className="text-[#B88935]" weight="bold" />
            </h2>
          </ScrollReveal>

          {filteredItems.length === 0 ? (
            <p className="text-center py-12 text-[#69736C]">Hiện chưa có món ăn nào trong danh mục này.</p>
          ) : (
            <StaggerContainer
              className={`grid gap-4 ${
                selectedCategory === 'combo'
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
              }`}
              delay={150}
              staggerDelay={60}
            >
              {filteredItems.map((item) => {
                const isCombo = selectedCategory === 'combo'
                const isDrink = selectedCategory === 'drink'

                return (
                  <article
                    key={item.name}
                    className="overflow-hidden rounded-[14px] border border-[rgba(184,137,53,0.28)] bg-[#FFFDF9] transition hover:shadow-[0_8px_24px_rgba(42,55,47,0.05)] flex flex-col h-full"
                  >
                    {!isDrink && item.image && (
                      <div className={`relative ${isCombo ? 'aspect-[16/10]' : 'aspect-[4/3]'} overflow-hidden rounded-t-[13px]`}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition duration-500 hover:scale-105"
                          loading="lazy"
                        />
                        {item.tag && (
                          <span className="absolute left-2.5 top-2.5 rounded bg-[#075B3B] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#FFFDF5]">
                            {item.tag}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex-1 flex flex-col p-3">
                      <h3 className="font-[var(--font-display)] text-[13.5px] md:text-[14px] font-bold leading-snug text-[#26382E]">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="mt-1 text-[11px] leading-relaxed text-[#69736C] line-clamp-2 flex-1">
                          {item.description}
                        </p>
                      )}
                      <p className="mt-2.5 font-[var(--font-display)] text-[14.5px] md:text-[15px] font-bold text-[#075B3B]">
                        {item.price}
                      </p>
                    </div>
                  </article>
                )
              })}
            </StaggerContainer>
          )}
        </div>

        {/* Promo Booking Banner */}
        <div className="mx-auto max-w-[1400px] px-4 py-6 md:px-8">
          <ScrollReveal
            duration={800}
            className="rounded-[20px] border border-[rgba(184,137,53,0.28)] bg-[#FFFDF9] p-6 text-center shadow-[0_4px_18px_rgba(42,55,47,0.02)] relative overflow-hidden"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(15,81,52,0.03),transparent_38%)]"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
              <div className="inline-grid h-12 w-12 place-items-center rounded-full bg-[rgba(15,81,52,0.08)] text-[#075B3B] mb-3">
                <CalendarCheck size={26} weight="duotone" />
              </div>
              <h3 className="font-[var(--font-display)] text-[18px] sm:text-[20px] font-bold text-[#075B3B] leading-tight">
                Đặt bàn trước - Trải nghiệm trọn vẹn hương vị Chả Cá Tràng An
              </h3>
              <p className="mt-1.5 text-[12.5px] sm:text-[13px] leading-relaxed text-[#69736C]">
                Không gian ấm cúng, phục vụ tận tâm - Đặt bàn ngay để giữ chỗ cho gia đình và người thân.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <a
                  href="#dat-ban"
                  className="inline-flex h-10 items-center rounded-full bg-[#075B3B] px-6 text-[12.5px] font-bold text-white shadow-[0_8px_20px_rgba(15,81,52,0.18)] transition hover:bg-[#064B34] active:translate-y-px"
                >
                  Đặt bàn ngay
                </a>
                <a
                  href="tel:0961374566"
                  className="inline-flex h-10 items-center rounded-full border border-[rgba(15,81,52,0.35)] bg-white/70 px-5 text-[12.5px] font-bold text-[#075B3B] transition hover:bg-white active:translate-y-px"
                >
                  <Phone className="mr-1.5" size={16} weight="bold" />
                  0961 374 566
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </div>
  )
}
