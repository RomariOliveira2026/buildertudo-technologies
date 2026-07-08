import { useEffect, useState, useCallback } from 'react'
import type { ScreenId } from '../constants/screenshots'
import { HERO_SHOWCASE_SEQUENCE, PLATFORM_SCREENS, getScreenImagePath } from '../constants/screenshots'

const INTERVAL_MS = 4500

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

export function useHeroShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [availableIds, setAvailableIds] = useState<ScreenId[]>([])

  useEffect(() => {
    Promise.all(
      HERO_SHOWCASE_SEQUENCE.map(async (id) => ((await checkScreen(id)) ? id : null)),
    ).then((results) => {
      const unique = [...new Set(results.filter((id): id is ScreenId => id !== null))]
      setAvailableIds(unique)
      setActiveIndex(0)
    })
  }, [])

  const items = availableIds.map((id) => PLATFORM_SCREENS[id])
  const active = items[activeIndex]

  const goTo = useCallback(
    (index: number) => {
      if (items.length === 0) return
      setActiveIndex(index % items.length)
    },
    [items.length],
  )

  useEffect(() => {
    if (paused || items.length <= 1) return
    const timer = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % items.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [paused, items.length])

  return {
    items,
    active,
    activeIndex,
    activeId: availableIds[activeIndex],
    hasScreenshots: availableIds.length > 0,
    goTo,
    pause: () => setPaused(true),
    resume: () => setPaused(false),
  }
}
