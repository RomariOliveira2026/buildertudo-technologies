import { Link } from 'react-router-dom'
import { useTranslation } from '../../i18n'
import { diagramafyCopy } from '../../diagramafy/copy'
import './diagramafy.css'

function DiagramSample() {
  return (
    <svg className="dfy-sample" viewBox="0 0 520 220" role="img" aria-hidden="true">
      <path d="M168 70 H214" />
      <path d="M322 70 H368" />
      <path d="M246 108 C246 150, 300 150, 420 150" />
      <g className="dfy-sample__node dfy-sample__node--person">
        <rect x="16" y="38" width="152" height="64" rx="14" />
        <text x="32" y="76">Visitante</text>
      </g>
      <g className="dfy-sample__node dfy-sample__node--process">
        <rect x="214" y="38" width="108" height="64" rx="14" />
        <text x="230" y="76">Site</text>
      </g>
      <g className="dfy-sample__node dfy-sample__node--service">
        <rect x="368" y="38" width="132" height="64" rx="14" />
        <text x="384" y="76">WhatsApp</text>
      </g>
      <g className="dfy-sample__node dfy-sample__node--data">
        <rect x="368" y="128" width="132" height="56" rx="14" />
        <text x="384" y="162">CRM</text>
      </g>
    </svg>
  )
}

export function StudioBanner() {
  const { locale } = useTranslation()
  const text = diagramafyCopy(locale)

  return (
    <section className="dfy-banner" aria-labelledby="diagramafy-banner-title">
      <div className="container dfy-banner__inner">
        <div>
          <span className="badge badge--gold">{text.bannerEyebrow}</span>
          <h2 id="diagramafy-banner-title">{text.bannerTitle}</h2>
          <p>{text.bannerBody}</p>
          <Link className="primary-btn dfy-banner__cta" to="/diagramafy">{text.openStudio}</Link>
        </div>
        <DiagramSample />
      </div>
    </section>
  )
}
