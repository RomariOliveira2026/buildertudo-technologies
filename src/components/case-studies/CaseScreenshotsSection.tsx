import { ScreenshotsSection } from '../products/ScreenshotsSection'

type CaseScreenshotsSectionProps = {
  productName: string
  slug: string
  screenshots: Array<{ id: string; label: string }>
}

export function CaseScreenshotsSection({ productName, slug, screenshots }: CaseScreenshotsSectionProps) {
  return (
    <ScreenshotsSection
      productName={productName}
      slug={slug}
      screenshots={screenshots}
      eyebrow="5 — Screenshots"
      title="Real product interfaces"
      description="Only real captures from production — dashboards, flows and core screens. No mockups."
    />
  )
}
