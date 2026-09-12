import { motion, useReducedMotion } from 'framer-motion'
import { motionTransition } from '../../../motion/variants'
import heroPremium from '../../../assets/commercial/hero-premium.webp'
import heroPremiumMobile from '../../../assets/commercial/hero-premium-800.webp'

export function CommercialHeroVisual() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="cm-stage cm-stage--shot"
      aria-hidden="true"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...motionTransition.soft, delay: 0.12 }}
    >
      <img
        className="cm-stage__shot"
        src={heroPremium}
        srcSet={`${heroPremiumMobile} 800w, ${heroPremium} 1280w`}
        sizes="(max-width: 700px) min(100vw, 380px), (max-width: 1100px) min(48vw, 560px), min(42vw, 720px)"
        alt=""
        width={1280}
        height={720}
        decoding="async"
        fetchPriority="high"
      />
    </motion.div>
  )
}
