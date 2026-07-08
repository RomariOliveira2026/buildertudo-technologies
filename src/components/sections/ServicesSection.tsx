import { SERVICES } from '../../constants/services'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import { MotionButton } from '../ui/Buttons'

const HOME_SERVICE_IDS = [
  'ai-product-engineering',
  'enterprise-saas',
  'business-operating-systems',
  'ai-integration',
  'internal-platforms',
  'architecture',
] as const

const HOME_SERVICES = HOME_SERVICE_IDS.map((id) => SERVICES.find((s) => s.id === id)).filter(
  (s): s is (typeof SERVICES)[number] => Boolean(s),
)

export function ServicesSection() {
  return (
    <Section id="services" variant="alt" ariaLabelledBy="services-title">
      <Reveal>
        <SectionHeader
          id="services-title"
          eyebrow="Services"
          title="Platform engineering, not programming"
          description="We sell engineering capability backed by a proprietary platform — every engagement inherits Framework, AI-OS and Business OS."
        />
      </Reveal>

      <StaggerReveal className="services-grid">
        {HOME_SERVICES.map((service) => (
          <StaggerItem key={service.id}>
            <article className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p className="service-card__diff">{service.differentiator}</p>
              <ul aria-label={`${service.title} deliverables`}>
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <Reveal>
        <div className="section-cta-row">
          <MotionButton href="#contact">Start a project</MotionButton>
          <MotionButton href="mailto:contato@buildertudo.com?subject=Book%20a%20Discovery%20Call" variant="secondary">
            Book a discovery call
          </MotionButton>
          <MotionButton href="/framework" variant="ghost">Explore the Framework</MotionButton>
        </div>
      </Reveal>
    </Section>
  )
}
