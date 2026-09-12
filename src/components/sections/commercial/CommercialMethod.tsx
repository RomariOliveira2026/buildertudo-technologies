import { commercialCopy } from '../../../i18n/commercial'
import { useTranslation } from '../../../i18n'
import { Reveal, StaggerItem, StaggerReveal } from '../../ui/Reveal'
import { Section, SectionHeader } from '../../ui/Section'

export function CommercialMethod() {
  const { locale } = useTranslation()
  const copy = commercialCopy[locale]

  return (
    <Section id="method" className="cm-method" ariaLabelledBy="method-title">
      <Reveal>
        <SectionHeader id="method-title" eyebrow={copy.method.eyebrow} title={copy.method.title} />
      </Reveal>

      <StaggerReveal className="cm-method__grid">
        {copy.method.steps.map((step, index) => (
          <StaggerItem key={step.title}>
            <article className="cm-step">
              <span className="cm-step__num">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
