import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PlatformScreenshot } from '../ui/PlatformScreenshot'
import { useHeroShowcase } from '../../hooks/useHeroShowcase'
import { getHeroFooterMeta, getHeroOverlays } from '../../i18n/content'
import { useTranslation } from '../../i18n'
import { heroSlide } from '../../motion/variants'
import { MotionButton } from '../ui/Buttons'

export function HeroShowcase() {
  const { t } = useTranslation()
  const overlays = getHeroOverlays(t)
  const footerMeta = getHeroFooterMeta(t)
  const { items, active, activeIndex, activeId, hasScreenshots, direction, goTo, pause, resume } =
    useHeroShowcase()

  if (!hasScreenshots) {
    return (
      <div className="hero-showcase hero-showcase--empty">
        <p>{t('hero.showcaseEmpty')}</p>
        <div className="hero-showcase__empty-actions">
          <MotionButton href="/business-os">{t('hero.showcaseExploreBos')}</MotionButton>
          <MotionButton href="/framework" variant="secondary">{t('hero.showcaseExploreFramework')}</MotionButton>
        </div>
      </div>
    )
  }

  return (
    <div
      className="hero-showcase hero-showcase--enterprise"
      onMouseEnter={pause}
      onMouseLeave={resume}
      aria-label={t('hero.showcaseEyebrow')}
    >
      <div className="hero-showcase__stage">
        <header className="hero-showcase__header">
          <div className="hero-showcase__header-copy">
            <span className="hero-showcase__eyebrow">{t('hero.showcaseEyebrow')}</span>
            <h2 className="hero-showcase__title">{active?.name ?? 'Business OS'}</h2>
          </div>
          {active ? (
            <Link className="hero-showcase__open" to="/business-os">
              {t('hero.showcaseOpen')}
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
          <AnimatePresence mode="wait" custom={direction}>
            {activeId ? (
              <motion.div
                key={activeId}
                className="hero-showcase__preview-inner"
                custom={direction}
                variants={heroSlide}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <PlatformScreenshot screenId={activeId} zoomOnHover={false} priority />
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="hero-showcase__overlays" aria-hidden="true">
            {overlays.map((chip, index) => (
              <motion.div
                key={chip.id}
                className="hero-showcase__overlay-chip"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.06, duration: 0.4 }}
              >
                <span className="hero-showcase__overlay-label">{chip.label}</span>
                <strong>{chip.value}</strong>
              </motion.div>
            ))}
          </div>
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
          <ul className="hero-showcase__meta" aria-label="Platform highlights">
            {footerMeta.map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>
        </footer>
      </div>
    </div>
  )
}
