import { Reveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import type { CaseStudyContent } from '../../types/case-study'

type CaseArchitectureStackSectionProps = {
  architecture: CaseStudyContent['architecture']
}

export function CaseArchitectureStackSection({ architecture }: CaseArchitectureStackSectionProps) {
  const activeLayers = architecture.stack.filter((l) => l.active)

  return (
    <Section id="architecture" variant="alt" ariaLabelledBy="architecture-title">
      <Reveal>
        <SectionHeader
          id="architecture-title"
          eyebrow="3 — Architecture"
          title="Platform stack, top to bottom"
          description={architecture.summary}
          align="left"
        />
      </Reveal>

      <div className="case-arch-layout">
        <Reveal>
          <div className="case-arch-stack" aria-label="Architecture stack">
            {activeLayers.map((layer, index) => (
              <div key={layer.id} className="case-arch-stack__layer">
                <div className="case-arch-stack__node">
                  <span className="case-arch-stack__name">{layer.name}</span>
                  <p>{layer.description}</p>
                </div>
                {index < activeLayers.length - 1 ? (
                  <span className="case-arch-stack__arrow" aria-hidden="true">↓</span>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="case-arch-modules">
            <h3 className="case-section-label">Modules involved</h3>
            <ul>
              {architecture.modules.map((mod) => (
                <li key={mod}>{mod}</li>
              ))}
            </ul>
            <h3 className="case-section-label">Key decisions</h3>
            <ul className="case-decisions-list case-decisions-list--compact">
              {architecture.decisions.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
