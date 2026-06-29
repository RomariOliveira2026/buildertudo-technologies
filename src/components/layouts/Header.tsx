import { motion } from 'framer-motion'
import { navItems, type NavSectionId } from '../../constants/navigation'
import { MotionButton, MotionIconButton } from '../ui/Buttons'
import type { Theme } from '../../hooks/useTheme'

type HeaderProps = {
  headerScrolled: boolean
  activeSection: string
  theme: Theme
  onToggleTheme: () => void
}

export function Header({ headerScrolled, activeSection, theme, onToggleTheme }: HeaderProps) {
  const isNavActive = (id: NavSectionId) => activeSection === id

  return (
    <motion.header
      className={`header${headerScrolled ? ' header--scrolled' : ''}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <a className="logo" href="#home" aria-label="BuilderTudo Technologies - Início">
        <img
          className="site-logo"
          src="/logo-oficial.png"
          alt="BuilderTudo Technologies — Tecnologia que transforma negócios"
          width={720}
          height={132}
          decoding="async"
          fetchPriority="high"
        />
      </a>

      <nav aria-label="Navegação principal">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={isNavActive(item.id) ? 'is-active' : undefined}
            aria-current={isNavActive(item.id) ? 'page' : undefined}
          >
            <span className="nav-indicator" aria-hidden="true" />
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <MotionIconButton
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
          title={theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </MotionIconButton>

        <MotionButton
          href="#contato"
          className="header-cta-btn"
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          Fale Conosco
        </MotionButton>
      </div>
    </motion.header>
  )
}
