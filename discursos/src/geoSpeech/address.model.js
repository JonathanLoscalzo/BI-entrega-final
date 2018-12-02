const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    type: {
        type: mongoose.SchemaTypes.String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [mongoose.SchemaTypes.Number],
        required: true
    }
});

const SpeechGeo = mongoose.model('SpeechGeo', new mongoose.Schema({
    speech: mongoose.SchemaTypes.ObjectId,
    type: mongoose.SchemaTypes.String,
    place_id: mongoose.SchemaTypes.String,
    location: pointSchema
}));

module.exports = SpeechGeo;
