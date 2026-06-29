import { studioServices } from '../../constants/content'
import { MotionButton } from '../ui/Buttons'
import { Reveal } from '../ui/Reveal'
import { SectionShell } from '../ui/SectionTitle'

export function Studio() {
  return (
    <SectionShell id="studio" className="solutions studio-section" ariaLabelledBy="studio-title">
      <div className="studio-layout">
        <Reveal className="studio-copy">
          <span className="mini-badge">Divisão sob demanda</span>
          <h2 id="studio-title">BuilderTudo Studio</h2>
          <p>
            A BuilderTudo Studio é a divisão de desenvolvimento sob demanda da
            BuilderTudo Technologies. Criamos sites, landing pages, sistemas, identidades
            visuais, automações e soluções com IA para empresas que precisam de execução
            digital com agilidade, qualidade e visão estratégica.
          </p>
          <ul className="studio-list">
            {studioServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          <MotionButton href="#contato">Solicitar projeto no Studio</MotionButton>
        </Reveal>

        <Reveal className="studio-panel" delay={0.1}>
          <div className="studio-panel-inner">
            <span className="studio-tag">Studio</span>
            <h3>Desenvolvimento digital premium</h3>
            <p>
              Projetos sob medida com foco em conversão, performance, identidade de marca
              e integração com o ecossistema BuilderTudo.
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  )
}
