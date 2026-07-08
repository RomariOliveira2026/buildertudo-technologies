import { useState } from 'react'
import { PlatformScreenshot } from '../ui/PlatformScreenshot'
import type { ScreenId } from '../../constants/screenshots'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import { MotionButton } from '../ui/Buttons'

type ShowcaseModule = {
  id: string
  name: string
  description: string
  icon: string
  screen: ScreenId
}

const SHOWCASE_MODULES: ShowcaseModule[] = [
  { id: 'command-center', name: 'Command Center', description: 'Unified dashboard for operations, priorities and decisions across the company.', icon: '⌘', screen: 'command-center' },
  { id: 'crm', name: 'CRM', description: 'Pipeline, clients and relationship management — from lead to delivery.', icon: '◉', screen: 'crm' },
  { id: 'products-hub', name: 'Products Hub', description: 'Portfolio overview with health scores, roadmaps and product status.', icon: '▣', screen: 'products-hub' },
  { id: 'analytics', name: 'Analytics', description: 'Metrics, KPIs and business intelligence across every product.', icon: '▤', screen: 'analytics' },
  { id: 'ai-center', name: 'AI Center', description: 'Copilots, models and governance controls — the AI-OS control room.', icon: '◎', screen: 'ai-center' },
  { id: 'framework', name: 'Framework', description: 'Real-time Framework Health, packages and Golden Screen coverage.', icon: '◆', screen: 'framework' },
]

export function BusinessOSSection() {
  const [activeId, setActiveId] = useState<string>(SHOWCASE_MODULES[0].id)
  const active = SHOWCASE_MODULES.find((m) => m.id === activeId) ?? SHOWCASE_MODULES[0]

  return (
    <Section id="business-os" variant="alt" ariaLabelledBy="business-os-title">
      <Reveal>
        <SectionHeader
          id="business-os-title"
          eyebrow="Business OS"
          title="We run BuilderTudo on Business OS"
          description="CRM, analytics, product health and a governed AI center — the same platform we offer enterprise clients, used by our own team every day. These are real screenshots, not mockups."
        />
      </Reveal>

      <div className="business-os-showcase">
        <StaggerReveal className="business-os-showcase__tabs">
          {SHOWCASE_MODULES.map((mod) => (
            <StaggerItem key={mod.id}>
              <button
                type="button"
                className={`business-os-tab${activeId === mod.id ? ' business-os-tab--active' : ''}`}
                onClick={() => setActiveId(mod.id)}
              >
                <span className="business-os-tab__icon" aria-hidden="true">{mod.icon}</span>
                {mod.name}
              </button>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <Reveal>
          <div className="business-os-showcase__preview">
            <div className="business-os-showcase__info">
              <h3>{active.name}</h3>
              <p>{active.description}</p>
            </div>
            <PlatformScreenshot screenId={active.screen} />
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="section-cta-row">
          <MotionButton href="/business-os">Explore Business OS</MotionButton>
          <MotionButton href="/live" variant="secondary">View live status</MotionButton>
        </div>
      </Reveal>
    </Section>
  )
}
