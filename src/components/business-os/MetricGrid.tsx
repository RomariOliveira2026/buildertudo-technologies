import { motion } from 'framer-motion'
import type { BosMetric } from '../../content/business-os-showcase'
import { motionTransition } from '../../motion/variants'
import { LiveKpiValue } from './LiveKpiValue'

const cardHover = { y: -1, scale: 1.005 }

type MetricCardProps = {
  metric: BosMetric
  index: number
}

export function MetricCard({ metric, index }: MetricCardProps) {
  const trendClass = metric.trend === 'up' ? 'bos-metric__change--up' : metric.trend === 'down' ? 'bos-metric__change--down' : ''

  return (
    <motion.article
      className="bos-metric"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...motionTransition.soft, delay: index * 0.05 }}
      whileHover={cardHover}
    >
      <div className="bos-metric__head">
        <span className="bos-metric__icon" aria-hidden="true">{metric.icon}</span>
        {metric.change ? (
          <span className={`bos-metric__change ${trendClass}`}>{metric.change}</span>
        ) : null}
      </div>
      <strong className="bos-metric__value">
        {metric.liveValues && metric.liveValues.length > 1 ? (
          <LiveKpiValue values={metric.liveValues} format={metric.format} />
        ) : (
          metric.value
        )}
      </strong>
      <span className="bos-metric__label">{metric.label}</span>
    </motion.article>
  )
}

type MetricGridProps = {
  metrics: BosMetric[]
}

export function MetricGrid({ metrics }: MetricGridProps) {
  return (
    <div className="bos-metrics-grid" role="list">
      {metrics.map((metric, index) => (
        <MetricCard key={metric.id} metric={metric} index={index} />
      ))}
    </div>
  )
}
