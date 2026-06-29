import { Link } from 'react-router-dom'
import { PageMeta } from '../components/seo/PageMeta'
import { MotionButton } from '../components/ui/Buttons'
import { SITE_SLOGAN } from '../lib/seo'
import { buildWhatsAppUrl } from '../lib/whatsapp'

export function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Página não encontrada"
        description="A página que você procura não existe ou foi movida."
        path="/404"
        noIndex
      />

      <main className="page not-found-page">
        <section className="not-found" aria-labelledby="not-found-title">
          <p className="not-found__code" aria-hidden="true">404</p>
          <h1 id="not-found-title">Página não encontrada</h1>
          <p>
            O endereço pode estar incorreto ou o conteúdo foi movido. A{' '}
            <strong>BuilderTudo Technologies</strong> segue com {SITE_SLOGAN.toLowerCase()}
          </p>

          <div className="not-found__actions">
            <MotionButton href="/">Voltar para o início</MotionButton>
            <MotionButton href={buildWhatsAppUrl()} variant="secondary">
              Falar no WhatsApp
            </MotionButton>
          </div>

          <p className="not-found__links">
            <Link to="/politica-de-privacidade">Política de Privacidade</Link>
            <span aria-hidden="true">·</span>
            <Link to="/termos-de-uso">Termos de Uso</Link>
          </p>
        </section>
      </main>
    </>
  )
}
