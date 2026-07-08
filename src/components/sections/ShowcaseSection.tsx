import { useState } from 'react'
import { SHOWCASE_SCREENS } from '../../constants/platform'
import { PlatformScreenshot } from '../ui/PlatformScreenshot'
import type { ScreenId } from '../../constants/screenshots'
import { Reveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

const SCREEN_IDS: Record<string, ScreenId> = {
  'command-center': 'command-center',
  'products-hub': 'products-hub',
  crm: 'crm',
  studio: 'studio',
  analytics: 'analytics',
  'ai-center': 'ai-center',
  framework: 'framework',
  products: 'products-hub',
}

export function ShowcaseSection() {
  const [activeId, setActiveId] = useState(SHOWCASE_SCREENS[0]?.id ?? 'command-center')
  const active = SHOWCASE_SCREENS.find((s) => s.id === activeId)

  return (
    <Section id="showcase" variant="alt" ariaLabelledBy="showcase-title">
      <Reveal>
        <SectionHeader
          id="showcase-title"
          eyebrow="Showcase"
          title="Explore the platform in action"
          description="Real Business OS and Framework interfaces — the engineering platform behind every BuilderTudo product."
        />
      </Reveal>

      <Reveal>
        <div className="showcase-browser">
          <div className="showcase-browser__tabs" role="tablist">
            {SHOWCASE_SCREENS.map((screen) => (
              <button
                key={screen.id}
                type="button"
                role="tab"
                aria-selected={activeId === screen.id}
                className={`showcase-tab${activeId === screen.id ? ' showcase-tab--active' : ''}`}
                onClick={() => setActiveId(screen.id)}
              >
                {screen.name}
              </button>
            ))}
          </div>
          <div className="showcase-browser__content">
            <div className="showcase-browser__meta">
              <span className="badge">{active?.category}</span>
              <p>{active?.description}</p>
            </div>
            <PlatformScreenshot screenId={SCREEN_IDS[activeId] ?? 'command-center'} />
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
