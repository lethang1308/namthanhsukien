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
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#180404]/95 shadow-[0_10px_30px_rgba(0,0,0,0.7)] backdrop-blur-md border-b border-[#E5A93C]/20'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      {/* Main Navbar */}
      <nav className="mx-auto flex h-[88px] max-w-[1360px] items-center justify-between gap-6 px-6 sm:px-8 lg:px-12">
        {/* Brand Logo */}
        <a href="#home" aria-label="Nam Thành Sự Kiện" className="shrink-0">
          <BrandMark />
        </a>

        {/* Navigation Links */}
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-8 text-[13.5px] font-bold tracking-widest lg:flex">
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
              </a>
            )
          })}
        </div>

        {/* Right CTA Button */}
        <div className="flex shrink-0 items-center">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-[6px] bg-[#C97A1E] hover:bg-[#D97706] px-5 py-2.5 text-[13px] font-bold uppercase tracking-wider text-white shadow-[0_4px_14px_rgba(201,122,30,0.35)] transition-all duration-200 hover:scale-[1.02] active:translate-y-px"
          >
            LIÊN HỆ NGAY
          </button>
        </div>
      </nav>
    </header>
  )
}
