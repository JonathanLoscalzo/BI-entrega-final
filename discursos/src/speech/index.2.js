require('dotenv').config()

const Cluster = require('puppeteer-cluster').Cluster;
const asyncForEach = require('../helpers/asyncForeach')
const logger = require('../helpers/logger');
const config = require('../config/index')
const mongoose = require('mongoose');
const speechModel = require('./speech.model')
const linkModel = require('../links/link.model')
const getDiscurso = require('./getSpeech')

mongoose.connect(config.MONGO.CONNECTION_STRING, { useNewUrlParser: true });

(async () => {
    logger.info("COMIENZA A GUARDAR")

    const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_BROWSER,
        maxConcurrency: 10,
    });

    let links = await linkModel.find({})

    links.forEach(async key => {
        await cluster.queue(key.uri, async ({ page, data: url }) => {
            try {
                let speech = await getDiscurso(page, `https://www.casarosada.gob.ar/informacion/discursos/${key.uri}`)
                let model = new speechModel(speech);
                speechModel
                    .create(model)
                    .then((e) => {
                        logger.info(`OK id:`, model.id)
                    });
            } catch (error) {
                logger.error({ error: error.message, uri: key.uri, id: key.id })
            }
        });
    })

    await cluster.idle();
    mongoose.disconnect();
    logger.info("TERMINÓ")
    await cluster.close();
})()