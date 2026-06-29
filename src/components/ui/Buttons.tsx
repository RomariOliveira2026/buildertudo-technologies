import { motion, type HTMLMotionProps } from 'framer-motion'
import { subtleHover, motionTransition } from '../../motion/variants'

type ButtonProps = HTMLMotionProps<'a'> & {
  variant?: 'primary' | 'secondary'
}

export function MotionButton({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const baseClass = variant === 'primary' ? 'primary-btn link-btn' : 'secondary-btn link-btn'

  return (
    <motion.a
      className={`${baseClass} ${className}`.trim()}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={motionTransition.soft}
      {...props}
    >
      {children}
    </motion.a>
  )
}

export function MotionIconButton({ className = '', children, ...props }: HTMLMotionProps<'button'>) {
  return (
    <motion.button
      className={`icon-btn ${className}`.trim()}
      whileHover={{ y: -2, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={motionTransition.soft}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export { subtleHover }
