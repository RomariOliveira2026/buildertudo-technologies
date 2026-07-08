import { Reveal } from '../ui/Reveal'
import { MotionButton } from '../ui/Buttons'

type CTASectionProps = {
  productName: string
}

export function CTASection({ productName }: CTASectionProps) {
  return (
    <section className="product-cta" id="product-contact" aria-labelledby="product-cta-title">
      <div className="container">
        <Reveal>
          <div className="product-cta__inner">
            <span className="badge badge--gold">Work with BuilderTudo</span>
            <h2 id="product-cta-title">Build your next platform with {productName}'s engineering stack</h2>
            <p>
              Every BuilderTudo product inherits Framework, AI-OS, Engine and Golden Screens.
              Start a project and ship at product grade.
            </p>
            <div className="product-cta__actions">
              <MotionButton href="/#contact" className="btn--lg">Start a project</MotionButton>
              <MotionButton
                href={`mailto:contato@buildertudo.com?subject=Book%20a%20Discovery%20Call%20-%20${encodeURIComponent(productName)}`}
                variant="secondary"
                className="btn--lg"
              >
                Book a discovery call
              </MotionButton>
              <MotionButton href="/framework" variant="ghost" className="btn--lg">Explore Framework</MotionButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
