var asyncForEach = require('../helpers/asyncForeach')
var range = require('../helpers/range')
var getLinks = require('./getlinks')

// corresponde a las páginas del sitio de discurso
const start = 1, end=13;

async function all_links() {
    let links = []
    await asyncForEach(range(start, end), async (key) => {
        let items = await getLinks(key)
        links = links.concat(items)
    })

    return links;
}

module.exports = all_links