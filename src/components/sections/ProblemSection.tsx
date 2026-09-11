import { Section, SectionHeader } from '../ui/Section'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { useTranslation } from '../../i18n'
import { getProblemItems } from '../../i18n/commercial'

export function ProblemSection() {
  const { t } = useTranslation()
  const items = getProblemItems(t)

  return (
    <Section id="problema" className="commercial-problem" variant="alt" ariaLabelledBy="problema-title">
      <Reveal>
        <SectionHeader
          id="problema-title"
          eyebrow={t('commercial.problem.eyebrow')}
          title={t('commercial.problem.title')}
          description={t('commercial.problem.description')}
        />
      </Reveal>

      <StaggerReveal className="commercial-problem__grid" aria-label={t('commercial.problem.title')}>
        {items.map((item) => (
          <StaggerItem key={item.id}>
            <article className="commercial-problem__card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <Reveal delay={0.08}>
        <p className="commercial-problem__transition">{t('commercial.problem.transition')}</p>
      </Reveal>
    </Section>
  )
}
