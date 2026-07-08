import { Reveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

type SolutionSectionProps = {
  solution: string
  features: string[]
}

export function SolutionSection({ solution, features }: SolutionSectionProps) {
  return (
    <Section id="solution" ariaLabelledBy="solution-title">
      <Reveal>
        <SectionHeader
          id="solution-title"
          eyebrow="Solution"
          title="How we solve it"
          description={solution}
          align="left"
        />
      </Reveal>
      <Reveal>
        <ul className="product-features-list" aria-label="Key features">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
