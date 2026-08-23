import { useEffect } from 'react'
import { FloatingContactWidget } from '../../components/FloatingContactWidget'
import { scrollToSection } from '../../utils/navigation'
import { CustomerFeedback } from '../home/components/CustomerFeedback'
import { Footer } from '../home/components/Footer'
import { ProcessWorkflow } from '../home/components/ProcessWorkflow'
import { StatsCounterBar } from '../home/components/StatsCounterBar'
import { VideoModal } from '../home/components/VideoModal'
import { AboutBanner } from './components/AboutBanner'
import { AboutCoreValues } from './components/AboutCoreValues'
import { AboutStorySection } from './components/AboutStorySection'
import { AboutVisionMission } from './components/AboutVisionMission'
import { MobileAboutPage } from './components/MobileAboutPage'

export function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleOpenConsultation = () => scrollToSection('contact')

  return (
    <div className="min-h-[100dvh] bg-[#FFFFFF] text-[#18181B] selection:bg-[#E5A93C]/30 selection:text-[#780D0D]">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <AboutBanner onOpenConsultation={handleOpenConsultation} />
        <main id="about-content">
          <AboutStorySection onOpenConsultation={handleOpenConsultation} />
          <StatsCounterBar />
          <AboutVisionMission />
          <AboutCoreValues />
          <ProcessWorkflow onOpenConsultation={handleOpenConsultation} />
          <CustomerFeedback onOpenConsultation={handleOpenConsultation} />
        </main>
        <Footer onOpenConsultation={handleOpenConsultation} />
      </div>

      {/* Mobile Layout */}
      <MobileAboutPage onOpenConsultation={handleOpenConsultation} />

      {/* Floating Animated Contact Widget (Zalo & Phone) */}
      <FloatingContactWidget />

      {/* Video Modal (if opened) */}
      <VideoModal isOpen={false} onClose={() => {}} />
    </div>
  )
}
