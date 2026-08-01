import { useEffect, useRef, useState, useCallback } from 'react'
import type { ScreenId } from '../constants/screenshots'
import { HERO_SHOWCASE_SEQUENCE, PLATFORM_SCREENS, getScreenImagePath } from '../constants/screenshots'
import { loadShowcaseManifest } from './useShowcaseAssets'

const INTERVAL_MS = 4000

function probe(src: string) {
  return new Promise<boolean>((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
  })
}

async function checkScreen(id: ScreenId) {
  if (await probe(getScreenImagePath(id, 'webp'))) return true
  return probe(getScreenImagePath(id, 'png'))
}

async function resolveAvailableScreens(): Promise<ScreenId[]> {
  const manifest = await loadShowcaseManifest()
  if (manifest.screens.length > 0) {
    const manifestSet = new Set(manifest.screens)
    const fromManifest = HERO_SHOWCASE_SEQUENCE.filter((id) => manifestSet.has(id))
    if (fromManifest.length > 0) return fromManifest
  }

  const results = await Promise.all(
    HERO_SHOWCASE_SEQUENCE.map(async (id) => ((await checkScreen(id)) ? id : null)),
  )
  return [...new Set(results.filter((id): id is ScreenId => id !== null))]
}

function preloadScreen(id: ScreenId) {
  const webp = getScreenImagePath(id, 'webp')
  const img = new Image()
  img.src = webp
  img.onerror = () => {
    const png = new Image()
    png.src = getScreenImagePath(id, 'png')
  }
}

export function useHeroShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [availableIds, setAvailableIds] = useState<ScreenId[]>([])
  const [direction, setDirection] = useState(1)
  const activeIndexRef = useRef(0)

  useEffect(() => {
    resolveAvailableScreens().then((unique) => {
      setAvailableIds(unique)
      setActiveIndex(0)
      activeIndexRef.current = 0
      if (unique[0]) preloadScreen(unique[0])
      if (unique[1]) preloadScreen(unique[1])
    })
  }, [])

  const items = availableIds.map((id) => PLATFORM_SCREENS[id])
  const active = items[activeIndex]

  const goTo = useCallback(
    (index: number) => {
      if (items.length === 0) return
      const next = ((index % items.length) + items.length) % items.length
      const current = activeIndexRef.current
      setDirection(next === current ? 1 : next > current ? 1 : -1)
      activeIndexRef.current = next
      setActiveIndex(next)
      const preloadIndex = (next + 1) % items.length
      if (availableIds[preloadIndex]) preloadScreen(availableIds[preloadIndex])
    },
    [availableIds, items.length],
  )

  useEffect(() => {
    if (paused || items.length <= 1) return
    const timer = window.setInterval(() => {
      setDirection(1)
      setActiveIndex((i) => {
        const next = (i + 1) % items.length
        activeIndexRef.current = next
        const preloadIndex = (next + 1) % items.length
        if (availableIds[preloadIndex]) preloadScreen(availableIds[preloadIndex])
        return next
      })
    }, INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [paused, items.length, availableIds])

  return {
    items,
    active,
    activeIndex,
    activeId: availableIds[activeIndex],
    hasScreenshots: availableIds.length > 0,
    direction,
    goTo,
    pause: () => setPaused(true),
    resume: () => setPaused(false),
  }
}
