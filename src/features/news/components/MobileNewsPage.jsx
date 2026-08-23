import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CalendarBlank,
  CaretRight,
  Images,
  Phone,
  X,
} from '@phosphor-icons/react'
import { MobileHeader } from '../../../components/mobile/MobileHeader'
import { Footer } from '../../home/components/Footer'
import { galleryPhotos, newsArticles, newsCategories } from '../data/newsContent'

export function MobileNewsPage({ onOpenConsultation }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeGalleryPhoto, setActiveGalleryPhoto] = useState(null)

  const filteredArticles =
    activeCategory === 'all'
      ? newsArticles
      : newsArticles.filter((item) => item.categoryId === activeCategory)

  return (
    <div className="md:hidden min-h-[100dvh] bg-[#FFFFFF] text-[#18181B]">
      {/* Mobile Header */}
      <MobileHeader onOpenConsultation={onOpenConsultation} zIndexClass="z-40" />

      <main id="news-main">
        {/* 1. Mobile Banner */}
        <section className="relative isolate overflow-hidden bg-[#2D0404] px-4 py-8 text-white text-center">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(229,169,60,0.25)_0%,rgba(92,11,11,0.6)_60%,#200303_100%)]"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10">
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/85 mb-3">
              <Link to="/" className="hover:text-[#FDE68A]">
                Trang chủ
              </Link>
              <CaretRight size={11} weight="bold" className="text-[#E5A93C]" />
              <span className="font-bold text-[#E5A93C]">Tin tức & Dự án</span>
            </div>

            <h1 className="font-['Montserrat',sans-serif] text-[24px] font-black uppercase text-white leading-tight">
              TIN TỨC & KHO ẢNH SỰ KIỆN
            </h1>

            <span className="font-['Playfair_Display',serif] text-[16px] font-bold text-[#F0C554] block mt-1">
              Thành Nam Sự Kiện
            </span>

            <p
              className="font-script text-[26px] leading-tight text-[#F1C95B] my-1"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Kinh nghiệm thực chiến & hình ảnh sự kiện thực tế
            </p>
          </div>
        </section>

        {/* 2. Category Filter Pills */}
        <section className="px-4 pt-6 pb-2 bg-white sticky top-[57px] z-20 shadow-xs border-b border-gray-100">
          <div className="mobile-scroll-row -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 snap-x">
            {newsCategories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase snap-start transition-colors ${
                    isActive
                      ? 'bg-[#7D0D0D] text-[#FDE68A] shadow-xs'
                      : 'bg-[#F4F4F5] text-[#52525B] border border-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </section>

        {/* 3. Articles List Mobile */}
        <section className="px-4 py-6 bg-white space-y-4">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              to={`/tin-tuc/${article.slug || article.id}`}
              className="block overflow-hidden rounded-[14px] border border-[#E8E1D3] bg-[#FFFDF9] shadow-xs active:scale-[0.99] transition-transform"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#180505]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="rounded-full bg-[#7D0D0D]/10 px-2 py-0.5 text-[10px] font-extrabold uppercase text-[#9E1C1C]">
                    {article.category}
                  </span>
                  <span className="text-[10.5px] text-gray-500 flex items-center gap-1">
                    <CalendarBlank size={12} weight="bold" />
                    {article.date}
                  </span>
                </div>

                <h3 className="font-['Montserrat',sans-serif] text-[14px] font-bold uppercase text-[#18181B] leading-snug">
                  {article.title}
                </h3>

                <p className="mt-1.5 text-[11.5px] text-[#52525B] line-clamp-2 leading-relaxed">
                  {article.summary}
                </p>

                <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11.5px] font-bold text-[#B45309]">
                  <span>Xem chi tiết</span>
                  <ArrowRight size={13} weight="bold" />
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* 4. Event Gallery Grid Mobile */}
        <section className="px-4 py-8 bg-[#FBF9F6] border-t border-[#E4E4E7]">
          <div className="text-center mb-5">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#7D0D0D]/10 px-2.5 py-0.5 text-[10.5px] font-extrabold uppercase text-[#9E1C1C] mb-1">
              <Images size={12} weight="fill" className="text-[#D97706]" />
              ALBUM KHÁCH HÀNG
            </span>
            <h2 className="font-[var(--font-display)] text-[18px] font-black uppercase tracking-wider text-[#18181B]">
              KHO ẢNH SỰ KIỆN THỰC TẾ
            </h2>
            <p className="text-[11.5px] text-gray-500 mt-1">
              Chạm vào ảnh để xem chi tiết không gian & dàn thiết bị
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {galleryPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActiveGalleryPhoto(photo)}
                className="aspect-[4/3] overflow-hidden rounded-[10px] border border-[#E8E1D3] bg-[#180505] shadow-xs active:opacity-80"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 5. Quick CTA Card */}
        <section className="px-3 py-6 bg-[#FAF8F5]">
          <div className="rounded-[14px] bg-gradient-to-r from-[#3B0505] via-[#280303] to-[#1F0202] border border-[#E5A93C]/40 p-4 text-white flex items-center justify-between gap-3 shadow-xl">
            <div className="flex items-start gap-2.5 min-w-0">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E5A93C]/20 border border-[#E5A93C]/40 text-[#E5A93C]">
                <Phone size={18} weight="fill" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-medium text-gray-300">
                  Cần thuê thiết bị sự kiện?
                </span>
                <h4 className="text-[13px] font-bold text-[#FDE68A] leading-tight">
                  Tư vấn & Báo giá 24/7
                </h4>
                <p className="text-[10px] text-gray-300 mt-0.5 line-clamp-1">
                  Đội ngũ kỹ thuật Thành Nam luôn sẵn sàng phục vụ!
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="shrink-0 whitespace-nowrap rounded-[6px] bg-[#C97A1E] hover:bg-[#D97706] px-3 py-2 text-[11px] font-extrabold uppercase text-white shadow-md active:scale-95"
            >
              TƯ VẤN NGAY
            </button>
          </div>
        </section>

        {/* 6. Footer */}
        <Footer onOpenConsultation={onOpenConsultation} />
      </main>

      {/* Mobile Lightbox Modal */}
      {activeGalleryPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveGalleryPhoto(null)}
        >
          <button
            type="button"
            onClick={() => setActiveGalleryPhoto(null)}
            className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white"
          >
            <X size={20} weight="bold" />
          </button>

          <div
            className="relative max-h-[85vh] w-full overflow-hidden rounded-[14px] bg-[#140202] border border-white/20 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeGalleryPhoto.image}
              alt={activeGalleryPhoto.title}
              className="max-h-[65vh] w-full object-contain"
            />
            <div className="p-3 bg-[#1F0404] border-t border-white/10">
              <span className="text-[10px] font-bold uppercase text-[#E5A93C]">
                {activeGalleryPhoto.category}
              </span>
              <h3 className="text-[13px] font-bold text-white">
                {activeGalleryPhoto.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
