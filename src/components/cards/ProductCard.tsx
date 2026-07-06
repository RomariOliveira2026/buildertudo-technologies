import type { MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { Product, ProductCardVariant } from '../../types/product'
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
  const path = product.href ?? getProductPath(product.routeKey)
  const isInteractive = Boolean(path)
  const label = ctaLabel ?? 'Learn more'

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
      <div className="product-card__icon" aria-hidden="true">{getInitials(product.name)}</div>
      <span className="product-card__category">{product.category}</span>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span className={`product-card__status product-card__status--${product.status === 'Ativo' ? 'active' : 'evolving'}`}>
        {product.status === 'Ativo' ? 'Live' : 'In progress'}
      </span>
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
      <motion.a
        {...motionProps}
        href={path}
        aria-label={`${label} — ${product.name}`}
        onClick={(event) => {
          if (path?.startsWith('#')) return
          event.preventDefault()
        }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.article {...motionProps} aria-label={product.name}>
      {content}
    </motion.article>
  )
}
