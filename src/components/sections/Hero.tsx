import { motion } from 'framer-motion'
import { MotionButton } from '../ui/Buttons'
import { heroStagger, fadeUp, motionTransition } from '../../motion/variants'

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={heroStagger}
      >
        <motion.span className="mini-badge" variants={fadeUp} transition={motionTransition.soft}>
          BuilderTudo Technologies
        </motion.span>

        <motion.h1 id="hero-title" variants={fadeUp} transition={motionTransition.soft}>
          Tecnologia que transforma negócios.
        </motion.h1>

        <motion.p variants={fadeUp} transition={motionTransition.soft}>
          Desenvolvemos Inteligência Artificial, plataformas SaaS, automações e soluções
          digitais para empresas que querem crescer através da inovação.
        </motion.p>

        <motion.div className="hero-actions" variants={fadeUp} transition={motionTransition.soft}>
          <MotionButton href="#ecossistema">Conheça nosso ecossistema</MotionButton>
          <MotionButton href="#contato" variant="secondary">
            Fale com um especialista
          </MotionButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
