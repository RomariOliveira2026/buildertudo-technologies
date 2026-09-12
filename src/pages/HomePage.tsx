import { lazy, Suspense } from 'react'
import { PageMeta } from '../components/seo/PageMeta'
import { Header } from '../components/layouts/Header'
import { Footer } from '../components/layouts/Footer'
import { CommercialHero } from '../components/sections/commercial/CommercialHero'
import { BackToTop, WhatsAppFloat } from '../components/ui/FloatingActions'
import { observedSections } from '../constants/navigation'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useScrollState } from '../hooks/useScrollState'
import { useTheme } from '../hooks/useTheme'
import { useTranslation } from '../i18n'
import { commercialCopy } from '../i18n/commercial'
import { buildHomeStructuredData, getFaqSchema } from '../lib/seo'

const CommercialProblem = lazy(() => import('../components/sections/commercial/CommercialProblem').then((m) => ({ default: m.CommercialProblem })))
const CommercialSolutions = lazy(() => import('../components/sections/commercial/CommercialSolutions').then((m) => ({ default: m.CommercialSolutions })))
const CommercialPlans = lazy(() => import('../components/sections/commercial/CommercialPlans').then((m) => ({ default: m.CommercialPlans })))
const CommercialPortfolio = lazy(() => import('../components/sections/commercial/CommercialPortfolio').then((m) => ({ default: m.CommercialPortfolio })))
const CommercialMethod = lazy(() => import('../components/sections/commercial/CommercialMethod').then((m) => ({ default: m.CommercialMethod })))
const CommercialDifferentials = lazy(() => import('../components/sections/commercial/CommercialDifferentials').then((m) => ({ default: m.CommercialDifferentials })))
const CommercialSegments = lazy(() => import('../components/sections/commercial/CommercialSegments').then((m) => ({ default: m.CommercialSegments })))
const CommercialCare = lazy(() => import('../components/sections/commercial/CommercialCare').then((m) => ({ default: m.CommercialCare })))
const CommercialFaq = lazy(() => import('../components/sections/commercial/CommercialFaq').then((m) => ({ default: m.CommercialFaq })))
const FinalCTA = lazy(() => import('../components/sections/FinalCTA').then((m) => ({ default: m.FinalCTA })))

export function HomePage() {
  const { theme, toggleTheme } = useTheme()
  const { headerScrolled, showBackToTop, scrollToTop } = useScrollState()
  const activeSection = useScrollSpy(observedSections)
  const { t, locale } = useTranslation()
  const copy = commercialCopy[locale]

  return (
    <>
      <PageMeta
        title={t('common.homeTitle')}
        description={t('common.defaultDescription')}
        path="/"
        structuredData={[
          ...buildHomeStructuredData({
            description: t('common.defaultDescription'),
            slogan: t('common.siteSlogan'),
            locale,
          }),
          getFaqSchema(copy.faq.items),
        ]}
      />

      <a className="skip-link" href="#home">{t('common.skipToContent')}</a>

      <main className="page page--home">
        <Header headerScrolled={headerScrolled} activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />
        <CommercialHero />

        <Suspense fallback={null}>
          <CommercialProblem />
          <CommercialSolutions />
          <CommercialPlans />
          <CommercialPortfolio />
          <CommercialMethod />
          <CommercialDifferentials />
          <CommercialSegments />
          <CommercialCare />
          <CommercialFaq />
          <FinalCTA />
        </Suspense>

        <Footer />
        <WhatsAppFloat />
        <BackToTop visible={showBackToTop} onClick={scrollToTop} />
      </main>
    </>
  )
}
