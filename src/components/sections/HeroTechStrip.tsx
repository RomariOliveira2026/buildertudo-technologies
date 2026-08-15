import { motion } from 'framer-motion'
import { HERO_TECH_STACK } from '../../constants/hero'
import { useTranslation } from '../../i18n'
import { fadeUp, motionTransition } from '../../motion/variants'

export function HeroTechStrip() {
  const { t } = useTranslation()

  return (
    <motion.div
      className="hero-tech-strip"
      variants={fadeUp}
      transition={motionTransition.soft}
      aria-label={t('hero.builtWith')}
    >
      <span className="hero-tech-strip__label">{t('hero.builtWith')}</span>
      <ul className="hero-tech-strip__list">
        {HERO_TECH_STACK.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </motion.div>
  )
}
