import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../layouts/PageLayout'
import type { ProductPageContent } from '../../types/product-content'

type ProductPageLayoutProps = {
  product: ProductPageContent
  children: ReactNode
}

export function ProductBreadcrumbs({ product }: { product: ProductPageContent }) {
  return (
    <nav className="product-breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/#products">Products</Link></li>
        <li aria-current="page">{product.name}</li>
      </ol>
    </nav>
  )
}

export function ProductPageLayout({ product, children }: ProductPageLayoutProps) {
  return (
    <PageLayout className="product-page">
      <ProductBreadcrumbs product={product} />
      {children}
    </PageLayout>
  )
}
