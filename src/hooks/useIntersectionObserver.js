import { useEffect, useRef, useState } from 'react'

const canUseIntersectionObserver =
  typeof window !== 'undefined' && 'IntersectionObserver' in window

function getPrefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return false
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useIntersectionObserver({
  root = null,
  rootMargin = '0px 0px -12% 0px',
  threshold = 0.16,
  once = true,
  disabled = false,
} = {}) {
  const targetRef = useRef(null)
  const hasIntersectedRef = useRef(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getPrefersReducedMotion)
  const [isIntersecting, setIsIntersecting] = useState(() => disabled || getPrefersReducedMotion())

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    handleChange()
    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  useEffect(() => {
    const target = targetRef.current

    if (!target || disabled || prefersReducedMotion || !canUseIntersectionObserver) {
      hasIntersectedRef.current = true
      setIsIntersecting(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const nextIsIntersecting = entry.isIntersecting || entry.intersectionRatio > 0

        if (!nextIsIntersecting) {
          if (!once) {
            setIsIntersecting(false)
          }
          return
        }

        if (once && hasIntersectedRef.current) {
          return
        }

        hasIntersectedRef.current = true
        setIsIntersecting(true)

        if (once) {
          observer.unobserve(entry.target)
        }
      },
      {
        root,
        rootMargin,
        threshold,
      },
    )

    observer.observe(target)

    return () => {
      observer.disconnect()
    }
  }, [disabled, once, prefersReducedMotion, root, rootMargin, threshold])

  return {
    ref: targetRef,
    isIntersecting,
    hasIntersected: hasIntersectedRef.current,
    prefersReducedMotion,
  }
}
