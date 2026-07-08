import { Reveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import type { CaseStudyContent } from '../../types/case-study'

type CaseProblemSectionProps = {
  problem: CaseStudyContent['problem']
}

export function CaseProblemSection({ problem }: CaseProblemSectionProps) {
  return (
    <Section id="problem" variant="alt" ariaLabelledBy="problem-title">
      <Reveal>
        <SectionHeader
          id="problem-title"
          eyebrow="1 — The problem"
          title={problem.title}
          description={problem.narrative}
          align="left"
        />
      </Reveal>

      <div className="case-detail-grid">
        <Reveal>
          <article className="case-detail-card">
            <h3>Who suffered</h3>
            <p>{problem.whoSuffered}</p>
          </article>
        </Reveal>
        <Reveal>
          <article className="case-detail-card">
            <h3>How it was solved before</h3>
            <p>{problem.howResolvedBefore}</p>
          </article>
        </Reveal>
        <Reveal>
          <article className="case-detail-card">
            <h3>Why existing solutions failed</h3>
            <p>{problem.whyInsufficient}</p>
          </article>
        </Reveal>
      </div>

      <Reveal>
        <ul className="case-bullet-list" aria-label="Pain points">
          {problem.painPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
