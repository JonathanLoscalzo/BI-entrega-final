var asyncForEach = require('../helpers/asyncForeach')
var range = require('../helpers/range')
var getLinks = require('./getlinks')

async function all_links() {
    let links = []
    await asyncForEach(range(1, 13), async (key) => {
        let items = await getLinks(key)
        links = links.concat(items)
    })

    return links;
}

module.exports = all_links