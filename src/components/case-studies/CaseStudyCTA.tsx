import { Reveal } from '../ui/Reveal'
import { MotionButton } from '../ui/Buttons'

type CaseStudyCTAProps = {
  productName: string
}

export function CaseStudyCTA({ productName }: CaseStudyCTAProps) {
  return (
    <section className="case-cta" id="case-contact" aria-labelledby="case-cta-title">
      <div className="container">
        <Reveal>
          <div className="case-cta__inner">
            <span className="badge badge--gold">10 — Next step</span>
            <h2 id="case-cta-title">Like this architecture?</h2>
            <p>
              Let&apos;s build your platform. The same stack behind {productName} — Framework, AI-OS,
              Engine, Golden Screens and Business OS — is ready for your next product.
            </p>
            <div className="case-cta__actions">
              <MotionButton
                href="mailto:contato@buildertudo.com?subject=Book%20a%20Discovery%20Call"
                className="btn--lg"
              >
                Book discovery call
              </MotionButton>
              <MotionButton href="/framework" variant="secondary" className="btn--lg">Explore Framework</MotionButton>
              <MotionButton href="/business-os" variant="ghost" className="btn--lg">Explore Business OS</MotionButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
