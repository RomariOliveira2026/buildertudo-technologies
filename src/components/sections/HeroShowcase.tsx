import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PlatformScreenshot } from '../ui/PlatformScreenshot'
import { useHeroShowcase } from '../../hooks/useHeroShowcase'
import { motionTransition } from '../../motion/variants'
import { MotionButton } from '../ui/Buttons'

export function HeroShowcase() {
  const { items, active, activeIndex, activeId, hasScreenshots, goTo, pause, resume } = useHeroShowcase()

  if (!hasScreenshots) {
    return (
      <div className="hero-showcase hero-showcase--empty">
        <p>Live Business OS demos appear here once real screenshots are captured from the platform.</p>
        <div className="hero-showcase__empty-actions">
          <MotionButton href="/business-os">Explore Business OS</MotionButton>
          <MotionButton href="/framework" variant="secondary">Explore Framework</MotionButton>
        </div>
      </div>
    )
  }

  return (
    <div
      className="hero-showcase"
      onMouseEnter={pause}
      onMouseLeave={resume}
      aria-label="Platform showcase"
    >
      <div className="hero-showcase__stage">
        <header className="hero-showcase__header">
          <div className="hero-showcase__header-copy">
            <span className="hero-showcase__eyebrow">Live platform demo</span>
            <h2 className="hero-showcase__title">{active?.name ?? 'Business OS'}</h2>
          </div>
          {active ? (
            <Link className="hero-showcase__open" to="/business-os">
              Open in Business OS →
            </Link>
          ) : null}
        </header>

        <nav className="hero-showcase__tabs" aria-label="Platform modules">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`hero-showcase__tab${index === activeIndex ? ' hero-showcase__tab--active' : ''}`}
              onClick={() => goTo(index)}
              aria-current={index === activeIndex ? 'true' : undefined}
            >
              <span className="hero-showcase__tab-num">{String(index + 1).padStart(2, '0')}</span>
              <span className="hero-showcase__tab-name">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="hero-showcase__preview">
          <AnimatePresence mode="wait">
            {activeId ? (
              <motion.div
                key={activeId}
                className="hero-showcase__preview-inner"
                initial={{ opacity: 0, y: 16, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.99 }}
                transition={motionTransition.soft}
              >
                <PlatformScreenshot screenId={activeId} zoomOnHover={false} />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <footer className="hero-showcase__footer">
          <div className="hero-showcase__progress" aria-hidden="true">
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`hero-showcase__progress-dot${index === activeIndex ? ' hero-showcase__progress-dot--active' : ''}${index < activeIndex ? ' hero-showcase__progress-dot--done' : ''}`}
                onClick={() => goTo(index)}
                aria-label={`Show ${item.name}`}
              />
            ))}
          </div>
          <span className="hero-showcase__counter">
            {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
        </footer>
      </div>
    </div>
  )
}
