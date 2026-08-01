import { Reveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import { MotionButton } from '../ui/Buttons'
import { BusinessOSShowcase } from '../business-os'

export function BusinessOSSection() {
  return (
    <Section id="business-os" variant="alt" ariaLabelledBy="business-os-title">
      <Reveal>
        <SectionHeader
          id="business-os-title"
          eyebrow="Business OS"
          title="Enterprise software we use every day"
          description="Command Center, AI Copilot, live activity, product portfolio, analytics and Framework health — the same platform we offer enterprise clients."
        />
      </Reveal>

      <Reveal>
        <BusinessOSShowcase compact />
      </Reveal>

      <Reveal>
        <div className="section-cta-row">
          <MotionButton href="/business-os">Explore Business OS</MotionButton>
          <MotionButton href="/live" variant="secondary">View live status</MotionButton>
        </div>
      </Reveal>
    </Section>
  )
}
