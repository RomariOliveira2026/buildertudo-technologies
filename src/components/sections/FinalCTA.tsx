import { ContactForm } from '../forms/ContactForm'
import { MotionButton } from '../ui/Buttons'
import { Reveal } from '../ui/Reveal'
import { useTranslation } from '../../i18n'
import { getWhatsAppCopy } from '../../i18n/commercial'
import { ANALYTICS_EVENTS } from '../../config/commercial'
import { trackEvent } from '../../lib/analytics'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

export function FinalCTA() {
  const { t } = useTranslation()

  return (
    <section className="final-cta commercial-cta" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <div className="final-cta__intro">
            <span className="badge badge--gold">{t('contact.badge')}</span>
            <h2 id="contact-title">{t('commercial.cta.title')}</h2>
            <p>{t('commercial.cta.body')}</p>
          </div>

          <div className="final-cta__alt commercial-cta__actions">
            <MotionButton
              href="#commercial-contact-form"
              onClick={() => trackEvent(ANALYTICS_EVENTS.clickQuote, { source: 'final-cta' })}
            >
              {t('commercial.cta.primary')}
            </MotionButton>
            <MotionButton
              href={buildWhatsAppUrl(getWhatsAppCopy(t, 'quote'))}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent(ANALYTICS_EVENTS.clickWhatsapp, { context: 'quote' })}
            >
              {t('commercial.cta.secondary')}
            </MotionButton>
          </div>

          <ContactForm id="commercial-contact-form" />
        </Reveal>
      </div>
    </section>
  )
}
