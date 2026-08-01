import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BOS_ACTIVITY_ICONS, BOS_LIVE_ACTIVITIES } from '../../content/business-os-showcase'
import { motionTransition } from '../../motion/variants'

export function LiveActivityPanel() {
  const [visibleCount, setVisibleCount] = useState(4)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVisibleCount((c) => (c >= BOS_LIVE_ACTIVITIES.length ? 4 : c + 1))
    }, 4000)
    return () => window.clearInterval(timer)
  }, [])

  const items = BOS_LIVE_ACTIVITIES.slice(0, visibleCount)

  return (
    <section className="bos-panel bos-live" aria-labelledby="bos-live-title">
      <header className="bos-panel__header">
        <div>
          <h2 id="bos-live-title" className="bos-panel__title">Live Activity</h2>
          <p className="bos-panel__subtitle">Real-time platform events</p>
        </div>
        <span className="bos-live__pulse">
          <span className="bos-live__dot" aria-hidden="true" />
          Live
        </span>
      </header>

      <ul className="bos-live__list">
        <AnimatePresence initial={false}>
          {items.map((item, index) => (
            <motion.li
              key={item.id}
              className="bos-live__item"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ ...motionTransition.soft, delay: index * 0.03 }}
            >
              <span className="bos-live__icon" aria-hidden="true">
                {BOS_ACTIVITY_ICONS[item.type]}
              </span>
              <div className="bos-live__body">
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </div>
              <time className="bos-live__time">{item.time}</time>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  )
}
