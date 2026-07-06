import { lazy, Suspense } from 'react'
import { PageMeta } from '../components/seo/PageMeta'
import { Header } from '../components/layouts/Header'
import { Footer } from '../components/layouts/Footer'
import { Hero } from '../components/sections/Hero'
import { BackToTop, WhatsAppFloat } from '../components/ui/FloatingActions'
import { observedSections } from '../constants/navigation'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useScrollState } from '../hooks/useScrollState'
import { useTheme } from '../hooks/useTheme'
import { DEFAULT_DESCRIPTION, homeStructuredData } from '../lib/seo'

const PlatformSection = lazy(() =>
  import('../components/sections/PlatformSection').then((m) => ({ default: m.PlatformSection })),
)
const ProductsSection = lazy(() =>
  import('../components/sections/ProductsSection').then((m) => ({ default: m.ProductsSection })),
)
const ServicesSection = lazy(() =>
  import('../components/sections/ServicesSection').then((m) => ({ default: m.ServicesSection })),
)
const ProcessSection = lazy(() =>
  import('../components/sections/ProcessSection').then((m) => ({ default: m.ProcessSection })),
)
const CasesSection = lazy(() =>
  import('../components/sections/CasesSection').then((m) => ({ default: m.CasesSection })),
)
const LabsSection = lazy(() =>
  import('../components/sections/LabsSection').then((m) => ({ default: m.LabsSection })),
)
const FinalCTA = lazy(() =>
  import('../components/sections/FinalCTA').then((m) => ({ default: m.FinalCTA })),
)

export function HomePage() {
  const { theme, toggleTheme } = useTheme()
  const { headerScrolled, showBackToTop, scrollToTop } = useScrollState()
  const activeSection = useScrollSpy(observedSections)

  return (
    <>
      <PageMeta
        title="Technology platform for global companies"
        description={DEFAULT_DESCRIPTION}
        path="/"
        structuredData={homeStructuredData}
      />

      <a className="skip-link" href="#home">
        Skip to main content
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
          <PlatformSection />
          <ProductsSection />
          <ServicesSection />
          <ProcessSection />
          <CasesSection />
          <LabsSection />
          <FinalCTA />
        </Suspense>

        <Footer />

        <WhatsAppFloat />
        <BackToTop visible={showBackToTop} onClick={scrollToTop} />
      </main>
    </>
  )
}
