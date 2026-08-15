import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products } from '../../constants/products'
import { ProductScreenshot } from '../ui/ProductScreenshot'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import { MotionButton } from '../ui/Buttons'
import { useTranslation } from '../../i18n'
import { motionTransition } from '../../motion/variants'

function statusLabel(status: 'live' | 'beta' | 'building', t: (key: string) => string) {
  if (status === 'live') return t('products.statusLive')
  if (status === 'beta') return t('products.statusBeta')
  return t('products.statusBuilding')
}

export function BuiltWithSection() {
  const { t } = useTranslation()

  return (
    <Section id="products" ariaLabelledBy="products-title">
      <Reveal>
        <SectionHeader
          id="products-title"
          eyebrow={t('products.eyebrow')}
          title={t('products.title')}
          description={t('products.description')}
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
                    {statusLabel(product.status, t)}
                  </span>
                  <span className="product-card__health" title={t('products.healthScoreTitle')}>{product.healthScore}%</span>
                </div>
              </div>

              <span className="product-card__category">{product.category}</span>
              <h3>{product.name}</h3>

              <ProductScreenshot product={product} compact />

              <p>{product.description}</p>

              <ul className="product-card__tech" aria-label={t('products.technologiesAria', { values: { name: product.name } })}>
                {product.technologies.slice(0, 4).map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              {product.roadmap[0] ? (
                <div className="product-card__roadmap">
                  <span className="product-card__roadmap-label">{t('products.next')}</span>
                  <span>{product.roadmap[0]}</span>
                </div>
              ) : null}

              <div className="built-product-card__links">
                <Link className="product-card__link" to={`/products/${product.slug}`}>
                  {t('products.viewProduct')}
                </Link>
                <Link className="product-card__link product-card__link--secondary" to={`/cases/${product.slug}`}>
                  {t('products.caseStudy')}
                </Link>
              </div>
            </motion.article>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <Reveal>
        <div className="section-cta-row">
          <MotionButton href="/#contact">{t('products.ctaStart')}</MotionButton>
          <MotionButton href="/live" variant="secondary">{t('products.ctaLive')}</MotionButton>
        </div>
      </Reveal>
    </Section>
  )
}
