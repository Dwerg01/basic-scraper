const puppeteer = require("puppeteer")

async function scrape() {
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/google-chrome-stable'
    })
    const page = await browser.newPage()

    await page.goto('https://www.thesaurus.com/browse/smart');
    for (let i = 1; i < 10; i++) {
        let element = await page.waitForSelector(`#meanings > div.css-ixatld.e15rdun50 > ul > li:nth-child(${i}) > a`)
        let text = await page.evaluate(element => element.textContent, element)
        console.log(text)
    }
    browser.close()
}

scrape()