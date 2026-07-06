import { BUILDER_PROCESS } from '../../constants/process'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

export function ProcessSection() {
  return (
    <Section id="process" ariaLabelledBy="process-title">
      <Reveal>
        <SectionHeader
          id="process-title"
          eyebrow="Process"
          title="The BuilderTudo process"
          description="A proven delivery framework — transparent, agile and engineered for speed without compromising quality or security."
        />
      </Reveal>

      <StaggerReveal className="process-grid">
        {BUILDER_PROCESS.map((step) => (
          <StaggerItem key={step.step}>
            <article className="process-step">
              <span className="process-step__num" aria-hidden="true">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
