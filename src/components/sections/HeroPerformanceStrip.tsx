import { motion } from 'framer-motion'
import { HERO_PERFORMANCE_INDICATORS } from '../../constants/hero'
import { fadeUp, motionTransition } from '../../motion/variants'

export function HeroPerformanceStrip() {
  return (
    <motion.div
      className="hero-perf-strip"
      variants={fadeUp}
      transition={motionTransition.soft}
      aria-label="Platform performance indicators"
    >
      {HERO_PERFORMANCE_INDICATORS.map((item) => (
        <span key={item.id} className="hero-perf-strip__item">
          <span className="hero-perf-strip__check" aria-hidden="true">✓</span>
          {item.label}
        </span>
      ))}
    </motion.div>
  )
}
