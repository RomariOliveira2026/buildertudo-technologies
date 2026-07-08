import type { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { Product, ProductCardVariant } from '../../types/product'
import { getProductStatusLabel } from '../../types/product'
import { getProductPath } from '../../utils/productPath'
import { motionTransition } from '../../motion/variants'

type ProductCardProps = {
  product: Product
  variant?: ProductCardVariant
  ctaLabel?: string
}

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function ProductCard({ product, ctaLabel }: ProductCardProps) {
  const path = product.href ?? getProductPath(product.routeKey, product.slug)
  const isInteractive = Boolean(path)
  const label = ctaLabel ?? 'View product'

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-0.5, 0.5], [3, -3])
  const rotateY = useTransform(x, [-0.5, 0.5], [-3, 3])
  const springX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left) / rect.width - 0.5)
    y.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const resetTilt = () => {
    x.set(0)
    y.set(0)
  }

  const content = (
    <>
      <div className="product-card__top">
        <div className="product-card__icon" aria-hidden="true">{product.logo || getInitials(product.name)}</div>
        <div className="product-card__meta">
          <span className={`product-card__status product-card__status--${product.status}`}>
            {getProductStatusLabel(product.status)}
          </span>
          <span className="product-card__health" title="Health score">{product.healthScore}%</span>
        </div>
      </div>
      <span className="product-card__category">{product.category}</span>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <ul className="product-card__tech" aria-label="Technologies">
        {product.technologies.slice(0, 4).map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {product.roadmap.length > 0 ? (
        <div className="product-card__roadmap">
          <span className="product-card__roadmap-label">Next</span>
          <span>{product.roadmap[0]}</span>
        </div>
      ) : null}
      {isInteractive ? (
        <span className="product-card__link">{label} →</span>
      ) : null}
    </>
  )

  const motionProps = {
    className: 'product-card',
    style: { rotateX: springX, rotateY: springY, transformPerspective: 1200 },
    onMouseMove: handleMove,
    onMouseLeave: resetTilt,
    whileHover: { y: -4 },
    transition: motionTransition.soft,
  }

  if (isInteractive && path) {
    return (
      <motion.div {...motionProps}>
        <Link className="product-card__link-wrap" to={path} aria-label={`${label} — ${product.name}`}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.article {...motionProps} aria-label={product.name}>
      {content}
    </motion.article>
  )
}
