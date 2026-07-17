import { ScrollReveal } from './ScrollReveal'

export function FadeUpSection({
  as = 'section',
  children,
  delay = 0,
  duration = 800,
  once = true,
  ...props
}) {
  return (
    <ScrollReveal
      as={as}
      delay={delay}
      direction="up"
      duration={duration}
      once={once}
      {...props}
    >
      {children}
    </ScrollReveal>
  )
}
