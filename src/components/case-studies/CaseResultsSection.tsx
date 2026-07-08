import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import { RESULT_CATEGORY_LABELS, type CaseStudyResultItem } from '../../types/case-study'

type CaseResultsSectionProps = {
  results: CaseStudyResultItem[]
  status: string
}

export function CaseResultsSection({ results, status }: CaseResultsSectionProps) {
  const showExpectedNote = status !== 'live'

  return (
    <Section id="results" variant="alt" ariaLabelledBy="results-title">
      <Reveal>
        <SectionHeader
          id="results-title"
          eyebrow="6 — Results"
          title="Outcomes and expected impact"
          description={
            showExpectedNote
              ? 'Metrics marked as expected reflect engineering targets for products still in beta or build phase.'
              : 'Measured and observed outcomes from production usage.'
          }
          align="left"
        />
      </Reveal>

      <StaggerReveal className="case-results-grid case-results-grid--full">
        {results.map((metric) => (
          <StaggerItem key={metric.category}>
            <div className={`case-result-card${metric.expected ? ' case-result-card--expected' : ''}`}>
              <span className="case-result-card__category">{RESULT_CATEGORY_LABELS[metric.category]}</span>
              <strong>{metric.value}</strong>
              <p>{metric.description}</p>
              {metric.expected ? <span className="case-result-card__badge">Expected</span> : null}
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
