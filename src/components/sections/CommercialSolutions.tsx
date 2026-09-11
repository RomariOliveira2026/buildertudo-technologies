import { Section, SectionHeader } from '../ui/Section'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { useTranslation } from '../../i18n'
import { getSolutionItems } from '../../i18n/commercial'

export function CommercialSolutions() {
  const { t } = useTranslation()
  const items = getSolutionItems(t)

  return (
    <Section id="solucoes" className="commercial-solutions" ariaLabelledBy="solucoes-title">
      <Reveal>
        <SectionHeader
          id="solucoes-title"
          eyebrow={t('commercial.solutions.eyebrow')}
          title={t('commercial.solutions.title')}
          description={t('commercial.solutions.description')}
        />
      </Reveal>

      <StaggerReveal className="commercial-solutions__grid">
        {items.map((item) => (
          <StaggerItem key={item.id}>
            <article className="commercial-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
