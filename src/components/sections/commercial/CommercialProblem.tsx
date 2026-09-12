import { commercialCopy } from '../../../i18n/commercial'
import { useTranslation } from '../../../i18n'
import { Reveal, StaggerItem, StaggerReveal } from '../../ui/Reveal'
import { Section, SectionHeader } from '../../ui/Section'

export function CommercialProblem() {
  const { locale } = useTranslation()
  const copy = commercialCopy[locale]

  return (
    <Section id="problem" variant="alt" className="cm-problem" ariaLabelledBy="problem-title">
      <Reveal>
        <SectionHeader id="problem-title" eyebrow={copy.problem.eyebrow} title={copy.problem.title} />
      </Reveal>

      <StaggerReveal className="cm-card-grid cm-card-grid--problem">
        {copy.problem.items.map((item) => (
          <StaggerItem key={item.title}>
            <article className="cm-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <Reveal>
        <p className="cm-close">{copy.problem.close}</p>
      </Reveal>
    </Section>
  )
}
