import { lazy, Suspense } from 'react'
import { Header } from '../components/layouts/Header'
import { Footer } from '../components/layouts/Footer'
import { Hero } from '../components/sections/Hero'
import { BackToTop, WhatsAppFloat } from '../components/ui/FloatingActions'
import { observedSections } from '../constants/navigation'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useScrollState } from '../hooks/useScrollState'
import { useTheme } from '../hooks/useTheme'

const Numbers = lazy(() => import('../components/sections/Numbers').then((m) => ({ default: m.Numbers })))
const Ecosystem = lazy(() => import('../components/sections/Ecosystem').then((m) => ({ default: m.Ecosystem })))
const Solutions = lazy(() => import('../components/sections/Solutions').then((m) => ({ default: m.Solutions })))
const Segments = lazy(() => import('../components/sections/Segments').then((m) => ({ default: m.Segments })))
const Differentials = lazy(() => import('../components/sections/Differentials').then((m) => ({ default: m.Differentials })))
const Timeline = lazy(() => import('../components/sections/Timeline').then((m) => ({ default: m.Timeline })))
const Projects = lazy(() => import('../components/sections/Projects').then((m) => ({ default: m.Projects })))
const Studio = lazy(() => import('../components/sections/Studio').then((m) => ({ default: m.Studio })))
const StackVisual = lazy(() => import('../components/sections/StackVisual').then((m) => ({ default: m.StackVisual })))
const CTA = lazy(() => import('../components/sections/CTA').then((m) => ({ default: m.CTA })))

export function HomePage() {
  const { theme, toggleTheme } = useTheme()
  const { headerScrolled, showBackToTop, scrollToTop } = useScrollState()
  const activeSection = useScrollSpy(observedSections)

  return (
    <>
      <a className="skip-link" href="#home">
        Pular para o conteúdo principal
      </a>

      <main className="page">
        <Header
          headerScrolled={headerScrolled}
          activeSection={activeSection}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <Hero />

        <Suspense fallback={null}>
          <Numbers />
          <Ecosystem />
          <Solutions />
          <Segments />
          <Differentials />
          <Timeline />
          <Projects />
          <Studio />
          <StackVisual />
          <CTA />
        </Suspense>

        <Footer />

        <WhatsAppFloat />
        <BackToTop visible={showBackToTop} onClick={scrollToTop} />
      </main>
    </>
  )
}
