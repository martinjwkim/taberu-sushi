import puppeteer from 'puppeteer'
import { existsSync, mkdirSync, readdirSync } from 'fs'
import { join } from 'path'

const url = process.argv[2] || 'http://localhost:5173'
const label = process.argv[3] || ''

const dir = './temporary screenshots'
if (!existsSync(dir)) mkdirSync(dir)

const existing = readdirSync(dir).filter(f => f.startsWith('screenshot-') && f.endsWith('.png'))
const nums = existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || '0')).filter(Boolean)
const next = nums.length ? Math.max(...nums) + 1 : 1

const filename = label ? `screenshot-${next}-${label}.png` : `screenshot-${next}.png`
const path = join(dir, filename)

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 })
await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 })
await new Promise(r => setTimeout(r, 1200))
await page.screenshot({ path, fullPage: true })
await browser.close()

console.log(`Saved: ${path}`)
