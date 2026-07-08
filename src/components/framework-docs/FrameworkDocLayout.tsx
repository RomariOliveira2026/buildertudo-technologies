import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { FRAMEWORK_DOC_NAV } from '../../content/framework-docs'

type FrameworkDocLayoutProps = {
  children: ReactNode
}

function useActiveSection() {
  const [activeId, setActiveId] = useState<string>(FRAMEWORK_DOC_NAV[0].id)

  useEffect(() => {
    const sections = FRAMEWORK_DOC_NAV
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return activeId
}

export function FrameworkDocLayout({ children }: FrameworkDocLayoutProps) {
  const activeId = useActiveSection()

  return (
    <div className="framework-docs">
      <nav className="framework-docs__nav" aria-label="Documentation navigation">
        <div className="framework-docs__nav-inner">
          <span className="framework-docs__nav-label">Docs</span>
          <ol className="framework-docs__nav-list">
            {FRAMEWORK_DOC_NAV.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeId === item.id ? 'framework-docs__nav-active' : undefined}
                >
                  <span className="framework-docs__nav-num">{String(index + 1).padStart(2, '0')}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
          <div className="framework-docs__nav-links">
            <Link to="/business-os">Business OS</Link>
            <Link to="/cases">Cases</Link>
            <Link to="/live">Live</Link>
          </div>
        </div>
      </nav>

      <div className="framework-docs__content">{children}</div>
    </div>
  )
}
