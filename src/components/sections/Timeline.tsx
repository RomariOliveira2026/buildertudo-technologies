import { timelineSteps } from '../../constants/content'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { SectionShell, SectionTitle } from '../ui/SectionTitle'

export function Timeline() {
  return (
    <SectionShell id="processo" className="solutions timeline-section" ariaLabelledBy="processo-title">
      <Reveal>
        <SectionTitle
          id="processo-title"
          title="Como trabalhamos"
          description="Um processo claro, colaborativo e orientado a resultado — da descoberta ao suporte contínuo."
        />
      </Reveal>

      <StaggerReveal className="timeline-track" role="list" aria-label="Etapas do processo">
        {timelineSteps.map((step, index) => (
          <StaggerItem key={step.title} className="timeline-item">
            <article className="timeline-card">
              <span className="timeline-icon" aria-hidden="true">{step.icon}</span>
              <h3>{step.title}</h3>
            </article>
            {index < timelineSteps.length - 1 && (
              <span className="timeline-arrow" aria-hidden="true">↓</span>
            )}
          </StaggerItem>
        ))}
      </StaggerReveal>
    </SectionShell>
  )
}
