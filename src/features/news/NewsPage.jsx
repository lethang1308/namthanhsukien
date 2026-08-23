import { useEffect } from 'react'
import { FloatingContactWidget } from '../../components/FloatingContactWidget'
import { scrollToSection } from '../../utils/navigation'
import { CustomerFeedback } from '../home/components/CustomerFeedback'
import { Footer } from '../home/components/Footer'
import { EventGallerySection } from './components/EventGallerySection'
import { MobileNewsPage } from './components/MobileNewsPage'
import { NewsArticlesSection } from './components/NewsArticlesSection'
import { NewsBanner } from './components/NewsBanner'

export function NewsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleOpenConsultation = () => scrollToSection('contact')

  return (
    <div className="min-h-[100dvh] bg-[#FFFFFF] text-[#18181B] selection:bg-[#E5A93C]/30 selection:text-[#780D0D]">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <NewsBanner onOpenConsultation={handleOpenConsultation} />
        <main id="news-content">
          <NewsArticlesSection onOpenConsultation={handleOpenConsultation} />
          <EventGallerySection onOpenConsultation={handleOpenConsultation} />
          <CustomerFeedback onOpenConsultation={handleOpenConsultation} />
        </main>
        <Footer onOpenConsultation={handleOpenConsultation} />
      </div>

      {/* Mobile Layout */}
      <MobileNewsPage onOpenConsultation={handleOpenConsultation} />

      {/* Floating Animated Contact Widget (Zalo & Phone) */}
      <FloatingContactWidget />
    </div>
  )
}
