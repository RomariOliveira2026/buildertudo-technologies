import { segments } from '../../constants/segments'
import { motion } from 'framer-motion'
import { motionTransition } from '../../motion/variants'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { SectionShell, SectionTitle } from '../ui/SectionTitle'

export function Segments() {
  return (
    <SectionShell id="segmentos" className="solutions alt" ariaLabelledBy="segmentos-title">
      <Reveal>
        <SectionTitle
          id="segmentos-title"
          title="Nossas soluções atendem diversos segmentos"
          description="Construímos tecnologia para diferentes mercados, sempre com foco em escala, clareza operacional e experiência premium."
        />
      </Reveal>

      <StaggerReveal className="segments-grid">
        {segments.map((segment) => (
          <StaggerItem key={segment.title}>
            <motion.article
              className="segment-card"
              whileHover={{ y: -6 }}
              transition={motionTransition.soft}
            >
              <span className="segment-icon" aria-hidden="true">{segment.icon}</span>
              <h3>{segment.title}</h3>
              <p>{segment.description}</p>
            </motion.article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </SectionShell>
  )
}
