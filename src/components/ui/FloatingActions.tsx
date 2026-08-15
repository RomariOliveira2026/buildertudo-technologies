import { motion } from 'framer-motion'
import { useTranslation } from '../../i18n'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { motionTransition } from '../../motion/variants'

type BackToTopProps = {
  visible: boolean
  onClick: () => void
}

export function BackToTop({ visible, onClick }: BackToTopProps) {
  const { t } = useTranslation()

  return (
    <motion.button
      type="button"
      className={`back-to-top${visible ? ' is-visible' : ''}`}
      onClick={onClick}
      aria-label={t('common.backToTop')}
      title={t('common.backToTop')}
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
      whileHover={{ y: -3 }}
      transition={motionTransition.soft}
    >
      ↑
    </motion.button>
  )
}

export function WhatsAppFloat() {
  const { t } = useTranslation()

  return (
    <motion.a
      className="whatsapp-float"
      href={buildWhatsAppUrl(t('contact.whatsappDefault'))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('common.whatsappAria')}
      title={t('common.whatsapp')}
      whileHover={{ y: -3, scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={motionTransition.soft}
    >
      <span aria-hidden="true">💬</span>
    </motion.a>
  )
}
