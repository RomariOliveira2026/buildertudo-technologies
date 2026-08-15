import { useEffect, useState } from 'react'
import { STATIC_PLATFORM_METRICS, formatPlatformMetrics } from '../data/platform-metrics'
import { useTranslation } from '../i18n'
import { fetchPlatformMetrics } from '../lib/platformApi'
import type { PlatformMetrics } from '../types/platform'

export function usePlatformMetrics() {
  const { t, locale } = useTranslation()
  const [metrics, setMetrics] = useState<PlatformMetrics>(STATIC_PLATFORM_METRICS)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    fetchPlatformMetrics().then((data) => {
      if (active) {
        setMetrics(data)
        setLoading(false)
      }
    })
    return () => {
      active = false
    }
  }, [])

  return { metrics, items: formatPlatformMetrics(metrics, t), loading, locale }
}
