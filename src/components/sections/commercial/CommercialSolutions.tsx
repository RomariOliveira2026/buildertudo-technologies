import { commercialCopy } from '../../../i18n/commercial'
import { useTranslation } from '../../../i18n'
import { Reveal, StaggerItem, StaggerReveal } from '../../ui/Reveal'
import { Section, SectionHeader } from '../../ui/Section'

export function CommercialSolutions() {
  const { locale } = useTranslation()
  const copy = commercialCopy[locale]

  return (
    <Section id="solutions" className="cm-solutions" ariaLabelledBy="solutions-title">
      <Reveal>
        <SectionHeader id="solutions-title" eyebrow={copy.solutions.eyebrow} title={copy.solutions.title} />
      </Reveal>

      <StaggerReveal className="cm-card-grid cm-card-grid--solutions">
        {copy.solutions.items.map((item) => (
          <StaggerItem key={item.id}>
            <article className="cm-card cm-card--solution">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
