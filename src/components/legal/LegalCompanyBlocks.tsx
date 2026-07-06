import { CONTACT } from '../../constants/contact'
import { SITE_URL } from '../../constants/routes'

export function LegalCompanyIdentification() {
  return (
    <div className="legal-company-card">
      <p className="legal-company-card__lead">
        <strong>BuilderTudo Technologies</strong>, empresa pertencente à:
      </p>
      <dl className="legal-company-card__details">
        <div>
          <dt>Razão social</dt>
          <dd>Grupo O Especialista Negócios Online e Representação Comercial Ltda</dd>
        </div>
        <div>
          <dt>Marca</dt>
          <dd>O Especialista</dd>
        </div>
        <div>
          <dt>CNPJ</dt>
          <dd>46.709.692/0001-42</dd>
        </div>
        <div>
          <dt>Localização</dt>
          <dd>Itabaiana/Sergipe</dd>
        </div>
        <div>
          <dt>E-mail</dt>
          <dd>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </dd>
        </div>
        <div>
          <dt>Site</dt>
          <dd>
            <a href={SITE_URL} target="_blank" rel="noreferrer">
              buildertudo.com
            </a>
          </dd>
        </div>
      </dl>
    </div>
  )
}

export function LegalDataControllerCard() {
  return (
    <div className="legal-company-card legal-company-card--controller">
      <h3 className="legal-company-card__title">Controlador dos Dados</h3>
      <p className="legal-company-card__entity">
        <strong>BuilderTudo Technologies</strong>
      </p>
      <p className="legal-company-card__entity">
        Grupo O Especialista Negócios Online e Representação Comercial Ltda
      </p>
      <p className="legal-company-card__entity">CNPJ 46.709.692/0001-42</p>
      <p className="legal-company-card__note">
        Responsável pelo tratamento dos dados pessoais coletados por este site.
      </p>
    </div>
  )
}

export function LegalSiteOperatorCard() {
  return (
    <div className="legal-company-card legal-company-card--controller">
      <h3 className="legal-company-card__title">Operadora do Site</h3>
      <p className="legal-company-card__entity">
        <strong>BuilderTudo Technologies</strong>
      </p>
      <p className="legal-company-card__entity">
        Grupo O Especialista Negócios Online e Representação Comercial Ltda
      </p>
      <p className="legal-company-card__entity">CNPJ 46.709.692/0001-42</p>
      <p className="legal-company-card__note">
        Responsável pela operação deste site institucional e pelos canais digitais
        aqui disponibilizados.
      </p>
    </div>
  )
}

export function LegalContactDetails() {
  return (
    <ul>
      <li><strong>Empresa:</strong> BuilderTudo Technologies</li>
      <li>
        <strong>Razão social:</strong> Grupo O Especialista Negócios Online e Representação
        Comercial Ltda (O Especialista)
      </li>
      <li><strong>CNPJ:</strong> 46.709.692/0001-42</li>
      <li><strong>Localização:</strong> Itabaiana/Sergipe</li>
      <li>
        <strong>E-mail:</strong>{' '}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
      </li>
      <li>
        <strong>Site:</strong>{' '}
        <a href={SITE_URL} target="_blank" rel="noreferrer">
          buildertudo.com
        </a>
      </li>
    </ul>
  )
}

export const LEGAL_ECOSYSTEM_PRODUCTS =
  'BlindCare, PrevenPro, VoxCraft, ContentFy, JurisMind, FuelMaster, ConstruFy, AuditeIA, ProOdonto Smart, Fui'
