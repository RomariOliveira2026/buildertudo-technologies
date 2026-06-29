import { products } from '../../constants/products'
import { ProductCard } from '../cards/ProductCard'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { SectionShell, SectionTitle } from '../ui/SectionTitle'

export function Ecosystem() {
  return (
    <SectionShell id="ecossistema" className="solutions ecosystem-section" ariaLabelledBy="ecossistema-title">
      <Reveal>
        <SectionTitle
          id="ecossistema-title"
          title="Nosso Ecossistema"
          description="Um portfólio de plataformas e produtos digitais criados para resolver desafios reais em diferentes mercados e acelerar a transformação tecnológica."
        />
      </Reveal>

      <StaggerReveal className="ecosystem-grid">
        {products.map((product) => (
          <StaggerItem key={product.name}>
            <ProductCard product={product} variant="ecosystem" />
          </StaggerItem>
        ))}
      </StaggerReveal>
    </SectionShell>
  )
}
