import { PURPOSE_CONTENT, PURPOSE_PILLARS } from '../../constants/purpose'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

export function PurposeSection() {
  return (
    <Section id="purpose" className="section--purpose" ariaLabelledBy="purpose-title">
      <Reveal>
        <SectionHeader
          id="purpose-title"
          eyebrow={PURPOSE_CONTENT.eyebrow}
          title={PURPOSE_CONTENT.title}
        />
      </Reveal>

      <Reveal delay={0.05}>
        <p className="purpose-intro">{PURPOSE_CONTENT.intro}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <blockquote className="purpose-mission">
          <span className="purpose-mission__label">{PURPOSE_CONTENT.missionLabel}</span>
          <p>{PURPOSE_CONTENT.mission}</p>
        </blockquote>
      </Reveal>

      <StaggerReveal className="purpose-pillars" aria-label="Pilares institucionais BuilderTudo">
        {PURPOSE_PILLARS.map((pillar, index) => (
          <StaggerItem key={pillar.id}>
            <article className="purpose-pillar">
              <span className="purpose-pillar__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
