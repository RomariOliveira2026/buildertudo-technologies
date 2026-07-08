import { useEffect, useState } from 'react'
import { getProductImagePath } from '../../constants/screenshots'
import { Reveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'
import type { ProductScreenshotRef } from '../../types/product-content'

type ScreenshotsSectionProps = {
  productName: string
  slug: string
  screenshots: ProductScreenshotRef[]
  eyebrow?: string
  title?: string
  description?: string
}

function probe(src: string) {
  return new Promise<boolean>((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
  })
}

async function resolveScreenshotSrc(slug: string, id: string) {
  const base = `${slug}-${id}`
  const webp = getProductImagePath(base, 'webp')
  if (await probe(webp)) return webp
  const png = getProductImagePath(base, 'png')
  if (await probe(png)) return png
  const slugWebp = getProductImagePath(slug, 'webp')
  if (await probe(slugWebp)) return slugWebp
  const slugPng = getProductImagePath(slug, 'png')
  if (await probe(slugPng)) return slugPng
  return null
}

function ScreenshotSlot({ slug, shot, productName }: { slug: string; shot: ProductScreenshotRef; productName: string }) {
  const [src, setSrc] = useState<string | null>(null)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    let active = true
    resolveScreenshotSrc(slug, shot.id).then((resolved) => {
      if (active) {
        setSrc(resolved)
        setChecked(true)
      }
    })
    return () => { active = false }
  }, [slug, shot.id])

  if (!checked) return null

  if (!src) {
    return (
      <figure className="product-screenshot product-screenshot--pending">
        <div className="product-screenshot__pending">
          <span className="product-screenshot__pending-label">Preview in preparation</span>
          <span className="product-screenshot__pending-name">{shot.label}</span>
          <p>Real {productName} screenshots will appear here once captured from production.</p>
        </div>
      </figure>
    )
  }

  return (
    <figure className="product-screenshot">
      <div className="platform-screenshot__chrome">
        <span className="platform-screenshot__dot" />
        <span className="platform-screenshot__dot" />
        <span className="platform-screenshot__dot" />
        <figcaption className="platform-screenshot__url">{productName.toLowerCase()}.buildertudo.com</figcaption>
      </div>
      <div className="platform-screenshot__viewport">
        <img src={src} alt={`${shot.label} — ${productName}`} loading="lazy" decoding="async" />
      </div>
      <figcaption className="product-screenshot__caption">{shot.label}</figcaption>
    </figure>
  )
}

export function ScreenshotsSection({
  productName,
  slug,
  screenshots,
  eyebrow = 'Product',
  title = 'Screenshots',
  description,
}: ScreenshotsSectionProps) {
  const desc = description ?? `Real ${productName} interfaces — captured from production. No artificial mockups.`

  return (
    <Section id="screenshots" ariaLabelledBy="screenshots-title">
      <Reveal>
        <SectionHeader
          id="screenshots-title"
          eyebrow={eyebrow}
          title={title}
          description={desc}
          align="left"
        />
      </Reveal>
      <div className="product-screenshots-grid">
        {screenshots.map((shot) => (
          <Reveal key={shot.id}>
            <ScreenshotSlot slug={slug} shot={shot} productName={productName} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
