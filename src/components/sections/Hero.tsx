import { motion, useReducedMotion } from 'framer-motion'
import { MotionButton } from '../ui/Buttons'
import { useTranslation } from '../../i18n'
import { ANALYTICS_EVENTS } from '../../config/commercial'
import { trackEvent } from '../../lib/analytics'
import { fadeIn, fadeUp, heroStagger, motionTransition } from '../../motion/variants'

export function Hero() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()

  return (
    <section className="hero hero--commercial" id="home" aria-labelledby="hero-title">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="container container--wide hero__wrap">
        <motion.div
          className="commercial-hero"
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          variants={heroStagger}
        >
          <motion.p className="commercial-hero__kicker" variants={fadeIn} transition={motionTransition.soft}>
            {t('commercial.hero.kicker')}
          </motion.p>

          <motion.h1 id="hero-title" variants={fadeIn} transition={{ ...motionTransition.soft, delay: 0.04 }}>
            {t('commercial.hero.title')}
          </motion.h1>

          <motion.p className="hero__lead" variants={fadeUp} transition={motionTransition.soft}>
            {t('commercial.hero.lead')}
          </motion.p>

          <motion.p className="commercial-hero__support" variants={fadeUp} transition={motionTransition.soft}>
            {t('commercial.hero.support')}
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp} transition={motionTransition.soft}>
            <MotionButton
              href="/#contact"
              className="btn--lg btn--hero-primary"
              onClick={() => trackEvent(ANALYTICS_EVENTS.clickQuote, { source: 'hero' })}
            >
              {t('commercial.hero.ctaPrimary')}
            </MotionButton>
            <MotionButton href="/#solucoes" variant="secondary" className="btn--lg btn--hero-secondary">
              {t('commercial.hero.ctaSecondary')}
            </MotionButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
