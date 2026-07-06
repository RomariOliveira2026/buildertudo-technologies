import { SERVICES } from '../../constants/services'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

export function ServicesSection() {
  return (
    <Section id="services" variant="alt" ariaLabelledBy="services-title">
      <Reveal>
        <SectionHeader
          id="services-title"
          eyebrow="Services"
          title="High-value engagements for global clients"
          description="From Upwork projects to enterprise contracts — we deliver with transparent sprints, senior engineers and the full BuilderTudo platform behind every line of code."
        />
      </Reveal>

      <StaggerReveal className="services-grid">
        {SERVICES.map((service) => (
          <StaggerItem key={service.id}>
            <article className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul aria-label={`${service.title} deliverables`}>
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
