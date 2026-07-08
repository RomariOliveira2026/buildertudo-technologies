import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

type TechnologySectionProps = {
  stack: string[]
  aiFeatures: string[]
}

export function TechnologySection({ stack, aiFeatures }: TechnologySectionProps) {
  return (
    <Section id="technology" variant="alt" ariaLabelledBy="technology-title">
      <Reveal>
        <SectionHeader
          id="technology-title"
          eyebrow="Stack"
          title="Technologies"
          description="Production stack and AI capabilities powering this product."
          align="left"
        />
      </Reveal>
      <div className="product-tech-blocks">
        <Reveal>
          <div className="product-tech-block">
            <h3>Core stack</h3>
            <StaggerReveal className="product-tech-tags">
              {stack.map((tech) => (
                <StaggerItem key={tech}>
                  <span className="product-tech-tag">{tech}</span>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </Reveal>
        {aiFeatures.length > 0 ? (
          <Reveal>
            <div className="product-tech-block">
              <h3>AI capabilities</h3>
              <StaggerReveal className="product-tech-tags">
                {aiFeatures.map((feature) => (
                  <StaggerItem key={feature}>
                    <span className="product-tech-tag product-tech-tag--ai">{feature}</span>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
          </Reveal>
        ) : null}
      </div>
    </Section>
  )
}
