import { motion } from 'framer-motion'
import { whatWeBuild } from '../../constants/content'
import { motionTransition } from '../../motion/variants'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { SectionShell, SectionTitle } from '../ui/SectionTitle'

export function Solutions() {
  return (
    <SectionShell id="solucoes" className="solutions alt" ariaLabelledBy="solucoes-title">
      <Reveal>
        <SectionTitle
          id="solucoes-title"
          title="O que construímos"
          description="Da estratégia à execução, entregamos soluções completas em tecnologia para empresas que precisam inovar com segurança, escala e performance."
        />
      </Reveal>

      <StaggerReveal className="build-grid">
        {whatWeBuild.map(([icon, title, text]) => (
          <StaggerItem key={title}>
            <motion.article
              className="card card--compact"
              whileHover={{ y: -8 }}
              transition={motionTransition.soft}
            >
              <div className="icon" aria-hidden="true">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </SectionShell>
  )
}
