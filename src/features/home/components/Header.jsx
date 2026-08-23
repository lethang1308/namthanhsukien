import { useState, useEffect } from 'react'
import { BrandMark } from '../../../components/BrandMark'
import { navItems } from '../data/homeContent'

export function Header({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentHash, setCurrentHash] = useState(
    typeof window !== 'undefined' ? window.location.hash || '#home' : '#home'
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleHash = () => {
      setCurrentHash(window.location.hash || '#home')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('hashchange', handleHash)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHash)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#180505]/95 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md border-b border-[#E5A93C]/20'
          : 'bg-[#1a0505]/90 backdrop-blur-sm border-b border-white/10'
      }`}
    >
      {/* 
      <div className="bg-[#120303] text-[12.5px] text-white/80 border-b border-white/5 py-1.5 hidden md:block">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-white/85">
              Số 18, Đường Lê Trọng Tấn, Hà Đông, Hà Nội
            </span>
            <a href="tel:0988123456" className="inline-flex items-center gap-1.5 text-[#E5A93C] font-semibold hover:text-white transition-colors">
              Hotline: 0988 123 456
            </a>
            <span className="inline-flex items-center gap-1.5 text-white/70">
              08:00 - 21:00 (Tất cả các ngày)
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <span className="inline-flex items-center gap-1 text-[#E5A93C]">
              Tổ chức sự kiện trọn gói uy tín số 1
            </span>
          </div>
        </div>
      </div>
      */}

      {/* Main Navbar */}
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-4 py-3.5 lg:px-8">
        {/* Brand Logo */}
        <a href="#home" aria-label="Nam Thành Sự Kiện" className="shrink-0">
          <BrandMark />
        </a>

        {/* Navigation Links */}
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-7 text-[13.5px] font-bold tracking-widest lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === currentHash ||
              (item.href === '#home' && (currentHash === '' || currentHash === '#home'))

            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative whitespace-nowrap py-1 transition-colors duration-200 uppercase ${
                  isActive
                    ? 'text-[#E5A93C] font-bold'
                    : 'text-white/90 hover:text-[#E5A93C]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5A93C] to-transparent" />
                )}
              </a>
            )
          })}
        </div>

        {/* Right CTA Button */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-[6px] bg-[#C97A1E] hover:bg-[#D97706] px-5 py-2.5 text-[13px] font-bold uppercase tracking-wider text-white shadow-[0_4px_14px_rgba(201,122,30,0.4)] transition-all duration-200 hover:scale-[1.02] active:translate-y-px"
          >
            LIÊN HỆ NGAY
          </button>
        </div>
      </nav>
    </header>
  )
}
