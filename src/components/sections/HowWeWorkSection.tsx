import { Section, SectionHeader } from '../ui/Section'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { useTranslation } from '../../i18n'
import { getProcessSteps } from '../../i18n/commercial'

export function HowWeWorkSection() {
  const { t } = useTranslation()
  const steps = getProcessSteps(t)

  return (
    <Section id="processo" className="commercial-process" ariaLabelledBy="processo-title">
      <Reveal>
        <SectionHeader
          id="processo-title"
          eyebrow={t('commercial.process.eyebrow')}
          title={t('commercial.process.title')}
          description={t('commercial.process.description')}
        />
      </Reveal>

      <StaggerReveal className="commercial-process__grid">
        {steps.map((step) => (
          <StaggerItem key={step.id}>
            <article className="process-step">
              <span className="process-step__number" aria-hidden="true">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
