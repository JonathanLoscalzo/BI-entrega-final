var asyncForEach = require('../helpers/asyncForeach')
var range = require('../helpers/range')
var getLinks = require('./getlinks')

// corresponde a las páginas del sitio de discurso
// dia: 18/09/2019, 16 páginas
const start = 1, end = 3;

async function all_links(batch) {
    let links = []

    await asyncForEach(range(start, end), async (key) => {
        let intentos = 3;
        let items = null;
        let time = Date.now().valueOf();
        console.log(`Empezamos por el discurso: ${links.length} `)
        while (intentos > 0) {
            try {
                items = await getLinks(key)
                break;
            } catch (err) {
                console.log(`Intento ${intentos} ${err.message}`);
                intentos -= 1;
            }
        }

        await batch(items);
        links = links.concat(items)

        time = Date.now().valueOf() - time;

        console.log(`Vamos por el discurso: ${links.length} - Time: ${time}`)
    })

    return links;
}

module.exports = all_links