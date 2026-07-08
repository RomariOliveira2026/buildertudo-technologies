import { useState } from 'react'
import { FRAMEWORK_GOLDEN_SCREENS } from '../../content/framework-docs'
import { PLATFORM_SCREENS } from '../../constants/screenshots'
import type { ScreenId } from '../../constants/screenshots'
import { PlatformScreenshot } from '../ui/PlatformScreenshot'
import { Reveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

export function FrameworkGoldenScreensSection() {
  const screens = FRAMEWORK_GOLDEN_SCREENS.screenIds
  const [activeId, setActiveId] = useState<ScreenId>(screens[0])

  return (
    <Section id="golden-screens" ariaLabelledBy="framework-golden-title">
      <Reveal>
        <SectionHeader
          id="framework-golden-title"
          eyebrow="Golden Screens"
          title="Reference UI before production"
          description={FRAMEWORK_GOLDEN_SCREENS.summary}
          align="left"
        />
      </Reveal>

      <Reveal>
        <ol className="framework-golden-workflow">
          {FRAMEWORK_GOLDEN_SCREENS.workflow.map((step, i) => (
            <li key={step}>
              <span className="framework-golden-workflow__num">{String(i + 1).padStart(2, '0')}</span>
              {step}
            </li>
          ))}
        </ol>
      </Reveal>

        <Reveal>
        <div className="framework-screenshot-stage">
          <div className="framework-golden-gallery">
            <div className="framework-golden-gallery__tabs" role="tablist" aria-label="Golden Screen captures">
              {screens.map((screenId) => {
                const meta = PLATFORM_SCREENS[screenId]
                const isActive = activeId === screenId
                return (
                  <button
                    key={screenId}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`framework-golden-gallery__tab${isActive ? ' framework-golden-gallery__tab--active' : ''}`}
                    onClick={() => setActiveId(screenId)}
                  >
                    {meta.name}
                  </button>
                )
              })}
            </div>

            <div className="framework-golden-gallery__viewport" role="tabpanel">
              <PlatformScreenshot key={activeId} screenId={activeId} doc className="framework-golden-gallery__shot" />
              <p className="framework-golden-gallery__caption">
                Real production interface — open full screen to read every detail.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
