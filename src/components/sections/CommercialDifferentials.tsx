import { Section, SectionHeader } from '../ui/Section'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { useTranslation } from '../../i18n'
import { getDifferentials } from '../../i18n/commercial'

export function CommercialDifferentials() {
  const { t } = useTranslation()
  const items = getDifferentials(t)

  return (
    <Section id="diferenciais" className="commercial-differentials" variant="alt" ariaLabelledBy="diferenciais-title">
      <Reveal>
        <SectionHeader
          id="diferenciais-title"
          eyebrow={t('commercial.differentials.eyebrow')}
          title={t('commercial.differentials.title')}
          description={t('commercial.differentials.description')}
        />
      </Reveal>

      <StaggerReveal className="commercial-differentials__grid">
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
