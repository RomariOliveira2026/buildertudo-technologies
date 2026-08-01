import { PageMeta } from '../components/seo/PageMeta'
import { PageLayout } from '../components/layouts/PageLayout'
import { BusinessOSShowcase } from '../components/business-os'
import { MotionButton } from '../components/ui/Buttons'

export function BusinessOSPage() {
  return (
    <PageLayout className="subpage subpage--business-os">
      <PageMeta
        title="Business OS — Enterprise Operating System"
        description="The enterprise operating system BuilderTudo uses daily — Command Center, AI Copilot, products, analytics and Framework health in one platform."
        path="/business-os"
      />

      <section className="bos-page-hero">
        <div className="container container--wide">
          <span className="badge badge--gold">Business OS</span>
          <h1>The operating system behind every BuilderTudo product</h1>
          <p>
            Enterprise-grade command center, live activity, AI Copilot, product portfolio,
            analytics and Framework health — the platform we run our company on.
          </p>
        </div>
      </section>

      <section className="bos-page-showcase" aria-label="Business OS interactive showcase">
        <div className="container container--wide">
          <BusinessOSShowcase />
        </div>
      </section>

      <section className="bos-page-cta">
        <div className="container">
          <h2>Built on Business OS. Delivered to your company.</h2>
          <p>
            Every client project inherits the same operational platform — CRM, analytics,
            AI governance and Framework health from day one.
          </p>
          <div className="section-cta-row">
            <MotionButton href="/#contact">Start Your Project</MotionButton>
            <MotionButton href="/framework" variant="secondary">Explore Framework</MotionButton>
            <MotionButton href="/live" variant="ghost">View live metrics</MotionButton>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
