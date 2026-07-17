import { memo, useMemo } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const directionTransforms = {
  up: 'translate3d(0, 40px, 0)',
  down: 'translate3d(0, -40px, 0)',
  left: 'translate3d(-40px, 0, 0)',
  right: 'translate3d(40px, 0, 0)',
}

function clampDuration(duration) {
  return Math.min(Math.max(Number(duration) || 700, 0), 2000)
}

function ScrollRevealComponent({
  as: Component = 'div',
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 750,
  once = true,
  rootMargin,
  threshold,
  variant = 'fade',
  style,
  ...props
}) {
  const { ref, isIntersecting, prefersReducedMotion } = useIntersectionObserver({
    once,
    rootMargin,
    threshold,
  })

  const revealStyle = useMemo(() => {
    if (prefersReducedMotion) {
      return {
        opacity: 1,
        transform: 'none',
        transition: 'none',
        willChange: 'auto',
        ...style,
      }
    }

    const transitionDuration = clampDuration(duration)
    const initialTransform =
      variant === 'zoom' ? 'scale(0.95)' : directionTransforms[direction] || directionTransforms.up

    return {
      opacity: isIntersecting ? 1 : 0,
      transform: isIntersecting ? 'translate3d(0, 0, 0) scale(1)' : initialTransform,
      transitionProperty: 'opacity, transform',
      transitionDuration: `${transitionDuration}ms`,
      transitionDelay: `${Math.max(Number(delay) || 0, 0)}ms`,
      transitionTimingFunction: 'ease-out',
      willChange: isIntersecting ? 'auto' : 'opacity, transform',
      ...style,
    }
  }, [delay, direction, duration, isIntersecting, prefersReducedMotion, style, variant])

  return (
    <Component
      ref={ref}
      className={`motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none ${className}`}
      style={revealStyle}
      {...props}
    >
      {children}
    </Component>
  )
}

export const ScrollReveal = memo(ScrollRevealComponent)
