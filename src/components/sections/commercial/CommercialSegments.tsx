import { commercialCopy } from '../../../i18n/commercial'
import { useTranslation } from '../../../i18n'
import { Reveal } from '../../ui/Reveal'
import { Section, SectionHeader } from '../../ui/Section'

export function CommercialSegments() {
  const { locale } = useTranslation()
  const copy = commercialCopy[locale]

  return (
    <Section id="segments" className="cm-segments" ariaLabelledBy="segments-title">
      <Reveal>
        <SectionHeader
          id="segments-title"
          eyebrow={copy.segments.eyebrow}
          title={copy.segments.title}
          description={copy.segments.lead}
        />
      </Reveal>

      <Reveal>
        <ul className="cm-segments__list">
          {copy.segments.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
