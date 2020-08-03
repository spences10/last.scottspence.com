const { devices } = require('playwright')
const qawolf = require('qawolf')
const device = devices[('iPhone 7', 'iPhone 7 landscape')]

let browser
let page

beforeAll(async () => {
  browser = await qawolf.launch()
  const context = await browser.newContext({ ...device })
  await qawolf.register(context)
  page = await context.newPage()
})

afterAll(async () => {
  await qawolf.stopVideos()
  await browser.close()
})

test('scottspence', async () => {
  await page.goto('https://scottspence.com/')
  await page.click('text=About')
  // await page.click('text=Back to Top')
  await page.click('text=Portfolio')
  // await page.click('text=Back to Top')
  await page.click('text=Now')
  // await page.click('text=Back to Top')
  await page.click('text=Uses')
  // await page.click('text=Back to Top')
})
