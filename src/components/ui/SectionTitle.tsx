import type { ReactNode } from 'react'

type SectionTitleProps = {
  title: string
  description: string
  id?: string
}

export function SectionTitle({ title, description, id }: SectionTitleProps) {
  return (
    <div className="section-title">
      <h2 id={id}>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export function SectionShell({
  id,
  className = 'solutions',
  children,
  ariaLabelledBy,
}: {
  id: string
  className?: string
  children: ReactNode
  ariaLabelledBy?: string
}) {
  return (
    <section
      className={className}
      id={id}
      aria-labelledby={ariaLabelledBy ?? `${id}-title`}
    >
      {children}
    </section>
  )
}
