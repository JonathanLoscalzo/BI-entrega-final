
require('dotenv').config()

//const fs = require('fs');
const config = require('../config/index')
const mongoose = require('mongoose');

mongoose.connect(config.MONGO.CONNECTION_STRING, { useNewUrlParser: true });

const model = require('./link.model')

require('./acumulator')().then(links => {
    //var file = fs.createWriteStream('links.txt');
    //links.forEach(v => file.write(v + "\n"))
    //file.end();

    let entities = links.map(l => new model({ uri: l }));
    model.create(entities).then(() => mongoose.disconnect());
});
