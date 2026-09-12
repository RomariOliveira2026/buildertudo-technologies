import { commercialCopy } from '../../../i18n/commercial'
import { useTranslation } from '../../../i18n'
import { Reveal } from '../../ui/Reveal'
import { Section, SectionHeader } from '../../ui/Section'

export function CommercialFaq() {
  const { locale } = useTranslation()
  const copy = commercialCopy[locale]

  return (
    <Section id="faq" className="cm-faq" ariaLabelledBy="faq-title">
      <Reveal>
        <SectionHeader id="faq-title" eyebrow={copy.faq.eyebrow} title={copy.faq.title} />
      </Reveal>

      <Reveal>
        <div className="cm-faq__list">
          {copy.faq.items.map((item) => (
            <details key={item.q} className="cm-faq__item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
