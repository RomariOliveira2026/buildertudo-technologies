import { FRAMEWORK_PACKAGES } from '../../content/framework-docs'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

const STATUS_LABELS = {
  stable: 'Stable',
  beta: 'Beta',
  experimental: 'Experimental',
} as const

export function FrameworkPackagesSection() {
  return (
    <Section id="packages" variant="alt" ariaLabelledBy="framework-packages-title">
      <Reveal>
        <SectionHeader
          id="framework-packages-title"
          eyebrow="Packages"
          title="Monorepo package registry"
          description="37 packages in the BuilderTudo monorepo — shared contracts, zero duplication across products."
          align="left"
        />
      </Reveal>

      <StaggerReveal className="framework-packages-grid">
        {FRAMEWORK_PACKAGES.map((pkg) => (
          <StaggerItem key={pkg.name}>
            <article className="framework-package-card">
              <div className="framework-package-card__head">
                <code>{pkg.name}</code>
                <span className={`framework-package-card__status framework-package-card__status--${pkg.status}`}>
                  {STATUS_LABELS[pkg.status]}
                </span>
              </div>
              <span className="framework-package-card__scope">{pkg.scope}</span>
              <p>{pkg.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
