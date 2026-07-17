import { useEffect } from 'react'
import paperBackground from '../../assets/b4002091-4a7b-4407-a4a9-992d5654bdd3.png'
import { ComboDeals } from './components/ComboDeals'
import { Experience } from './components/Experience'
import { FeaturedDishes } from './components/FeaturedDishes'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

export function HomePage() {
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

  return (
    <div
      className="min-h-[100dvh] bg-[var(--color-paper)] text-[var(--color-ink)]"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 250, 241, 0.18), rgba(255, 250, 241, 0.2)), url(${paperBackground})`,
        backgroundRepeat: 'repeat-y',
        backgroundPosition: 'top center',
        backgroundSize: '100% auto',
      }}
    >
      <Header />
      <main>
        <Hero />
        <FeaturedDishes />
        <ComboDeals />
        <Experience />
      </main>
      <Footer />
    </div>
  )
}
