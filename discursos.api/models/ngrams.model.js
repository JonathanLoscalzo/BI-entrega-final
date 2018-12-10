const mongoose = require('mongoose');

const Ngrams6 = mongoose.model('Ngrams6', {
    ngram: mongoose.SchemaTypes.String,
    counter: mongoose.SchemaTypes.Number,
}, 'ngrams_6_counts');

const Ngrams5 = mongoose.model('Ngrams5', {
    ngram: mongoose.SchemaTypes.String,
    counter: mongoose.SchemaTypes.Number,
}, 'ngrams_5_counts');

const Ngrams7 = mongoose.model('Ngrams7', {
    ngram: mongoose.SchemaTypes.String,
    counter: mongoose.SchemaTypes.Number,
}, 'ngrams_7_counts');

module.exports = { Ngrams7, Ngrams6, Ngrams5 };