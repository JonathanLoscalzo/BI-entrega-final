require('dotenv').config()

const logger = require('../helpers/logger');
const config = require('../config/index')
const mongoose = require('mongoose');
const speechModel = require('../speech/speech.model')
const googleMapsClient = require('./maps.client')
const addressModel = require('./address.model')

mongoose.connect(config.MONGO.CONNECTION_STRING, { useNewUrlParser: true });

(async () =>
    await speechModel.find({ "_id": "5c0325acc104041f38a6f9af" }).then(speeches => {
        speeches.forEach(speech => {
            if (speech.subtitle) {
                googleMapsClient
                googleMapsClient.geocode({
                    address: "EL CCK",
                    region: 'ar'
                }).asPromise()
                    .then((response) => {
                        console.log(response.json.results)
                        if (response.json.results > 0) {
                            //     response.json.results.map(add => {
                            //         let dir = {
                            //             speech: speech.id,
                            //             type: add.geometry.location_type,
                            //             place_id: add.geometry.place_id,
                            //             location: {
                            //                 type: "Point",
                            //                 coordinates: [
                            //                     add.geometry.location.lng,
                            //                     add.geometry.location.lat
                            //                 ]
                            //             }
                            //         };

                            //         addressModel.create(dir);
                            //     })
                        }
                    })
                    .catch((err) => {
                        logger.error(err);
                    });
            }
        })
    }))()
