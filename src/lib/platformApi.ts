import { STATIC_PLATFORM_METRICS } from '../data/platform-metrics'
import type { PlatformMetrics } from '../types/platform'

const API_BASE = import.meta.env.VITE_BUSINESS_OS_API as string | undefined

/**
 * Fetches live platform metrics from Business OS.
 * Falls back to static data when the API is unavailable.
 */
export async function fetchPlatformMetrics(): Promise<PlatformMetrics> {
  if (!API_BASE) return STATIC_PLATFORM_METRICS

  try {
    const response = await fetch(`${API_BASE.replace(/\/$/, '')}/metrics`, {
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) return STATIC_PLATFORM_METRICS
    const data = (await response.json()) as PlatformMetrics
    return { ...STATIC_PLATFORM_METRICS, ...data }
  } catch {
    return STATIC_PLATFORM_METRICS
  }
}
