import { motion, type HTMLMotionProps } from 'framer-motion'
import { motionTransition } from '../../motion/variants'

type ButtonProps = HTMLMotionProps<'a'> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

type SubmitButtonProps = HTMLMotionProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

function getButtonClass(variant: ButtonProps['variant']) {
  if (variant === 'secondary') return 'secondary-btn link-btn'
  if (variant === 'ghost') return 'ghost-btn link-btn'
  return 'primary-btn link-btn'
}

export function MotionButton({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <motion.a
      className={`${getButtonClass(variant)} ${className}`.trim()}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={motionTransition.soft}
      {...props}
    >
      {children}
    </motion.a>
  )
}

export function MotionSubmitButton({
  variant = 'primary',
  className = '',
  children,
  ...props
}: SubmitButtonProps) {
  const baseClass = variant === 'primary' ? 'primary-btn' : 'secondary-btn'

  return (
    <motion.button
      type="submit"
      className={`${baseClass} ${className}`.trim()}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={motionTransition.soft}
      {...props}
    >
      {children}
    </motion.button>
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
