import { Link } from 'react-router-dom'
import { CONTACT } from '../../constants/contact'
import { products } from '../../constants/products'
import { LEGAL_ROUTES } from '../../constants/routes'
import { getFooterLinks } from '../../i18n/content'
import { useTranslation } from '../../i18n'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

export function Footer() {
  const { t } = useTranslation()
  const links = getFooterLinks(t)

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__grid footer__grid--v3">
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
          <h3 className="footer__heading">{t('footer.platform')}</h3>
          <ul>
            {links.platform.map((link) => (
              <li key={link.label}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">{t('footer.products')}</h3>
          <ul>
            {products.slice(0, 6).map((product) => (
              <li key={product.slug}>{product.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">{t('footer.connect')}</h3>
          <ul>
            <li><Link to="/#contact">{t('footer.startProject')}</Link></li>
            <li><a href={CONTACT.meeting}>{t('footer.bookCall')}</a></li>
            <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><a href={buildWhatsAppUrl(t('contact.whatsappDefault'))} target="_blank" rel="noopener noreferrer">{t('common.whatsapp')}</a></li>
            <li><a href={CONTACT.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={CONTACT.upwork} target="_blank" rel="noopener noreferrer">Upwork</a></li>
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">{t('footer.resources')}</h3>
          <ul>
            {links.resources.map((link) => (
              <li key={link.label}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
            <li><Link to={LEGAL_ROUTES.privacy}>{t('footer.privacy')}</Link></li>
            <li><Link to={LEGAL_ROUTES.terms}>{t('footer.terms')}</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} BuilderTudo Technologies. {t('common.allRightsReserved')}</p>
        <p className="footer__mission">{t('footer.mission')}</p>
      </div>
    </footer>
  )
}
