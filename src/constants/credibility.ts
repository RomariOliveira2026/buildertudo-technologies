import { STATIC_PLATFORM_METRICS } from '../data/platform-metrics'
import { products } from './products'

/**
 * Engineering credibility metrics for the Home.
 * Static values are the fallback until wired to the Business OS API
 * (VITE_BUSINESS_OS_API). Product count is derived from the real portfolio.
 */
export const CREDIBILITY_METRICS = [
  { id: 'health', value: `${STATIC_PLATFORM_METRICS.frameworkHealth}%`, label: 'Framework Health' },
  { id: 'packages', value: String(STATIC_PLATFORM_METRICS.packages), label: 'Framework packages' },
  { id: 'golden-screens', value: String(STATIC_PLATFORM_METRICS.goldenScreens), label: 'Golden Screens' },
  { id: 'components', value: `${STATIC_PLATFORM_METRICS.components}+`, label: 'Reusable components' },
  { id: 'products', value: `${products.length}`, label: 'Products built' },
  { id: 'tests', value: '847', label: 'Automated tests' },
  { id: 'ai-copilots', value: '7', label: 'AI Copilots' },
  { id: 'business-os', value: 'Live', label: 'Business OS' },
] as const
