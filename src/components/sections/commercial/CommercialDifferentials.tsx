import { commercialCopy } from '../../../i18n/commercial'
import { useTranslation } from '../../../i18n'
import { Reveal, StaggerItem, StaggerReveal } from '../../ui/Reveal'
import { Section, SectionHeader } from '../../ui/Section'

export function CommercialDifferentials() {
  const { locale } = useTranslation()
  const copy = commercialCopy[locale]

  return (
    <Section id="differentials" variant="alt" className="cm-differentials" ariaLabelledBy="differentials-title">
      <Reveal>
        <SectionHeader
          id="differentials-title"
          eyebrow={copy.differentials.eyebrow}
          title={copy.differentials.title}
        />
      </Reveal>

      <StaggerReveal className="cm-card-grid cm-card-grid--differentials">
        {copy.differentials.items.map((item) => (
          <StaggerItem key={item.title}>
            <article className="cm-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
