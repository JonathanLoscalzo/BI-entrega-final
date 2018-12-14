
const config = {
    MONGO: {
        CONNECTION_STRING: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@ds123454.mlab.com:23454/macri-discursos`
    }
}

module.exports = config;