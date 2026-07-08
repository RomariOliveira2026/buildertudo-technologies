import { Link } from 'react-router-dom'
import { CONTACT } from '../../constants/contact'
import { footerLinks } from '../../constants/navigation'
import { products } from '../../constants/products'
import { LEGAL_ROUTES } from '../../constants/routes'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

export function Footer() {
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
          <p className="footer__tagline">Digital product engineering platform.</p>
          <p className="footer__desc">
            Framework, Business OS, AI-OS, Engine and 12 official products.
            Built in Brazil. Ready for the world.
          </p>
        </div>

        <div>
          <h3 className="footer__heading">Company</h3>
          <ul>
            {footerLinks.company.map((link) => (
              <li key={link.label}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Platform</h3>
          <ul>
            {footerLinks.platform.map((link) => (
              <li key={link.label}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Products</h3>
          <ul>
            {products.slice(0, 6).map((product) => (
              <li key={product.slug}>{product.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Connect</h3>
          <ul>
            <li><Link to="/#contact">Start a Project</Link></li>
            <li><a href={CONTACT.meeting}>Book a Call</a></li>
            <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href={CONTACT.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={CONTACT.upwork} target="_blank" rel="noopener noreferrer">Upwork</a></li>
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Resources</h3>
          <ul>
            {footerLinks.resources.map((link) => (
              <li key={link.label}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
            <li><Link to={LEGAL_ROUTES.privacy}>Privacy Policy</Link></li>
            <li><Link to={LEGAL_ROUTES.terms}>Terms of Use</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} BuilderTudo Technologies. All rights reserved.</p>
        <p className="footer__mission">Platform engineering · AI-native · Enterprise-ready</p>
      </div>
    </footer>
  )
}
