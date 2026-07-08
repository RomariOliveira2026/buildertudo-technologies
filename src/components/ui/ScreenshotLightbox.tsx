import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type ScreenshotLightboxProps = {
  open: boolean
  src: string
  alt: string
  title: string
  url?: string
  onClose: () => void
}

const ZOOM_STEPS = [1, 1.25, 1.5, 1.75, 2] as const

export function ScreenshotLightbox({ open, src, alt, title, url, onClose }: ScreenshotLightboxProps) {
  const [zoomIndex, setZoomIndex] = useState(0)
  const zoom = ZOOM_STEPS[zoomIndex]

  const close = useCallback(() => {
    setZoomIndex(0)
    onClose()
  }, [onClose])

  useEffect(() => {
    if (!open) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === '+' || event.key === '=') {
        setZoomIndex((i) => Math.min(ZOOM_STEPS.length - 1, i + 1))
      }
      if (event.key === '-') {
        setZoomIndex((i) => Math.max(0, i - 1))
      }
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close])

  if (!open) return null

  return createPortal(
    <div className="screenshot-lightbox" role="dialog" aria-modal="true" aria-label={title} onClick={close}>
      <div className="screenshot-lightbox__panel" onClick={(e) => e.stopPropagation()}>
        <header className="screenshot-lightbox__header">
          <div>
            <strong>{title}</strong>
            {url ? <span className="screenshot-lightbox__url">{url}</span> : null}
          </div>
          <div className="screenshot-lightbox__actions">
            <div className="screenshot-lightbox__zoom" aria-label="Zoom controls">
              <button
                type="button"
                onClick={() => setZoomIndex((i) => Math.max(0, i - 1))}
                disabled={zoomIndex === 0}
                aria-label="Zoom out"
              >
                −
              </button>
              <span>{Math.round(zoom * 100)}%</span>
              <button
                type="button"
                onClick={() => setZoomIndex((i) => Math.min(ZOOM_STEPS.length - 1, i + 1))}
                disabled={zoomIndex === ZOOM_STEPS.length - 1}
                aria-label="Zoom in"
              >
                +
              </button>
            </div>
            <a className="screenshot-lightbox__open" href={src} target="_blank" rel="noopener noreferrer">
              Open original
            </a>
            <button type="button" className="screenshot-lightbox__close" onClick={close} aria-label="Close">
              ✕
            </button>
          </div>
        </header>

        <div className="screenshot-lightbox__canvas">
          <img
            src={src}
            alt={alt}
            style={{ transform: `scale(${zoom})` }}
            draggable={false}
          />
        </div>

        <p className="screenshot-lightbox__hint">
          Scroll to explore · + / − to zoom · Esc to close
        </p>
      </div>
    </div>,
    document.body,
  )
}
