
const config = {
    MONGO: {
        CONNECTION_STRING: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/${process.env.MONGO_DB}`
    }
}

module.exports = config;