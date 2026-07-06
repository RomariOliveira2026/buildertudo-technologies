import { Link } from 'react-router-dom'
import { CONTACT } from '../../constants/contact'
import { ECOSYSTEM_LAYERS } from '../../constants/ecosystem'
import { navItems } from '../../constants/navigation'
import { footerProducts } from '../../constants/products'
import { LEGAL_ROUTES } from '../../constants/routes'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__grid">
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
          <p className="footer__tagline">Technology that transforms businesses.</p>
          <p className="footer__desc">
            Full-stack platform company — Framework, AI-OS, Engine and 12+ products.
            Built in Brazil, ready for the world.
          </p>
        </div>

        <div>
          <h3 className="footer__heading">Platform</h3>
          <ul>
            {ECOSYSTEM_LAYERS.slice(0, 4).map((layer) => (
              <li key={layer.id}>
                <a href={`#platform`}>{layer.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Navigate</h3>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Products</h3>
          <ul>
            {footerProducts.map((product) => (
              <li key={product.name}>{product.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Contact</h3>
          <ul>
            <li>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>
              <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} BuilderTudo Technologies. All rights reserved.</p>
        <div className="footer__legal">
          <Link to={LEGAL_ROUTES.privacy}>Privacy Policy</Link>
          <Link to={LEGAL_ROUTES.terms}>Terms of Use</Link>
        </div>
      </div>
    </footer>
  )
}
