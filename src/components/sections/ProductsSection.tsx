import { products } from '../../constants/products'
import { ProductCard } from '../cards/ProductCard'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import { MotionButton } from '../ui/Buttons'

export function ProductsSection() {
  return (
    <Section id="products" ariaLabelledBy="products-title">
      <Reveal>
        <SectionHeader
          id="products-title"
          eyebrow="Products"
          title="12 SaaS products. One engineering platform."
          description="Every product is built on BuilderTudo Framework — with health scores, roadmaps and production-grade architecture from day one."
        />
      </Reveal>

      <StaggerReveal className="products-grid">
        {products.map((product) => (
          <StaggerItem key={product.slug}>
            <ProductCard product={product} />
          </StaggerItem>
        ))}
      </StaggerReveal>

      <Reveal>
        <div className="section-cta-row">
          <MotionButton href="#contact">Start a project</MotionButton>
          <MotionButton href="#cases" variant="secondary">View case studies</MotionButton>
        </div>
      </Reveal>
    </Section>
  )
}
