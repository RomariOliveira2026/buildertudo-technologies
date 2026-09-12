import { motion } from 'framer-motion'
import { MotionButton } from '../../ui/Buttons'
import { useTranslation } from '../../../i18n'
import { commercialCopy } from '../../../i18n/commercial'
import { fadeIn, fadeUp, heroStagger, motionTransition } from '../../../motion/variants'
import { trackQuoteClick } from '../../../lib/commercial-whatsapp'
import { CommercialHeroVisual } from './CommercialHeroVisual'

function highlightTitle(title: string, accent: string) {
  const index = title.toLocaleLowerCase().lastIndexOf(accent.toLocaleLowerCase())
  if (index < 0) return title

  return (
    <>
      {title.slice(0, index)}
      <span className="cm-hero__accent">{title.slice(index, index + accent.length)}</span>
      {title.slice(index + accent.length)}
    </>
  )
}

export function CommercialHero() {
  const { locale } = useTranslation()
  const copy = commercialCopy[locale]

  return (
    <section className="hero hero--enterprise cm-hero" id="home" aria-labelledby="hero-title">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />
      <div className="hero__radial" aria-hidden="true" />

      <div className="container container--wide hero__wrap">
        <div className="cm-hero__layout">
          <motion.div
            className="cm-hero__content"
            initial="hidden"
            animate="visible"
            variants={heroStagger}
          >
            <motion.p className="cm-hero__eyebrow" variants={fadeIn} transition={motionTransition.soft}>
              {copy.hero.eyebrow}
            </motion.p>

            <motion.h1 id="hero-title" variants={fadeIn} transition={{ ...motionTransition.soft, delay: 0.06 }}>
              {highlightTitle(copy.hero.title, copy.hero.titleAccent)}
            </motion.h1>

            <motion.p className="hero__lead" variants={fadeUp} transition={motionTransition.soft}>
              {copy.hero.lead}
            </motion.p>

            <motion.p className="cm-hero__support" variants={fadeUp} transition={motionTransition.soft}>
              {copy.hero.support}
            </motion.p>

            <motion.div className="hero__actions" variants={fadeUp} transition={motionTransition.soft}>
              <MotionButton
                href="/#contact"
                className="btn--lg btn--hero-primary"
                onClick={() => trackQuoteClick()}
              >
                {copy.hero.ctaPrimary}
              </MotionButton>
              <MotionButton href="/#solutions" variant="secondary" className="btn--lg btn--hero-secondary">
                {copy.hero.ctaSecondary}
              </MotionButton>
            </motion.div>

            <motion.p className="cm-hero__note" variants={fadeUp} transition={motionTransition.soft}>
              {copy.hero.note}
            </motion.p>
          </motion.div>

          <motion.div
            className="cm-hero__aside"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...motionTransition.soft, delay: 0.16 }}
            aria-label={copy.hero.visualAria}
          >
            <CommercialHeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
