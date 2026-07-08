import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products } from '../../constants/products'
import { ProductScreenshot } from '../ui/ProductScreenshot'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import { MotionButton } from '../ui/Buttons'
import { getProductStatusLabel } from '../../types/product'
import { motionTransition } from '../../motion/variants'

export function BuiltWithSection() {
  return (
    <Section id="products" ariaLabelledBy="products-title">
      <Reveal>
        <SectionHeader
          id="products-title"
          eyebrow="Built with BuilderTudo"
          title="A real product portfolio, one engineering platform."
          description="Every product inherits Framework, Golden Screens, AI-OS and Engine — shipped with health scores, roadmaps and production architecture."
        />
      </Reveal>

      <StaggerReveal className="products-grid">
        {products.map((product) => (
          <StaggerItem key={product.slug}>
            <motion.article
              className="product-card built-product-card"
              whileHover={{ y: -4 }}
              transition={motionTransition.soft}
            >
              <div className="product-card__top">
                <div className="product-card__icon" aria-hidden="true">{product.logo}</div>
                <div className="product-card__meta">
                  <span className={`product-card__status product-card__status--${product.status}`}>
                    {getProductStatusLabel(product.status)}
                  </span>
                  <span className="product-card__health" title="Health score">{product.healthScore}%</span>
                </div>
              </div>

              <span className="product-card__category">{product.category}</span>
              <h3>{product.name}</h3>

              <ProductScreenshot product={product} compact />

              <p>{product.description}</p>

              <ul className="product-card__tech" aria-label={`${product.name} technologies`}>
                {product.technologies.slice(0, 4).map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              {product.roadmap[0] ? (
                <div className="product-card__roadmap">
                  <span className="product-card__roadmap-label">Next</span>
                  <span>{product.roadmap[0]}</span>
                </div>
              ) : null}

              <div className="built-product-card__links">
                <Link className="product-card__link" to={`/products/${product.slug}`}>
                  View product →
                </Link>
                <Link className="product-card__link product-card__link--secondary" to={`/cases/${product.slug}`}>
                  Case study →
                </Link>
              </div>
            </motion.article>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <Reveal>
        <div className="section-cta-row">
          <MotionButton href="/#contact">Start a project</MotionButton>
          <MotionButton href="/live" variant="secondary">View live status</MotionButton>
        </div>
      </Reveal>
    </Section>
  )
}
