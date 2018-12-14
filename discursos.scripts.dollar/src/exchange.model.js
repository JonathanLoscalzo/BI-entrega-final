const mongoose = require('mongoose');

const Exchange = mongoose.model('Exchange',
    {
        date: mongoose.SchemaTypes.Date,
        price: mongoose.SchemaTypes.Number
    });

export default Exchange;