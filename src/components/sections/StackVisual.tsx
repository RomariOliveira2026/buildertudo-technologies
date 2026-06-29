import { motion } from 'framer-motion'
import { stackTechnologies } from '../../constants/stack'
import { motionTransition } from '../../motion/variants'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { SectionShell, SectionTitle } from '../ui/SectionTitle'

export function StackVisual() {
  return (
    <SectionShell id="tecnologias" className="solutions alt stack-section" ariaLabelledBy="tecnologias-title">
      <Reveal>
        <SectionTitle
          id="tecnologias-title"
          title="Stack Visual"
          description="Tecnologias que sustentam nosso ecossistema — escolhidas para performance, escala e inovação contínua."
        />
      </Reveal>

      <StaggerReveal className="stack-grid">
        {stackTechnologies.map((tech) => (
          <StaggerItem key={tech}>
            <motion.div
              className="stack-badge"
              whileHover={{ y: -4, scale: 1.03 }}
              transition={motionTransition.soft}
            >
              <span className="stack-badge__dot" aria-hidden="true" />
              {tech}
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </SectionShell>
  )
}
