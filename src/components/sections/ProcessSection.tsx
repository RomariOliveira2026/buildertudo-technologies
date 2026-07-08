import { BUILDER_PROCESS } from '../../constants/process'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import { MotionButton } from '../ui/Buttons'

const PROCESS_ICONS = ['◎', '◆', '⬡', '▣', '✦', '◇', '↑', '∞']

export function ProcessSection() {
  return (
    <Section id="process" ariaLabelledBy="process-title">
      <Reveal>
        <SectionHeader
          id="process-title"
          eyebrow="BuilderTudo Method"
          title="From discovery to evolution"
          description="A proprietary 8-step flow — every phase powered by Framework, Golden Screens, AI-OS and Engine."
        />
      </Reveal>

      <StaggerReveal className="process-grid">
        {BUILDER_PROCESS.map((step, index) => (
          <StaggerItem key={step.step}>
            <article className="process-step">
              <div className="process-step__head">
                <div className="process-step__icon" aria-hidden="true">
                  {PROCESS_ICONS[index] ?? '◆'}
                </div>
                <span className="process-step__num">{step.step}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <Reveal>
        <div className="section-cta-row">
          <MotionButton href="/method">Full methodology</MotionButton>
          <MotionButton href="mailto:contato@buildertudo.com?subject=Schedule%20Discovery" variant="secondary">
            Schedule discovery
          </MotionButton>
        </div>
      </Reveal>
    </Section>
  )
}
