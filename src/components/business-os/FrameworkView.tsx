import { motion, useReducedMotion } from 'framer-motion'
import {
  BOS_FRAMEWORK_BADGES,
  BOS_FRAMEWORK_HEALTH_SCORE,
  BOS_FRAMEWORK_STATS,
} from '../../content/business-os-showcase'
import { motionTransition } from '../../motion/variants'
import { FrameworkHealthRing } from './FrameworkHealthRing'
import { InfrastructurePanel } from './InfrastructurePanel'

export function FrameworkView() {
  const prefersReducedMotion = useReducedMotion()
  const cardHover = { y: prefersReducedMotion ? 0 : -2 }

  return (
    <div className="bos-view bos-view--framework">
      <header className="bos-view__header">
        <div>
          <h1 className="bos-view__title">Framework</h1>
          <p className="bos-view__desc">Engineering foundation powering every BuilderTudo product.</p>
        </div>
      </header>

      <div className="bos-framework-hero">
        <motion.div
          className="bos-framework-score"
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={motionTransition.soft}
        >
          <span className="bos-framework-score__label">Health Score</span>
          <strong className="bos-framework-score__value">{BOS_FRAMEWORK_HEALTH_SCORE}%</strong>
          <FrameworkHealthRing score={BOS_FRAMEWORK_HEALTH_SCORE} />
        </motion.div>

        <div className="bos-framework-badges">
          {BOS_FRAMEWORK_BADGES.map((badge, index) => (
            <motion.span
              key={badge}
              className="bos-framework-badge"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...motionTransition.soft, delay: index * 0.08 }}
            >
              <span aria-hidden="true">✓</span>
              {badge}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="bos-framework-stats">
        {BOS_FRAMEWORK_STATS.map((stat, index) => (
          <motion.article
            key={stat.id}
            className="bos-framework-stat"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...motionTransition.soft, delay: index * 0.06 }}
            whileHover={cardHover}
          >
            <span className="bos-framework-stat__icon" aria-hidden="true">{stat.icon}</span>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </motion.article>
        ))}
      </div>

      <InfrastructurePanel frameworkOverview />

      <div className="bos-framework-modules">
        <h2>Engine Modules</h2>
        <div className="bos-framework-modules__grid">
          {['Workflow Engine', 'Webhook Hub', 'Event Processor', 'Scheduler', 'Connector Registry', 'Dead Letter Queue', 'AI Router', 'Deploy Pipeline', 'Health Monitor', 'Tenant Isolation', 'Auth Gateway', 'Observability'].map((mod, index) => (
            <motion.div
              key={mod}
              className="bos-framework-module"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.04 }}
              whileHover={cardHover}
            >
              <span className="bos-framework-module__dot" aria-hidden="true" />
              {mod}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
