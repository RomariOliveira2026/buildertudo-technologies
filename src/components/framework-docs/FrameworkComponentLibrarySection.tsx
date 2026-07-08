import { FRAMEWORK_COMPONENT_LIBRARY } from '../../content/framework-docs'
import { PlatformScreenshot } from '../ui/PlatformScreenshot'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

export function FrameworkComponentLibrarySection() {
  return (
    <Section id="component-library" ariaLabelledBy="framework-cl-title">
      <Reveal>
        <SectionHeader
          id="framework-cl-title"
          eyebrow="Component Library"
          title="80+ production-ready components"
          description={FRAMEWORK_COMPONENT_LIBRARY.summary}
          align="left"
        />
      </Reveal>

      <div className="framework-distribute-panel">
        <StaggerReveal className="framework-component-categories">
          {FRAMEWORK_COMPONENT_LIBRARY.categories.map((cat) => (
            <StaggerItem key={cat.name}>
              <article className="framework-component-card">
                <div className="framework-component-card__head">
                  <h3>{cat.name}</h3>
                  <span className="framework-component-card__count">{cat.count}</span>
                </div>
                <ul>
                  {cat.examples.map((ex) => <li key={ex}><code>{ex}</code></li>)}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <Reveal>
          <div className="framework-info-bar">
            <h3 className="framework-section-label">Quality standards</h3>
            <ul className="framework-pattern-grid">
              {FRAMEWORK_COMPONENT_LIBRARY.standards.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="framework-screenshot-stage">
          <PlatformScreenshot screenId={FRAMEWORK_COMPONENT_LIBRARY.screenId} doc className="framework-doc-screenshot-block" />
        </div>
      </Reveal>
    </Section>
  )
}
