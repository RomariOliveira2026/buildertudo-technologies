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
import { useTranslation } from '../i18n'
import { buildHomeStructuredData } from '../lib/seo'
import { getFaqItems } from '../i18n/commercial'

const ProblemSection = lazy(() => import('../components/sections/ProblemSection').then((m) => ({ default: m.ProblemSection })))
const CommercialSolutions = lazy(() => import('../components/sections/CommercialSolutions').then((m) => ({ default: m.CommercialSolutions })))
const PlansSection = lazy(() => import('../components/sections/PlansSection').then((m) => ({ default: m.PlansSection })))
const BuilderCareSection = lazy(() => import('../components/sections/BuilderCareSection').then((m) => ({ default: m.BuilderCareSection })))
const CommercialPortfolio = lazy(() => import('../components/sections/CommercialPortfolio').then((m) => ({ default: m.CommercialPortfolio })))
const HowWeWorkSection = lazy(() => import('../components/sections/HowWeWorkSection').then((m) => ({ default: m.HowWeWorkSection })))
const CommercialDifferentials = lazy(() => import('../components/sections/CommercialDifferentials').then((m) => ({ default: m.CommercialDifferentials })))
const CommercialSegments = lazy(() => import('../components/sections/CommercialSegments').then((m) => ({ default: m.CommercialSegments })))
const FaqSection = lazy(() => import('../components/sections/FaqSection').then((m) => ({ default: m.FaqSection })))
const FinalCTA = lazy(() => import('../components/sections/FinalCTA').then((m) => ({ default: m.FinalCTA })))

export function HomePage() {
  const { theme, toggleTheme } = useTheme()
  const { headerScrolled, showBackToTop, scrollToTop } = useScrollState()
  const activeSection = useScrollSpy(observedSections)
  const { t, locale } = useTranslation()
  const faq = getFaqItems(t)

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
          faq: faq.map((item) => ({ question: item.question, answer: item.answer })),
        })}
      />

      <a className="skip-link" href="#home">{t('common.skipToContent')}</a>

      <main className="page page--home page--commercial">
        <Header headerScrolled={headerScrolled} activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />
        <Hero />

        <Suspense fallback={null}>
          <ProblemSection />
          <CommercialSolutions />
          <PlansSection />
          <BuilderCareSection />
          <CommercialPortfolio />
          <HowWeWorkSection />
          <CommercialDifferentials />
          <CommercialSegments />
          <FaqSection />
          <FinalCTA />
        </Suspense>

        <Footer />
        <WhatsAppFloat />
        <BackToTop visible={showBackToTop} onClick={scrollToTop} />
      </main>
    </>
  )
}
