import { FRAMEWORK_STACK } from '../../constants/platform'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import { MotionButton } from '../ui/Buttons'

export function FrameworkSection() {
  return (
    <Section id="framework" ariaLabelledBy="framework-title">
      <Reveal>
        <SectionHeader
          id="framework-title"
          eyebrow="Framework"
          title="The engineering foundation behind every product"
          description="A visual stack from design system to live products — the proprietary architecture that guarantees consistency, speed and quality."
        />
      </Reveal>

      <div className="framework-flow">
        <StaggerReveal className="framework-flow__stack">
          {FRAMEWORK_STACK.map((node, index) => (
            <StaggerItem key={node.id}>
              <div className="framework-node">
                <div className="framework-node__marker">{String(index + 1).padStart(2, '0')}</div>
                <div className="framework-node__content">
                  <h3>{node.name}</h3>
                  <p>{node.description}</p>
                </div>
                {index < FRAMEWORK_STACK.length - 1 ? (
                  <div className="framework-node__connector" aria-hidden="true">↓</div>
                ) : null}
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>

      <Reveal>
        <div className="section-cta-row">
          <MotionButton href="/framework">Full Framework Overview</MotionButton>
          <MotionButton href="#showcase" variant="secondary">View Showcase</MotionButton>
        </div>
      </Reveal>
    </Section>
  )
}
