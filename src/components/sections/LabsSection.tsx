import { LABS } from '../../constants/labs'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

export function LabsSection() {
  return (
    <Section id="labs" ariaLabelledBy="labs-title">
      <Reveal>
        <SectionHeader
          id="labs-title"
          eyebrow="Labs"
          title="BuilderTudo Labs"
          description="Where we experiment with the next generation of agents, voice AI, design automation and edge computing — before it reaches your product."
        />
      </Reveal>

      <StaggerReveal className="labs-grid">
        {LABS.map((lab) => (
          <StaggerItem key={lab.id}>
            <article className="lab-card">
              <div className="lab-card__head">
                <h3>{lab.title}</h3>
                <span className={`lab-status lab-status--${lab.status.toLowerCase()}`}>
                  {lab.status}
                </span>
              </div>
              <p>{lab.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
