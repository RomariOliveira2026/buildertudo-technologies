import { usePlatformMetrics } from '../../hooks/usePlatformMetrics'
import { FRAMEWORK_PERFORMANCE_CATEGORIES } from '../../content/framework-docs'
import { PlatformScreenshot } from '../ui/PlatformScreenshot'
import type { ScreenId } from '../../constants/screenshots'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

type PerfMetric = { label: string; value: string; detail: string }

function getPerformanceMetrics(
  categoryId: (typeof FRAMEWORK_PERFORMANCE_CATEGORIES)[number]['id'],
  health: number,
  packages: number,
): { screenId: ScreenId; items: PerfMetric[] } {
  switch (categoryId) {
    case 'health':
      return {
        screenId: 'analytics',
        items: [
          { label: 'Framework Health', value: `${health}%`, detail: 'Composite score from consistency, test coverage and bundle budgets.' },
          { label: 'Consistency', value: '96%', detail: 'Cross-product design and API pattern adherence.' },
          { label: 'Type coverage', value: '98%', detail: 'Strict TypeScript across monorepo packages.' },
        ],
      }
    case 'tests':
      return {
        screenId: 'studio',
        items: [
          { label: 'Unit tests', value: '1,240+', detail: 'Component and utility test suites across packages.' },
          { label: 'A11y checks', value: '100%', detail: 'Every component library export passes axe-core.' },
          { label: 'Visual regression', value: '15 baselines', detail: 'Golden Screen snapshots in CI pipeline.' },
        ],
      }
    case 'packages':
      return {
        screenId: 'command-center',
        items: [
          { label: 'Monorepo packages', value: String(packages), detail: 'Shared libraries with dependency graph validation.' },
          { label: 'Bundle budget', value: '< 250KB', detail: 'Per-route JS budget enforced in CI.' },
          { label: 'Tree-shaking', value: '100%', detail: 'ESM-only package exports.' },
        ],
      }
    case 'deploys':
      return {
        screenId: 'tasks',
        items: [
          { label: 'Deploy frequency', value: 'Daily', detail: 'Continuous deployment from main branch.' },
          { label: 'Rollback time', value: '< 2 min', detail: 'Instant rollback via Vercel edge.' },
          { label: 'Zero-downtime', value: 'Yes', detail: 'Blue-green deploys with health checks.' },
        ],
      }
  }
}

export function FrameworkPerformanceSection() {
  const { metrics, loading } = usePlatformMetrics()

  return (
    <Section id="performance" variant="alt" ariaLabelledBy="framework-perf-title">
      <Reveal>
        <SectionHeader
          id="framework-perf-title"
          eyebrow="Performance"
          title="Health, tests, packages and deploys"
          description="Quality gates and operational metrics tracked in Business OS — the same data we use internally."
          align="left"
        />
      </Reveal>

      {FRAMEWORK_PERFORMANCE_CATEGORIES.map((category) => {
        const { screenId, items } = getPerformanceMetrics(category.id, metrics.frameworkHealth, metrics.packages)
        const showLoading = loading && (category.id === 'health' || category.id === 'packages')

        return (
          <div key={category.id} className="framework-perf-block">
            <Reveal>
              <h3 className="framework-perf-block__title">{category.label}</h3>
              <p className="framework-perf-block__desc">{category.description}</p>
            </Reveal>

            <div className="framework-perf-layout framework-perf-layout--doc">
              <StaggerReveal className="framework-perf-metrics">
                {items.map((item) => (
                  <StaggerItem key={item.label}>
                    <div className="framework-perf-card">
                      <strong>{showLoading ? '…' : item.value}</strong>
                      <span className="framework-perf-card__label">{item.label}</span>
                      <p>{item.detail}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerReveal>

              <Reveal>
                <div className="framework-screenshot-stage">
                  <PlatformScreenshot screenId={screenId} doc className="framework-doc-screenshot-block" />
                </div>
              </Reveal>
            </div>
          </div>
        )
      })}
    </Section>
  )
}
