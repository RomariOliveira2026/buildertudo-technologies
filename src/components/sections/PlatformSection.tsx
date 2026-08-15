import { getPlatformLayers } from '../../i18n/content'
import { useTranslation } from '../../i18n'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import { MotionButton } from '../ui/Buttons'

export function PlatformSection() {
  const { t } = useTranslation()
  const layers = getPlatformLayers(t)

  return (
    <Section id="platform" variant="alt" ariaLabelledBy="platform-title">
      <Reveal>
        <SectionHeader
          id="platform-title"
          eyebrow={t('platform.eyebrow')}
          title={t('platform.title')}
          description={t('platform.description')}
        />
      </Reveal>

      <StaggerReveal className="platform-pillars">
        {layers.map((layer) => (
          <StaggerItem key={layer.id}>
            <article className="platform-pillar">
              <span className="platform-pillar__tag">{layer.tag}</span>
              <h3>{layer.name}</h3>
              <p>{layer.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <Reveal>
        <div className="platform-cta-row">
          <MotionButton href="/framework">{t('platform.ctaFramework')}</MotionButton>
          <MotionButton href="/#business-os" variant="secondary">{t('platform.ctaBusinessOs')}</MotionButton>
          <MotionButton href="/#products" variant="ghost">{t('platform.ctaProducts')}</MotionButton>
        </div>
      </Reveal>
    </Section>
  )
}
