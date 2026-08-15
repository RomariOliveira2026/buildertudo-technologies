import { motion } from 'framer-motion'
import { MotionButton } from '../ui/Buttons'
import { HeroShowcase } from './HeroShowcase'
import { HeroTechStrip } from './HeroTechStrip'
import { HeroPerformanceStrip } from './HeroPerformanceStrip'
import { usePlatformMetrics } from '../../hooks/usePlatformMetrics'
import { getHeroBadges } from '../../i18n/content'
import { useTranslation } from '../../i18n'
import { fadeIn, fadeUp, heroStagger, motionTransition } from '../../motion/variants'

const STAT_ICONS: Record<string, string> = {
  products: '◆',
  components: '⬡',
  aiNative: '◎',
  frameworkHealth: '◈',
  goldenScreens: '◇',
  enterprise: '★',
}

export function Hero() {
  const { items } = usePlatformMetrics()
  const { t } = useTranslation()
  const badges = getHeroBadges(t)

  return (
    <section className="hero hero--enterprise" id="home" aria-labelledby="hero-title">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />
      <div className="hero__glow hero__glow--3" aria-hidden="true" />
      <div className="hero__radial" aria-hidden="true" />

      <div className="container container--wide hero__wrap">
        <div className="hero__inner hero__inner--enterprise">
          <motion.div
            className="hero__content"
            initial="hidden"
            animate="visible"
            variants={heroStagger}
          >
            <motion.ul className="hero__enterprise-badges" variants={fadeIn} transition={motionTransition.soft}>
              {badges.map((badge) => (
                <li key={badge.id}>
                  <span className="hero__enterprise-check" aria-hidden="true">✓</span>
                  {badge.label}
                </li>
              ))}
            </motion.ul>

            <motion.h1 id="hero-title" variants={fadeIn} transition={{ ...motionTransition.soft, delay: 0.06 }}>
              {t('hero.title')}
            </motion.h1>

            <motion.p className="hero__lead" variants={fadeUp} transition={motionTransition.soft}>
              {t('hero.lead')}
            </motion.p>

            <motion.p className="hero__powered-by" variants={fadeUp} transition={motionTransition.soft}>
              {t('hero.poweredBy')}
            </motion.p>

            <motion.div className="hero__actions" variants={fadeUp} transition={motionTransition.soft}>
              <MotionButton
                href="/#contact"
                className="btn--lg btn--hero-primary"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.995 }}
              >
                {t('hero.ctaPrimary')}
              </MotionButton>
              <MotionButton
                href="/#platform"
                variant="secondary"
                className="btn--lg btn--hero-secondary"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.995 }}
              >
                {t('hero.ctaSecondary')}
              </MotionButton>
            </motion.div>

            <motion.ul
              className="hero__stats hero__stats--premium"
              variants={fadeUp}
              transition={motionTransition.soft}
              aria-label={t('common.platformMetricsAria')}
            >
              {items.map((item) => (
                <motion.li
                  key={item.id}
                  className="hero__stat-card"
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={motionTransition.soft}
                >
                  <span className="hero__stat-icon" aria-hidden="true">
                    {STAT_ICONS[item.id] ?? '●'}
                  </span>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </motion.li>
              ))}
            </motion.ul>

            <HeroTechStrip />
            <HeroPerformanceStrip />
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero__visual-glow" aria-hidden="true" />
            <HeroShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
