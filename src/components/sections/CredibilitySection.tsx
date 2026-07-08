import { CREDIBILITY_METRICS } from '../../constants/credibility'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

export function CredibilitySection() {
  return (
    <Section id="credibility" variant="dark" ariaLabelledBy="credibility-title">
      <Reveal>
        <SectionHeader
          id="credibility-title"
          eyebrow="Engineering credibility"
          title="Numbers backed by the Framework"
          description="Every metric reflects real platform usage — components, tests, deploys and health scores from our daily operations."
        />
      </Reveal>

      <StaggerReveal className="credibility-grid">
        {CREDIBILITY_METRICS.map((metric) => (
          <StaggerItem key={metric.id}>
            <div className="credibility-card">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
