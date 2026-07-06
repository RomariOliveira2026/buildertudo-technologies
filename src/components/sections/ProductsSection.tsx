import { products } from '../../constants/products'
import { ProductCard } from '../cards/ProductCard'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

const displayProducts = products.filter((p) => p.name !== 'BuilderTudo Studio')

export function ProductsSection() {
  return (
    <Section id="products" ariaLabelledBy="products-title">
      <Reveal>
        <SectionHeader
          id="products-title"
          eyebrow="Products"
          title="Proprietary products, real market traction"
          description="SaaS platforms built on the BuilderTudo stack — live, evolving and designed for vertical markets with high growth potential."
        />
      </Reveal>

      <StaggerReveal className="products-grid">
        {displayProducts.map((product) => (
          <StaggerItem key={product.name}>
            <ProductCard product={product} variant="ecosystem" />
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
