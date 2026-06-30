// Verification screenshot helper: scrolls the page to trigger lazy-loaded
// images, optionally emulates a mobile viewport, then captures full page.
// Usage: node shot.mjs <url> <label> [mobile]
import puppeteer from 'puppeteer'
import { existsSync, mkdirSync, readdirSync } from 'fs'
import { join } from 'path'

const url = process.argv[2] || 'http://localhost:5173'
const label = process.argv[3] || 'shot'
const mobile = process.argv[4] === 'mobile'

const dir = './temporary screenshots'
if (!existsSync(dir)) mkdirSync(dir)
const existing = readdirSync(dir).filter(f => f.startsWith('screenshot-') && f.endsWith('.png'))
const nums = existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || '0')).filter(Boolean)
const next = nums.length ? Math.max(...nums) + 1 : 1
const filename = `screenshot-${next}-${label}.png`
const path = join(dir, filename)

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage()
if (mobile) {
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true })
} else {
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 })
}
await page.goto(url, { waitUntil: 'networkidle2', timeout: 20000 })
// Scroll through the whole page to trigger lazy-loaded images.
await page.evaluate(async () => {
  await new Promise((resolve) => {
    let y = 0
    const step = 400
    const timer = setInterval(() => {
      window.scrollBy(0, step)
      y += step
      if (y >= document.body.scrollHeight) { clearInterval(timer); resolve() }
    }, 80)
  })
})
await new Promise(r => setTimeout(r, 800))
await page.evaluate(() => window.scrollTo(0, 0))
// Wait for all images to finish loading.
await page.evaluate(async () => {
  await Promise.all(Array.from(document.images).map(img => img.complete ? null : new Promise(r => { img.onload = img.onerror = r })))
})
await new Promise(r => setTimeout(r, 400))
await page.screenshot({ path, fullPage: true })
await browser.close()
console.log(`Saved: ${path}`)
