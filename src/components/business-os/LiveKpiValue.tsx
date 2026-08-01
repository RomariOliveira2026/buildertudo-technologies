import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type LiveKpiValueProps = {
  values: (number | string)[]
  format?: 'revenue' | 'number' | 'percent' | 'text'
  intervalMs?: number
}

function formatValue(value: number | string, format: LiveKpiValueProps['format']) {
  if (typeof value === 'string') return value
  if (format === 'revenue') {
    return value >= 1000 ? `$${(value / 1000).toFixed(0)}K` : `$${value.toLocaleString()}`
  }
  if (format === 'percent') return `${value}%`
  return value.toLocaleString()
}

export function LiveKpiValue({ values, format = 'number', intervalMs = 3200 }: LiveKpiValueProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (values.length <= 1) return
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % values.length)
    }, intervalMs)
    return () => window.clearInterval(timer)
  }, [values.length, intervalMs])

  const display = formatValue(values[index], format)

  return (
    <span className="bos-live-kpi" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={`${index}-${display}`}
          className="bos-live-kpi__value"
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -3 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {display}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
