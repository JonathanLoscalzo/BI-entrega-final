var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var moment = require('moment');
var _ = require('lodash')

var exchangeModel = require('../models/exchange.model')
var speechModel = require('../models/speech.model')
var wordcountModel = require('../models/words.model')
var { Ngrams5, Ngrams6, Ngrams7 } = require('../models/ngrams.model')

var { GetSpeechesWithStats } = require('../services/speeches.service')

router.get("/wordcounts", async (req, res, nxt) => {
    let wordcounts = await wordcountModel.aggregate(
        [
            { $sort: { word_count: -1 } },
            { $match: { word_count: { $gt: 100 } } },
            { $project: { _id: 0, word: 1, word_count: 1 } }
        ])
    res.json(wordcounts).status(200)
})

router.get("/ngrams", async (req, res, nxt) => {
    let agg = [
        { $sort: { counter: -1 } },
        { $match: { counter: { $gt: 10 } } },
        { $project: { _id: 0, ngram: 1, counter: 1 } }
    ]

    let ngrams5 = await Ngrams5.aggregate(agg)

    agg = [
        { $sort: { counter: -1 } },
        { $match: { counter: { $gt: 10 } } },
        { $project: { _id: 0, ngram: 1, counter: 1 } }
    ]

    let ngrams6 = await Ngrams6.aggregate(agg)

    agg = [
        { $sort: { counter: -1 } },
        { $match: { counter: { $gt: 5 } } },
        { $project: { _id: 0, ngram: 1, counter: 1 } }
    ]

    let ngrams7 = await Ngrams7.aggregate(agg)

    let ngrams = _.sortBy(
        ngrams6.slice(0, 10)
            .concat(ngrams5.slice(0, 12))
            .concat(ngrams7.slice(0, 15)),
        (a) => -a.counter)

    res.json({ ngrams7, ngrams6, ngrams5, ngrams }).status(200)
})

router.get("/", async (req, res, nxt) => {
    var speeches_count = await speechModel.find().countDocuments()
    var dollars_count = await exchangeModel.find().countDocuments()
    var wordcounts = await wordcountModel.aggregate(
        [
            { $sort: { word_count: -1 } },
            { $match: { word_count: { $gt: 100 } } },
            { $project: { _id: 0, word: 1, word_count: 1 } }
        ])

    var speeches = await GetSpeechesWithStats();

    res.json({
        word: {
            most_used: wordcounts[0],
        },
        speeches: {
            count: speeches_count,
            largest: _.maxBy(speeches, (a) => a.total_distict_words),
            smallest: _.minBy(speeches, (a) => a.total_distict_words),
        },
        dollars: {
            count: dollars_count
        }
    }).status(200)

})

module.exports = router;