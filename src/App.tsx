import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { initAnalytics } from './lib/analytics'
import { scrollToHashWithRetry } from './lib/scrollToSection'
import { LEGAL_ROUTES, PAGE_ROUTES } from './constants/routes'
import { HomePage } from './pages/HomePage'

const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage })))
const TermsOfUsePage = lazy(() => import('./pages/TermsOfUsePage').then((m) => ({ default: m.TermsOfUsePage })))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })))
const LivePage = lazy(() => import('./pages/LivePage').then((m) => ({ default: m.LivePage })))
const LabsPage = lazy(() => import('./pages/LabsPage').then((m) => ({ default: m.LabsPage })))
const FrameworkPage = lazy(() => import('./pages/FrameworkPage').then((m) => ({ default: m.FrameworkPage })))
const MethodPage = lazy(() => import('./pages/MethodPage').then((m) => ({ default: m.MethodPage })))
const BusinessOSPage = lazy(() => import('./pages/BusinessOSPage').then((m) => ({ default: m.BusinessOSPage })))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage').then((m) => ({ default: m.CaseStudiesPage })))
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage').then((m) => ({ default: m.CaseStudyPage })))
const ProductPage = lazy(() => import('./pages/ProductPage').then((m) => ({ default: m.ProductPage })))

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => scrollToHashWithRetry(hash), [pathname, hash])
  return null
}

function AppRoutes() {
  useEffect(() => { initAnalytics() }, [])

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={PAGE_ROUTES.live} element={<LivePage />} />
          <Route path={PAGE_ROUTES.labs} element={<LabsPage />} />
          <Route path={PAGE_ROUTES.framework} element={<FrameworkPage />} />
          <Route path={PAGE_ROUTES.method} element={<MethodPage />} />
          <Route path={PAGE_ROUTES.businessOs} element={<BusinessOSPage />} />
          <Route path={`${PAGE_ROUTES.products}/:slug`} element={<ProductPage />} />
          <Route path={PAGE_ROUTES.cases} element={<CaseStudiesPage />} />
          <Route path={`${PAGE_ROUTES.cases}/:slug`} element={<CaseStudyPage />} />
          <Route path={LEGAL_ROUTES.privacy} element={<PrivacyPolicyPage />} />
          <Route path={LEGAL_ROUTES.terms} element={<TermsOfUsePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
