import { getPurposeContent } from '../../i18n/content'
import { useTranslation } from '../../i18n'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

export function PurposeSection() {
  const { t } = useTranslation()
  const content = getPurposeContent(t)

  return (
    <Section id="purpose" className="section--purpose" ariaLabelledBy="purpose-title">
      <Reveal>
        <SectionHeader
          id="purpose-title"
          eyebrow={content.eyebrow}
          title={content.title}
        />
      </Reveal>

      <Reveal delay={0.05}>
        <p className="purpose-intro">{content.intro}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <blockquote className="purpose-mission">
          <span className="purpose-mission__label">{content.missionLabel}</span>
          <p>{content.mission}</p>
        </blockquote>
      </Reveal>

      <StaggerReveal className="purpose-pillars" aria-label={content.pillarsAria}>
        {content.pillars.map((pillar, index) => (
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
