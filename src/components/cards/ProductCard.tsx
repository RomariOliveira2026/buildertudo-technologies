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

export function ProductCard({ product, variant = 'ecosystem', ctaLabel }: ProductCardProps) {
  const path = getProductPath(product.routeKey)
  const isInteractive = Boolean(path)
  const label = ctaLabel ?? (variant === 'featured' ? 'Conhecer Projeto' : 'Saiba mais')

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6])
  const springX = useSpring(rotateX, { stiffness: 260, damping: 22 })
  const springY = useSpring(rotateY, { stiffness: 260, damping: 22 })

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left) / rect.width - 0.5)
    y.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const resetTilt = () => {
    x.set(0)
    y.set(0)
  }

  const cardClass = [
    'product-card',
    'glass-card',
    variant === 'ecosystem' ? 'card card--compact ecosystem-card' : 'project-card',
  ].join(' ')

  const content = (
    <>
      <div className="product-card__glow" aria-hidden="true" />
      <div className="product-logo" aria-hidden="true">{product.logo}</div>
      <span className="product-category">{product.category}</span>
      <h3>{product.name}</h3>
      <p>{product.description}</p>

      {variant === 'featured' && (
        <ul className="project-tech" aria-label={`Tecnologias de ${product.name}`}>
          {product.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      )}

      <span className="product-status">{product.status}</span>

      {isInteractive ? (
        <span className="primary-btn link-btn product-card__cta">{label}</span>
      ) : (
        <span className="secondary-btn link-btn product-card__cta product-card__cta--muted">{label}</span>
      )}
    </>
  )

  const motionProps = {
    className: cardClass,
    style: { rotateX: springX, rotateY: springY, transformPerspective: 900 },
    onMouseMove: handleMove,
    onMouseLeave: resetTilt,
    whileHover: { y: -8, scale: 1.01 },
    whileTap: { scale: 0.99 },
    transition: motionTransition.soft,
  }

  if (isInteractive && path) {
    return (
      <motion.a
        {...motionProps}
        href={path}
        data-route={path}
        aria-label={`${label} — ${product.name}`}
        onClick={(event) => event.preventDefault()}
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
