var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var moment = require('moment')
var exchangeModel = require('../models/exchange.model')
var speechModel = require('../models/speech.model')
var { GetSpeechesWithStatsById } = require('../services/speeches.service')

router.get('/dollar', async (req, res, next) => {
    let parse = (date) => date ? moment(date, "YYYY-MM-DD") : null;

    let startDate = parse(req.query.startDate)
    let endDate = parse(req.query.endDate)

    let related = await exchangeModel.aggregate([
        {
            $lookup:
            {
                from: "speeches",
                localField: "date",
                foreignField: "date",
                as: "speeches"
            }
        },
        {
            $addFields: {
                speechesByExchange: { $size: "$speeches" }
            }
        }
    ])

    related = related
        .map(each => ({ ...each, name: moment(each.date).format("YYYY-MM-DD") }))

    if (startDate != null && endDate != null)
        related = related.filter(r => moment(r.name, "YYYY-MM-DD").isBetween(startDate, endDate))

    res.json(related).status(200);
});

router.get('/:id', async (req, res, next) => {

    let related = await GetSpeechesWithStatsById(req.params.id);

    related = related.map(each => ({ ...each, name: moment(each.date).format("YYYY-MM-DD") }));

    res.json(related).status(200);

});

module.exports = router;
