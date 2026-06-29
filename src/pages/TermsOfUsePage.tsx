import { Link } from 'react-router-dom'
import { PageMeta } from '../components/seo/PageMeta'
import {
  LEGAL_ECOSYSTEM_PRODUCTS,
  LegalCompanyIdentification,
  LegalContactDetails,
  LegalSiteOperatorCard,
} from '../components/legal/LegalCompanyBlocks'
import { LegalLayout } from '../components/layouts/LegalLayout'
import { LEGAL_ROUTES } from '../constants/routes'

export function TermsOfUsePage() {
  return (
    <>
      <PageMeta
        title="Termos de Uso"
        description="Termos de Uso do site institucional da BuilderTudo Technologies."
        path="/termos-de-uso"
      />

      <LegalLayout title="Termos de Uso">
      <p className="legal-intro">
        Estes Termos de Uso regulam o acesso e a utilização do site institucional da{' '}
        <strong>BuilderTudo Technologies</strong>, cujo slogan é{' '}
        <em>Tecnologia que transforma negócios</em>. Ao navegar neste site, você declara
        ter lido, compreendido e concordado com as condições abaixo.
      </p>

      <section className="legal-section">
        <h2>1. Quem somos</h2>
        <p>
          A BuilderTudo Technologies é uma empresa de tecnologia que desenvolve plataformas
          SaaS, soluções de Inteligência Artificial, automações, sistemas web, aplicativos
          e produtos digitais para empresas. Estes Termos se aplicam ao uso do nosso site
          institucional e demais canais digitais operados pela empresa.
        </p>

        <LegalCompanyIdentification />
        <LegalSiteOperatorCard />
      </section>

      <section className="legal-section">
        <h2>2. Aceitação dos Termos</h2>
        <p>
          O uso deste site implica concordância com estes Termos de Uso e com nossa{' '}
          <Link to={LEGAL_ROUTES.privacy}>Política de Privacidade</Link>. Se você não
          concordar com qualquer disposição, recomendamos interromper a navegação.
        </p>
      </section>

      <section className="legal-section">
        <h2>3. Sobre o site</h2>
        <p>
          Este site tem caráter institucional e informativo, apresentando a BuilderTudo
          Technologies, seu ecossistema de produtos, soluções tecnológicas, cases,
          capacidades técnicas e canais de contato. Salvo indicação expressa em contrato
          específico, o conteúdo aqui disponibilizado não constitui proposta comercial
          vinculante.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. Uso permitido</h2>
        <p>Você concorda em utilizar o site de forma lícita, respeitosa e adequada, sendo vedado:</p>
        <ul>
          <li>Violar leis, regulamentos ou direitos de terceiros.</li>
          <li>Tentar acessar áreas restritas, sistemas ou códigos sem autorização.</li>
          <li>Introduzir malware, realizar ataques, scraping abusivo ou sobrecarga de infraestrutura.</li>
          <li>Copiar, reproduzir ou explorar comercialmente conteúdos sem permissão prévia.</li>
          <li>Utilizar o site para fins fraudulentos, enganosos ou concorrência desleal.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>5. Propriedade intelectual</h2>
        <p>
          Marcas, logotipos, textos, layout, identidade visual, nomes de produtos,
          ilustrações, códigos, vídeos e demais conteúdos exibidos neste site são de
          titularidade da BuilderTudo Technologies ou licenciados para seu uso, sendo
          protegidos pela legislação aplicável. É proibida a reprodução, distribuição
          ou modificação sem autorização expressa.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Produtos, serviços e informações</h2>
        <p>
          As descrições de produtos, plataformas SaaS, soluções de IA, automações,
          sistemas web, aplicativos e serviços do ecossistema BuilderTudo têm finalidade
          informativa. Funcionalidades, disponibilidade, prazos, valores e condições
          comerciais serão definidos em propostas, contratos ou documentos específicos
          quando aplicável.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. Links externos</h2>
        <p>
          O site pode conter links para páginas de terceiros, como redes sociais,
          parceiros ou ferramentas externas. A BuilderTudo Technologies não se
          responsabiliza pelo conteúdo, políticas ou práticas de sites de terceiros.
          Recomendamos a leitura dos termos e políticas aplicáveis ao acessá-los.
        </p>
      </section>

      <section className="legal-section">
        <h2>8. Disponibilidade do site</h2>
        <p>
          Empregamos esforços razoáveis para manter o site disponível, seguro e
          atualizado, mas não garantimos operação ininterrupta ou livre de erros.
          Reservamo-nos o direito de modificar, suspender ou descontinuar conteúdos
          ou funcionalidades a qualquer momento, quando necessário.
        </p>
      </section>

      <section className="legal-section">
        <h2>9. Limitação de responsabilidade</h2>
        <p>
          Na extensão permitida pela legislação aplicável, a BuilderTudo Technologies
          não se responsabiliza por danos indiretos, lucros cessantes, perda de dados
          ou prejuízos decorrentes do uso ou impossibilidade de uso do site, salvo
          dolo ou culpa grave devidamente comprovados. Informações do site não
          substituem assessoria jurídica, contábil, técnica ou comercial individualizada.
        </p>
      </section>

      <section className="legal-section">
        <h2>10. Privacidade e proteção de dados</h2>
        <p>
          O tratamento de dados pessoais realizado por meio deste site é regido pela
          nossa <Link to={LEGAL_ROUTES.privacy}>Política de Privacidade</Link>, em
          conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
        </p>
      </section>

      <section className="legal-section">
        <h2>11. Uso de Inteligência Artificial</h2>
        <p>
          Alguns serviços, plataformas e produtos desenvolvidos pela BuilderTudo Technologies
          poderão utilizar recursos de Inteligência Artificial para automatizar processos,
          gerar conteúdo, apoiar análises ou fornecer respostas inteligentes. Sempre que
          aplicável, essas tecnologias serão utilizadas de forma responsável, observando a
          legislação vigente, princípios de transparência, segurança da informação e respeito
          aos direitos dos titulares de dados.
        </p>
      </section>

      <section className="legal-section">
        <h2>12. Legislação aplicável e foro</h2>
        <p>
          Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica
          eleito o foro da comarca de Itabaiana/Sergipe, salvo disposição legal em
          contrário, para dirimir controvérsias oriundas destes Termos.
        </p>
      </section>

      <section className="legal-section">
        <h2>13. Contato</h2>
        <p>Para dúvidas, solicitações ou comunicações relacionadas a estes Termos de Uso:</p>
        <LegalContactDetails />
      </section>

      <section className="legal-section">
        <h2>14. Produtos da BuilderTudo Technologies</h2>
        <p>
          Estes Termos de Uso aplicam-se ao site institucional da BuilderTudo Technologies
          e poderão ser complementados por termos específicos dos produtos e plataformas
          pertencentes ao seu ecossistema, incluindo, entre outros, {LEGAL_ECOSYSTEM_PRODUCTS}{' '}
          e demais soluções desenvolvidas pela empresa.
        </p>
      </section>

      <section className="legal-section">
        <h2>15. Alterações destes Termos</h2>
        <p>
          Estes Termos de Uso podem ser atualizados periodicamente para refletir mudanças
          legais, tecnológicas ou operacionais. Recomendamos a revisão regular desta página.
          A data da última atualização será indicada no topo do documento.
        </p>
      </section>

      <p className="legal-footer-note">
        Consulte também nossa{' '}
        <Link to={LEGAL_ROUTES.privacy}>Política de Privacidade</Link>.
      </p>
    </LegalLayout>
    </>
  )
}
