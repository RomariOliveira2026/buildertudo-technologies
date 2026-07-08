import { PageMeta } from '../components/seo/PageMeta'
import { PageLayout, SubPageHero } from '../components/layouts/PageLayout'
import { BUILDER_PROCESS } from '../constants/process'
import { METHOD_PILLARS } from '../constants/platform'
import { MotionButton } from '../components/ui/Buttons'

export function MethodPage() {
  return (
    <PageLayout className="subpage">
      <PageMeta
        title="BuilderTudo Method — Proprietary Delivery Framework"
        description="Our proprietary product engineering methodology — discovery to evolution with Framework, Golden Screens, Engine and AI-OS."
        path="/method"
      />
      <SubPageHero
        eyebrow="BuilderTudo Method"
        title="How we deliver products that scale"
        description="A proprietary methodology combining Product Method, Golden Screens, Engine, Framework, Business OS and governed AI."
      />

      <section className="subpage-section">
        <div className="container">
          <h2>Method Pillars</h2>
          <div className="method-pillars">
            {METHOD_PILLARS.map((pillar) => (
              <article key={pillar.id} className="method-pillar">
                <h3>{pillar.name}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="subpage-section subpage-section--alt">
        <div className="container">
          <h2>Delivery Process</h2>
          <div className="process-grid process-grid--page">
            {BUILDER_PROCESS.map((step) => (
              <article key={step.step} className="process-step">
                <span className="process-step__num">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="subpage-section">
        <div className="container">
          <div className="section-cta-row">
            <MotionButton href="/#contact">Start a Project</MotionButton>
            <MotionButton href="/framework" variant="secondary">Explore Framework</MotionButton>
            <MotionButton href="/#business-os" variant="ghost">Explore Business OS</MotionButton>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
