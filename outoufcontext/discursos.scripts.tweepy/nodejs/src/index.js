require('dotenv').config()

const config = require('./config/index')
const mongoose = require('mongoose');
var Twitter = require('twitter');

mongoose.connect(config.MONGO.CONNECTION_STRING, { useNewUrlParser: true });

var client = new Twitter({
    consumer_key: config.TWITTER.CONSUMER_KEY,
    consumer_secret: config.TWITTER.CONSUMER_SECRET,
    access_token_key: config.TWITTER.ACCESS_TOKEN_KEY,
    access_token_secret: config.TWITTER.ACCESS_TOKEN_KEY
});

console.log(config.TWITTER)
var params = { screen_name: 'nodejs' };

client.get('search/tweets', { q: 'node.js' }, function (error, tweets, response) {
    console.log(tweets);
});

client.post('statuses/update', { status: 'I am a tweet' }, function (error, tweet, response) {
    console.log(tweet);
});

var params = {
    include_email: true,
    // default_profile_image: true
}

client
    .get('account/verify_credentials', params)
    .then(r => console.log(r))
    .catch(err => console.log(err));