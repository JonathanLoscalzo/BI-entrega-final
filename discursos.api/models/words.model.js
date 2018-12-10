const mongoose = require('mongoose');

const Wordcount = mongoose.model('Wordcount', {
    word: mongoose.SchemaTypes.Number,
    word_count: mongoose.SchemaTypes.Number,
}, 'wordcounts_totals');

module.exports = Wordcount;