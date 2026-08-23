import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  CalendarBlank,
  CaretRight,
  Clock,
  EnvelopeSimple,
  Flame,
  HouseLine,
  Images,
  MapPin,
  Newspaper,
  Phone,
  ShareNetwork,
  User,
} from '@phosphor-icons/react'
import { FloatingContactWidget } from '../../components/FloatingContactWidget'
import { MobileHeader } from '../../components/mobile/MobileHeader'
import { scrollToSection } from '../../utils/navigation'
import { CustomerFeedback } from '../home/components/CustomerFeedback'
import { Footer } from '../home/components/Footer'
import { Header } from '../home/components/Header'
import { contact } from '../home/data/homeContent'
import { newsArticles, newsCategories } from './data/newsContent'

export function NewsDetailPage() {
  const { slug } = useParams()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  // Find article by slug or id
  const article = newsArticles.find(
    (item) => item.slug === slug || item.id.toString() === slug
  )

  const handleOpenConsultation = () => scrollToSection('contact')

  if (!article) {
    return (
      <div className="min-h-[100dvh] bg-[#FFFFFF] text-[#18181B] flex flex-col justify-between">
        <Header onOpenConsultation={handleOpenConsultation} />
        <div className="mx-auto max-w-lg px-6 py-24 text-center">
          <Newspaper size={64} weight="duotone" className="mx-auto text-[#7D0D0D] mb-4" />
          <h1 className="text-[24px] font-black uppercase text-[#18181B]">
            Không tìm thấy bài viết
          </h1>
          <p className="mt-2 text-[14px] text-gray-500">
            Bài viết bạn tìm kiếm có thể đã được cập nhật hoặc không tồn tại.
          </p>
          <Link
            to="/tin-tuc"
            className="mt-6 inline-flex items-center gap-2 rounded-[8px] bg-[#C97A1E] px-6 py-3 text-[13px] font-bold uppercase text-white shadow-md"
          >
            <ArrowLeft size={16} weight="bold" />
            Về chuyên mục tin tức
          </Link>
        </div>
        <Footer onOpenConsultation={handleOpenConsultation} />
      </div>
    )
  }

  // Related articles (same category or others, excluding current)
  const relatedArticles = newsArticles
    .filter((item) => item.id !== article.id)
    .slice(0, 4)

  return (
    <div className="min-h-[100dvh] bg-[#FFFFFF] text-[#18181B] selection:bg-[#E5A93C]/30 selection:text-[#780D0D]">
      {/* 1. Header Desktop & Mobile */}
      <div className="hidden md:block">
        <div className="relative isolate overflow-hidden bg-[#2D0404] text-white">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(229,169,60,0.2)_0%,rgba(92,11,11,0.5)_50%,#200303_100%)]"
              aria-hidden="true"
            />
          </div>
          <Header onOpenConsultation={handleOpenConsultation} />

          {/* Desktop Breadcrumb Header */}
          <div className="relative z-10 mx-auto max-w-[1360px] px-6 py-10 lg:px-12">
            <nav
              aria-label="Breadcrumb"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[12.5px] font-medium text-white/90 backdrop-blur-xs mb-3"
            >
              <Link to="/" className="hover:text-[#FDE68A] flex items-center gap-1">
                <HouseLine size={14} weight="bold" />
                Trang chủ
              </Link>
              <CaretRight size={12} weight="bold" className="text-[#E5A93C]" />
              <Link to="/tin-tuc" className="hover:text-[#FDE68A]">
                Tin tức & Dự án
              </Link>
              <CaretRight size={12} weight="bold" className="text-[#E5A93C]" />
              <span className="font-semibold text-[#E5A93C] max-w-[320px] truncate">
                {article.category}
              </span>
            </nav>

            <h1 className="font-['Montserrat',sans-serif] text-[28px] sm:text-[36px] lg:text-[40px] font-black text-white leading-tight max-w-4xl">
              {article.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-[13px] text-gray-300">
              <span className="rounded-full bg-[#7D0D0D] border border-[#E5A93C]/40 px-3 py-0.5 font-bold uppercase text-[#FDE68A] text-[11px]">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <CalendarBlank size={15} weight="bold" className="text-[#E5A93C]" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <User size={15} weight="bold" className="text-[#E5A93C]" />
                {article.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={15} weight="bold" className="text-[#E5A93C]" />
                {article.readTime || '5 phút đọc'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header & Breadcrumb */}
      <div className="md:hidden">
        <MobileHeader onOpenConsultation={handleOpenConsultation} zIndexClass="z-40" />
        <div className="bg-[#2D0404] px-4 py-6 text-white">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 mb-2">
            <Link to="/" className="hover:text-[#FDE68A]">
              Trang chủ
            </Link>
            <CaretRight size={10} weight="bold" className="text-[#E5A93C]" />
            <Link to="/tin-tuc" className="hover:text-[#FDE68A]">
              Tin tức
            </Link>
          </div>

          <h1 className="font-['Montserrat',sans-serif] text-[20px] font-black uppercase text-white leading-snug">
            {article.title}
          </h1>

          <div className="mt-2.5 flex flex-wrap items-center gap-2 text-[11px] text-gray-300">
            <span className="rounded-full bg-[#7D0D0D] px-2.5 py-0.5 font-bold text-[#FDE68A]">
              {article.category}
            </span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.author}</span>
          </div>
        </div>
      </div>

      {/* 2. Main Article Content Area + Sidebar */}
      <main className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left / Article Main Body (Col 8) */}
          <article className="lg:col-span-8 bg-white">
            {/* Lead Summary Highlight Box */}
            <div className="rounded-[16px] border-l-4 border-[#C97A1E] bg-gradient-to-r from-[#FFFBEB] via-[#FFFDF9] to-[#FFFBEB] p-5 sm:p-6 shadow-xs mb-8">
              <p className="font-['Montserrat',sans-serif] text-[15px] sm:text-[16px] font-bold text-[#18181B] leading-relaxed italic">
                "{article.summary}"
              </p>
            </div>

            {/* Main Featured Photo */}
            <div className="relative overflow-hidden rounded-[18px] border border-[#E8E1D3] shadow-md mb-8 bg-[#180505]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full aspect-[16/10] object-cover"
              />
              <div className="p-3 bg-[#1C0303] text-center text-[12px] text-gray-300 border-t border-white/10">
                Ảnh thực tế: {article.title} - Nam Thành Sự Kiện
              </div>
            </div>

            {/* Article Body Content */}
            <div className="prose prose-lg max-w-none text-[#3F3F46] leading-relaxed space-y-6 text-[15px] sm:text-[16px]">
              <div className="whitespace-pre-line leading-relaxed">
                {article.content}
              </div>
            </div>

            {/* Article Related Gallery (Real event photos) */}
            {article.gallery && article.gallery.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Images size={20} weight="bold" className="text-[#C97A1E]" />
                  <h3 className="font-['Montserrat',sans-serif] text-[18px] font-black uppercase text-[#18181B]">
                    Hình Ảnh Thực Tế Hạng Mục Sự Kiện
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
                  {article.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="overflow-hidden rounded-[12px] border border-[#E8E1D3] aspect-[4/3] bg-[#180505] shadow-xs group cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`Ảnh thực tế dự án ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Author Signature & Consultation Banner */}
            <div className="mt-12 rounded-[18px] bg-gradient-to-br from-[#380404] via-[#240303] to-[#160202] border-2 border-[#E5A93C]/40 p-6 sm:p-8 text-white shadow-xl">
              <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-center sm:text-left">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#E5A93C]/20 border-2 border-[#E5A93C] text-[#FDE68A] font-['Playfair_Display',serif] text-[24px] font-black shadow-md">
                  NT
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[12px] uppercase font-bold tracking-widest text-[#E5A93C] block">
                    Đơn Vị Đồng Hành Cùng Mọi Sự Kiện Thành Công
                  </span>
                  <h4 className="font-['Montserrat',sans-serif] text-[20px] font-black uppercase text-white mt-1">
                    Nam Thành Sự Kiện
                  </h4>
                  <p className="text-[13.5px] text-gray-300 mt-1 leading-relaxed">
                    Chuyên cung cấp trọn gói âm thanh ánh sáng, màn hình LED, sân khấu, nhà bạt và tổ chức sự kiện chuyên nghiệp với chi phí tối ưu nhất.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleOpenConsultation}
                  className="shrink-0 rounded-[8px] bg-[#C97A1E] hover:bg-[#D97706] px-6 py-3 text-[12.5px] font-bold uppercase text-white shadow-md active:scale-95 transition-all"
                >
                  Nhận Tư Vấn Ngay
                </button>
              </div>
            </div>

            {/* Share and Back Actions */}
            <div className="mt-10 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/tin-tuc"
                className="inline-flex items-center gap-2 rounded-[8px] border border-gray-300 bg-[#FBF9F6] px-5 py-2.5 text-[13px] font-bold text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft size={16} weight="bold" />
                Về danh sách tin tức
              </Link>

              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-gray-600 flex items-center gap-1.5">
                  <ShareNetwork size={16} weight="bold" />
                  Chia sẻ bài viết:
                </span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-90"
                  aria-label="Chia sẻ lên Facebook"
                >
                  f
                </a>
                <a
                  href={`https://zalo.me/0938161222`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0068FF] text-white text-[10px] font-black hover:opacity-90"
                  aria-label="Chia sẻ qua Zalo"
                >
                  Zalo
                </a>
              </div>
            </div>
          </article>

          {/* Right / Sidebar (Col 4) */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Quick Contact & Hotline Box */}
            <div className="rounded-[18px] border border-[#E8E1D3] bg-gradient-to-br from-[#FFFBEB] via-[#FFFDF9] to-[#FEF3C7] p-6 shadow-md">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7D0D0D] text-[#FDE68A]">
                  <Phone size={20} weight="fill" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-[#7D0D0D] block">
                    Tư vấn miễn phí 24/7
                  </span>
                  <h4 className="font-['Montserrat',sans-serif] text-[15px] font-black text-[#18181B]">
                    HOTLINE HỖ TRỢ
                  </h4>
                </div>
              </div>

              <a
                href={`tel:${contact.hotline.replace(/\s/g, '')}`}
                className="block text-center rounded-[10px] bg-[#7D0D0D] hover:bg-[#911313] py-3 text-[18px] font-black text-[#FDE68A] tracking-wider shadow-md transition-all active:scale-95"
              >
                {contact.hotline}
              </a>

              <a
                href="https://zalo.me/0938161222"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 block text-center rounded-[10px] bg-[#0068FF] hover:bg-[#0057D9] py-2.5 text-[13px] font-bold text-white shadow-md transition-all active:scale-95"
              >
                Chat Zalo Kỹ Thuật Viên
              </a>

              <div className="mt-4 pt-3 border-t border-amber-200/60 space-y-1.5 text-[12px] text-[#52525B]">
                <div className="flex items-start gap-1.5">
                  <MapPin size={14} weight="fill" className="shrink-0 text-[#7D0D0D] mt-0.5" />
                  <span>{contact.address}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <EnvelopeSimple size={14} weight="fill" className="shrink-0 text-[#7D0D0D]" />
                  <span>{contact.email}</span>
                </div>
              </div>
            </div>

            {/* Related Articles List */}
            <div className="rounded-[18px] border border-[#E8E1D3] bg-white p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                <Flame size={20} weight="fill" className="text-[#C97A1E]" />
                <h3 className="font-['Montserrat',sans-serif] text-[16px] font-black uppercase text-[#18181B]">
                  Bài Viết Cùng Chuyên Mục
                </h3>
              </div>

              <div className="space-y-4">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/tin-tuc/${rel.slug || rel.id}`}
                    className="group flex gap-3 items-start cursor-pointer"
                  >
                    <div className="h-16 w-20 shrink-0 overflow-hidden rounded-[8px] bg-[#180505]">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-extrabold uppercase text-[#9E1C1C]">
                        {rel.category}
                      </span>
                      <h4 className="text-[12.5px] font-bold text-[#18181B] group-hover:text-[#7D0D0D] line-clamp-2 leading-snug">
                        {rel.title}
                      </h4>
                      <span className="text-[10.5px] text-gray-400 mt-0.5 block">
                        {rel.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories Widget */}
            <div className="rounded-[18px] border border-[#E8E1D3] bg-[#FFFDF9] p-6 shadow-xs">
              <h3 className="font-['Montserrat',sans-serif] text-[16px] font-black uppercase text-[#18181B] mb-3 pb-2 border-b border-gray-200">
                Danh Mục Chuyên Môn
              </h3>
              <div className="space-y-1.5">
                {newsCategories
                  .filter((c) => c.id !== 'all')
                  .map((cat) => (
                    <Link
                      key={cat.id}
                      to="/tin-tuc"
                      className="flex items-center justify-between rounded-[8px] px-3 py-2 text-[13px] font-semibold text-[#52525B] hover:bg-[#FDF5E8] hover:text-[#7D0D0D] transition-colors"
                    >
                      <span>{cat.label}</span>
                      <CaretRight size={13} weight="bold" />
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Customer Feedback */}
      <CustomerFeedback onOpenConsultation={handleOpenConsultation} />

      {/* Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Floating Animated Contact Widget */}
      <FloatingContactWidget />
    </div>
  )
}
