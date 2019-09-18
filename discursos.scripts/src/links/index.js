
require('dotenv').config()

//const fs = require('fs');
const config = require('../config/index')
const mongoose = require('mongoose');

mongoose.connect(config.MONGO.CONNECTION_STRING, { useNewUrlParser: true });

const model = require('./link.model')

require('./acumulator')(
    (batchLinks) => {
        let entities = batchLinks.map(l => new model({ uri: l, speech: false }));
        return model.insertMany(entities);
    }).then(links => {
        console.log("Terminó de scrapear links")
        mongoose.disconnect()
    });
