import { PageMeta } from '../components/seo/PageMeta'
import { PageLayout, SubPageHero } from '../components/layouts/PageLayout'
import { LIVE_WIDGETS } from '../constants/platform'
import { STATIC_PLATFORM_METRICS, formatPlatformMetrics } from '../data/platform-metrics'
import { usePlatformMetrics } from '../hooks/usePlatformMetrics'
import { PlatformScreenshot } from '../components/ui/PlatformScreenshot'
import { MotionButton } from '../components/ui/Buttons'

const WIDGET_SCREEN: Record<string, 'framework-health' | 'deploy' | 'command-center' | 'ai-center' | 'products-hub' | 'studio'> = {
  'framework-health': 'framework-health',
  deploys: 'deploy',
  'business-os': 'command-center',
  'ai-center': 'ai-center',
  engine: 'deploy',
  'golden-screens': 'studio',
  products: 'products-hub',
  runtime: 'command-center',
  uptime: 'command-center',
}

export function LivePage() {
  const { metrics, loading } = usePlatformMetrics()
  const items = formatPlatformMetrics(metrics)

  return (
    <PageLayout className="subpage">
      <PageMeta
        title="BuilderTudo Live — Platform Status"
        description="Real-time platform status — framework health, deploys, products, AI center and uptime."
        path="/live"
      />
      <SubPageHero
        eyebrow="BuilderTudo Live"
        title="Platform status, powered by Business OS"
        description="Public dashboard for framework health, deploys, products and AI center. Connect Business OS API for live data."
      />

      <section className="subpage-section">
        <div className="container">
          <div className="live-metrics">
            {items.map((item) => (
              <div key={item.id} className="live-metric">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
            <div className="live-metric">
              <strong>99.9%</strong>
              <span>Uptime</span>
            </div>
          </div>
          <p className="live-updated">
            {loading ? 'Loading…' : metrics.updatedAt !== STATIC_PLATFORM_METRICS.updatedAt
              ? `Last updated: ${new Date(metrics.updatedAt).toLocaleString()}`
              : 'Simulated data — connect VITE_BUSINESS_OS_API for live metrics'}
          </p>
        </div>
      </section>

      <section className="subpage-section subpage-section--alt">
        <div className="container">
          <h2>Live widgets</h2>
          <div className="live-widgets">
            {LIVE_WIDGETS.map((widget) => (
              <article key={widget.id} className="live-widget" id={widget.id}>
                <div className="live-widget__head">
                  <h3>{widget.name}</h3>
                  <span className={`live-widget__status live-widget__status--${widget.status}`}>
                    {widget.status === 'ready' ? 'Live' : 'Planned'}
                  </span>
                </div>
                <p>{widget.description}</p>
                {widget.status === 'ready' && WIDGET_SCREEN[widget.id] ? (
                  <PlatformScreenshot screenId={WIDGET_SCREEN[widget.id]} compact zoomOnHover={false} />
                ) : null}
              </article>
            ))}
          </div>
          <div className="section-cta-row">
            <MotionButton href="/business-os">Explore Business OS</MotionButton>
            <MotionButton href="/framework" variant="secondary">Explore Framework</MotionButton>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
