import { motion } from 'framer-motion'
import { ContactForm } from '../forms/ContactForm'
import { MotionButton } from '../ui/Buttons'
import { fadeUp, motionTransition } from '../../motion/variants'
import { Reveal } from '../ui/Reveal'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

export function FinalCTA() {
  return (
    <section className="final-cta" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <motion.div className="final-cta__intro" variants={fadeUp} transition={motionTransition.soft}>
            <span className="badge badge--gold">Let's build together</span>
            <h2 id="contact-title">Ready to ship your next platform?</h2>
            <p>
              Tell us about your project — whether you're scaling on Upwork, launching a SaaS
              or modernizing enterprise operations. We respond within 24 hours.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ ...motionTransition.soft, delay: 0.08 }}>
            <ContactForm id="commercial-contact-form" />
          </motion.div>

          <motion.div className="final-cta__alt" variants={fadeUp} transition={{ ...motionTransition.soft, delay: 0.16 }}>
            <MotionButton href="#commercial-contact-form">Start a project</MotionButton>
            <MotionButton href="mailto:contato@buildertudo.com?subject=Book%20a%20Discovery%20Call" variant="secondary">Book a discovery call</MotionButton>
            <MotionButton href="/framework" variant="secondary">Explore Framework</MotionButton>
            <MotionButton href={buildWhatsAppUrl()} variant="ghost">WhatsApp</MotionButton>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
