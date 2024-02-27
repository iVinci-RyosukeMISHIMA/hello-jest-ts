import { before } from 'node:test';
import {
    WebDriver,
    Builder,
    By,
    Key,
    until,
    Capabilities,
} from 'selenium-webdriver'

jest.setTimeout(20000);

describe('e2e test with selenium and chromeDriver', () => {
    let chromeDriver: WebDriver
    beforeAll(async () => {
        const chromeCapabilities = Capabilities.chrome()
        chromeCapabilities.set("goog;chromeOptions", {
            args: [
                //'--headless',
                '--no-sandbox',
                '--disable-gpu',
                '--lang=en-us',
                //'--user-data-dir=./tmp_user_data',
            ],
        })
        chromeDriver = await new Builder().withCapabilities(chromeCapabilities).build()
    })
    afterAll(async () => {
        await chromeDriver.quit()
    })
    it('a search keyword will be on the page title in google.com', async () => {
        await chromeDriver.get('https://www.google.com/nrc')
        await chromeDriver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
        const results = await chromeDriver.wait(until.titleIs('webdriver - Google Search'), 10000)
        expect(results).toBe(true)
    })
})