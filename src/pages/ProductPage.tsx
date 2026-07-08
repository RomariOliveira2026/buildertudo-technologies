import { useParams, Link } from 'react-router-dom'
import { PageMeta } from '../components/seo/PageMeta'
import { PageLayout } from '../components/layouts/PageLayout'
import { getProductContent } from '../content/products'
import { getCaseStudyPath } from '../content/case-studies'
import { ProductHero } from '../components/products/ProductHero'
import { ProblemSection } from '../components/products/ProblemSection'
import { SolutionSection } from '../components/products/SolutionSection'
import { ArchitectureSection } from '../components/products/ArchitectureSection'
import { ScreenshotsSection } from '../components/products/ScreenshotsSection'
import { TechnologySection } from '../components/products/TechnologySection'
import { RoadmapSection } from '../components/products/RoadmapSection'
import { BenefitsSection } from '../components/products/BenefitsSection'
import { CTASection } from '../components/products/CTASection'
import { getProductStructuredData } from '../lib/seo'
import { MotionButton } from '../components/ui/Buttons'
import { ProductPageLayout } from '../components/products/ProductPageLayout'

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductContent(slug) : undefined

  if (!product) {
    return (
      <PageLayout className="subpage">
        <PageMeta title="Product not found" description="This product is not in the BuilderTudo catalog." noIndex />
        <div className="container subpage-section">
          <h1>Product not found</h1>
          <p>This product is not in the BuilderTudo official catalog.</p>
          <div className="section-cta-row">
            <MotionButton href="/#products">View all products</MotionButton>
            <Link className="ghost-btn link-btn" to="/">← Back to home</Link>
          </div>
        </div>
      </PageLayout>
    )
  }

  const path = `/products/${product.slug}`
  const structuredData = getProductStructuredData(product, path)

  return (
    <ProductPageLayout product={product}>
      <PageMeta
        title={`${product.name} — ${product.tagline}`}
        description={product.description}
        path={path}
        type="website"
        structuredData={structuredData}
      />

      <ProductHero product={product} />

      <div className="container product-case-link">
        <Link className="product-case-link__banner" to={getCaseStudyPath(product.slug)}>
          <span className="badge badge--outline">Engineering case study</span>
          <span>Full technical story — problem, architecture, results, learnings and evolution →</span>
        </Link>
      </div>

      <ProblemSection problem={product.problem} />
      <SolutionSection solution={product.solution} features={product.features} />
      <ArchitectureSection summary={product.architectureSummary} layers={product.architectureLayers} />
      <ScreenshotsSection productName={product.name} slug={product.slug} screenshots={product.screenshots} />
      <TechnologySection stack={product.stack} aiFeatures={product.aiFeatures} />
      <RoadmapSection roadmap={product.roadmap} />
      <BenefitsSection benefits={product.benefits} />
      <CTASection productName={product.name} />
    </ProductPageLayout>
  )
}
