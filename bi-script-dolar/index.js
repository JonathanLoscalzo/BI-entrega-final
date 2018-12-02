import axios from 'axios'
import moment from 'moment'
// import fs from 'fs';

import config from './src/config'
const mongoose = require('mongoose');
import ExchangeModel from './src/exchange.model'
import { API_KEY, API_SECRET } from "babel-dotenv";

mongoose.connect(config.MONGO.CONNECTION_STRING, { useNewUrlParser: true });

const request = (date) => (
    axios
        .get(`https://bankersalgo.com/apihistoric2/${API_KEY}/${API_SECRET}/USD/${date}`)
        .then(data => data.data.rates.ARS)
        .catch(err => null)
)

const init = async () => {
   // let startDate = moment(new Date(2015, 11, 1));
    let startDate = moment(new Date(2018, 6, 27));
    const currentDay = moment(new Date());

    while (startDate < currentDay) {
        //fs.appendFile('./data/temp.txt', `${moment(startDate).format("YYYY-MM-DD")},${await request(moment(startDate).format("YYYY-MM-DD"))}\n`);
        try {

            let price = parseFloat(await request(moment(startDate).format("YYYY-MM-DD")))
            let model = new ExchangeModel({ price: price, date: startDate.toDate() })
            ExchangeModel.create(model);

            startDate = startDate.add(1, 'days')
        } catch (error) {
            console.log(error)
        }
    }

    //console.log(await request())
    console.log(config.MONGO.CONNECTION_STRING)
}

init()
