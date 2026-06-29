import type { ProductRouteKey } from '../constants/routes'

export type Product = {
  logo: string
  name: string
  description: string
  category: string
  technologies: string[]
  status: string
  routeKey?: ProductRouteKey
  featured?: boolean
}

export type ProductCardVariant = 'ecosystem' | 'featured'
