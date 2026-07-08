import { motion } from 'framer-motion'
import { MotionButton } from '../ui/Buttons'
import { HeroShowcase } from './HeroShowcase'
import { usePlatformMetrics } from '../../hooks/usePlatformMetrics'
import { fadeUp, heroStagger, motionTransition } from '../../motion/variants'

export function Hero() {
  const { items } = usePlatformMetrics()

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="container container--wide hero__wrap">
        <div className="hero__inner hero__inner--v4">
          <motion.div
            className="hero__content"
            initial="hidden"
            animate="visible"
            variants={heroStagger}
          >
            <motion.div className="hero__badges" variants={fadeUp} transition={motionTransition.soft}>
              <span className="badge badge--gold">Product Engineering Company</span>
              <span className="badge badge--outline">Framework · AI-OS · Engine · Business OS</span>
            </motion.div>

            <motion.h1 id="hero-title" variants={fadeUp} transition={motionTransition.soft}>
              We build our own products on a proprietary engineering platform.
            </motion.h1>

            <motion.p className="hero__lead" variants={fadeUp} transition={motionTransition.soft}>
              BuilderTudo is a Product Engineering Company. Our Framework, AI-OS, Engine and Business OS
              power a real portfolio of live SaaS products — and every client inherits the same platform:
              faster delivery, enterprise consistency and governed AI.
            </motion.p>

            <motion.div className="hero__actions" variants={fadeUp} transition={motionTransition.soft}>
              <MotionButton href="/#contact" className="btn--lg">Start a project</MotionButton>
              <MotionButton href="/#platform" variant="secondary" className="btn--lg">Explore the platform</MotionButton>
            </motion.div>

            <motion.ul
              className="hero__stats"
              variants={fadeUp}
              transition={motionTransition.soft}
              aria-label="Platform metrics"
            >
              {items.map((item) => (
                <li key={item.id}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
