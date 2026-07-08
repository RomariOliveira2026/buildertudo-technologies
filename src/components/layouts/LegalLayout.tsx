import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'
import { BackToTop, WhatsAppFloat } from '../ui/FloatingActions'

type LegalLayoutProps = {
  children: ReactNode
  title: string
}

export function LegalLayout({ children, title }: LegalLayoutProps) {
  return (
    <>
      <a className="skip-link" href="#legal-content">
        Pular para o conteúdo
      </a>

      <main className="page legal-page">
        <header className="header header--legal">
          <div className="header__inner container container--wide">
            <Link className="logo" to="/" aria-label="BuilderTudo Technologies - Início">
              <img
                className="site-logo"
                src="/logo-oficial.png"
                alt="BuilderTudo Technologies — Tecnologia que transforma negócios"
                width={720}
                height={132}
                decoding="async"
              />
            </Link>

            <Link className="secondary-btn link-btn legal-back-btn" to="/">
              Voltar ao site
            </Link>
          </div>
        </header>

        <article className="legal-content" id="legal-content" aria-labelledby="legal-title">
          <p className="legal-meta">BuilderTudo Technologies · Última atualização: Junho de 2026</p>
          <h1 id="legal-title">{title}</h1>
          {children}
        </article>

        <Footer />
        <WhatsAppFloat />
        <BackToTop visible onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      </main>
    </>
  )
}
