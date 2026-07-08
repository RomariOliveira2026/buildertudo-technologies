import { FRAMEWORK_ARCHITECTURE_LAYERS } from '../../content/framework-docs'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

export function FrameworkArchitectureSection() {
  return (
    <Section id="architecture" ariaLabelledBy="framework-arch-title">
      <Reveal>
        <SectionHeader
          id="framework-arch-title"
          eyebrow="Architecture"
          title="Layered platform stack"
          description="Seven layers from engineering foundation to market-facing products. Every official BuilderTudo product inherits this stack."
          align="left"
        />
      </Reveal>

      <div className="framework-arch-layout">
        <Reveal>
          <div className="framework-arch-stack" aria-label="Platform architecture layers">
            {FRAMEWORK_ARCHITECTURE_LAYERS.map((layer, index) => (
              <div key={layer.id} className="framework-arch-stack__layer">
                <div className="framework-arch-stack__node">
                  <span className="framework-arch-stack__tag">{layer.tag}</span>
                  <span className="framework-arch-stack__name">{layer.name}</span>
                  <p>{layer.description}</p>
                </div>
                {index < FRAMEWORK_ARCHITECTURE_LAYERS.length - 1 ? (
                  <span className="framework-arch-stack__arrow" aria-hidden="true">↓</span>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>

        <StaggerReveal className="framework-arch-cards">
          {FRAMEWORK_ARCHITECTURE_LAYERS.map((layer) => (
            <StaggerItem key={layer.id}>
              <article className="framework-tech-card" id={`arch-${layer.id}`}>
                <header>
                  <span className="framework-tech-card__tag">{layer.tag}</span>
                  <h3>{layer.name}</h3>
                </header>
                <div className="framework-tech-card__cols">
                  <div>
                    <h4>Responsibilities</h4>
                    <ul>
                      {layer.responsibilities.map((r) => <li key={r}>{r}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4>Outputs</h4>
                    <ul className="framework-tech-card__outputs">
                      {layer.outputs.map((o) => <li key={o}>{o}</li>)}
                    </ul>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </Section>
  )
}
