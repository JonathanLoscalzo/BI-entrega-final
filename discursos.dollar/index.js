const axios = require('axios');
const moment = require('moment');
// import fs from 'fs';

require('dotenv').config()

let config = require('./config/index')
const mongoose = require('mongoose');

let ExchangeModel = require('./exchange.model')

mongoose.connect(config.MONGO.CONNECTION_STRING, { useNewUrlParser: true });

axios.defaults.headers.common = {
    'Authorization': `Bearer ${config.API_KEY_BCRA}`
};

axios.get("https://api.estadisticasbcra.com/usd")
    .then((response) => {

        let entities = response.data.map((item) => {
            let price = parseFloat(item.v);
            let date = moment(item.d).hour(0).minute(0).toDate();
            return new ExchangeModel({ price: price, date: date })
        })

        ExchangeModel.insertMany(entities)
            .then((err, v) => {
                if (err) {
                    console.log(err);
                }
            })
    }).catch((err) => {
        console.error(err)
    })