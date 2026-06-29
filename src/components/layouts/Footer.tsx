import { Link } from 'react-router-dom'
import { CONTACT } from '../../constants/contact'
import { navItems } from '../../constants/navigation'
import { footerProducts } from '../../constants/products'
import { stackTechnologies } from '../../constants/stack'
import { BLOG_ROUTES, LEGAL_ROUTES } from '../../constants/routes'

export function Footer() {
  return (
    <footer className="footer-premium" role="contentinfo">
      <div className="footer-grid footer-grid--premium">
        <div className="footer-brand-col">
          <div className="logo logo--footer">
            <img
              className="site-logo site-logo--footer"
              src="/logo-oficial.png"
              alt="BuilderTudo Technologies — Tecnologia que transforma negócios"
              width={520}
              height={120}
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="footer-slogan">Tecnologia que transforma negócios.</p>
          <p>
            Empresa de tecnologia que desenvolve plataformas SaaS, Inteligência Artificial,
            automações, sistemas web, aplicativos e soluções digitais para empresas.
          </p>
        </div>

        <div>
          <h4>Empresa</h4>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}><Link to={`/#${item.id}`}>{item.label}</Link></li>
            ))}
            <li><Link to="/#numeros">Números</Link></li>
            <li><Link to="/#segmentos">Segmentos</Link></li>
            <li><Link to="/#diferenciais">Diferenciais</Link></li>
            <li><a href={BLOG_ROUTES.blog} aria-label="Blog em breve">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4>Produtos</h4>
          <ul>
            {footerProducts.map((product) => (
              <li key={product.name}>{product.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Tecnologias</h4>
          <ul>
            {stackTechnologies.slice(0, 6).map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contato</h4>
          <ul>
            <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li><a href={CONTACT.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href={CONTACT.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom footer-bottom--premium">
        <p>© 2026 BuilderTudo Technologies. Todos os direitos reservados.</p>
        <div className="footer-legal">
          <Link to={LEGAL_ROUTES.privacy}>Política de Privacidade</Link>
          <Link to={LEGAL_ROUTES.terms}>Termos de Uso</Link>
        </div>
      </div>
    </footer>
  )
}
