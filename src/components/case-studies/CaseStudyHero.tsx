import { Link } from 'react-router-dom'
import { Reveal } from '../ui/Reveal'
import { MotionButton } from '../ui/Buttons'
import type { CaseStudyContent } from '../../types/case-study'
import { getProductStatusLabel } from '../../types/product'

type CaseStudyHeroProps = {
  study: CaseStudyContent
}

export function CaseStudyHero({ study }: CaseStudyHeroProps) {
  return (
    <header className="case-hero">
      <div className="container">
        <Reveal>
          <div className="case-hero__inner">
            <span className="badge badge--gold">Engineering Case Study</span>

            <div className="case-hero__product-row">
              <span className="case-hero__logo" aria-hidden="true">{study.logo}</span>
              <div>
                <h1>{study.name}</h1>
                <p className="case-hero__category">{study.category}</p>
              </div>
            </div>

            <div className="case-hero__meta">
              <span className={`product-card__status product-card__status--${study.status}`}>
                {getProductStatusLabel(study.status)}
              </span>
              <span className="case-hero__health">{study.healthScore}% health</span>
              <span className="case-hero__version">v{study.version}</span>
              <span className="case-hero__industry">{study.industry}</span>
            </div>

            <p className="case-hero__headline">{study.headline}</p>
            <p className="case-hero__summary">{study.summary}</p>

            <div className="case-hero__actions">
              <MotionButton href="/live" variant="secondary" className="btn--lg">View live</MotionButton>
              <MotionButton href="/#contact" className="btn--lg">Start a project</MotionButton>
            </div>

            <Link className="case-hero__product-link" to={`/products/${study.productSlug}`}>
              View product page →
            </Link>
          </div>
        </Reveal>
      </div>
    </header>
  )
}
