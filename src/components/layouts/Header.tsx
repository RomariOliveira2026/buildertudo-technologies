import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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
  const [menuOpen, setMenuOpen] = useState(false)
  const isNavActive = (id: NavSectionId) => activeSection === id

  const closeMenu = () => setMenuOpen(false)

  return (
    <motion.header
      className={`header${headerScrolled ? ' header--scrolled' : ''}${menuOpen ? ' header--menu-open' : ''}`}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="header__inner container container--wide">
        <Link className="logo" to="/#home" aria-label="BuilderTudo Technologies — Home">
          <img
            className="site-logo"
            src="/logo-oficial.png"
            alt="BuilderTudo Technologies"
            width={720}
            height={132}
            decoding="async"
            fetchPriority="high"
          />
        </Link>

        <nav aria-label="Main navigation" className="header__nav">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={`/#${item.id}`}
              className={isNavActive(item.id) ? 'is-active' : undefined}
              aria-current={isNavActive(item.id) ? 'true' : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="header__menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className="header-actions">
          <MotionIconButton
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </MotionIconButton>

          <MotionButton href="/#contact" className="header-cta-btn">
            Start a project
          </MotionButton>
        </div>
      </div>
    </motion.header>
  )
}
