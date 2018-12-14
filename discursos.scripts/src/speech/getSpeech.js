var moment = require('moment')

const title_div = "div.jumbotron-hero"
const time_div = "time"
const content_div = "div.col-md-8.col-md-offset-2"

const getDiscurso = async (page, uri) => {
    await page.goto(uri);

    const title = await page.evaluate((sel) => {
        let title = document.querySelector(sel).innerText;
        return title;
    }, title_div);

    const note = await page.evaluate((sel) => {
        let subtitle = document.querySelectorAll(sel)[1].querySelector("p").innerText
        let content = document.querySelectorAll(sel)[1].innerText;
        return { subtitle, content };
    }, content_div);

    const time = await page.evaluate((sel) => {
        let date = document.querySelector(sel).innerText
        return date;
    }, time_div);

    const speech = { title, subtitle: note.subtitle, date: time, content: note.content }

    await page.close();

    speech.date = moment(speech.date, "DD [de] MMMM [de] YYYY", "es").toDate()
    speech.uri = uri;

    return speech;
};

module.exports = getDiscurso;