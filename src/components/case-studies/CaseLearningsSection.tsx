import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

type CaseLearningsSectionProps = {
  productName: string
  learnings: string[]
  tradeoffs: string[]
}

export function CaseLearningsSection({ productName, learnings, tradeoffs }: CaseLearningsSectionProps) {
  return (
    <Section id="learnings" variant="alt" ariaLabelledBy="learnings-title">
      <Reveal>
        <SectionHeader
          id="learnings-title"
          eyebrow="8 — Learnings"
          title={`Engineering lessons from ${productName}`}
          description="Technical decisions, trade-offs and improvements discovered while building on the BuilderTudo Platform."
          align="left"
        />
      </Reveal>

      <StaggerReveal className="case-learnings-list">
        {learnings.map((learning, index) => (
          <StaggerItem key={learning}>
            <blockquote className="case-learning-card">
              <span className="case-learning-card__num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <p>{learning}</p>
            </blockquote>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <Reveal>
        <div className="case-tradeoffs">
          <h3 className="case-section-label">Trade-offs</h3>
          <ul className="case-decisions-list">
            {tradeoffs.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
