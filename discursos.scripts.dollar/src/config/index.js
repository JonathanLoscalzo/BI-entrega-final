import { MONGO_USER, MONGO_PASSWORD } from "babel-dotenv"

export default {
    MONGO: {
        CONNECTION_STRING: `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@ds123454.mlab.com:23454/macri-discursos`
    }
}
