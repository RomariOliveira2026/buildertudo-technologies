import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import type { ProductArchitectureLayer } from '../../types/product-content'

const LAYER_ICONS: Record<ProductArchitectureLayer['id'], string> = {
  framework: '◆',
  engine: '⚙',
  runtime: '▸',
  'ai-os': '◎',
  'golden-screens': '✦',
  'business-os': '⬡',
}

type ArchitectureSectionProps = {
  summary: string
  layers: ProductArchitectureLayer[]
}

export function ArchitectureSection({ summary, layers }: ArchitectureSectionProps) {
  return (
    <Section id="architecture" variant="alt" ariaLabelledBy="architecture-title">
      <Reveal>
        <SectionHeader
          id="architecture-title"
          eyebrow="Architecture"
          title="Built on the BuilderTudo Platform"
          description={summary}
          align="left"
        />
      </Reveal>
      <StaggerReveal className="product-arch-grid">
        {layers.map((layer) => (
          <StaggerItem key={layer.id}>
            <article className="product-arch-card">
              <span className="product-arch-card__icon" aria-hidden="true">{LAYER_ICONS[layer.id]}</span>
              <h3>{layer.name}</h3>
              <p>{layer.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
