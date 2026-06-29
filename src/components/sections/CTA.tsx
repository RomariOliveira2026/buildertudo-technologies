import { motion } from 'framer-motion'
import { CONTACT } from '../../constants/contact'
import { MotionButton } from '../ui/Buttons'
import { fadeUp, motionTransition } from '../../motion/variants'
import { Reveal } from '../ui/Reveal'

export function CTA() {
  return (
    <section className="cta cta--impact" id="contato" aria-labelledby="contato-title">
      <Reveal>
        <motion.h2 id="contato-title" variants={fadeUp} transition={motionTransition.soft}>
          Vamos construir a próxima inovação da sua empresa?
        </motion.h2>
        <motion.p variants={fadeUp} transition={{ ...motionTransition.soft, delay: 0.08 }}>
          Agende uma conversa estratégica e descubra como nosso ecossistema pode acelerar
          a transformação digital do seu negócio.
        </motion.p>
        <motion.div className="hero-actions" variants={fadeUp} transition={{ ...motionTransition.soft, delay: 0.16 }}>
          <MotionButton href={CONTACT.meeting}>Agendar reunião</MotionButton>
          <MotionButton href="#ecossistema" variant="secondary">
            Conhecer nosso ecossistema
          </MotionButton>
        </motion.div>
      </Reveal>
    </section>
  )
}
