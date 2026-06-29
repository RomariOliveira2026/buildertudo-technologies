import { motion } from 'framer-motion'
import { motionTransition } from '../../motion/variants'

type BackToTopProps = {
  visible: boolean
  onClick: () => void
}

export function BackToTop({ visible, onClick }: BackToTopProps) {
  return (
    <motion.button
      type="button"
      className={`back-to-top${visible ? ' is-visible' : ''}`}
      onClick={onClick}
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
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
  return (
    <motion.a
      className="whatsapp-float"
      href="https://wa.me/5579999348812"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
      whileHover={{ y: -3, scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={motionTransition.soft}
    >
      💬
    </motion.a>
  )
}
