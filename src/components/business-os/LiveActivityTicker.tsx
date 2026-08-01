import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BOS_ACTIVITY_TICKER, BOS_ACTIVITY_ICONS } from '../../content/business-os-showcase'

export function LiveActivityTicker() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % BOS_ACTIVITY_TICKER.length)
    }, 3500)
    return () => window.clearInterval(timer)
  }, [])

  const item = BOS_ACTIVITY_TICKER[index]

  return (
    <div className="bos-activity-ticker" aria-live="polite" aria-atomic="true">
      <span className="bos-activity-ticker__label">
        <span className="bos-live__dot" aria-hidden="true" />
        Live Activity
      </span>
      <AnimatePresence mode="wait">
        <motion.div
          key={item.id}
          className="bos-activity-ticker__event"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="bos-activity-ticker__icon" aria-hidden="true">
            {BOS_ACTIVITY_ICONS[item.type]}
          </span>
          <span>{item.title}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
