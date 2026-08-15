import { motion } from 'framer-motion'
import { BOS_PRODUCTS } from '../../content/business-os-showcase'
import { motionTransition } from '../../motion/variants'
import { useLocale } from '../../i18n'
import { businessOSCopy } from '../../i18n/business-os'

const cardHover = { y: -2, scale: 1.01 }

export function ProductsView() {
  const { locale } = useLocale()
  const copy = businessOSCopy[locale].products

  return (
    <div className="bos-view bos-view--products">
      <header className="bos-view__header">
        <div>
          <h1 className="bos-view__title">{copy.title}</h1>
          <p className="bos-view__desc">{copy.description}</p>
        </div>
        <span className="bos-view__badge">{BOS_PRODUCTS.length} {copy.count}</span>
      </header>

      <div className="bos-products-grid">
        {BOS_PRODUCTS.map((product, index) => (
          <motion.article
            key={product.id}
            className="bos-product-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...motionTransition.soft, delay: index * 0.06 }}
            whileHover={cardHover}
          >
            <div className="bos-product-card__top">
              <span className="bos-product-card__logo" aria-hidden="true">{product.logo}</span>
              <span className={`bos-product-card__status bos-product-card__status--${product.status}`}>
                {copy.statuses[product.status]}
              </span>
            </div>
            <h3>{product.name}</h3>
            <span className="bos-product-card__version">v{product.version}</span>

            <dl className="bos-product-card__stats">
              <div>
                <dt>{copy.users}</dt>
                <dd>{product.activeUsers.toLocaleString(locale)}</dd>
              </div>
              {product.uptime ? (
                <div>
                  <dt>{copy.uptime}</dt>
                  <dd>{product.uptime}</dd>
                </div>
              ) : (
                <div>
                  <dt>{copy.health}</dt>
                  <dd>
                    <span className="bos-product-card__health">
                      <span
                        className="bos-product-card__health-bar"
                        style={{ width: `${product.health}%` }}
                        aria-hidden="true"
                      />
                      {product.health}%
                    </span>
                  </dd>
                </div>
              )}
              <div>
                <dt>{copy.status}</dt>
                <dd className="bos-product-card__status-text">{copy.statuses[product.status]}</dd>
              </div>
            </dl>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
