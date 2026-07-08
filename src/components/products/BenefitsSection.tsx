import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

type BenefitsSectionProps = {
  benefits: string[]
}

export function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <Section id="benefits" variant="alt" ariaLabelledBy="benefits-title">
      <Reveal>
        <SectionHeader
          id="benefits-title"
          eyebrow="Impact"
          title="Results delivered"
          description="Measurable outcomes from production usage and engineering learnings."
          align="left"
        />
      </Reveal>
      <StaggerReveal className="product-benefits-grid">
        {benefits.map((benefit) => (
          <StaggerItem key={benefit}>
            <div className="product-benefit-card">
              <span className="product-benefit-card__check" aria-hidden="true">✓</span>
              <p>{benefit}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
