import { Link } from 'react-router-dom'
import { CONTACT } from '../../constants/contact'
import { LEGAL_ROUTES } from '../../constants/routes'
import { getFooterLinks } from '../../i18n/content'
import { useTranslation } from '../../i18n'
import { getWhatsAppCopy } from '../../i18n/commercial'
import { buildWhatsAppUrl, trackWhatsAppClick } from '../../lib/whatsapp'

export function Footer() {
  const { t } = useTranslation()
  const links = getFooterLinks(t)

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__grid footer__grid--commercial">
        <div className="footer__brand">
          <img
            className="site-logo site-logo--footer"
            src="/logo-oficial.png"
            alt="BuilderTudo Technologies"
            width={520}
            height={120}
            loading="lazy"
            decoding="async"
          />
          <p className="footer__tagline">{t('footer.tagline')}</p>
          <p className="footer__desc">{t('footer.description')}</p>
        </div>

        <div>
          <h3 className="footer__heading">{t('footer.company')}</h3>
          <ul>
            {links.company.map((link) => (
              <li key={link.label}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">{t('footer.resources')}</h3>
          <ul>
            {links.resources.map((link) => (
              <li key={link.href}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">{t('footer.platform')}</h3>
          <ul>
            {links.platform.map((link) => (
              <li key={link.href}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">{t('footer.connect')}</h3>
          <ul>
            <li><Link to="/#contact">{t('footer.startProject')}</Link></li>
            <li>
              <a
                href={buildWhatsAppUrl(getWhatsAppCopy(t, 'default'))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('default')}
              >
                {t('common.whatsapp')}
              </a>
            </li>
            <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
                {CONTACT.instagramHandle}
              </a>
            </li>
            <li>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} BuilderTudo Technologies. {t('common.allRightsReserved')}</p>
        <p className="footer__mission">{t('footer.mission')}</p>
        <p className="footer__legal-links">
          <Link to={LEGAL_ROUTES.privacy}>{t('footer.privacy')}</Link>
          <span aria-hidden="true"> · </span>
          <Link to={LEGAL_ROUTES.terms}>{t('footer.terms')}</Link>
        </p>
      </div>
    </footer>
  )
}
