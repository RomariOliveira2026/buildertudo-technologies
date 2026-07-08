import { Reveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

type ProblemSectionProps = {
  problem: string
}

export function ProblemSection({ problem }: ProblemSectionProps) {
  return (
    <Section id="problem" variant="alt" ariaLabelledBy="problem-title">
      <Reveal>
        <SectionHeader
          id="problem-title"
          eyebrow="Problem"
          title="The challenge"
          description={problem}
          align="left"
        />
      </Reveal>
    </Section>
  )
}
