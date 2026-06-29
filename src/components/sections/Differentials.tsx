import { differentials } from '../../constants/differentials'
import { motion } from 'framer-motion'
import { motionTransition } from '../../motion/variants'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { SectionShell, SectionTitle } from '../ui/SectionTitle'

export function Differentials() {
  return (
    <SectionShell id="diferenciais" className="solutions" ariaLabelledBy="diferenciais-title">
      <Reveal>
        <SectionTitle
          id="diferenciais-title"
          title="Por que escolher a BuilderTudo Technologies"
          description="Unimos produtos proprietários, IA aplicada e execução premium para transformar ideias em plataformas digitais de alto impacto."
        />
      </Reveal>

      <StaggerReveal className="differentials-grid">
        {differentials.map((item) => (
          <StaggerItem key={item.title}>
            <motion.article
              className="card card--compact differential-card"
              whileHover={{ y: -6 }}
              transition={motionTransition.soft}
            >
              <div className="icon" aria-hidden="true">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </SectionShell>
  )
}
