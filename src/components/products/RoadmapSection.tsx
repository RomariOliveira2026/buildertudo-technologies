import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import type { ProductRoadmapItem } from '../../types/product-content'

const STATUS_LABELS: Record<ProductRoadmapItem['status'], string> = {
  done: 'Shipped',
  'in-progress': 'In progress',
  planned: 'Planned',
}

type RoadmapSectionProps = {
  roadmap: ProductRoadmapItem[]
}

export function RoadmapSection({ roadmap }: RoadmapSectionProps) {
  return (
    <Section id="roadmap" ariaLabelledBy="roadmap-title">
      <Reveal>
        <SectionHeader
          id="roadmap-title"
          eyebrow="Roadmap"
          title="What's next"
          description="Public product roadmap — phases and delivery status."
          align="left"
        />
      </Reveal>
      <div className="product-roadmap">
        <StaggerReveal className="product-roadmap__track">
          {roadmap.map((item, index) => (
            <StaggerItem key={`${item.phase}-${item.title}`}>
              <article className={`product-roadmap__item product-roadmap__item--${item.status}`}>
                <div className="product-roadmap__marker" aria-hidden="true">
                  <span className="product-roadmap__dot" />
                  {index < roadmap.length - 1 ? <span className="product-roadmap__line" /> : null}
                </div>
                <div className="product-roadmap__content">
                  <div className="product-roadmap__head">
                    <span className="product-roadmap__phase">{item.phase}</span>
                    <span className={`product-roadmap__status product-roadmap__status--${item.status}`}>
                      {STATUS_LABELS[item.status]}
                    </span>
                  </div>
                  <h3>{item.title}</h3>
                  {item.description ? <p>{item.description}</p> : null}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </Section>
  )
}
