import { Reveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import type { CaseStudyContent } from '../../types/case-study'

type CaseSolutionSectionProps = {
  solution: CaseStudyContent['solution']
}

export function CaseSolutionSection({ solution }: CaseSolutionSectionProps) {
  return (
    <Section id="solution" ariaLabelledBy="solution-title">
      <Reveal>
        <SectionHeader
          id="solution-title"
          eyebrow="2 — The solution"
          title={solution.title}
          description={solution.narrative}
          align="left"
        />
      </Reveal>

      <Reveal>
        <div className="case-flow">
          <h3 className="case-section-label">Main flow</h3>
          <ol className="case-flow__steps">
            {solution.mainFlow.map((step, index) => (
              <li key={step}>
                <span className="case-flow__num">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      <div className="case-detail-grid case-detail-grid--2">
        <Reveal>
          <div className="case-detail-block">
            <h3 className="case-section-label">Key differentiators</h3>
            <ul className="case-tag-list">
              {solution.differentiators.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal>
          <div className="case-detail-block">
            <h3 className="case-section-label">Value delivered</h3>
            <ul className="case-tag-list case-tag-list--gold">
              {solution.valueDelivered.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
