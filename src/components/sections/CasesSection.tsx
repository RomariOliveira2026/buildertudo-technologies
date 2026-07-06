import { CASES } from '../../constants/cases'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

export function CasesSection() {
  return (
    <Section id="cases" variant="alt" ariaLabelledBy="cases-title">
      <Reveal>
        <SectionHeader
          id="cases-title"
          eyebrow="Cases"
          title="Results that speak for themselves"
          description="Selected implementations across healthcare, compliance, AI and enterprise — built on BuilderTudo and deployed to production."
        />
      </Reveal>

      <StaggerReveal className="cases-grid">
        {CASES.map((item) => (
          <StaggerItem key={item.id}>
            <article className="case-card">
              <div className="case-card__meta">
                <span className="badge badge--outline">{item.industry}</span>
                <h3>{item.product}</h3>
              </div>
              <p className="case-card__result">{item.result}</p>
              <ul className="case-card__metrics" aria-label={`${item.product} results`}>
                {item.metrics.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <div className="case-card__stack">
                {item.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
