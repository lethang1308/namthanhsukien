import { ArrowRight, FishSimple } from '@phosphor-icons/react'
import { SectionTitle } from '../../../components/SectionTitle'
import { featuredDishes } from '../data/homeContent'

export function FeaturedDishes() {
  return (
    <section
      id="thuc-don"
      className="mx-auto grid max-w-[1400px] gap-5 px-4 pb-5 pt-5 md:px-8 lg:grid-cols-[0.315fr_0.685fr]"
    >
      <article
        id="gioi-thieu"
        className="rounded-[20px] border border-[rgba(184,137,53,0.25)] bg-white/28 p-6 backdrop-blur-[2px] md:p-7"
      >
        <p className="font-script mb-1 pb-1 text-[30px] leading-[1.12] text-[var(--color-green)]">
          Câu chuyện
        </p>
        <h2 className="font-[var(--font-display)] text-[26px] font-bold leading-tight text-[var(--color-green)]">
          CHẢ CÁ TRÀNG AN
        </h2>
        <p className="mt-4 text-[14px] leading-[1.62] text-[var(--color-muted)]">
          Từ niềm đam mê với ẩm thực truyền thống Hà Thành, Chả Cá Tràng An ra
          đời với mong muốn mang đến thực khách những món ăn tươi ngon nhất.
        </p>
        <p className="mt-3 text-[14px] leading-[1.62] text-[var(--color-muted)]">
          Chúng tôi chọn lọc nguyên liệu mỗi ngày, tẩm ướp theo công thức gia
          truyền và phục vụ bằng sự tận tâm.
        </p>
        <a
          href="#khong-gian"
          className="mt-5 inline-flex rounded-full bg-[var(--color-green)] px-5 py-2.5 text-[13px] font-bold text-white transition hover:bg-[var(--color-green-deep)] active:translate-y-px"
        >
          Khám phá thêm
        </a>
      </article>

      <div>
        <SectionTitle
          title="MÓN NGON NỔI BẬT"
          icon={<FishSimple size={24} weight="regular" className="text-[var(--color-gold-strong)]" />}
          action={
            <a
              href="#thuc-don"
              className="hidden items-center gap-1.5 text-[13px] font-semibold text-[var(--color-green)] md:inline-flex"
            >
              Xem tất cả
              <ArrowRight size={15} weight="bold" />
            </a>
          }
        />
        <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
          {featuredDishes.map((dish) => (
            <article
              key={dish.name}
              className="group overflow-hidden rounded-[14px] border border-[rgba(184,137,53,0.25)] bg-[#fffaf1] transition hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(34,51,42,0.04)]"
            >
              <div className="aspect-[1.18] overflow-hidden bg-[#fffaf1] xl:h-[166px] xl:aspect-auto">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <h3 className="min-h-[38px] font-[var(--font-display)] text-[14px] font-semibold leading-[1.35] text-[var(--color-ink)] md:text-[15px]">
                  {dish.name}
                </h3>
                <p className="mt-1 text-[13px] font-semibold text-[var(--color-green)]">
                  {dish.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
