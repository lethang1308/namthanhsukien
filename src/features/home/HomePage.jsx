import { useState, useEffect } from 'react'
import { AboutSection } from './components/AboutSection'
import { ConsultationModal } from './components/ConsultationModal'
import { FeaturedProjects } from './components/FeaturedProjects'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MobileHomePage } from './components/MobileHomePage'
import { ProcessWorkflow } from './components/ProcessWorkflow'
import { StatsCounterBar } from './components/StatsCounterBar'
import { VideoModal } from './components/VideoModal'

export function HomePage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

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
        <Header onOpenConsultation={handleOpenConsultation} />
        <main>
          <Hero
            onOpenConsultation={handleOpenConsultation}
            onOpenVideo={handleOpenVideo}
          />
          <AboutSection onOpenConsultation={handleOpenConsultation} />
          <FeaturedProjects onOpenConsultation={handleOpenConsultation} />
          <StatsCounterBar />
          <ProcessWorkflow onOpenConsultation={handleOpenConsultation} />
        </main>
        <Footer onOpenConsultation={handleOpenConsultation} />
      </div>

      {/* Mobile Layout */}
      <MobileHomePage
        onOpenConsultation={handleOpenConsultation}
        onOpenVideo={handleOpenVideo}
      />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />
      <VideoModal isOpen={isVideoOpen} onClose={handleCloseVideo} />
    </div>
  )
}
