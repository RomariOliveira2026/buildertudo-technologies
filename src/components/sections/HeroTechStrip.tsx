import { motion } from 'framer-motion'
import { HERO_TECH_STACK } from '../../constants/hero'
import { fadeUp, motionTransition } from '../../motion/variants'

export function HeroTechStrip() {
  return (
    <motion.div
      className="hero-tech-strip"
      variants={fadeUp}
      transition={motionTransition.soft}
      aria-label="Technology stack"
    >
      <span className="hero-tech-strip__label">Built with</span>
      <ul className="hero-tech-strip__list">
        {HERO_TECH_STACK.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </motion.div>
  )
}
