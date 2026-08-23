import { Link } from 'react-router-dom'
import { CaretRight } from '@phosphor-icons/react'
import { Header } from '../../home/components/Header'
import { aboutData } from '../data/aboutContent'

export function AboutBanner({ onOpenConsultation }) {
  return (
    <div className="relative isolate overflow-hidden bg-[#2D0404] text-white">
      {/* Background Ambience & Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(229,169,60,0.22)_0%,rgba(92,11,11,0.55)_50%,#240303_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#18181B]/30 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Main Header */}
      <Header onOpenConsultation={onOpenConsultation} />

      {/* Banner Centered Content */}
      <div className="relative z-10 mx-auto max-w-[1360px] px-6 py-14 sm:py-16 lg:px-12 text-center">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[12.5px] font-medium text-white/85 backdrop-blur-xs mb-4"
        >
          <Link
            to="/"
            className="hover:text-[#FDE68A] transition-colors flex items-center gap-1"
          >
            Trang chủ
          </Link>
          <CaretRight size={13} weight="bold" className="text-[#E5A93C]" />
          <span className="font-semibold text-[#E5A93C]">Giới thiệu</span>
        </nav>

        {/* Big Banner Title */}
        <h1 className="font-['Montserrat',sans-serif] text-[36px] sm:text-[44px] md:text-[52px] font-black uppercase tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
          {aboutData.banner.title}
        </h1>

        {/* Eyebrow & Slogan */}
        <div className="mt-2">
          <span className="font-['Playfair_Display',serif] text-[22px] sm:text-[26px] font-bold text-[#F0C554] tracking-wide block">
            {aboutData.banner.eyebrow}
          </span>
          <p
            className="font-script text-[32px] sm:text-[38px] md:text-[42px] text-[#F1C95B] leading-tight select-none mt-1"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            {aboutData.banner.slogan}
          </p>
        </div>
      </div>
    </div>
  )
}
