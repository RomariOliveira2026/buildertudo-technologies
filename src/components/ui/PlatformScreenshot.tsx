import { useState } from 'react'
import type { ScreenId } from '../../constants/screenshots'
import { PLATFORM_SCREENS } from '../../constants/screenshots'
import { useScreenSrc } from '../../hooks/useShowcaseAssets'
import { ScreenshotLightbox } from './ScreenshotLightbox'

type PlatformScreenshotProps = {
  screenId: ScreenId
  compact?: boolean
  doc?: boolean
  expandable?: boolean
  zoomOnHover?: boolean
  className?: string
}

/** Renders a real Business OS screenshot only — never artificial UI. */
export function PlatformScreenshot({
  screenId,
  compact = false,
  doc = false,
  expandable,
  zoomOnHover = true,
  className = '',
}: PlatformScreenshotProps) {
  const meta = PLATFORM_SCREENS[screenId]
  const src = useScreenSrc(screenId)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const canExpand = expandable ?? doc
  const demoUrl = `business-os.buildertudo.com${meta.demoUrl}`

  if (!src) return null

  const sizeClass = doc ? ' platform-screenshot--doc' : compact ? ' platform-screenshot--compact' : ''
  const interactiveClass = canExpand ? ' platform-screenshot--expandable' : ''

  const openLightbox = () => {
    if (canExpand) setLightboxOpen(true)
  }

  return (
    <>
      <figure
        className={`platform-screenshot${sizeClass}${interactiveClass}${zoomOnHover && !doc ? ' platform-screenshot--zoom' : ''} ${className}`.trim()}
      >
        <div className="platform-screenshot__chrome">
          <span className="platform-screenshot__dot" />
          <span className="platform-screenshot__dot" />
          <span className="platform-screenshot__dot" />
          <figcaption className="platform-screenshot__url">{demoUrl}</figcaption>
        </div>

        {canExpand ? (
          <button
            type="button"
            className="platform-screenshot__viewport platform-screenshot__trigger"
            onClick={openLightbox}
            aria-label={`View full size — ${meta.name}`}
          >
            <img
              src={src}
              alt={`${meta.name} — BuilderTudo Business OS`}
              loading="lazy"
              decoding="async"
              width={1440}
              height={900}
            />
            <span className="platform-screenshot__expand-hint">
              <span className="platform-screenshot__expand-icon" aria-hidden="true">⤢</span>
              Click to view full size
            </span>
          </button>
        ) : (
          <div className="platform-screenshot__viewport">
            <img
              src={src}
              alt={`${meta.name} — BuilderTudo Business OS`}
              loading="lazy"
              decoding="async"
              width={1440}
              height={900}
            />
          </div>
        )}

        {canExpand ? (
          <figcaption className="platform-screenshot__footer">
            <span>{meta.name}</span>
            <button type="button" className="platform-screenshot__expand-btn" onClick={openLightbox}>
              Full screen
            </button>
          </figcaption>
        ) : null}
      </figure>

      {canExpand ? (
        <ScreenshotLightbox
          open={lightboxOpen}
          src={src}
          alt={`${meta.name} — BuilderTudo Business OS`}
          title={meta.name}
          url={demoUrl}
          onClose={() => setLightboxOpen(false)}
        />
      ) : null}
    </>
  )
}
