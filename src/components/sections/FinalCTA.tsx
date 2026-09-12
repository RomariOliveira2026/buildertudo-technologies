import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ContactForm } from '../forms/ContactForm'
import { MotionButton } from '../ui/Buttons'
import { fadeUp, motionTransition } from '../../motion/variants'
import { Reveal } from '../ui/Reveal'
import { CONTACT } from '../../constants/contact'
import { useTranslation } from '../../i18n'
import { commercialCopy } from '../../i18n/commercial'
import { getWhatsAppHref, trackQuoteClick, trackWhatsAppClick } from '../../lib/commercial-whatsapp'

export function FinalCTA() {
  const { t, locale } = useTranslation()
  const copy = commercialCopy[locale]
  const [searchParams] = useSearchParams()
  const selectedPlan = searchParams.get('plan') ?? 'none'

  return (
    <section className="final-cta" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <motion.div className="final-cta__intro" variants={fadeUp} transition={motionTransition.soft}>
            <span className="badge badge--gold">{copy.cta.eyebrow}</span>
            <h2 id="contact-title">{copy.cta.title}</h2>
            <p>{copy.cta.body}</p>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ ...motionTransition.soft, delay: 0.08 }}>
            <ContactForm key={selectedPlan} id="commercial-contact-form" />
          </motion.div>

          <motion.div className="final-cta__alt" variants={fadeUp} transition={{ ...motionTransition.soft, delay: 0.16 }}>
            <MotionButton href="#commercial-contact-form" onClick={() => trackQuoteClick()}>
              {copy.cta.primary}
            </MotionButton>
            <MotionButton
              href={getWhatsAppHref(locale, 'quote')}
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('quote')}
            >
              {copy.cta.secondary}
            </MotionButton>
            <MotionButton href={CONTACT.meeting} variant="secondary">
              {t('contact.ctaBook')}
            </MotionButton>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
