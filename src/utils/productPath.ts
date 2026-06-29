import { PRODUCT_ROUTES } from '../constants/routes'
import type { ProductRouteKey } from '../constants/routes'

export function getProductPath(routeKey?: ProductRouteKey) {
  return routeKey ? PRODUCT_ROUTES[routeKey] : undefined
}
