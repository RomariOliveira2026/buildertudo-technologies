import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../layouts/PageLayout'
import type { CaseStudyContent } from '../../types/case-study'

type CaseStudyPageLayoutProps = {
  study: CaseStudyContent
  children: ReactNode
}

export function CaseStudyBreadcrumbs({ study }: { study: CaseStudyContent }) {
  return (
    <nav className="case-breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cases">Case Studies</Link></li>
        <li><Link to={`/products/${study.productSlug}`}>{study.name}</Link></li>
        <li aria-current="page">Engineering case study</li>
      </ol>
    </nav>
  )
}

export function CaseStudyPageLayout({ study, children }: CaseStudyPageLayoutProps) {
  return (
    <PageLayout className="case-study-page">
      <CaseStudyBreadcrumbs study={study} />
      {children}
    </PageLayout>
  )
}
