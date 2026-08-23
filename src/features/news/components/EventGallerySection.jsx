import { useState } from 'react'
import {
  CaretLeft,
  CaretRight,
  Images,
  MagnifyingGlassPlus,
  X,
} from '@phosphor-icons/react'
import { FadeUpSection } from '../../../components/animations/FadeUpSection'
import { ScrollReveal } from '../../../components/animations/ScrollReveal'
import { StaggerContainer } from '../../../components/animations/StaggerContainer'
import { galleryPhotos } from '../data/newsContent'

const galleryCategories = [
  { id: 'all', label: 'TẤT CẢ ẢNH' },
  { id: 'Sân khấu & Ánh sáng', label: 'SÂN KHẤU & ÁNH SÁNG' },
  { id: 'Âm thanh chuyên nghiệp', label: 'ÂM THANH CHUYÊN NGHIỆP' },
  { id: 'Tiệc cưới & Đại tiệc', label: 'TIỆC CƯỚI & ĐẠI TIỆC' },
  { id: 'Sự kiện ngoài trời', label: 'SỰ KIỆN NGOÀI TRỜI' },
  { id: 'Hội nghị doanh nghiệp', label: 'HỘI NGHỊ DOANH NGHIỆP' },
]

export function EventGallerySection({ onOpenConsultation }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [activePhotoIndex, setActivePhotoIndex] = useState(null)

  const filteredPhotos =
    selectedCategory === 'all'
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === selectedCategory)

  const handleNextPhoto = (e) => {
    e.stopPropagation()
    setActivePhotoIndex((prev) => (prev + 1) % filteredPhotos.length)
  }

  const handlePrevPhoto = (e) => {
    e.stopPropagation()
    setActivePhotoIndex(
      (prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length
    )
  }

  const currentPhoto =
    activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null

  return (
    <FadeUpSection
      id="event-gallery"
      className="bg-gradient-to-b from-[#FBF9F6] via-[#FFFDF9] to-[#FBF9F6] py-16 md:py-24 border-b border-[#E8E1D3]"
      duration={800}
    >
      <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-10" delay={80} duration={750}>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7D0D0D]/10 px-4 py-1 text-[12px] font-extrabold uppercase tracking-widest text-[#9E1C1C]">
            <Images size={14} weight="fill" className="text-[#D97706]" />
            ALBUM ẢNH THỰC TẾ
          </span>

          <h2 className="mt-3 font-[var(--font-display)] text-[26px] sm:text-[32px] md:text-[38px] font-black uppercase tracking-wide text-[#18181B]">
            KHO ẢNH SỰ KIỆN ĐÃ THỰC HIỆN
          </h2>

          <div className="mx-auto my-3.5 h-[3px] w-20 bg-gradient-to-r from-[#D97706] to-[#E5A93C] rounded-full" />

          <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#52525B] max-w-2xl mx-auto leading-relaxed">
            Hình ảnh thực tế các dự án âm thanh ánh sáng, sân khấu, nhà bạt và khoảnh khắc đáng nhớ do ekip Thành Nam Sự Kiện kiến tạo.
          </p>
        </ScrollReveal>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {galleryCategories.map((cat) => {
            const isActive = selectedCategory === cat.id
            return (
              <button
                type="button"
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id)
                  setActivePhotoIndex(null)
                }}
                className={`rounded-full px-4 sm:px-5 py-2 text-[11.5px] sm:text-[12px] font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs active:scale-95 ${
                  isActive
                    ? 'bg-[#B45309] text-white shadow-[0_4px_14px_rgba(180,83,9,0.35)] ring-2 ring-[#FDE68A]'
                    : 'bg-white text-[#52525B] border border-[#E8E1D3] hover:bg-[#F3EFEA] hover:text-[#18181B]'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Gallery Photos Grid */}
        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4.5"
          delay={100}
          staggerDelay={50}
        >
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-[14px] border border-[#E8E1D3] bg-[#180505] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#D97706]/50 cursor-pointer"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover Dark Overlay with Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 sm:p-4 text-white">
                <div className="flex justify-end">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-xs text-white">
                    <MagnifyingGlassPlus size={16} weight="bold" />
                  </span>
                </div>

                <div>
                  <span className="inline-block rounded-[3px] bg-[#D97706] px-1.5 py-0.5 text-[9px] font-bold uppercase text-white">
                    {photo.category}
                  </span>
                  <h4 className="mt-1 font-['Montserrat',sans-serif] text-[12px] sm:text-[13px] font-bold leading-tight line-clamp-2 text-white">
                    {photo.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>

      {/* Lightbox Modal */}
      {currentPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 sm:p-6 backdrop-blur-md animate-fade-in"
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-[#7D0D0D] transition-colors"
            aria-label="Đóng ảnh"
          >
            <X size={22} weight="bold" />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={handlePrevPhoto}
            className="absolute left-3 sm:left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 border border-white/20 text-white hover:bg-[#D97706] transition-colors shadow-lg active:scale-95"
            aria-label="Ảnh trước"
          >
            <CaretLeft size={26} weight="bold" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNextPhoto}
            className="absolute right-3 sm:right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 border border-white/20 text-white hover:bg-[#D97706] transition-colors shadow-lg active:scale-95"
            aria-label="Ảnh kế tiếp"
          >
            <CaretRight size={26} weight="bold" />
          </button>

          {/* Photo Display Card */}
          <div
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-[16px] bg-[#140202] border border-white/15 shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentPhoto.image}
              alt={currentPhoto.title}
              className="max-h-[75vh] w-auto mx-auto object-contain"
            />
            <div className="p-4 sm:p-5 flex items-center justify-between gap-4 border-t border-white/10 bg-[#1F0404]">
              <div>
                <span className="text-[11px] font-bold uppercase text-[#E5A93C]">
                  {currentPhoto.category} • Ảnh {activePhotoIndex + 1}/
                  {filteredPhotos.length}
                </span>
                <h3 className="font-['Montserrat',sans-serif] text-[15px] sm:text-[17px] font-bold text-white">
                  {currentPhoto.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => {
                  setActivePhotoIndex(null)
                  if (onOpenConsultation) onOpenConsultation()
                }}
                className="hidden sm:inline-flex items-center justify-center whitespace-nowrap rounded-[6px] bg-[#C97A1E] px-4 py-2 text-[12px] font-bold uppercase text-white shadow-md active:scale-95"
              >
                Tư Vấn Sự Kiện Tương Tự
              </button>
            </div>
          </div>
        </div>
      )}
    </FadeUpSection>
  )
}
