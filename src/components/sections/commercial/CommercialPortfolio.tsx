import { Link } from 'react-router-dom'
import { featuredProducts } from '../../../constants/products'
import { commercialCopy, getPortfolioProjectDescription } from '../../../i18n/commercial'
import { useTranslation } from '../../../i18n'
import { trackPortfolioView } from '../../../lib/commercial-whatsapp'
import { Reveal, StaggerItem, StaggerReveal } from '../../ui/Reveal'
import { Section, SectionHeader } from '../../ui/Section'

export function CommercialPortfolio() {
  const { locale } = useTranslation()
  const copy = commercialCopy[locale]

  return (
    <Section id="portfolio" className="cm-portfolio" ariaLabelledBy="portfolio-title">
      <Reveal>
        <SectionHeader
          id="portfolio-title"
          eyebrow={copy.portfolio.eyebrow}
          title={copy.portfolio.title}
          description={copy.portfolio.lead}
        />
      </Reveal>

      <StaggerReveal className="cm-card-grid cm-card-grid--portfolio">
        {featuredProducts.map((product) => (
          <StaggerItem key={product.slug}>
            <article className="cm-card cm-card--portfolio">
              <span className="cm-portfolio__badge">{copy.portfolio.badge}</span>
              <h3 translate="no">{product.name}</h3>
              <p>{getPortfolioProjectDescription(locale, product.slug, product.description)}</p>
              <Link
                className="cm-portfolio__link"
                to={product.href ?? `/products/${product.slug}`}
                onClick={() => trackPortfolioView(product.slug)}
              >
                {copy.portfolio.view} →
              </Link>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
