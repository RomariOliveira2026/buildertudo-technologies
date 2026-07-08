import { Link } from 'react-router-dom'
import { products } from '../../constants/products'
import { Reveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import { MotionButton } from '../ui/Buttons'

export function CasesSection() {
  return (
    <Section id="cases" variant="alt" ariaLabelledBy="cases-title">
      <Reveal>
        <SectionHeader
          id="cases-title"
          eyebrow="Cases"
          title="Deep dives into our products"
          description="Each BuilderTudo product has a full case study — problem, architecture, AI, results and roadmap."
        />
      </Reveal>

      <div className="cases-preview-grid">
        {products.filter((p) => p.featured).map((product) => (
          <Link key={product.slug} className="case-preview-card" to={`/cases/${product.slug}`}>
            <span className="case-preview-card__logo" aria-hidden="true">{product.logo}</span>
            <h3>{product.name}</h3>
            <p>{product.objective}</p>
            <span className="case-preview-card__link">Read case study →</span>
          </Link>
        ))}
      </div>

      <Reveal>
        <div className="section-cta-row">
          <MotionButton href="/#built-with">View all products</MotionButton>
        </div>
      </Reveal>
    </Section>
  )
}
