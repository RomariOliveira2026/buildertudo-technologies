import { Reveal } from '../ui/Reveal'
import { MotionButton } from '../ui/Buttons'
import type { ProductPageContent } from '../../types/product-content'
import { getProductStatusLabel } from '../../types/product'

type ProductHeroProps = {
  product: ProductPageContent
}

export function ProductHero({ product }: ProductHeroProps) {
  return (
    <header className="product-hero">
      <div className="container">
        <Reveal>
          <div className="product-hero__inner">
            <div className="product-hero__content">
              <div className="product-hero__meta">
                <span className="product-hero__logo" aria-hidden="true">{product.logo}</span>
                <span className="product-hero__category">{product.category}</span>
                <span className={`product-card__status product-card__status--${product.status}`}>
                  {getProductStatusLabel(product.status)}
                </span>
                <span className="product-hero__health">{product.healthScore}% health</span>
                <span className="product-hero__version">v{product.version}</span>
              </div>
              <h1>{product.name}</h1>
              <p className="product-hero__tagline">{product.tagline}</p>
              <p className="product-hero__description">{product.description}</p>
              <div className="product-hero__actions">
                <MotionButton href={product.cta.primary.href} className="btn--lg">
                  {product.cta.primary.label}
                </MotionButton>
                {product.cta.secondary ? (
                  <MotionButton href={product.cta.secondary.href} variant="secondary" className="btn--lg">
                    {product.cta.secondary.label}
                  </MotionButton>
                ) : null}
                <MotionButton
                  href={`mailto:contato@buildertudo.com?subject=Book%20a%20Discovery%20Call%20-%20${encodeURIComponent(product.name)}`}
                  variant="ghost"
                  className="btn--lg"
                >
                  Book a discovery call
                </MotionButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  )
}
