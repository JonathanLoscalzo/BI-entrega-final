import tweepy
import pymongo
from dotenv import load_dotenv
import os
import json
load_dotenv(verbose=True)

CONSUMER_KEY = os.getenv("CONSUMER_KEY")
CONSUMER_SECRET = os.getenv("CONSUMER_SECRET")
ACCESS_TOKEN_KEY = os.getenv("ACCESS_TOKEN_KEY")
ACCESS_TOKEN_SECRET = os.getenv("ACCESS_TOKEN_SECRET")

MONGO_USER = os.getenv("MONGO_USER")
MONGO_PASSWORD = os.getenv("MONGO_PASSWORD")
MONGO_URL = os.getenv("MONGO_URL")
connection_string="mongodb://{}:{}@{}".format(MONGO_USER, MONGO_PASSWORD, MONGO_URL)

mongo_client = pymongo.MongoClient(connection_string)
db = mongo_client["discursos-stats"]
collection = db["tweets_from_g20"]

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN_KEY, ACCESS_TOKEN_SECRET)

api = tweepy.API(auth)

q = "#g20 @g20org #G20Argentina"
for status in tweepy.Cursor(api.search, q=q, tweet_mode='extended').items():
    tweet = status._json
    if (tweet["geo"] != None):
        collection.insert(tweet)