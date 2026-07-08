import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import { ROADMAP_LANE_LABELS, type CaseStudyRoadmapItem, type CaseStudyRoadmapLane } from '../../types/case-study'

const LANES: CaseStudyRoadmapLane[] = ['shipped', 'in-progress', 'next', 'future']

type CaseRoadmapSectionProps = {
  roadmap: CaseStudyRoadmapItem[]
}

export function CaseRoadmapSection({ roadmap }: CaseRoadmapSectionProps) {
  return (
    <Section id="roadmap" ariaLabelledBy="roadmap-title">
      <Reveal>
        <SectionHeader
          id="roadmap-title"
          eyebrow="7 — Roadmap"
          title="Product evolution"
          description="Shipped capabilities, active work and the vision ahead."
          align="left"
        />
      </Reveal>

      <div className="case-roadmap-lanes">
        {LANES.map((lane) => {
          const items = roadmap.filter((r) => r.lane === lane)
          if (items.length === 0) return null
          return (
            <Reveal key={lane}>
              <section className={`case-roadmap-lane case-roadmap-lane--${lane}`}>
                <h3>{ROADMAP_LANE_LABELS[lane]}</h3>
                <StaggerReveal className="case-roadmap-lane__items">
                  {items.map((item) => (
                    <StaggerItem key={`${item.phase}-${item.title}`}>
                      <article className="case-roadmap-item">
                        <span className="case-roadmap-item__phase">{item.phase}</span>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </article>
                    </StaggerItem>
                  ))}
                </StaggerReveal>
              </section>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
