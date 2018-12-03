var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
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

    res.json(related).status(200);
});

module.exports = router;
