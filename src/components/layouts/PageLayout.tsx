import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { BackToTop, WhatsAppFloat } from '../ui/FloatingActions'
import { useScrollState } from '../../hooks/useScrollState'
import { useTheme } from '../../hooks/useTheme'
import { useTranslation } from '../../i18n'

type PageLayoutProps = {
  children: ReactNode
  className?: string
}

export function PageLayout({ children, className = '' }: PageLayoutProps) {
  const { theme, toggleTheme } = useTheme()
  const { headerScrolled, showBackToTop, scrollToTop } = useScrollState()
  const { t } = useTranslation()

  return (
    <>
      <a className="skip-link" href="#page-content">{t('common.skipToContent')}</a>
      <main className={`page ${className}`.trim()}>
        <Header
          headerScrolled={headerScrolled}
          activeSection=""
          theme={theme}
          onToggleTheme={toggleTheme}
        />
        <div id="page-content">{children}</div>
        <Footer />
        <WhatsAppFloat />
        <BackToTop visible={showBackToTop} onClick={scrollToTop} />
      </main>
    </>
  )
}

type SubPageHeroProps = {
  eyebrow: string
  title: string
  description: string
}

export function SubPageHero({ eyebrow, title, description }: SubPageHeroProps) {
  const { t } = useTranslation()

  return (
    <header className="subpage-hero">
      <div className="container">
        <span className="badge badge--gold">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link className="ghost-btn link-btn subpage-hero__back" to="/">
          ← {t('common.backToHome')}
        </Link>
      </div>
    </header>
  )
}
