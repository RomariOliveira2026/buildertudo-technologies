export type PlatformMetrics = {
  products: number
  packages: number
  components: number
  goldenScreens: number
  frameworkHealth: number
  aiNative: boolean
  updatedAt: string
}

export type MetricItem = {
  id: keyof PlatformMetrics | 'aiNativeLabel'
  value: string
  label: string
}

export type StackLayer = {
  id: string
  name: string
  icon: string
  description: string
  accent: string
  href?: string
}

export type FrameworkNode = {
  id: string
  name: string
  description: string
}

export type BusinessOSModule = {
  id: string
  name: string
  description: string
  icon: string
}

export type ShowcaseScreen = {
  id: string
  name: string
  category: 'business-os' | 'framework' | 'product'
  description: string
}

export type AICapability = {
  id: string
  name: string
  description: string
}

export type LiveWidget = {
  id: string
  name: string
  description: string
  status: 'ready' | 'planned'
}
