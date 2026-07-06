import type { CSSProperties } from 'react'
import { ECOSYSTEM_LAYERS } from '../../constants/ecosystem'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

export function PlatformSection() {
  return (
    <Section id="platform" variant="alt" ariaLabelledBy="platform-title">
      <Reveal>
        <SectionHeader
          id="platform-title"
          eyebrow="Platform"
          title="The BuilderTudo ecosystem"
          description="Seven integrated layers — from architectural foundation to live showcase — powering every product we build and every client project we deliver."
        />
      </Reveal>

      <StaggerReveal className="ecosystem-layers">
        {ECOSYSTEM_LAYERS.map((layer) => (
          <StaggerItem key={layer.id}>
            <article
              className="layer-card"
              style={{ '--layer-accent': layer.accent } as CSSProperties}
            >
              <div className="layer-card__head">
                <span className="layer-card__tag">{layer.tagline}</span>
                <h3>{layer.name}</h3>
              </div>
              <p>{layer.description}</p>
              <ul className="layer-card__caps" aria-label={`${layer.name} capabilities`}>
                {layer.capabilities.map((cap) => (
                  <li key={cap}>{cap}</li>
                ))}
              </ul>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
