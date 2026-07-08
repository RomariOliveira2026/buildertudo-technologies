import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import type { CaseStudyTechStack } from '../../types/case-study'

const TECH_GROUPS: Array<{ key: keyof CaseStudyTechStack; label: string }> = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'ai', label: 'AI' },
  { key: 'database', label: 'Database' },
  { key: 'infrastructure', label: 'Infrastructure' },
  { key: 'deploy', label: 'Deploy' },
  { key: 'framework', label: 'Framework' },
  { key: 'integrations', label: 'Integrations' },
]

type CaseTechnologyGridSectionProps = {
  technologies: CaseStudyTechStack
  aiCapabilities: string[]
}

export function CaseTechnologyGridSection({ technologies, aiCapabilities }: CaseTechnologyGridSectionProps) {
  return (
    <Section id="technology" ariaLabelledBy="technology-title">
      <Reveal>
        <SectionHeader
          id="technology-title"
          eyebrow="4 — Technologies"
          title="Production stack"
          description="Every layer chosen for maintainability, scale and alignment with the BuilderTudo Platform."
          align="left"
        />
      </Reveal>

      <StaggerReveal className="case-tech-grid">
        {TECH_GROUPS.map(({ key, label }) => {
          const items = technologies[key]
          if (items.length === 0) return null
          return (
            <StaggerItem key={key}>
              <article className="case-tech-group">
                <h3>{label}</h3>
                <ul>
                  {items.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          )
        })}
      </StaggerReveal>

      {aiCapabilities.length > 0 ? (
        <Reveal>
          <div className="case-tech-ai">
            <h3 className="case-section-label">AI capabilities</h3>
            <div className="product-tech-tags">
              {aiCapabilities.map((cap) => (
                <span key={cap} className="product-tech-tag product-tech-tag--ai">{cap}</span>
              ))}
            </div>
          </div>
        </Reveal>
      ) : null}
    </Section>
  )
}
