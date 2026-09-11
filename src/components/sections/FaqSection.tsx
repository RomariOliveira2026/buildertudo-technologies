import { Section, SectionHeader } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { useTranslation } from '../../i18n'
import { getFaqItems } from '../../i18n/commercial'

export function FaqSection() {
  const { t } = useTranslation()
  const items = getFaqItems(t)

  return (
    <Section id="faq" className="commercial-faq" variant="alt" ariaLabelledBy="faq-title">
      <Reveal>
        <SectionHeader
          id="faq-title"
          eyebrow={t('commercial.faq.eyebrow')}
          title={t('commercial.faq.title')}
        />
      </Reveal>

      <div className="faq-list">
        {items.map((item) => (
          <details key={item.id} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
