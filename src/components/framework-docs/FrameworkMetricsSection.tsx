import { usePlatformMetrics } from '../../hooks/usePlatformMetrics'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

export function FrameworkMetricsSection() {
  const { metrics, items, loading } = usePlatformMetrics()
  const updated = new Date(metrics.updatedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <Section id="metrics" variant="alt" ariaLabelledBy="framework-metrics-title">
      <Reveal>
        <SectionHeader
          id="framework-metrics-title"
          eyebrow="Engineering Metrics"
          title="Real platform data"
          description="Live metrics from Business OS — updated when the API is connected, static fallback otherwise."
          align="left"
        />
      </Reveal>

      <StaggerReveal className="framework-metrics-grid">
        {items.map((item) => (
          <StaggerItem key={item.id}>
            <div className="framework-metric-card">
              <strong className="framework-metric-card__value">{loading ? '…' : item.value}</strong>
              <span className="framework-metric-card__label">{item.label}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <Reveal>
        <p className="framework-metrics-footnote">
          Source: Business OS Health API · Last updated {updated}
          {metrics.aiNative ? ' · AI-native stack' : ''}
        </p>
      </Reveal>
    </Section>
  )
}
