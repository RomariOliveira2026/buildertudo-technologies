import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import type { CaseStudyReusableEngineering } from '../../types/case-study'

type CaseReusableEngineeringSectionProps = {
  reusable: CaseStudyReusableEngineering
}

const ITEMS: Array<{ key: keyof CaseStudyReusableEngineering; label: string; multi?: boolean }> = [
  { key: 'framework', label: 'Framework' },
  { key: 'goldenScreens', label: 'Golden Screens', multi: true },
  { key: 'componentLibrary', label: 'Component Library' },
  { key: 'runtime', label: 'Runtime' },
  { key: 'aiOs', label: 'AI-OS' },
  { key: 'engine', label: 'Engine' },
  { key: 'sharedDomain', label: 'Shared Domain' },
  { key: 'persistence', label: 'Persistence' },
]

export function CaseReusableEngineeringSection({ reusable }: CaseReusableEngineeringSectionProps) {
  return (
    <Section id="reusable-engineering" ariaLabelledBy="reusable-title">
      <Reveal>
        <SectionHeader
          id="reusable-title"
          eyebrow="9 — Reusable engineering"
          title="What the ecosystem accelerated"
          description="Platform assets reused across BuilderTudo products — proof that our Framework compounds engineering value."
          align="left"
        />
      </Reveal>

      <StaggerReveal className="case-reuse-grid">
        {ITEMS.map(({ key, label, multi }) => {
          const value = reusable[key]
          return (
            <StaggerItem key={key}>
              <article className="case-reuse-card">
                <h3>{label}</h3>
                {multi && Array.isArray(value) ? (
                  <ul>
                    {(value as string[]).map((v) => <li key={v}>{v}</li>)}
                  </ul>
                ) : (
                  <p>{value as string}</p>
                )}
              </article>
            </StaggerItem>
          )
        })}
      </StaggerReveal>
    </Section>
  )
}
