
const config = {
    MONGO: {
        CONNECTION_STRING: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}`
    },
    TWITTER: {
        CONSUMER_KEY: process.env.CONSUMER_KEY,
        CONSUMER_SECRET: process.env.CONSUMER_SECRET,
        ACCESS_TOKEN_KEY: process.env.ACCESS_TOKEN_KEY,
        ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    }
}

module.exports = config;