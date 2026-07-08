import { useEffect, useState } from 'react'
import type { ScreenId } from '../constants/screenshots'
import { getScreenImagePath } from '../constants/screenshots'

type ShowcaseManifest = {
  screens: ScreenId[]
  products: string[]
  format?: 'webp' | 'png'
  capturedAt: string
}

let manifestCache: ShowcaseManifest | null = null

export async function loadShowcaseManifest(): Promise<ShowcaseManifest> {
  if (manifestCache) return manifestCache
  try {
    const res = await fetch('/showcase/manifest.json')
    if (!res.ok) throw new Error('missing')
    manifestCache = (await res.json()) as ShowcaseManifest
    return manifestCache
  } catch {
    return { screens: [], products: [], capturedAt: '' }
  }
}

function probe(src: string) {
  return new Promise<boolean>((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
  })
}

/** Resolves the real screenshot URL (WebP preferred, PNG fallback) or null when absent. */
export function useScreenSrc(screenId: ScreenId) {
  const [src, setSrc] = useState<string | null | undefined>(undefined)

  useEffect(() => {
    let active = true
    const webp = getScreenImagePath(screenId, 'webp')
    const png = getScreenImagePath(screenId, 'png')

    probe(webp).then((hasWebp) => {
      if (!active) return
      if (hasWebp) {
        setSrc(webp)
        return
      }
      probe(png).then((hasPng) => {
        if (active) setSrc(hasPng ? png : null)
      })
    })

    return () => {
      active = false
    }
  }, [screenId])

  return src
}

export function useScreenAvailable(screenId: ScreenId) {
  const src = useScreenSrc(screenId)
  if (src === undefined) return null
  return src !== null
}

export function useShowcaseManifest() {
  const [manifest, setManifest] = useState<ShowcaseManifest>({
    screens: [],
    products: [],
    capturedAt: '',
  })

  useEffect(() => {
    loadShowcaseManifest().then(setManifest)
  }, [])

  return manifest
}
