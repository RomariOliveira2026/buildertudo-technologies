import { Link } from 'react-router-dom'
import { PageMeta } from '../components/seo/PageMeta'
import { PageLayout, SubPageHero } from '../components/layouts/PageLayout'
import { CASE_STUDY_CATALOG } from '../content/case-studies'
import { Reveal, StaggerItem, StaggerReveal } from '../components/ui/Reveal'
import { MotionButton } from '../components/ui/Buttons'
import { getProductStatusLabel } from '../types/product'
import { getCaseStudyLibraryStructuredData } from '../lib/seo'

export function CaseStudiesPage() {
  return (
    <PageLayout className="subpage case-studies-index">
      <PageMeta
        title="Engineering Case Studies — Applied Software Engineering"
        description="In-depth engineering case studies from BuilderTudo products — problem, architecture, results, learnings and evolution across 12 live platforms."
        path="/cases"
        structuredData={getCaseStudyLibraryStructuredData()}
      />
      <SubPageHero
        eyebrow="Engineering Library"
        title="Applied software engineering, documented"
        description="Each case study tells the full story — from the problem we faced to the architecture we chose, the results we delivered and what we learned shipping on the BuilderTudo Platform."
      />

      <section className="subpage-section">
        <div className="container">
          <StaggerReveal className="case-library-grid">
            {CASE_STUDY_CATALOG.map((study) => (
              <StaggerItem key={study.slug}>
                <Link className="case-library-card" to={`/cases/${study.slug}`}>
                  <div className="case-library-card__head">
                    <span className="case-library-card__logo" aria-hidden="true">{study.logo}</span>
                    <div>
                      <span className="case-library-card__industry">{study.industry}</span>
                      <h2>{study.name}</h2>
                    </div>
                  </div>
                  <p className="case-library-card__headline">{study.headline}</p>
                  <p className="case-library-card__summary">{study.summary}</p>
                  <div className="case-library-card__meta">
                    <span className={`product-card__status product-card__status--${study.status}`}>
                      {getProductStatusLabel(study.status)}
                    </span>
                    <span>{study.healthScore}% health</span>
                  </div>
                  <span className="case-library-card__link">Read case study →</span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerReveal>

          <Reveal>
            <div className="section-cta-row">
              <MotionButton href="/#products">View product catalog</MotionButton>
              <MotionButton href="/#contact" variant="secondary">Start a project</MotionButton>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  )
}
