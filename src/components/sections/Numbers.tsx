import { stats } from '../../constants/content'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { SectionShell, SectionTitle } from '../ui/SectionTitle'

export function Numbers() {
  return (
    <SectionShell id="numeros" className="solutions numbers-section" ariaLabelledBy="numeros-title">
      <Reveal>
        <SectionTitle
          id="numeros-title"
          title="Tecnologia em números"
          description="Resultados que refletem nossa capacidade de construir produtos digitais proprietários com inovação contínua."
        />
      </Reveal>

      <StaggerReveal className="numbers-grid">
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <article className="numbers-card" aria-label={stat.label}>
              <div className="numbers-value">
                {stat.type === 'counter' ? (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                ) : (
                  <>
                    <span>{stat.value}</span>
                    {stat.subValue && <small>{stat.subValue}</small>}
                  </>
                )}
              </div>
              <p>{stat.label}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </SectionShell>
  )
}
