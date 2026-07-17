import { Children } from 'react'
import { ScrollReveal } from './ScrollReveal'

export function StaggerContainer({
  as: Component = 'div',
  children,
  childClassName = '',
  className = '',
  delay = 0,
  direction = 'up',
  duration = 750,
  once = true,
  staggerDelay = 100,
  variant = 'fade',
  ...props
}) {
  return (
    <Component className={className} {...props}>
      {Children.map(children, (child, index) => (
        <ScrollReveal
          className={childClassName}
          delay={delay + index * staggerDelay}
          direction={direction}
          duration={duration}
          once={once}
          variant={variant}
        >
          {child}
        </ScrollReveal>
      ))}
    </Component>
  )
}
