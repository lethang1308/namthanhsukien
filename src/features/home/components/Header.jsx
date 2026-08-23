import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BrandMark } from '../../../components/BrandMark'
import { scrollToSection } from '../../../utils/navigation'
import { navItems } from '../data/homeContent'

export function Header({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()

  const isAboutPage = location.pathname === '/gioi-thieu' || location.pathname === '/about'
  const isNewsPage = location.pathname === '/tin-tuc' || location.pathname === '/news'
  const isSubPage = isAboutPage || isNewsPage

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)

      if (!isSubPage) {
        // Dynamically detect active section based on scroll offset on homepage
        const sections = ['home', 'about', 'services', 'projects', 'news']
        const scrollPosition = window.scrollY + 120

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i])
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isSubPage])

  const handleNavClick = (e, item) => {
    e.preventDefault()

    if (item.path === '/tin-tuc') {
      if (isNewsPage) {
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
        setActiveSection('home')
        scrollToSection('home')
      }
      return
    }

    // Other section links
    if (isSubPage) {
      navigate('/')
      setTimeout(() => {
        scrollToSection(item.targetId)
      }, 150)
    } else {
      setActiveSection(item.targetId)
      scrollToSection(item.targetId)
    }
  }

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#450a0a]/95 shadow-[0_10px_30px_rgba(0,0,0,0.7)] backdrop-blur-md border-b border-[#E5A93C]/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Main Navbar */}
      <nav className="mx-auto flex h-[88px] max-w-[1360px] items-center justify-between gap-6 px-6 sm:px-8 lg:px-12">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, { path: '/', targetId: 'home' })}
          aria-label="Nam Thành Sự Kiện"
          className="shrink-0 flex items-center cursor-pointer"
        >
          <BrandMark markClassName="h-[56px] w-[56px]" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-7 lg:gap-9 text-[13px] font-bold tracking-widest lg:flex">
          {navItems.map((item) => {
            const isActive =
              (isAboutPage && item.path === '/gioi-thieu') ||
              (isNewsPage && item.path === '/tin-tuc') ||
              (!isSubPage && item.targetId === activeSection)

            return (
              <a
                key={item.label}
                href={item.path || '/'}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative whitespace-nowrap py-1 transition-colors duration-200 uppercase cursor-pointer ${
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
            className="inline-flex items-center justify-center whitespace-nowrap rounded-[6px] bg-[#C97A1E] hover:bg-[#D97706] px-6 py-2.5 text-[13px] font-bold uppercase tracking-wider text-white shadow-[0_4px_14px_rgba(201,122,30,0.35)] transition-all duration-200 hover:scale-[1.02] active:translate-y-px"
          >
            LIÊN HỆ NGAY
          </button>
        </div>
      </nav>
    </header>
  )
}
