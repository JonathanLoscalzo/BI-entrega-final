var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var moment = require('moment')
var exchangeModel = require('../models/exchange.model')

router.get('/dollar', async (req, res, next) => {
    let related = await exchangeModel.aggregate([{
        $lookup:
        {
            from: "speeches",
            localField: "date",
            foreignField: "date",
            as: "speeches"
        }
    }])
    res.json(related.map(each => ({ ...each, name: moment(each.date).format("YYYY-MM-DD") }))).status(200);
});

module.exports = router;
