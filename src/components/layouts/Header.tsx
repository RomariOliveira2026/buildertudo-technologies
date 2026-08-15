import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getNavItems } from '../../i18n/content'
import { useTranslation } from '../../i18n'
import { MotionButton, MotionIconButton } from '../ui/Buttons'
import { LanguageSwitcher } from './LanguageSwitcher'
import type { Theme } from '../../hooks/useTheme'

type HeaderProps = {
  headerScrolled: boolean
  activeSection: string
  theme: Theme
  onToggleTheme: () => void
}

export function Header({ headerScrolled, activeSection, theme, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useTranslation()
  const navItems = getNavItems(t)
  const isNavActive = (id: string) => activeSection === id

  const closeMenu = () => setMenuOpen(false)

  return (
    <motion.header
      className={`header${headerScrolled ? ' header--scrolled' : ''}${menuOpen ? ' header--menu-open' : ''}`}
    >
      <div className="header__inner container container--wide">
        <Link className="logo" to="/#home" aria-label={t('common.homeAria')}>
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

        <nav aria-label={t('common.mainNavAria')} className="header__nav">
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
          <div className="header__nav-lang">
            <LanguageSwitcher />
          </div>
        </nav>

        <button
          type="button"
          className="header__menu-btn"
          aria-label={menuOpen ? t('common.closeMenu') : t('common.openMenu')}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className="header-actions">
          <LanguageSwitcher compact />
          <MotionIconButton
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? t('common.themeToLight') : t('common.themeToDark')}
            title={theme === 'dark' ? t('common.themeToLight') : t('common.themeToDark')}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </MotionIconButton>

          <MotionButton href="/#contact" className="header-cta-btn">
            {t('common.startYourProject')}
          </MotionButton>
        </div>
      </div>
    </motion.header>
  )
}
