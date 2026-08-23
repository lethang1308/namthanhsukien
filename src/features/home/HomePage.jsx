import { useState, useEffect } from 'react'
import { FloatingContactWidget } from '../../components/FloatingContactWidget'
import { scrollToSection } from '../../utils/navigation'
import { AboutSection } from './components/AboutSection'
import { ConsultationModal } from './components/ConsultationModal'
import { CustomerFeedback } from './components/CustomerFeedback'
import { FeaturedProjects } from './components/FeaturedProjects'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MobileHomePage } from './components/MobileHomePage'
import { ProcessWorkflow } from './components/ProcessWorkflow'
import { StatsCounterBar } from './components/StatsCounterBar'
import { VideoModal } from './components/VideoModal'
import { hero } from './data/homeContent'

export function HomePage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  useEffect(() => {
    // Strip #hash from URL on mount if present
    if (typeof window !== 'undefined' && window.location.hash) {
      const targetId = window.location.hash.replace('#', '')
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
      if (targetId && targetId !== 'home') {
        setTimeout(() => {
          scrollToSection(targetId)
        }, 150)
      }
    }
  }, [])

  useEffect(() => {
    let timeoutId
    const handleScroll = () => {
      document.documentElement.classList.add('is-scrolling')
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        document.documentElement.classList.remove('is-scrolling')
      }, 1000)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [])

  const handleOpenConsultation = () => setIsConsultationOpen(true)
  const handleCloseConsultation = () => setIsConsultationOpen(false)
  const handleOpenVideo = () => setIsVideoOpen(true)
  const handleCloseVideo = () => setIsVideoOpen(false)

  return (
    <div className="min-h-[100dvh] bg-[#FFFFFF] text-[#18181B] selection:bg-[#E5A93C]/30 selection:text-[#780D0D]">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="relative isolate overflow-hidden bg-[#3b0505] text-white">
          {/* Background Banner with Event Tent Backdrop spanning full Header + Hero */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={hero.bannerImage}
              alt="Nam Thành Sự Kiện - Tổ chức sự kiện chuyên nghiệp"
              className="absolute right-0 top-0 h-full w-[72%] object-cover object-[center_48%] opacity-[0.95] [mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.08)_4%,rgba(0,0,0,0.5)_13%,#000_28%)] lg:w-[66%] xl:w-[62%]"
              fetchPriority="high"
            />
            {/* Soft wine-red overlays keep the text readable without creating a hard split. */}
            <div
              className="absolute inset-0 bg-[#760808]/28 mix-blend-multiply"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_70%_43%,rgba(255,51,28,0.08)_0%,rgba(111,7,7,0.13)_35%,rgba(48,2,2,0.46)_78%),linear-gradient(90deg,rgba(41,2,2,0.96)_0%,rgba(61,4,4,0.9)_20%,rgba(82,7,7,0.72)_39%,rgba(84,6,6,0.34)_56%,rgba(36,2,2,0.18)_100%)]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-y-0 left-[34%] w-[18%] bg-[linear-gradient(90deg,rgba(59,5,5,0.24)_0%,rgba(91,7,7,0.14)_44%,transparent_100%)] blur-[18px] xl:left-[38%] xl:w-[16%]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(41,2,2,0.38)_0%,rgba(41,2,2,0.06)_24%,rgba(70,5,5,0.06)_70%,rgba(50,3,3,0.72)_100%)]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_26%_24%,rgba(229,169,60,0.14),transparent_28%),radial-gradient(circle_at_44%_68%,rgba(229,169,60,0.08),transparent_30%)]"
              aria-hidden="true"
            />
          </div>

          <Header onOpenConsultation={handleOpenConsultation} />
          <main id="home-main" className="relative z-10">
            <Hero
              onOpenConsultation={handleOpenConsultation}
              onOpenVideo={handleOpenVideo}
            />
          </main>
        </div>
        <main>
          <AboutSection onOpenConsultation={handleOpenConsultation} />
          <FeaturedProjects onOpenConsultation={handleOpenConsultation} />
          <StatsCounterBar />
          <ProcessWorkflow onOpenConsultation={handleOpenConsultation} />
          <CustomerFeedback onOpenConsultation={handleOpenConsultation} />
        </main>
        <Footer onOpenConsultation={handleOpenConsultation} />
      </div>

      {/* Mobile Layout */}
      <MobileHomePage
        onOpenConsultation={handleOpenConsultation}
        onOpenVideo={handleOpenVideo}
      />

      {/* Floating Animated Contact Widget (Zalo & Phone) */}
      <FloatingContactWidget />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />
      <VideoModal isOpen={isVideoOpen} onClose={handleCloseVideo} />
    </div>
  )
}
