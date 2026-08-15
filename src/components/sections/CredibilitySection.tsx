import { CREDIBILITY_METRICS } from '../../constants/credibility'
import { useTranslation } from '../../i18n'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

const LABEL_KEYS: Record<(typeof CREDIBILITY_METRICS)[number]['id'], string> = {
  health: 'credibility.health',
  packages: 'credibility.packages',
  'golden-screens': 'credibility.goldenScreens',
  components: 'credibility.components',
  products: 'credibility.products',
  tests: 'credibility.tests',
  'ai-copilots': 'credibility.aiCopilots',
  'business-os': 'credibility.businessOs',
}

export function CredibilitySection() {
  const { t } = useTranslation()

  return (
    <Section id="credibility" variant="dark" ariaLabelledBy="credibility-title">
      <Reveal>
        <SectionHeader
          id="credibility-title"
          eyebrow={t('credibility.eyebrow')}
          title={t('credibility.title')}
          description={t('credibility.description')}
        />
      </Reveal>

      <StaggerReveal className="credibility-grid">
        {CREDIBILITY_METRICS.map((metric) => (
          <StaggerItem key={metric.id}>
            <div className="credibility-card">
              <strong>{metric.value}</strong>
              <span>{t(LABEL_KEYS[metric.id])}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
