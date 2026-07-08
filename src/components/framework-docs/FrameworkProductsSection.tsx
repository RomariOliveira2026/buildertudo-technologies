import { Link } from 'react-router-dom'
import { products } from '../../constants/products'
import { ProductScreenshot } from '../ui/ProductScreenshot'
import { getProductStatusLabel } from '../../types/product'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import { PRODUCT_CATALOG } from '../../content/products'

export function FrameworkProductsSection() {
  const catalogBySlug = new Map(PRODUCT_CATALOG.map((p) => [p.slug, p]))

  return (
    <Section id="products" ariaLabelledBy="framework-products-title">
      <Reveal>
        <SectionHeader
          id="framework-products-title"
          eyebrow="Products"
          title="Built on this Framework"
          description="12 official SaaS products — each inheriting Framework, Engine, Runtime, Persistence, AI-OS and Golden Screens by default."
          align="left"
        />
      </Reveal>

      <StaggerReveal className="framework-products-grid">
        {products.map((product) => {
          const catalog = catalogBySlug.get(product.slug)
          return (
            <StaggerItem key={product.slug}>
              <article className="framework-product-card">
                <div className="framework-product-card__head">
                  <span aria-hidden="true">{product.logo}</span>
                  <div>
                    <h3>{product.name}</h3>
                    <span className="framework-product-card__category">{product.category}</span>
                  </div>
                  <span className={`product-card__status product-card__status--${product.status}`}>
                    {getProductStatusLabel(product.status)}
                  </span>
                </div>
                <ProductScreenshot product={product} compact />
                <p>{catalog?.tagline ?? product.description}</p>
                <div className="framework-product-card__meta">
                  <span>{product.healthScore}% health</span>
                  {catalog ? <span>v{catalog.version}</span> : null}
                </div>
                <div className="framework-product-card__links">
                  <Link to={`/products/${product.slug}`}>Product →</Link>
                  <Link to={`/cases/${product.slug}`}>Case study →</Link>
                </div>
              </article>
            </StaggerItem>
          )
        })}
      </StaggerReveal>
    </Section>
  )
}
