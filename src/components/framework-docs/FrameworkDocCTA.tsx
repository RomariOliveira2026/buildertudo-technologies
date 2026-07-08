import { Reveal } from '../ui/Reveal'
import { MotionButton } from '../ui/Buttons'

export function FrameworkDocCTA() {
  return (
    <section className="framework-doc-cta" id="framework-cta" aria-labelledby="framework-cta-title">
      <div className="container container--wide">
        <Reveal>
          <div className="framework-doc-cta__inner">
            <span className="badge badge--gold">Next step</span>
            <h2 id="framework-cta-title">Ready to build on this stack?</h2>
            <p>
              The same Framework behind 12 official products — design system, AI-OS, Engine, Runtime
              and Golden Screens — is available for your next platform. Book a discovery call with
              our engineering team.
            </p>
            <div className="framework-doc-cta__actions">
              <MotionButton
                href="mailto:contato@buildertudo.com?subject=Book%20a%20Discovery%20Call"
                className="btn--lg"
              >
                Book discovery call
              </MotionButton>
              <MotionButton href="/business-os" variant="secondary" className="btn--lg">
                Explore Business OS
              </MotionButton>
              <MotionButton href="/cases" variant="ghost" className="btn--lg">
                Read case studies
              </MotionButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
