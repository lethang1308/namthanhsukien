import { useState } from 'react'
import {
  Article,
  CaretRight,
  EnvelopeSimple,
  HouseLine,
  Images,
  List,
  MapPin,
  Phone,
  Sparkle,
  SquaresFour,
  X,
} from '@phosphor-icons/react'
import { scrollToSection } from '../../utils/navigation'
import { BrandMark } from '../BrandMark'
import { contact } from '../../features/home/data/homeContent'

const navMenuList = [
  { label: 'TRANG CHỦ', targetId: 'home', icon: HouseLine },
  { label: 'GIỚI THIỆU', targetId: 'about', icon: Sparkle },
  { label: 'DỊCH VỤ SỰ KIỆN', targetId: 'services', icon: SquaresFour },
  { label: 'DỰ ÁN TIÊU BIỂU', targetId: 'projects', icon: Images },
  { label: 'QUY TRÌNH & TIN TỨC', targetId: 'news', icon: Article },
]

export function MobileHeader({ onOpenConsultation, zIndexClass = 'z-40' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (targetId) => {
    setIsMenuOpen(false)
    scrollToSection(targetId)
  }

  return (
    <>
      <header
        className={`sticky top-0 ${zIndexClass} border-b border-[#E5A93C]/30 bg-gradient-to-r from-[#2A0404]/98 via-[#1C0303]/98 to-[#2A0404]/98 px-3.5 py-2.5 text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md`}
      >
        <div className="mx-auto flex h-11 max-w-[760px] items-center justify-between gap-2">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('home')
            }}
            className="flex min-w-0 shrink-0 items-center cursor-pointer"
            aria-label="Nam Thành Sự Kiện"
          >
            <BrandMark compact markClassName="h-9 w-9" lightText={true} />
          </a>

          {/* Right Action: LIÊN HỆ NGAY button + Hamburger Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center rounded-[6px] bg-[#C97A1E] hover:bg-[#D97706] px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-wider text-white shadow-[0_2px_10px_rgba(201,122,30,0.4)] active:scale-95 transition-transform"
            >
              LIÊN HỆ NGAY
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex h-9 w-9 items-center justify-center rounded-[6px] transition-all active:scale-90 ${
                isMenuOpen
                  ? 'bg-[#E5A93C] text-[#140202] shadow-sm'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={isMenuOpen ? 'Đóng menu' : 'Mở menu'}
            >
              {isMenuOpen ? <X size={22} weight="bold" /> : <List size={24} weight="bold" />}
            </button>
          </div>
        </div>
      </header>

      {/* Modern Bright & Elegant Full-Width Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 top-[57px] z-40 bg-black/60 backdrop-blur-xs animate-fade-in md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="w-full max-h-[calc(100dvh-57px)] overflow-y-auto bg-[#FFFDF9] border-b-2 border-[#E5A93C]/40 shadow-[0_25px_60px_rgba(0,0,0,0.3)] animate-slide-down p-4 text-[#18181B]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu Navigation Card */}
            <div className="divide-y divide-gray-100 rounded-[14px] border border-gray-200/80 bg-white p-1.5 shadow-xs">
              {navMenuList.map(({ label, targetId, icon: IconComponent }) => (
                <button
                  type="button"
                  key={targetId}
                  onClick={() => handleNavClick(targetId)}
                  className="flex w-full items-center justify-between rounded-[10px] px-3.5 py-3 text-left transition-colors duration-150 hover:bg-[#FDF5E8] active:bg-[#FDF0DA] group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7D0D0D]/10 text-[#7D0D0D] transition-colors group-hover:bg-[#D97706] group-hover:text-white">
                      <IconComponent size={17} weight="bold" />
                    </span>
                    <span className="font-['Montserrat',sans-serif] text-[13.5px] font-bold uppercase tracking-wider text-[#27272A] group-hover:text-[#7D0D0D]">
                      {label}
                    </span>
                  </div>
                  <CaretRight
                    size={16}
                    weight="bold"
                    className="text-gray-400 group-hover:text-[#D97706] group-hover:translate-x-0.5 transition-transform"
                  />
                </button>
              ))}
            </div>

            {/* Quick Contact & Consultation Section */}
            <div className="mt-3.5 space-y-2.5">
              {/* Call Hotline Quick Card */}
              <a
                href={`tel:${contact.hotline.replace(/\s/g, '')}`}
                className="flex items-center justify-between rounded-[12px] border border-[#FDE68A] bg-gradient-to-r from-[#FFFBEB] via-[#FEF3C7] to-[#FFFBEB] p-3 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D97706] text-white shadow-xs">
                    <Phone size={18} weight="fill" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-gray-500 uppercase tracking-tight">
                      Hotline tư vấn 24/7
                    </span>
                    <span className="font-['Montserrat',sans-serif] text-[14.5px] font-black text-[#92400E]">
                      {contact.hotline}
                    </span>
                  </div>
                </div>
                <span className="rounded-[6px] bg-[#D97706] px-3 py-1.5 text-[11px] font-extrabold uppercase text-white shadow-xs">
                  GỌI NGAY
                </span>
              </a>

              {/* Consultation CTA Button */}
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false)
                  if (onOpenConsultation) onOpenConsultation()
                }}
                className="flex w-full items-center justify-center rounded-[10px] bg-[#780D0D] hover:bg-[#961212] py-3 text-[13px] font-extrabold uppercase tracking-wider text-white shadow-[0_4px_14px_rgba(120,13,13,0.3)] active:scale-[0.98] transition-all cursor-pointer"
              >
                ĐĂNG KÝ BÁO GIÁ SỰ KIỆN
              </button>
            </div>

            {/* Location & Email Details */}
            <div className="mt-3.5 rounded-[12px] bg-gray-50 border border-gray-100 p-3 space-y-2 text-[12px] text-gray-600">
              <p className="flex items-start gap-2 leading-relaxed">
                <MapPin size={15} weight="bold" className="shrink-0 text-[#D97706] mt-0.5" />
                <span>{contact.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <EnvelopeSimple size={15} weight="bold" className="shrink-0 text-[#D97706]" />
                <span>{contact.email}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
