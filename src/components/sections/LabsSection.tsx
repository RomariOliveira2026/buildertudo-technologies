import { LABS } from '../../constants/labs'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import { MotionButton } from '../ui/Buttons'

export function LabsSection() {
  return (
    <Section id="labs-preview" ariaLabelledBy="labs-title">
      <Reveal>
        <SectionHeader
          id="labs-title"
          eyebrow="Labs"
          title="BuilderTudo Labs"
          description="Experimental projects, AI research and prototypes — where we test what ships next."
        />
      </Reveal>

      <StaggerReveal className="labs-grid">
        {LABS.slice(0, 4).map((lab) => (
          <StaggerItem key={lab.id}>
            <article className="lab-card">
              <div className="lab-card__head">
                <h3>{lab.title}</h3>
                <span className={`lab-status lab-status--${lab.status.toLowerCase()}`}>{lab.status}</span>
              </div>
              <p>{lab.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <Reveal>
        <div className="section-cta-row">
          <MotionButton href="/labs">Explore Labs</MotionButton>
        </div>
      </Reveal>
    </Section>
  )
}
