import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  className?: string
  children: ReactNode
  ariaLabelledBy?: string
  variant?: 'default' | 'alt' | 'dark'
}

export function Section({ id, className = '', children, ariaLabelledBy, variant = 'default' }: SectionProps) {
  return (
    <section
      id={id}
      className={`section section--${variant} ${className}`.trim()}
      aria-labelledby={ariaLabelledBy ?? `${id}-title`}
    >
      <div className="container">{children}</div>
    </section>
  )
}

type SectionHeaderProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ id, eyebrow, title, description, align = 'center' }: SectionHeaderProps) {
  return (
    <header className={`section-header section-header--${align}`}>
      {eyebrow ? <span className="badge">{eyebrow}</span> : null}
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  )
}

export function Badge({ children }: { children: ReactNode }) {
  return <span className="badge">{children}</span>
}
