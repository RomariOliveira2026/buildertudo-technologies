import { getProductContentPath } from '../content/products'
import { PRODUCT_ROUTES } from '../constants/routes'
import type { ProductRouteKey } from '../constants/routes'

export function getProductPath(routeKey?: ProductRouteKey, slug?: string) {
  if (slug) return getProductContentPath(slug)
  return routeKey ? PRODUCT_ROUTES[routeKey] : undefined
}
