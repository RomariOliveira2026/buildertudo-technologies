import { getProcessSteps } from '../../i18n/content'
import { useTranslation } from '../../i18n'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import { MotionButton } from '../ui/Buttons'

const PROCESS_ICONS = ['◎', '◆', '⬡', '▣', '✦', '◇', '↑', '∞']

export function ProcessSection() {
  const { t } = useTranslation()
  const steps = getProcessSteps(t)

  return (
    <Section id="process" ariaLabelledBy="process-title">
      <Reveal>
        <SectionHeader
          id="process-title"
          eyebrow={t('method.eyebrow')}
          title={t('method.title')}
          description={t('method.description')}
        />
      </Reveal>

      <StaggerReveal className="process-grid">
        {steps.map((step, index) => (
          <StaggerItem key={step.step}>
            <article className="process-step">
              <div className="process-step__head">
                <div className="process-step__icon" aria-hidden="true">
                  {PROCESS_ICONS[index] ?? '◆'}
                </div>
                <span className="process-step__num">{step.step}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <Reveal>
        <div className="section-cta-row">
          <MotionButton href="/method">{t('method.ctaFull')}</MotionButton>
          <MotionButton href="mailto:contato@buildertudo.com?subject=Schedule%20Discovery" variant="secondary">
            {t('method.ctaSchedule')}
          </MotionButton>
        </div>
      </Reveal>
    </Section>
  )
}
