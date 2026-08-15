import { motion } from 'framer-motion'
import type { BosChartSeries } from '../../content/business-os-showcase'
import { BOS_ANALYTICS_CHARTS } from '../../content/business-os-showcase'
import { motionTransition } from '../../motion/variants'
import { useLocale } from '../../i18n'
import { businessOSCopy } from '../../i18n/business-os'

function ChartCard({ chart, index }: { chart: BosChartSeries; index: number }) {
  const { locale } = useLocale()
  const copy = businessOSCopy[locale].analytics
  const label = copy.labels[chart.id as keyof typeof copy.labels] ?? chart.label
  const max = Math.max(...chart.values)
  const latest = chart.values[chart.values.length - 1]
  const previous = chart.values[chart.values.length - 2] ?? latest
  const delta = previous ? (((latest - previous) / previous) * 100).toFixed(1) : '0'

  return (
    <motion.article
      className="bos-chart-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...motionTransition.soft, delay: index * 0.07 }}
      whileHover={{ y: -2, scale: 1.01 }}
    >
      <header className="bos-chart-card__head">
        <h3>{label}</h3>
        <span className="bos-chart-card__delta">+{delta}%</span>
      </header>

      <div className="bos-chart-card__value" style={{ color: chart.color }}>
        {chart.id === 'revenue' ? `$${latest}K` : chart.id === 'users' ? latest.toLocaleString() : `${latest}${chart.id === 'health' || chart.id === 'performance' ? '%' : ''}`}
      </div>

      <div className="bos-chart-card__bars" role="img" aria-label={`${label} ${copy.chartAria}`}>
        {chart.values.map((value, i) => (
          <div
            key={`${chart.id}-${i}`}
            className="bos-chart-card__bar"
            style={{
              height: `${(value / max) * 100}%`,
              background: `linear-gradient(180deg, ${chart.color}, color-mix(in srgb, ${chart.color} 40%, transparent))`,
              animationDelay: `${i * 40}ms`,
            }}
          />
        ))}
      </div>

      <div className="bos-chart-card__months" aria-hidden="true">
        {copy.months.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </motion.article>
  )
}

export function AnalyticsView() {
  const { locale } = useLocale()
  const copy = businessOSCopy[locale].analytics

  return (
    <div className="bos-view bos-view--analytics">
      <header className="bos-view__header">
        <div>
          <h1 className="bos-view__title">{copy.title}</h1>
          <p className="bos-view__desc">{copy.description}</p>
        </div>
      </header>

      <div className="bos-charts-grid">
        {BOS_ANALYTICS_CHARTS.map((chart, index) => (
          <ChartCard key={chart.id} chart={chart} index={index} />
        ))}
      </div>
    </div>
  )
}
