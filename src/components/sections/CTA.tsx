import { motion } from 'framer-motion'
import { ContactForm } from '../forms/ContactForm'
import { MotionButton } from '../ui/Buttons'
import { fadeUp, motionTransition } from '../../motion/variants'
import { Reveal } from '../ui/Reveal'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

export function CTA() {
  return (
    <section className="cta cta--impact" id="contato" aria-labelledby="contato-title">
      <Reveal>
        <motion.h2 id="contato-title" variants={fadeUp} transition={motionTransition.soft}>
          Vamos construir a próxima inovação da sua empresa?
        </motion.h2>
        <motion.p variants={fadeUp} transition={{ ...motionTransition.soft, delay: 0.08 }}>
          Preencha o formulário comercial ou fale diretamente com nosso time para acelerar
          a transformação digital do seu negócio.
        </motion.p>

        <motion.div variants={fadeUp} transition={{ ...motionTransition.soft, delay: 0.12 }}>
          <ContactForm id="commercial-contact-form" />
        </motion.div>

        <motion.div className="hero-actions cta__secondary-actions" variants={fadeUp} transition={{ ...motionTransition.soft, delay: 0.16 }}>
          <MotionButton href={buildWhatsAppUrl()}>Falar no WhatsApp</MotionButton>
          <MotionButton href="#ecossistema" variant="secondary">
            Conhecer nosso ecossistema
          </MotionButton>
        </motion.div>
      </Reveal>
    </section>
  )
}
