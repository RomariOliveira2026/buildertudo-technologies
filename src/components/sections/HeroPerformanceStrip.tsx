import { motion } from 'framer-motion'
import { getHeroPerformance } from '../../i18n/content'
import { useTranslation } from '../../i18n'
import { fadeUp, motionTransition } from '../../motion/variants'

export function HeroPerformanceStrip() {
  const { t } = useTranslation()
  const items = getHeroPerformance(t)

  return (
    <motion.div
      className="hero-perf-strip"
      variants={fadeUp}
      transition={motionTransition.soft}
      aria-label={t('common.platformMetricsAria')}
    >
      {items.map((item) => (
        <span key={item.id} className="hero-perf-strip__item">
          <span className="hero-perf-strip__check" aria-hidden="true">✓</span>
          {item.label}
        </span>
      ))}
    </motion.div>
  )
}
