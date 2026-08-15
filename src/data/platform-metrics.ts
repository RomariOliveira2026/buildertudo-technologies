import type { PlatformMetrics } from '../types/platform'
import type { TranslateFn } from '../i18n/translate'

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

export function formatPlatformMetrics(metrics: PlatformMetrics, t?: TranslateFn) {
  const label = (key: string, fallback: string) => (t ? t(key) : fallback)

  return [
    { id: 'products' as const, value: String(metrics.products), label: label('hero.metricProducts', 'Live SaaS Products') },
    { id: 'components' as const, value: `${metrics.components}+`, label: label('hero.metricComponents', 'Reusable Components') },
    { id: 'aiNative' as const, value: '100%', label: label('hero.metricAiNative', 'AI Native Architecture') },
    { id: 'frameworkHealth' as const, value: `${metrics.frameworkHealth}%`, label: label('hero.metricHealth', 'Framework Health') },
    { id: 'goldenScreens' as const, value: String(metrics.goldenScreens), label: label('hero.metricUiSystems', 'Premium UI Systems') },
    {
      id: 'enterprise' as const,
      value: label('hero.metricEnterpriseValue', 'Enterprise'),
      label: label('hero.metricEnterpriseLabel', 'Ready'),
    },
  ]
}
