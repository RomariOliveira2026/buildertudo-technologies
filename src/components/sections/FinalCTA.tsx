import { motion } from 'framer-motion'
import { ContactForm } from '../forms/ContactForm'
import { MotionButton } from '../ui/Buttons'
import { fadeUp, motionTransition } from '../../motion/variants'
import { Reveal } from '../ui/Reveal'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { useTranslation } from '../../i18n'

export function FinalCTA() {
  const { t } = useTranslation()

  return (
    <section className="final-cta" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <motion.div className="final-cta__intro" variants={fadeUp} transition={motionTransition.soft}>
            <span className="badge badge--gold">{t('contact.badge')}</span>
            <h2 id="contact-title">{t('contact.title')}</h2>
            <p>{t('contact.body')}</p>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ ...motionTransition.soft, delay: 0.08 }}>
            <ContactForm id="commercial-contact-form" />
          </motion.div>

          <motion.div className="final-cta__alt" variants={fadeUp} transition={{ ...motionTransition.soft, delay: 0.16 }}>
            <MotionButton href="#commercial-contact-form">{t('contact.ctaStart')}</MotionButton>
            <MotionButton href="mailto:contato@buildertudo.com?subject=Book%20a%20Discovery%20Call" variant="secondary">
              {t('contact.ctaBook')}
            </MotionButton>
            <MotionButton href="/framework" variant="secondary">{t('contact.ctaFramework')}</MotionButton>
            <MotionButton href={buildWhatsAppUrl(t('contact.whatsappDefault'))} variant="ghost">
              {t('contact.ctaWhatsapp')}
            </MotionButton>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
