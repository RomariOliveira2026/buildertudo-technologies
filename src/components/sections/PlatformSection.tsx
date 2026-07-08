import { PLATFORM_LAYERS } from '../../constants/platform'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import { MotionButton } from '../ui/Buttons'

export function PlatformSection() {
  return (
    <Section id="platform" variant="alt" ariaLabelledBy="platform-title">
      <Reveal>
        <SectionHeader
          id="platform-title"
          eyebrow="The BuilderTudo Platform"
          title="A proprietary stack — not a stack of tools."
          description="Framework, AI-OS, Engine, Runtime, Business OS and Golden Screens. One integrated platform we engineered ourselves, so every project ships faster, safer and at product grade."
        />
      </Reveal>

      <StaggerReveal className="platform-pillars">
        {PLATFORM_LAYERS.map((layer) => (
          <StaggerItem key={layer.id}>
            <article className="platform-pillar">
              <span className="platform-pillar__tag">{layer.tag}</span>
              <h3>{layer.name}</h3>
              <p>{layer.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <Reveal>
        <div className="platform-cta-row">
          <MotionButton href="/framework">Explore Framework</MotionButton>
          <MotionButton href="/#business-os" variant="secondary">Explore Business OS</MotionButton>
          <MotionButton href="/#products" variant="ghost">View products</MotionButton>
        </div>
      </Reveal>
    </Section>
  )
}
