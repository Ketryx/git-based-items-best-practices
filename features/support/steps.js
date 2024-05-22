const {Given, Then, After, AfterAll, BeforeAll} = require('@cucumber/cucumber');
const {chromium, expect} = require('@playwright/test');
const assert = require('node:assert');

let browser;
let context;
let page;

BeforeAll(async () => {
    browser = await chromium.launch({
        slowMo: 0,
        args: [
            '--use-fake-ui-for-media-stream',
            '--use-fake-device-for-media-stream',
        ],
        headless: true,
    });
    context = await browser.newContext({
        acceptDownloads: true,
        viewport: {width: 1600, height: 1200},
    })
    page = await context.newPage();
});

After(async function () {
    if (page) {
        this.attach(`This is a test`);
        const image = await page.screenshot();
        if (image) {
            this.attach(image, "image/png");
        }
    }
});

AfterAll(async () => {
    if (page) {
        await page.close();
    }
    if (context) {
        await context.close();
    }
    if (browser) {
        await browser.close();
    }
});

Given('User is on landing page', async () => {
    await page.goto('http://localhost:' + (process.env.PORT || '3000'));
});

Then('Page has title {string}', async (expectedTitle) => {
    const actualTitle = await page.title();
    expect(actualTitle, expectedTitle);
});

Given('User is on the ALM page', async () => {
    await page.getByText('ALM').click();
})

Then('User should see the ALM page', async () => {
    const title = await page.getByText('Alm').innerText();
    expect(title).toEqual('Alm');
});

Given('User is on the Git-based Items page', async () => {
    await page.getByText('Git-based Items').click();
})

Given('User is on the Jira-based Items page', async () => {
    await page.getByText('Jira-based Items').click();
})

Then('User should see the Git-based Items page', async () => {
    const title = await page.getByText('Git Based Items').innerText();
    expect(title).toEqual('Git Based Items');
});
