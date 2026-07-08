/**
 * Captures real Business OS screenshots for buildertudo.com.
 * Requires Business OS running: pnpm --filter @buildertudo/business-os start
 *
 * Playwright only supports png/jpeg screenshots, so we capture PNG and
 * convert to WebP with sharp when it is installed; otherwise we keep PNG.
 *
 * Usage: npm run capture:screenshots
 *        npm run capture:screenshots -- --convert-only
 *        BUSINESS_OS_URL=http://localhost:3005 npm run capture:screenshots
 */
import { writeFile, mkdir, unlink, readdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = process.env.BUSINESS_OS_URL ?? 'http://localhost:3004'
const OUT = path.resolve(__dirname, '../public/showcase/business-os')
const MANIFEST = path.resolve(__dirname, '../public/showcase/manifest.json')

const ROUTES = {
  'command-center': '/',
  'products-hub': '/products',
  crm: '/crm',
  studio: '/studio',
  tasks: '/tasks',
  analytics: '/analytics',
  'ai-center': '/ai-center',
  framework: '/framework',
  'framework-health': '/framework',
  settings: '/settings',
  'ceo-copilot': '/ai-center/ceo',
  deploy: '/framework',
}

async function loadSharp() {
  try {
    const mod = await import('sharp')
    return mod.default
  } catch {
    return null
  }
}

const WEBP_QUALITY = 88

async function convertPngsToWebp(sharp) {
  const files = await readdir(OUT)
  const pngFiles = files.filter((f) => f.endsWith('.png'))
  const converted = []

  for (const file of pngFiles) {
    const id = file.replace(/\.png$/, '')
    const pngPath = path.join(OUT, file)
    const webpPath = path.join(OUT, `${id}.webp`)
    await sharp(pngPath).webp({ quality: WEBP_QUALITY }).toFile(webpPath)
    await unlink(pngPath)
    converted.push(id)
    console.log(`Converted ${id}.png → ${id}.webp`)
  }

  return converted
}

async function writeManifest(captured, format) {
  await writeFile(
    MANIFEST,
    JSON.stringify(
      {
        screens: [...new Set(captured)],
        products: [],
        format,
        capturedAt: new Date().toISOString(),
      },
      null,
      2,
    ),
  )
}

async function convertOnly() {
  await mkdir(OUT, { recursive: true })
  const sharp = await loadSharp()
  if (!sharp) {
    console.error('sharp is required for WebP conversion. Run: npm install -D sharp')
    process.exit(1)
  }

  const converted = await convertPngsToWebp(sharp)
  const screenIds = converted.filter((id) => id in ROUTES)
  await writeManifest(screenIds.length > 0 ? screenIds : converted, 'webp')
  console.log(`Done — ${converted.length} PNG files converted to WebP`)
}

async function main() {
  await mkdir(OUT, { recursive: true })

  const sharp = await loadSharp()
  const format = sharp ? 'webp' : 'png'
  console.log(sharp ? 'sharp found — converting to WebP' : 'sharp not installed — saving PNG')

  const browser = await chromium.launch()
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    colorScheme: 'dark',
  })
  const page = await context.newPage()
  const captured = []

  for (const [id, route] of Object.entries(ROUTES)) {
    const url = `${BASE}${route}`
    console.log(`Capturing ${id} → ${url}`)
    try {
      await page.goto(url, { waitUntil: 'commit', timeout: 180_000 })
      await page.waitForTimeout(5000)

      const pngPath = path.join(OUT, `${id}.png`)
      await page.screenshot({ path: pngPath, type: 'png', fullPage: false })

      if (sharp) {
        await sharp(pngPath).webp({ quality: WEBP_QUALITY }).toFile(path.join(OUT, `${id}.webp`))
        await unlink(pngPath)
      }

      captured.push(id)
    } catch (err) {
      console.error(`Failed ${id}:`, err instanceof Error ? err.message : err)
    }
  }

  await browser.close()

  await writeManifest(captured, format)

  console.log(`Done — ${captured.length} real screenshots saved as ${format.toUpperCase()}`)
}

const convertOnlyFlag = process.argv.includes('--convert-only')

if (convertOnlyFlag) {
  convertOnly().catch((err) => {
    console.error(err)
    process.exit(1)
  })
} else {
  main().catch((err) => {
    console.error(err)
    process.exit(1)
  })
}
