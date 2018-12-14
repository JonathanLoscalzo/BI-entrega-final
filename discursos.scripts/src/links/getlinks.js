const puppeteer = require('puppeteer');

const box = "panel"

const getLinks = async (leaf = 1) => {
    let skip = (leaf - 1) * 40;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.casarosada.gob.ar/informacion/discursos?start=${skip}`);
    const links = await page.evaluate((sel) => {
        let htmlCollection = document.getElementsByClassName(sel);
        return Array.from(htmlCollection).map(a => a.getAttribute("href"));
    }, box);
    await browser.close();

    return links;
};

module.exports = getLinks;