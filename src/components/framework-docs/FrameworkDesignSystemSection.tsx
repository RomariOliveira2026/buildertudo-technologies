import { FRAMEWORK_DESIGN_SYSTEM } from '../../content/framework-docs'
import { PlatformScreenshot } from '../ui/PlatformScreenshot'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

export function FrameworkDesignSystemSection() {
  return (
    <Section id="design-system" variant="alt" ariaLabelledBy="framework-ds-title">
      <Reveal>
        <SectionHeader
          id="framework-ds-title"
          eyebrow="Design System"
          title="Token-based design language"
          description={FRAMEWORK_DESIGN_SYSTEM.summary}
          align="left"
        />
      </Reveal>

      <div className="framework-distribute-panel">
        <StaggerReveal className="framework-token-grid">
          {FRAMEWORK_DESIGN_SYSTEM.tokens.map((group) => (
            <StaggerItem key={group.name}>
              <article className="framework-token-card">
                <h3>{group.name}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <Reveal>
          <div className="framework-info-bar">
            <h3 className="framework-section-label">Principles</h3>
            <ul className="framework-pattern-grid">
              {FRAMEWORK_DESIGN_SYSTEM.principles.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="framework-screenshot-stage">
          <PlatformScreenshot screenId={FRAMEWORK_DESIGN_SYSTEM.screenId} doc className="framework-doc-screenshot-block" />
        </div>
      </Reveal>
    </Section>
  )
}
