import type { ScreenId } from '../../constants/screenshots'
import { PlatformScreenshot } from '../ui/PlatformScreenshot'
import { Reveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

type FrameworkModuleSectionProps = {
  id: string
  eyebrow: string
  title: string
  summary: string
  capabilities: Array<{ name: string; description: string }>
  patterns: string[]
  screenId: ScreenId
  variant?: 'default' | 'alt'
}

export function FrameworkModuleSection({
  id,
  eyebrow,
  title,
  summary,
  capabilities,
  patterns,
  screenId,
  variant = 'default',
}: FrameworkModuleSectionProps) {
  return (
    <Section id={id} variant={variant} ariaLabelledBy={`${id}-title`}>
      <Reveal>
        <SectionHeader
          id={`${id}-title`}
          eyebrow={eyebrow}
          title={title}
          description={summary}
          align="left"
        />
      </Reveal>

      <div className="framework-module-layout framework-module-layout--doc">
        <div className="framework-module-detail">
          <Reveal>
            <div className="framework-capabilities-grid">
              {capabilities.map((cap) => (
                <article key={cap.name} className="framework-capability-card">
                  <h3>{cap.name}</h3>
                  <p>{cap.description}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="framework-info-bar">
              <h3 className="framework-section-label">Engineering patterns</h3>
              <ul className="framework-pattern-grid">
                {patterns.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="framework-screenshot-stage">
            <PlatformScreenshot screenId={screenId} doc className="framework-module-screenshot" />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
