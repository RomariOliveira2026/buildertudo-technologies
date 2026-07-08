import type { PlatformMetrics } from '../types/platform'

/** Static fallback — replaced by Business OS API when VITE_BUSINESS_OS_API is configured. */
export const STATIC_PLATFORM_METRICS: PlatformMetrics = {
  products: 12,
  packages: 37,
  components: 80,
  goldenScreens: 15,
  frameworkHealth: 94,
  aiNative: true,
  updatedAt: '2026-06-10T00:00:00.000Z',
}

export function formatPlatformMetrics(metrics: PlatformMetrics) {
  return [
    { id: 'products' as const, value: String(metrics.products), label: 'Products' },
    { id: 'packages' as const, value: String(metrics.packages), label: 'Packages' },
    { id: 'components' as const, value: `${metrics.components}+`, label: 'Components' },
    { id: 'goldenScreens' as const, value: String(metrics.goldenScreens), label: 'Golden Screens' },
    { id: 'frameworkHealth' as const, value: `${metrics.frameworkHealth}%`, label: 'Framework Health' },
    { id: 'aiNativeLabel' as const, value: '100%', label: 'AI Native' },
  ]
}
