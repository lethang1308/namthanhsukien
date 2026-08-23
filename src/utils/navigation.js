export function scrollToSection(sectionId) {
  if (!sectionId || sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    // Find matching elements and target the currently visible one
    const elements = document.querySelectorAll(`[id="${sectionId}"]`)
    let visibleEl = null
    for (const el of elements) {
      if (el.offsetParent !== null || el.getBoundingClientRect().height > 0) {
        visibleEl = el
        break
      }
    }

    const target = visibleEl || document.getElementById(sectionId)
    if (target) {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
      const headerOffset = isMobile ? 60 : 75
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      })
    }
  }

  // Clean URL: Strip any #hash from the address bar
  if (typeof window !== 'undefined' && window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search)
  }
}
