import { lazy, Suspense } from 'react'
import { PageMeta } from '../components/seo/PageMeta'
import { Header } from '../components/layouts/Header'
import { StatusBar } from '../components/layouts/StatusBar'
import { Footer } from '../components/layouts/Footer'
import { Hero } from '../components/sections/Hero'
import { BackToTop, WhatsAppFloat } from '../components/ui/FloatingActions'
import { observedSections } from '../constants/navigation'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useScrollState } from '../hooks/useScrollState'
import { useTheme } from '../hooks/useTheme'
import { useTranslation } from '../i18n'
import { buildHomeStructuredData } from '../lib/seo'

const CredibilitySection = lazy(() => import('../components/sections/CredibilitySection').then((m) => ({ default: m.CredibilitySection })))
const PurposeSection = lazy(() => import('../components/sections/PurposeSection').then((m) => ({ default: m.PurposeSection })))
const PlatformSection = lazy(() => import('../components/sections/PlatformSection').then((m) => ({ default: m.PlatformSection })))
const BusinessOSSection = lazy(() => import('../components/sections/BusinessOSSection').then((m) => ({ default: m.BusinessOSSection })))
const BuiltWithSection = lazy(() => import('../components/sections/BuiltWithSection').then((m) => ({ default: m.BuiltWithSection })))
const ProcessSection = lazy(() => import('../components/sections/ProcessSection').then((m) => ({ default: m.ProcessSection })))
const ServicesSection = lazy(() => import('../components/sections/ServicesSection').then((m) => ({ default: m.ServicesSection })))
const FinalCTA = lazy(() => import('../components/sections/FinalCTA').then((m) => ({ default: m.FinalCTA })))

export function HomePage() {
  const { theme, toggleTheme } = useTheme()
  const { headerScrolled, showBackToTop, scrollToTop } = useScrollState()
  const activeSection = useScrollSpy(observedSections)
  const { t, locale } = useTranslation()

  return (
    <>
      <PageMeta
        title={t('common.homeTitle')}
        description={t('common.defaultDescription')}
        path="/"
        structuredData={buildHomeStructuredData({
          description: t('common.defaultDescription'),
          slogan: t('common.siteSlogan'),
          locale,
        })}
      />

      <a className="skip-link" href="#home">{t('common.skipToContent')}</a>

      <main className="page page--home">
        <StatusBar />
        <Header headerScrolled={headerScrolled} activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />
        <Hero />

        <Suspense fallback={null}>
          <PurposeSection />
          <CredibilitySection />
          <PlatformSection />
          <BusinessOSSection />
          <BuiltWithSection />
          <ProcessSection />
          <ServicesSection />
          <FinalCTA />
        </Suspense>

        <Footer />
        <WhatsAppFloat />
        <BackToTop visible={showBackToTop} onClick={scrollToTop} />
      </main>
    </>
  )
}
