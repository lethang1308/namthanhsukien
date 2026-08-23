import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, X } from '@phosphor-icons/react'
import { FadeUpSection } from '../../../components/animations/FadeUpSection'
import { ScrollReveal } from '../../../components/animations/ScrollReveal'
import { StaggerContainer } from '../../../components/animations/StaggerContainer'
import { featuredProjects } from '../data/homeContent'

export function FeaturedProjects({ onOpenConsultation }) {
  const [activePhoto, setActivePhoto] = useState(null)

  return (
    <FadeUpSection
      id="projects"
      className="mx-auto max-w-[1400px] px-4 py-12 md:py-16 lg:px-8"
      duration={800}
    >
      {/* Section Centered Title */}
      <ScrollReveal className="text-center mb-10" delay={80} duration={750}>
        <div className="inline-flex items-center justify-center gap-3">
          <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#18181B]/40" />
          <h2 className="font-[var(--font-display)] text-[24px] sm:text-[30px] md:text-[36px] font-black uppercase tracking-wider text-[#18181B]">
            DỰ ÁN TIÊU BIỂU
          </h2>
          <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#18181B]/40" />
        </div>
        <p className="mt-2 text-[14px] sm:text-[15px] text-[#71717A] max-w-lg mx-auto">
          Những dấu ấn sự kiện đẳng cấp được kiến tạo bởi tâm huyết của Nam Thành Sự Kiện
        </p>
      </ScrollReveal>

      {/* 4 Gallery Grid Cards */}
      <StaggerContainer
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        delay={150}
        staggerDelay={100}
      >
        {featuredProjects.map((project) => (
          <article
            key={project.id}
            onClick={() => setActivePhoto(project)}
            className="group relative cursor-pointer overflow-hidden rounded-[16px] border border-[#E4E4E7] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(125,13,13,0.18)] hover:border-[#E5A93C]/50"
          >
            {/* Image Container */}
            <div className="aspect-[4/5] overflow-hidden bg-[#180505]">
              <img
                src={project.image}
                alt={project.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Dark Scrim Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#180505] via-[#180505]/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

            {/* Card Content & Badge */}
            <div className="absolute inset-x-0 bottom-0 p-4 text-white">
              <span className="inline-block rounded-[4px] bg-[#780D0D] px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-[#FDE68A] mb-1.5 shadow-sm">
                {project.category}
              </span>
              <h3 className="font-[var(--font-display)] text-[15px] sm:text-[16px] font-bold leading-snug text-white line-clamp-2 transition-colors duration-200 group-hover:text-[#FDE68A]">
                {project.title}
              </h3>
              <div className="mt-2 flex items-center justify-between text-[12px] text-gray-300">
                <span>{project.location}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-[#E5A93C] group-hover:translate-x-1 transition-transform">
                  Xem ảnh <Eye size={14} weight="bold" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </StaggerContainer>

      {/* Center CTA Button: XEM THÊM DỰ ÁN */}
      <ScrollReveal className="mt-10 text-center" delay={250} duration={750}>
        <Link
          to="/tin-tuc"
          className="inline-flex items-center justify-center rounded-[8px] bg-[#780D0D] px-8 py-3.5 text-[13.5px] font-extrabold uppercase tracking-wider text-white shadow-[0_6px_20px_rgba(120,13,13,0.35)] transition-all duration-300 hover:bg-[#941111] hover:shadow-[0_8px_25px_rgba(120,13,13,0.5)] hover:scale-[1.02] active:translate-y-px"
        >
          XEM THÊM DỰ ÁN
        </Link>
      </ScrollReveal>

      {/* Lightbox Photo Preview Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full overflow-hidden rounded-[16px] bg-[#140505] border border-white/20 p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white hover:bg-[#780D0D] transition-colors"
              aria-label="Đóng"
            >
              <X size={20} weight="bold" />
            </button>
            <div className="max-h-[75vh] overflow-hidden rounded-[12px] flex items-center justify-center bg-black">
              <img
                src={activePhoto.image}
                alt={activePhoto.alt}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-4 text-white flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-[12px] font-bold uppercase text-[#E5A93C]">
                  {activePhoto.category} • {activePhoto.location}
                </span>
                <h4 className="text-[18px] font-bold">{activePhoto.title}</h4>
              </div>
              <button
                type="button"
                onClick={() => {
                  setActivePhoto(null)
                  onOpenConsultation()
                }}
                className="rounded-[6px] bg-[#E5A93C] px-4 py-2 text-[13px] font-bold text-[#140505] hover:bg-[#F59E0B]"
              >
                Nhận tư vấn dự án tương tự
              </button>
            </div>
          </div>
        </div>
      )}
    </FadeUpSection>
  )
}
