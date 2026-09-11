import { Section, SectionHeader } from '../ui/Section'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { MotionButton } from '../ui/Buttons'
import { useTranslation } from '../../i18n'
import { getBuilderCareItems, getWhatsAppCopy } from '../../i18n/commercial'
import { ANALYTICS_EVENTS } from '../../config/commercial'
import { trackEvent } from '../../lib/analytics'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

export function BuilderCareSection() {
  const { t } = useTranslation()
  const items = getBuilderCareItems(t)

  return (
    <Section id="buildercare" className="commercial-care" ariaLabelledBy="buildercare-title">
      <Reveal>
        <SectionHeader
          id="buildercare-title"
          eyebrow={t('commercial.buildercare.eyebrow')}
          title={t('commercial.buildercare.title')}
          description={t('commercial.buildercare.description')}
        />
      </Reveal>

      <StaggerReveal className="commercial-care__grid">
        {items.map((item) => (
          <StaggerItem key={item.id}>
            <article className="commercial-card commercial-card--compact">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <Reveal>
        <div className="commercial-care__cta">
          <MotionButton
            href={buildWhatsAppUrl(getWhatsAppCopy(t, 'buildercare'))}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent(ANALYTICS_EVENTS.clickWhatsapp, { context: 'buildercare' })
              trackEvent(ANALYTICS_EVENTS.clickQuote, { source: 'buildercare' })
            }}
          >
            {t('commercial.buildercare.cta')}
          </MotionButton>
          <p className="commercial-care__note">{t('commercial.buildercare.futureNote')}</p>
        </div>
      </Reveal>
    </Section>
  )
}
