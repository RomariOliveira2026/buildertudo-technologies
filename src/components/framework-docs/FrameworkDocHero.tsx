import { Reveal } from '../ui/Reveal'
import { MotionButton } from '../ui/Buttons'

export function FrameworkDocHero() {
  return (
    <header className="framework-doc-hero">
      <div className="container container--wide">
        <Reveal>
          <div className="framework-doc-hero__inner">
            <div className="framework-doc-hero__text">
              <span className="badge badge--gold">Official Documentation</span>
              <h1>BuilderTudo Framework</h1>
              <p className="framework-doc-hero__lead">
                Proprietary engineering platform that powers every official BuilderTudo product.
                Design system, runtime, AI-OS, Engine and persistence — one stack, production-proven
                across 12 live SaaS platforms.
              </p>
              <div className="framework-doc-hero__actions">
                <MotionButton href="#architecture" className="btn--lg">Architecture overview</MotionButton>
                <MotionButton href="/live" variant="secondary" className="btn--lg">Live metrics</MotionButton>
                <MotionButton href="/cases" variant="ghost" className="btn--lg">Case studies</MotionButton>
              </div>
            </div>
            <div className="framework-doc-hero__diagram" aria-hidden="true">
              <div className="framework-doc-hero__stack">
                {['Framework', 'Engine', 'Runtime', 'Persistence', 'AI-OS', 'Business OS', 'Products'].map((layer, i, arr) => (
                  <div key={layer} className="framework-doc-hero__layer">
                    <span>{layer}</span>
                    {i < arr.length - 1 ? <span className="framework-doc-hero__arrow">↓</span> : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  )
}
