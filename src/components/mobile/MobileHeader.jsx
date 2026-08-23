import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  Article,
  CaretDown,
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
import { serviceNavList } from '../../features/services/data/servicesContent'

const navMenuList = [
  { label: 'TRANG CHỦ', path: '/', targetId: 'home', icon: HouseLine },
  { label: 'GIỚI THIỆU', path: '/gioi-thieu', targetId: 'about', icon: Sparkle },
  {
    label: 'DỊCH VỤ SỰ KIỆN',
    path: '/dich-vu',
    targetId: 'services',
    icon: SquaresFour,
    isDropdown: true,
  },
  { label: 'DỰ ÁN TIÊU BIỂU', path: '/du-an', targetId: 'projects', icon: Images },
  { label: 'QUY TRÌNH & TIN TỨC', path: '/tin-tuc', targetId: 'news', icon: Article },
]

export function MobileHeader({ onOpenConsultation, zIndexClass = 'z-40' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServiceSubmenuOpen, setIsServiceSubmenuOpen] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()

  const isAboutPage =
    location.pathname === '/gioi-thieu' || location.pathname === '/about'
  const isNewsPage =
    location.pathname.startsWith('/tin-tuc') || location.pathname.startsWith('/news')
  const isServicePage = location.pathname.startsWith('/dich-vu')
  const isSubPage = isAboutPage || isNewsPage || isServicePage

  const handleNavClick = (item) => {
    if (item.isDropdown) {
      setIsServiceSubmenuOpen((prev) => !prev)
      return
    }

    setIsMenuOpen(false)

    if (item.path === '/tin-tuc') {
      if (isNewsPage && location.pathname === '/tin-tuc') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        navigate('/tin-tuc')
      }
      return
    }

    if (item.path === '/gioi-thieu') {
      if (isAboutPage) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        navigate('/gioi-thieu')
      }
      return
    }

    if (item.path === '/') {
      if (isSubPage) {
        navigate('/')
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 100)
      } else {
        scrollToSection('home')
      }
      return
    }

    if (isSubPage) {
      navigate('/')
      setTimeout(() => {
        scrollToSection(item.targetId)
      }, 150)
    } else {
      scrollToSection(item.targetId)
    }
  }

  const handleServiceSelect = (path) => {
    setIsMenuOpen(false)
    navigate(path)
  }

  return (
    <>
      <header
        className={`sticky top-0 ${zIndexClass} border-b border-[#E5A93C]/30 bg-gradient-to-r from-[#2A0404]/98 via-[#1C0303]/98 to-[#2A0404]/98 px-3.5 py-2.5 text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md`}
      >
        <div className="mx-auto flex h-11 max-w-[760px] items-center justify-between gap-2">
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick({ path: '/', targetId: 'home' })
            }}
            className="flex min-w-0 shrink-0 items-center cursor-pointer"
            aria-label="Thành Nam Sự Kiện"
          >
            <BrandMark compact markClassName="h-9 w-9" lightText={true} />
          </Link>

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
              {navMenuList.map((item) => {
                const IconComponent = item.icon
                const isServiceMenu = item.targetId === 'services'
                const isActive =
                  (isAboutPage && item.path === '/gioi-thieu') ||
                  (isNewsPage && item.path === '/tin-tuc') ||
                  (isServicePage && isServiceMenu) ||
                  (!isSubPage && item.path === '/')

                if (isServiceMenu) {
                  return (
                    <div key={item.targetId} className="rounded-[10px] overflow-hidden">
                      <button
                        type="button"
                        onClick={() => handleNavClick(item)}
                        className={`flex w-full items-center justify-between rounded-[10px] px-3.5 py-3 text-left transition-colors duration-150 group cursor-pointer ${
                          isActive
                            ? 'bg-[#FDF5E8] text-[#7D0D0D]'
                            : 'hover:bg-[#FDF5E8] active:bg-[#FDF0DA]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                              isActive
                                ? 'bg-[#D97706] text-white'
                                : 'bg-[#7D0D0D]/10 text-[#7D0D0D] group-hover:bg-[#D97706] group-hover:text-white'
                            }`}
                          >
                            <IconComponent size={17} weight="bold" />
                          </span>
                          <span
                            className={`font-['Montserrat',sans-serif] text-[13.5px] font-bold uppercase tracking-wider ${
                              isActive
                                ? 'text-[#7D0D0D]'
                                : 'text-[#27272A] group-hover:text-[#7D0D0D]'
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>
                        <CaretDown
                          size={16}
                          weight="bold"
                          className={`transition-transform duration-200 ${
                            isServiceSubmenuOpen ? 'rotate-180 text-[#D97706]' : 'text-gray-400'
                          }`}
                        />
                      </button>

                      {/* Mobile Expandable Sub-Services */}
                      {isServiceSubmenuOpen && (
                        <div className="my-1 ml-4 mr-1 pl-3 border-l-2 border-[#E5A93C]/40 space-y-1 py-1">
                          {serviceNavList.map((svc) => {
                            const SvcIcon = svc.icon
                            const isCurrentSvc = location.pathname === svc.path

                            return (
                              <button
                                type="button"
                                key={svc.id}
                                onClick={() => handleServiceSelect(svc.path)}
                                className={`flex w-full items-center justify-between rounded-[8px] px-3 py-2.5 text-left text-[12.5px] font-bold uppercase transition-colors ${
                                  isCurrentSvc
                                    ? 'bg-[#7D0D0D] text-[#FDE68A]'
                                    : 'text-[#3F3F46] hover:bg-[#FDF5E8] hover:text-[#7D0D0D]'
                                }`}
                              >
                                <div className="flex items-center gap-2.5">
                                  <SvcIcon size={16} weight="bold" />
                                  <span>{svc.label}</span>
                                </div>
                                <CaretRight size={13} weight="bold" />
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                }

                return (
                  <button
                    type="button"
                    key={item.targetId}
                    onClick={() => handleNavClick(item)}
                    className={`flex w-full items-center justify-between rounded-[10px] px-3.5 py-3 text-left transition-colors duration-150 group cursor-pointer ${
                      isActive
                        ? 'bg-[#FDF5E8] text-[#7D0D0D]'
                        : 'hover:bg-[#FDF5E8] active:bg-[#FDF0DA]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                          isActive
                            ? 'bg-[#D97706] text-white'
                            : 'bg-[#7D0D0D]/10 text-[#7D0D0D] group-hover:bg-[#D97706] group-hover:text-white'
                        }`}
                      >
                        <IconComponent size={17} weight="bold" />
                      </span>
                      <span
                        className={`font-['Montserrat',sans-serif] text-[13.5px] font-bold uppercase tracking-wider ${
                          isActive ? 'text-[#7D0D0D]' : 'text-[#27272A] group-hover:text-[#7D0D0D]'
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                    <CaretRight
                      size={16}
                      weight="bold"
                      className={`transition-transform ${
                        isActive
                          ? 'text-[#D97706]'
                          : 'text-gray-400 group-hover:text-[#D97706] group-hover:translate-x-0.5'
                      }`}
                    />
                  </button>
                )
              })}
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
                    <span className="text-[10px] font-bold uppercase text-[#9E1C1C] block">
                      Hotline tư vấn 24/7
                    </span>
                    <span className="font-['Montserrat',sans-serif] text-[14px] font-black text-[#18181B] tracking-wide">
                      {contact.hotline}
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-[#D97706] px-2.5 py-1 text-[10.5px] font-bold text-white uppercase">
                  Gọi ngay
                </span>
              </a>

              {/* Consultation Button */}
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false)
                  onOpenConsultation()
                }}
                className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#7D0D0D] py-3 text-[12.5px] font-bold uppercase text-white shadow-md active:scale-98 transition-transform"
              >
                <Sparkle size={16} weight="fill" className="text-[#FDE68A]" />
                Đăng ký nhận báo giá sự kiện
              </button>
            </div>

            {/* Quick Address & Email */}
            <div className="mt-3.5 rounded-[12px] bg-white p-3 text-[11px] text-[#52525B] border border-gray-100 space-y-1.5">
              <div className="flex items-start gap-1.5">
                <MapPin size={14} weight="fill" className="shrink-0 text-[#9E1C1C] mt-0.5" />
                <span className="line-clamp-2">{contact.address}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <EnvelopeSimple size={14} weight="fill" className="shrink-0 text-[#9E1C1C]" />
                <span>{contact.email}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
