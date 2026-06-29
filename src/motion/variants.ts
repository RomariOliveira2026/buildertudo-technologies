export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

export const cardStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
}

export const subtleHover = {
  rest: { y: 0, scale: 1 },
  hover: { y: -4, scale: 1.01 },
}

export const motionTransition = {
  soft: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  spring: { type: 'spring' as const, stiffness: 260, damping: 24 },
}
