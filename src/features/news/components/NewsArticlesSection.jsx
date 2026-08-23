import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CalendarBlank,
  Newspaper,
  User,
} from '@phosphor-icons/react'
import { FadeUpSection } from '../../../components/animations/FadeUpSection'
import { ScrollReveal } from '../../../components/animations/ScrollReveal'
import { StaggerContainer } from '../../../components/animations/StaggerContainer'
import { newsArticles, newsCategories } from '../data/newsContent'

export function NewsArticlesSection({ _onOpenConsultation }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredArticles =
    activeCategory === 'all'
      ? newsArticles
      : newsArticles.filter((item) => item.categoryId === activeCategory)

  const featuredArticle = filteredArticles[0]
  const remainingArticles = filteredArticles.slice(1)

  return (
    <FadeUpSection
      id="news-articles"
      className="bg-white py-16 md:py-24 border-b border-[#E8E1D3]"
      duration={800}
    >
      <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-10" delay={80} duration={750}>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7D0D0D]/10 px-4 py-1 text-[12px] font-extrabold uppercase tracking-widest text-[#9E1C1C]">
            <Newspaper size={14} weight="fill" className="text-[#D97706]" />
            BÀI VIẾT & KIẾN THỨC
          </span>

          <h2 className="mt-3 font-[var(--font-display)] text-[26px] sm:text-[32px] md:text-[38px] font-black uppercase tracking-wide text-[#18181B]">
            CHUYÊN MỤC TIN TỨC SỰ KIỆN
          </h2>

          <div className="mx-auto my-3.5 h-[3px] w-20 bg-gradient-to-r from-[#D97706] to-[#E5A93C] rounded-full" />

          <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#52525B] max-w-2xl mx-auto leading-relaxed">
            Tổng hợp kinh nghiệm thực chiến, tư vấn thiết bị âm thanh ánh sáng và những câu chuyện dự án thành công.
          </p>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {newsCategories.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                type="button"
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-5 py-2.5 text-[12.5px] sm:text-[13px] font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs active:scale-95 ${
                  isActive
                    ? 'bg-[#7D0D0D] text-[#FDE68A] shadow-[0_4px_14px_rgba(125,13,13,0.35)] ring-2 ring-[#E5A93C]/50'
                    : 'bg-[#FBF9F6] text-[#52525B] border border-[#E8E1D3] hover:bg-[#F3EFEA] hover:text-[#18181B]'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Featured Big Article Card - Balanced Ratio */}
        {featuredArticle && (
          <ScrollReveal duration={750} className="mb-10">
            <Link
              to={`/tin-tuc/${featuredArticle.slug || featuredArticle.id}`}
              className="group grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-[18px] border border-[#E8E1D3] bg-[#FFFDF9] shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[#D97706]/40 hover:shadow-[0_12px_32px_rgba(217,119,6,0.12)] cursor-pointer block"
            >
              {/* Featured Image - Compact & Balanced */}
              <div className="lg:col-span-5 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full lg:max-h-[320px] overflow-hidden bg-[#180505]">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Featured Content - Rich & Well-Spaced */}
              <div className="lg:col-span-7 p-5 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                    <span className="rounded-full bg-[#7D0D0D] px-3 py-0.5 text-[10.5px] font-extrabold uppercase text-[#FDE68A]">
                      {featuredArticle.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11.5px] text-gray-500">
                      <CalendarBlank size={13} weight="bold" />
                      {featuredArticle.date}
                    </span>
                    <span className="text-[11.5px] text-gray-400">•</span>
                    <span className="text-[11.5px] text-[#B45309] font-semibold">
                      {featuredArticle.readTime || '5 phút đọc'}
                    </span>
                  </div>

                  <h3 className="font-['Montserrat',sans-serif] text-[18px] sm:text-[21px] font-black uppercase text-[#18181B] leading-snug group-hover:text-[#7D0D0D] transition-colors">
                    {featuredArticle.title}
                  </h3>

                  <p className="mt-2 text-[13.5px] leading-relaxed text-[#52525B]">
                    {featuredArticle.summary}
                  </p>

                  {/* Highlights Tags */}
                  <div className="mt-3.5 flex flex-wrap items-center gap-2">
                    <span className="rounded-[4px] bg-[#F4EFE6] px-2.5 py-1 text-[11px] font-semibold text-[#7D0D0D]">
                      ✓ Tư vấn công suất loa
                    </span>
                    <span className="rounded-[4px] bg-[#F4EFE6] px-2.5 py-1 text-[11px] font-semibold text-[#7D0D0D]">
                      ✓ Mixer chống hú rít
                    </span>
                    <span className="rounded-[4px] bg-[#F4EFE6] px-2.5 py-1 text-[11px] font-semibold text-[#7D0D0D]">
                      ✓ Tháp loa ngoài trời
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-gray-200 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[12px] font-medium text-gray-600">
                    <User size={14} weight="bold" className="text-[#D97706]" />
                    {featuredArticle.author}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[12.5px] font-bold text-[#B45309] group-hover:text-[#D97706] group-hover:translate-x-1 transition-all">
                    ĐỌC BÀI VIẾT
                    <ArrowRight size={14} weight="bold" />
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        )}

        {/* Remaining Articles Grid */}
        <StaggerContainer
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          delay={120}
          staggerDelay={80}
        >
          {remainingArticles.map((article) => (
            <Link
              key={article.id}
              to={`/tin-tuc/${article.slug || article.id}`}
              className="group flex flex-col justify-between overflow-hidden rounded-[16px] border border-[#E8E1D3] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D97706]/40 hover:shadow-[0_12px_30px_rgba(217,119,6,0.12)] cursor-pointer block"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#180505]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="rounded-full bg-[#7D0D0D]/10 px-2.5 py-0.5 text-[10.5px] font-extrabold uppercase text-[#9E1C1C]">
                      {article.category}
                    </span>
                    <span className="text-[11.5px] text-gray-500 flex items-center gap-1">
                      <CalendarBlank size={13} weight="bold" />
                      {article.date}
                    </span>
                  </div>

                  <h3 className="font-['Montserrat',sans-serif] text-[15.5px] font-bold uppercase text-[#18181B] leading-snug group-hover:text-[#7D0D0D] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-[13px] text-[#52525B] leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0 border-t border-gray-50 flex items-center justify-between text-[12.5px] font-bold text-[#B45309]">
                <span>Xem chi tiết</span>
                <ArrowRight
                  size={14}
                  weight="bold"
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          ))}
        </StaggerContainer>

        {/* Bottom Consultation CTA - Tạm thời comment theo yêu cầu
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center rounded-[8px] bg-[#C97A1E] hover:bg-[#D97706] px-8 py-3.5 text-[13.5px] font-bold uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(201,122,30,0.35)] transition-all duration-200 hover:scale-[1.02] active:translate-y-px"
          >
            LIÊN HỆ TƯ VẤN KỸ THUẬT & BÁO GIÁ
          </button>
        </div>
        */}
      </div>
    </FadeUpSection>
  )
}
