import { commercialCopy } from '../../../i18n/commercial'
import { useTranslation } from '../../../i18n'
import { getWhatsAppHref, trackWhatsAppClick } from '../../../lib/commercial-whatsapp'
import { MotionButton } from '../../ui/Buttons'
import { Reveal, StaggerItem, StaggerReveal } from '../../ui/Reveal'
import { Section, SectionHeader } from '../../ui/Section'

export function CommercialCare() {
  const { locale } = useTranslation()
  const copy = commercialCopy[locale]

  return (
    <Section id="care" variant="alt" className="cm-care" ariaLabelledBy="care-title">
      <Reveal>
        <SectionHeader
          id="care-title"
          eyebrow={copy.care.eyebrow}
          title={copy.care.title}
          description={copy.care.lead}
        />
      </Reveal>

      <StaggerReveal className="cm-card-grid cm-card-grid--care">
        {copy.care.items.map((item) => (
          <StaggerItem key={item.title}>
            <article className="cm-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <Reveal>
        <p className="cm-close">{copy.care.note}</p>
        <div className="section-cta-row">
          <MotionButton
            href={getWhatsAppHref(locale, 'care')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('care')}
          >
            {copy.care.cta}
          </MotionButton>
        </div>
      </Reveal>
    </Section>
  )
}
