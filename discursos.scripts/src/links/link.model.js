const mongoose = require('mongoose');

const Link = mongoose.model('Link', { uri: mongoose.SchemaTypes.String, speech: mongoose.SchemaTypes.Boolean });

module.exports = Link;