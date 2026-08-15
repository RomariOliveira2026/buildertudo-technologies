import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BOS_ACTIVITY_ICONS, BOS_LIVE_ACTIVITIES } from '../../content/business-os-showcase'
import { motionTransition } from '../../motion/variants'
import { useLocale } from '../../i18n'
import { businessOSCopy } from '../../i18n/business-os'

export function LiveActivityPanel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { locale } = useLocale()
  const copy = businessOSCopy[locale]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % BOS_LIVE_ACTIVITIES.length)
    }, 3800)
    return () => window.clearInterval(timer)
  }, [])

  const visibleItems = [
    BOS_LIVE_ACTIVITIES[activeIndex],
    BOS_LIVE_ACTIVITIES[(activeIndex + 1) % BOS_LIVE_ACTIVITIES.length],
    BOS_LIVE_ACTIVITIES[(activeIndex + 2) % BOS_LIVE_ACTIVITIES.length],
  ]

  return (
    <section className="bos-panel bos-live" aria-labelledby="bos-live-title">
      <header className="bos-panel__header">
        <div>
          <h2 id="bos-live-title" className="bos-panel__title">{copy.activity.title}</h2>
          <p className="bos-panel__subtitle">{copy.activity.subtitle}</p>
        </div>
        <span className="bos-live__pulse">
          <span className="bos-live__dot" aria-hidden="true" />
          {copy.live}
        </span>
      </header>

      <ul className="bos-live__list">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item, index) => (
            <motion.li
              key={`${item.id}-${activeIndex}-${index}`}
              className="bos-live__item"
              layout
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ ...motionTransition.soft, delay: index * 0.04 }}
            >
              <span className="bos-live__icon" aria-hidden="true">
                {BOS_ACTIVITY_ICONS[item.type]}
              </span>
              <div className="bos-live__body">
                <strong>{copy.activity.items[item.id as keyof typeof copy.activity.items]?.title ?? item.title}</strong>
                <span>{copy.activity.items[item.id as keyof typeof copy.activity.items]?.detail ?? item.detail}</span>
              </div>
              <time className="bos-live__time">{copy.activity.items[item.id as keyof typeof copy.activity.items]?.time ?? item.time}</time>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  )
}
