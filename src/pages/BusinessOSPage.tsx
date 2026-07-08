import { useState } from 'react'
import { PageMeta } from '../components/seo/PageMeta'
import { PageLayout, SubPageHero } from '../components/layouts/PageLayout'
import { BUSINESS_OS_MODULES } from '../constants/platform'
import { PlatformScreenshot } from '../components/ui/PlatformScreenshot'
import type { ScreenId } from '../constants/screenshots'
import { MotionButton } from '../components/ui/Buttons'

const MODULE_SCREENS: Record<string, ScreenId> = {
  'command-center': 'command-center',
  'ceo-copilot': 'ceo-copilot',
  crm: 'crm',
  analytics: 'analytics',
  'products-hub': 'products-hub',
  'framework-health': 'framework-health',
  'ai-center': 'ai-center',
  studio: 'studio',
  tasks: 'tasks',
  deploys: 'deploy',
  runtime: 'command-center',
  settings: 'settings',
}

export function BusinessOSPage() {
  const [activeId, setActiveId] = useState(BUSINESS_OS_MODULES[0]?.id ?? 'command-center')
  const active = BUSINESS_OS_MODULES.find((m) => m.id === activeId) ?? BUSINESS_OS_MODULES[0]

  return (
    <PageLayout className="subpage">
      <PageMeta
        title="Business OS — Internal Operating System"
        description="The operating system BuilderTudo uses daily — CRM, analytics, deploys, AI center and framework health."
        path="/business-os"
      />
      <SubPageHero
        eyebrow="Business OS"
        title="The OS that runs BuilderTudo"
        description="Every evolution of our Framework is born from daily use of Business OS. CRM, analytics, deploys, AI center — all in one platform."
      />

      <section className="subpage-section">
        <div className="container">
          <div className="business-os-page">
            <nav className="business-os-page__nav">
              {BUSINESS_OS_MODULES.map((mod) => (
                <button
                  key={mod.id}
                  type="button"
                  className={`business-os-page__nav-item${activeId === mod.id ? ' business-os-page__nav-item--active' : ''}`}
                  onClick={() => setActiveId(mod.id)}
                >
                  <span aria-hidden="true">{mod.icon}</span>
                  {mod.name}
                </button>
              ))}
            </nav>
            <div className="business-os-page__detail">
              <h2>{active.name}</h2>
              <p>{active.description}</p>
              <PlatformScreenshot screenId={MODULE_SCREENS[active.id] ?? 'command-center'} />
            </div>
          </div>
        </div>
      </section>

      <section className="subpage-section subpage-section--alt">
        <div className="container">
          <h2>Framework evolution from daily operations</h2>
          <p className="subpage-lead">
            Business OS feeds Framework Health metrics, deploy timelines and product roadmaps back into
            the Framework — creating a continuous improvement loop that benefits every client project.
          </p>
          <div className="section-cta-row">
            <MotionButton href="/framework">Explore Framework</MotionButton>
            <MotionButton href="/live" variant="secondary">View live metrics</MotionButton>
            <MotionButton href="/#contact" variant="ghost">Start a project</MotionButton>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
