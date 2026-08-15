import { getHomeServices } from '../../i18n/content'
import { useTranslation } from '../../i18n'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import { MotionButton } from '../ui/Buttons'

export function ServicesSection() {
  const { t } = useTranslation()
  const services = getHomeServices(t)

  return (
    <Section id="services" variant="alt" ariaLabelledBy="services-title">
      <Reveal>
        <SectionHeader
          id="services-title"
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          description={t('services.description')}
        />
      </Reveal>

      <StaggerReveal className="services-grid">
        {services.map((service) => (
          <StaggerItem key={service.id}>
            <article className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p className="service-card__diff">{service.differentiator}</p>
              <ul aria-label={t('services.deliverablesAria', { values: { title: service.title } })}>
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <Reveal>
        <div className="section-cta-row">
          <MotionButton href="/#contact">{t('services.ctaStart')}</MotionButton>
          <MotionButton href="mailto:contato@buildertudo.com?subject=Book%20a%20Discovery%20Call" variant="secondary">
            {t('services.ctaBook')}
          </MotionButton>
          <MotionButton href="/framework" variant="ghost">{t('services.ctaFramework')}</MotionButton>
        </div>
      </Reveal>
    </Section>
  )
}
