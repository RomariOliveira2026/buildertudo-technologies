import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { initAnalytics } from './lib/analytics'
import { LEGAL_ROUTES } from './constants/routes'
import { HomePage } from './pages/HomePage'

const PrivacyPolicyPage = lazy(() =>
  import('./pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage })),
)
const TermsOfUsePage = lazy(() =>
  import('./pages/TermsOfUsePage').then((m) => ({ default: m.TermsOfUsePage })),
)
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
)

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function AppRoutes() {
  useEffect(() => {
    initAnalytics()
  }, [])

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
