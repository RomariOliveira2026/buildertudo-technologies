import { Section, SectionHeader } from '../ui/Section'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { useTranslation } from '../../i18n'
import { getSegments } from '../../i18n/commercial'

export function CommercialSegments() {
  const { t } = useTranslation()
  const items = getSegments(t)

  return (
    <Section id="segmentos" className="commercial-segments" ariaLabelledBy="segmentos-title">
      <Reveal>
        <SectionHeader
          id="segmentos-title"
          eyebrow={t('commercial.segments.eyebrow')}
          title={t('commercial.segments.title')}
          description={t('commercial.segments.description')}
        />
      </Reveal>

      <StaggerReveal className="commercial-segments__grid">
        {items.map((item) => (
          <StaggerItem key={item.id}>
            <p className="segment-chip">{item.title}</p>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
