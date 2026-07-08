import type { Product } from '../../types/product'
import { getProductImagePath } from '../../constants/screenshots'
import { useEffect, useState } from 'react'

type ProductScreenshotProps = {
  product: Product
  compact?: boolean
}

function probe(src: string) {
  return new Promise<boolean>((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
  })
}

export function ProductScreenshot({ product, compact = false }: ProductScreenshotProps) {
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    const webp = getProductImagePath(product.slug, 'webp')
    const png = getProductImagePath(product.slug, 'png')

    probe(webp).then((hasWebp) => {
      if (!active) return
      if (hasWebp) {
        setSrc(webp)
        return
      }
      probe(png).then((hasPng) => {
        if (active) setSrc(hasPng ? png : null)
      })
    })

    return () => {
      active = false
    }
  }, [product.slug])

  if (!src) return null

  return (
    <figure className={`platform-screenshot${compact ? ' platform-screenshot--compact' : ''}`}>
      <div className="platform-screenshot__chrome">
        <span className="platform-screenshot__dot" />
        <span className="platform-screenshot__dot" />
        <span className="platform-screenshot__dot" />
        <figcaption className="platform-screenshot__url">{product.name.toLowerCase()}.buildertudo.com</figcaption>
      </div>
      <div className="platform-screenshot__viewport">
        <img
          src={src}
          alt={`${product.name} — BuilderTudo product`}
          loading="lazy"
          decoding="async"
        />
      </div>
    </figure>
  )
}
