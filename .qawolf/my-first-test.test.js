const qawolf = require('qawolf')

let browser
let page

beforeAll(async () => {
  browser = await qawolf.launch()
  const context = await browser.newContext()
  await qawolf.register(context)
  page = await context.newPage()
})

afterAll(async () => {
  await qawolf.stopVideos()
  await browser.close()
})

test('my-first-test', async () => {
  await page.goto('http://scottspence.com/')
  await page.click('text=About')
  await page.click('text=Back to Top')
  await page.click('text=Portfolio')
  await page.click('text=Back to Top')
  await page.click('text=Now')
  await page.click('text=Back to Top')
  await page.click('text=Uses')
  await page.click('text=Back to Top')
})
