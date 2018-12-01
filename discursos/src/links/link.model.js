const mongoose = require('mongoose');

const Link = mongoose.model('Link', { uri: mongoose.SchemaTypes.String });

module.exports = Link;