import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, motionTransition } from '../../motion/variants'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'article' | 'li'
}

export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const Component = motion[as]

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      transition={{ ...motionTransition.soft, delay }}
    >
      {children}
    </Component>
  )
}

export function StaggerReveal({
  children,
  className,
  role,
  'aria-label': ariaLabel,
}: {
  children: ReactNode
  className?: string
  role?: string
  'aria-label'?: string
}) {
  return (
    <motion.div
      className={className}
      role={role}
      aria-label={ariaLabel}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUp} transition={motionTransition.soft}>
      {children}
    </motion.div>
  )
}
