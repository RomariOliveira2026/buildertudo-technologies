import { Reveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import { MotionButton } from '../ui/Buttons'
import { BusinessOSShowcase } from '../business-os'
import { useTranslation } from '../../i18n'

export function BusinessOSSection() {
  const { t } = useTranslation()

  return (
    <Section id="business-os" variant="alt" ariaLabelledBy="business-os-title">
      <Reveal>
        <SectionHeader
          id="business-os-title"
          eyebrow={t('businessOS.eyebrow')}
          title={t('businessOS.title')}
          description={t('businessOS.description')}
        />
      </Reveal>

      <Reveal>
        <BusinessOSShowcase compact />
      </Reveal>

      <Reveal>
        <div className="section-cta-row">
          <MotionButton href="/business-os">{t('businessOS.ctaExplore')}</MotionButton>
          <MotionButton href="/live" variant="secondary">{t('businessOS.ctaLive')}</MotionButton>
        </div>
      </Reveal>
    </Section>
  )
}
