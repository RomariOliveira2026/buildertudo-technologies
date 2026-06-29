import { useEffect, useState } from 'react'

export function useScrollState() {
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setHeaderScrolled(window.scrollY > 24)
      setShowBackToTop(window.scrollY > 480)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { headerScrolled, showBackToTop, scrollToTop }
}
