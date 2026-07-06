import { motion } from 'framer-motion'
import { MotionButton } from '../ui/Buttons'
import { fadeUp, heroStagger, motionTransition } from '../../motion/variants'

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >
          <motion.div className="hero__badges" variants={fadeUp} transition={motionTransition.soft}>
            <span className="badge badge--gold">BuilderTudo Technologies</span>
            <span className="badge badge--outline">Global-ready · Enterprise-grade</span>
          </motion.div>

          <motion.h1 id="hero-title" variants={fadeUp} transition={motionTransition.soft}>
            The technology platform for companies that scale globally.
          </motion.h1>

          <motion.p className="hero__lead" variants={fadeUp} transition={motionTransition.soft}>
            Framework, Business OS, AI-OS, Engine and 12+ proprietary products — one ecosystem
            to design, build and ship digital platforms with world-class engineering.
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp} transition={motionTransition.soft}>
            <MotionButton href="#contact" className="btn--lg">
              Start a project
            </MotionButton>
            <MotionButton href="#platform" variant="secondary" className="btn--lg">
              Explore the platform
            </MotionButton>
          </motion.div>

          <motion.ul className="hero__stats" variants={fadeUp} transition={motionTransition.soft} aria-label="Key metrics">
            <li><strong>12+</strong><span>Digital products</span></li>
            <li><strong>7</strong><span>Platform layers</span></li>
            <li><strong>100%</strong><span>Proprietary IP</span></li>
            <li><strong>AI-native</strong><span>By design</span></li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <div className="hero__stack">
            <div className="hero__stack-layer hero__stack-layer--1">Framework</div>
            <div className="hero__stack-layer hero__stack-layer--2">Business OS</div>
            <div className="hero__stack-layer hero__stack-layer--3">AI-OS</div>
            <div className="hero__stack-layer hero__stack-layer--4">Engine</div>
            <div className="hero__stack-layer hero__stack-layer--5">Products</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
