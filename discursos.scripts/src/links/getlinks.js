const puppeteer = require('puppeteer');

const box = "panel"

const getLinks = async (leaf = 1) => {
    let skip = (leaf - 1) * 40;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`https://www.casarosada.gob.ar/informacion/discursos?start=${skip}`, 
    { 
        waitUntil: 'load', 
        timeout: 0 
    });

    console.log(page.status);
    
    const links = await page.evaluate((sel) => {
        console.log("buscamos links");
        let htmlCollection = document.getElementsByClassName(sel);
        return Array.from(htmlCollection).map(a => a.getAttribute("href"));
    }, box);

    console.log("Terminamos búsqueda links");
    await browser.close();

    return links;

};

module.exports = getLinks;