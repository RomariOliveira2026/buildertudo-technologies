import { Link } from 'react-router-dom'
import { Section, SectionHeader } from '../ui/Section'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { useTranslation } from '../../i18n'
import { getPortfolioItems } from '../../i18n/commercial'
import { ANALYTICS_EVENTS } from '../../config/commercial'
import { trackEvent } from '../../lib/analytics'

export function CommercialPortfolio() {
  const { t } = useTranslation()
  const items = getPortfolioItems(t)

  return (
    <Section id="projetos" className="commercial-portfolio" variant="alt" ariaLabelledBy="projetos-title">
      <Reveal>
        <SectionHeader
          id="projetos-title"
          eyebrow={t('commercial.portfolio.eyebrow')}
          title={t('commercial.portfolio.title')}
          description={t('commercial.portfolio.description')}
        />
      </Reveal>

      <StaggerReveal className="commercial-portfolio__grid">
        {items.map((item) => (
          <StaggerItem key={item.id}>
            <article className="portfolio-card">
              <p className="portfolio-card__owner">{item.ownerLabel}</p>
              <h3>{item.name}</h3>
              <p className="portfolio-card__category">{item.category}</p>
              <p>{item.description}</p>
              <Link
                className="portfolio-card__cta"
                to={item.href}
                onClick={() => trackEvent(ANALYTICS_EVENTS.viewPortfolio, { project: item.id })}
              >
                {t('commercial.portfolio.cta')}
              </Link>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
