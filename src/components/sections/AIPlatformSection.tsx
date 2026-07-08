import { AI_CAPABILITIES } from '../../constants/platform'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

export function AIPlatformSection() {
  return (
    <Section id="ai" ariaLabelledBy="ai-title">
      <Reveal>
        <SectionHeader
          id="ai-title"
          eyebrow="AI Platform"
          title="Governed intelligence, not uncontrolled automation"
          description="Every AI capability runs through AI-OS — with guardrails, knowledge core and decision trees. Intelligence that follows rules, not chaos."
        />
      </Reveal>

      <StaggerReveal className="ai-capabilities">
        {AI_CAPABILITIES.map((cap) => (
          <StaggerItem key={cap.id}>
            <article className="ai-capability">
              <h3>{cap.name}</h3>
              <p>{cap.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <Reveal>
        <div className="ai-governance">
          <div className="ai-governance__visual" aria-hidden="true">
            <div className="ai-governance__node ai-governance__node--center">AI-OS</div>
            <div className="ai-governance__node">Guardrails</div>
            <div className="ai-governance__node">Knowledge Core</div>
            <div className="ai-governance__node">Decision Tree</div>
            <div className="ai-governance__node">Runtime</div>
          </div>
          <p className="ai-governance__text">
            All copilots, agents and automations operate within defined governance boundaries —
            ensuring compliance, safety and predictable outcomes for enterprise clients.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
