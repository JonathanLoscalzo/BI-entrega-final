const mongoose = require('mongoose');

const Speech = mongoose.model('Speech', {
    title: mongoose.SchemaTypes.String,
    date: mongoose.SchemaTypes.Date,
    subtitle: mongoose.SchemaTypes.String,
    content: mongoose.SchemaTypes.String,
    uri: mongoose.SchemaTypes.String
});

module.exports = Speech;