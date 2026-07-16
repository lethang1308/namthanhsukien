import { ArrowRight, FishSimple } from '@phosphor-icons/react'
import { SectionTitle } from '../../../components/SectionTitle'
import { featuredDishes } from '../data/homeContent'

export function FeaturedDishes() {
  return (
    <section id="thuc-don" className="mx-auto grid max-w-[1400px] gap-7 px-4 py-8 md:px-8 lg:grid-cols-[0.36fr_0.64fr]">
      <article
        id="gioi-thieu"
        className="border border-[rgba(211,184,126,0.45)] bg-white/54 p-7 shadow-[0_18px_48px_rgba(18,57,38,0.08)] backdrop-blur-sm"
      >
        <p className="font-script mb-1 text-3xl leading-[1.2] text-[var(--color-green)]">
          Câu chuyện
        </p>
        <h2 className="font-[var(--font-display)] text-3xl font-bold leading-tight text-[var(--color-green)]">
          CHẢ CÁ TRÀNG AN
        </h2>
        <p className="mt-5 leading-7 text-[var(--color-muted)]">
          Từ niềm đam mê với ẩm thực truyền thống Hà Thành, Chả Cá Tràng An ra
          đời với mong muốn mang đến thực khách những món ăn tươi ngon nhất.
        </p>
        <p className="mt-4 leading-7 text-[var(--color-muted)]">
          Chúng tôi chọn lọc nguyên liệu mỗi ngày, tẩm ướp theo công thức gia
          truyền và phục vụ bằng sự tận tâm.
        </p>
        <a
          href="#khong-gian"
          className="mt-7 inline-flex rounded-full bg-[var(--color-green)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-green-deep)] active:translate-y-px"
        >
          Khám phá thêm
        </a>
      </article>

      <div>
        <SectionTitle
          title="MÓN NGON NỔI BẬT"
          action={
            <a
              href="#thuc-don"
              className="hidden items-center gap-2 text-sm font-semibold text-[var(--color-green)] md:inline-flex"
            >
              Xem tất cả
              <ArrowRight size={16} weight="bold" />
            </a>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featuredDishes.map((dish) => (
            <article
              key={dish.name}
              className="group overflow-hidden border border-[rgba(211,184,126,0.5)] bg-white/72 shadow-[0_14px_34px_rgba(18,57,38,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(18,57,38,0.12)]"
            >
              <div className="aspect-[1.18] overflow-hidden bg-[rgba(255,250,241,0.65)]">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center gap-2 text-[var(--color-gold-strong)]">
                  <FishSimple size={18} weight="fill" />
                  <h3 className="font-[var(--font-display)] text-lg font-bold text-[var(--color-ink)]">
                    {dish.name}
                  </h3>
                </div>
                <p className="font-semibold text-[var(--color-green)]">{dish.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
