import { featuredProducts } from '../../constants/products'
import { ProductCard } from '../cards/ProductCard'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { SectionShell, SectionTitle } from '../ui/SectionTitle'

export function Projects() {
  return (
    <SectionShell id="projetos" className="solutions alt projects-section" ariaLabelledBy="projetos-title">
      <Reveal>
        <SectionTitle
          id="projetos-title"
          title="Projetos em Destaque"
          description="Conheça alguns dos produtos proprietários que representam nossa visão de tecnologia aplicada a negócios reais."
        />
      </Reveal>

      <StaggerReveal className="projects-grid">
        {featuredProducts.map((product) => (
          <StaggerItem key={product.name}>
            <ProductCard product={product} variant="featured" />
          </StaggerItem>
        ))}
      </StaggerReveal>
    </SectionShell>
  )
}
