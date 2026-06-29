import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  LEGAL_ECOSYSTEM_PRODUCTS,
  LegalCompanyIdentification,
  LegalContactDetails,
  LegalDataControllerCard,
} from '../components/legal/LegalCompanyBlocks'
import { LegalLayout } from '../components/layouts/LegalLayout'
import { CONTACT } from '../constants/contact'
import { LEGAL_ROUTES } from '../constants/routes'

export function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Política de Privacidade | BuilderTudo Technologies'
  }, [])

  return (
    <LegalLayout title="Política de Privacidade">
      <p className="legal-intro">
        A <strong>BuilderTudo Technologies</strong>, cujo slogan é{' '}
        <em>Tecnologia que transforma negócios</em>, está comprometida com a proteção
        da privacidade e dos dados pessoais de visitantes, clientes, parceiros e usuários
        de seus sites, plataformas e soluções digitais, em conformidade com a Lei Geral de
        Proteção de Dados (Lei nº 13.709/2018 — LGPD).
      </p>

      <section className="legal-section">
        <h2>1. Quem somos</h2>
        <p>
          A BuilderTudo Technologies é uma empresa de tecnologia que desenvolve plataformas
          SaaS, soluções de Inteligência Artificial, automações, sistemas web, aplicativos
          e produtos digitais para empresas. Esta Política se aplica ao uso do nosso site
          institucional e demais canais digitais operados pela empresa.
        </p>

        <LegalCompanyIdentification />
        <LegalDataControllerCard />
      </section>

      <section className="legal-section">
        <h2>2. Dados pessoais que podemos coletar</h2>
        <p>Dependendo da sua interação conosco, podemos tratar os seguintes dados:</p>
        <ul>
          <li>Dados de identificação: nome, e-mail, telefone e empresa.</li>
          <li>Dados de navegação: endereço IP, tipo de navegador, páginas visitadas, data e hora de acesso.</li>
          <li>Dados de comunicação: mensagens enviadas por formulários, e-mail ou WhatsApp.</li>
          <li>Dados técnicos: cookies, identificadores de dispositivo e preferências de uso.</li>
          <li>Dados fornecidos voluntariamente em solicitações comerciais, suporte ou cadastros.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>3. Finalidades do tratamento</h2>
        <p>Utilizamos dados pessoais para:</p>
        <ul>
          <li>Responder solicitações de contato, orçamentos e suporte.</li>
          <li>Apresentar nossos produtos, serviços e ecossistema tecnológico.</li>
          <li>Melhorar a experiência de navegação, desempenho e segurança do site.</li>
          <li>Cumprir obrigações legais, regulatórias e exercer direitos em processos.</li>
          <li>Enviar comunicações institucionais, quando houver base legal e consentimento aplicável.</li>
          <li>Prevenir fraudes, incidentes de segurança e usos indevidos de nossos canais.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>4. Bases legais</h2>
        <p>O tratamento de dados pessoais pela BuilderTudo Technologies pode ocorrer com fundamento em:</p>
        <ul>
          <li>Consentimento do titular, quando exigido.</li>
          <li>Execução de contrato ou procedimentos preliminares.</li>
          <li>Cumprimento de obrigação legal ou regulatória.</li>
          <li>Legítimo interesse, respeitados os direitos e liberdades fundamentais do titular.</li>
          <li>Exercício regular de direitos em processos judiciais, administrativos ou arbitrais.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>5. Compartilhamento de dados</h2>
        <p>
          Podemos compartilhar dados pessoais com prestadores de serviços que nos auxiliam
          em hospedagem, analytics, comunicação, infraestrutura em nuvem, CRM, segurança
          da informação e ferramentas de produtividade, sempre mediante contratos e controles
          adequados. Não vendemos dados pessoais.
        </p>
        <p>
          O compartilhamento também poderá ocorrer por determinação legal, ordem judicial
          ou autoridade competente, ou ainda para proteção dos direitos da BuilderTudo
          Technologies e de terceiros.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Cookies e tecnologias similares</h2>
        <p>
          Utilizamos cookies e tecnologias semelhantes para funcionamento do site,
          memorização de preferências, análise de desempenho e melhoria da experiência
          do usuário. Você pode gerenciar cookies nas configurações do seu navegador,
          ciente de que a desativação pode afetar algumas funcionalidades.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. Direitos do titular de dados</h2>
        <p>Nos termos da LGPD, você pode solicitar:</p>
        <ul>
          <li>Confirmação da existência de tratamento e acesso aos dados.</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.</li>
          <li>Portabilidade, quando aplicável.</li>
          <li>Eliminação dos dados tratados com consentimento, quando cabível.</li>
          <li>Informação sobre compartilhamentos e sobre a possibilidade de não consentir.</li>
          <li>Revogação do consentimento, quando essa for a base legal do tratamento.</li>
        </ul>
        <p>
          Para exercer seus direitos, entre em contato pelo e-mail{' '}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </p>
      </section>

      <section className="legal-section">
        <h2>8. Retenção e eliminação</h2>
        <p>
          Os dados pessoais serão mantidos apenas pelo tempo necessário para cumprir as
          finalidades descritas nesta Política, observados prazos legais, contratuais e
          regulatórios aplicáveis. Encerrado o prazo, os dados serão eliminados ou
          anonimizados, salvo hipóteses de conservação autorizadas em lei.
        </p>
      </section>

      <section className="legal-section">
        <h2>9. Segurança da informação</h2>
        <p>
          Adotamos medidas técnicas e administrativas compatíveis com a natureza dos
          dados tratados, incluindo controles de acesso, boas práticas de desenvolvimento,
          monitoramento e políticas internas de segurança, buscando proteger os dados
          contra acessos não autorizados, perda, alteração ou divulgação indevida.
        </p>
      </section>

      <section className="legal-section">
        <h2>10. Transferência internacional</h2>
        <p>
          Alguns fornecedores de tecnologia utilizados pela BuilderTudo Technologies
          podem processar dados em servidores localizados fora do Brasil. Nesses casos,
          adotamos salvaguardas contratuais e medidas de conformidade compatíveis com
          a LGPD.
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
        <h2>12. Encarregado e canal de contato</h2>
        <p>
          Para dúvidas, solicitações ou reclamações relacionadas a esta Política e ao
          tratamento de dados pessoais, entre em contato:
        </p>
        <LegalContactDetails />
      </section>

      <section className="legal-section">
        <h2>13. Produtos da BuilderTudo Technologies</h2>
        <p>
          Esta Política de Privacidade aplica-se ao site institucional da BuilderTudo Technologies
          e poderá ser complementada por políticas específicas dos produtos e plataformas
          pertencentes ao seu ecossistema, incluindo, entre outros, {LEGAL_ECOSYSTEM_PRODUCTS}{' '}
          e demais soluções desenvolvidas pela empresa.
        </p>
      </section>

      <section className="legal-section">
        <h2>14. Alterações desta Política</h2>
        <p>
          Esta Política de Privacidade pode ser atualizada periodicamente para refletir
          mudanças legais, tecnológicas ou operacionais. Recomendamos a revisão regular
          desta página. A data da última atualização será indicada no topo do documento.
        </p>
      </section>

      <p className="legal-footer-note">
        Consulte também nossos{' '}
        <Link to={LEGAL_ROUTES.terms}>Termos de Uso</Link>.
      </p>
    </LegalLayout>
  )
}
