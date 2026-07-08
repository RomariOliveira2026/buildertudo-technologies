import { useParams, Link } from 'react-router-dom'
import { PageMeta } from '../components/seo/PageMeta'
import { PageLayout } from '../components/layouts/PageLayout'
import { getCaseStudy } from '../content/case-studies'
import {
  CaseStudyPageLayout,
  CaseStudyHero,
  CaseProblemSection,
  CaseSolutionSection,
  CaseArchitectureStackSection,
  CaseTechnologyGridSection,
  CaseScreenshotsSection,
  CaseResultsSection,
  CaseRoadmapSection,
  CaseLearningsSection,
  CaseReusableEngineeringSection,
  CaseStudyCTA,
} from '../components/case-studies'
import { getCaseStudyStructuredData } from '../lib/seo'
import { MotionButton } from '../components/ui/Buttons'

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const study = slug ? getCaseStudy(slug) : undefined

  if (!study) {
    return (
      <PageLayout className="subpage">
        <PageMeta title="Case study not found" description="This engineering case study does not exist." noIndex />
        <div className="container subpage-section">
          <h1>Case study not found</h1>
          <p>This case study is not in the BuilderTudo engineering library.</p>
          <div className="section-cta-row">
            <MotionButton href="/cases">Browse case studies</MotionButton>
            <Link className="ghost-btn link-btn" to="/#products">View products</Link>
          </div>
        </div>
      </PageLayout>
    )
  }

  const path = `/cases/${study.slug}`
  const structuredData = getCaseStudyStructuredData(study, path)

  return (
    <CaseStudyPageLayout study={study}>
      <PageMeta
        title={`${study.name} — Engineering Case Study`}
        description={study.summary}
        path={path}
        type="article"
        structuredData={structuredData}
      />

      <CaseStudyHero study={study} />
      <CaseProblemSection problem={study.problem} />
      <CaseSolutionSection solution={study.solution} />
      <CaseArchitectureStackSection architecture={study.architecture} />
      <CaseTechnologyGridSection technologies={study.technologies} aiCapabilities={study.aiCapabilities} />
      <CaseScreenshotsSection productName={study.name} slug={study.productSlug} screenshots={study.screenshots} />
      <CaseResultsSection results={study.results} status={study.status} />
      <CaseRoadmapSection roadmap={study.roadmap} />
      <CaseLearningsSection productName={study.name} learnings={study.learnings} tradeoffs={study.tradeoffs} />
      <CaseReusableEngineeringSection reusable={study.reusableEngineering} />
      <CaseStudyCTA productName={study.name} />
    </CaseStudyPageLayout>
  )
}
