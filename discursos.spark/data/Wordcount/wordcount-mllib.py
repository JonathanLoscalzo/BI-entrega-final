import sys
from pyspark.sql import SparkSession
from pyspark.ml.feature import Tokenizer, RegexTokenizer, StopWordsRemover, NGram
from pyspark.sql.types import IntegerType, MapType, StringType, BooleanType

from pyspark.sql.functions import (
    udf,
    split,
    explode,
    col,
    lower,
    count,
    collect_list,
    concat,
    create_map,
    lit,
    countDistinct,
)

# from dotenv import load_dotenv
import os

# load_dotenv(verbose=True)

# mongo_user = os.getenv("mongo_user")
# mongo_password = os.getenv("mongo_password")
# mongo_url = os.getenv("mongo_url")
# monto_url_stats = os.getenv("monto_url_stats")

# credentials and configuration
mongo_user = "dev"
mongo_password = "dev12345"
mongo_url = "ds123454.mlab.com:23454/macri-discursos"
monto_url_stats = "ds115283.mlab.com:15283/discursos-stats"

uri_in = "mongodb://{}:{}@{}.speeches".format(mongo_user, mongo_password, mongo_url)

uri_out = "mongodb://{}:{}@{}.wordcount_out".format(
    mongo_user, mongo_password, mongo_url
)

spark = (
    SparkSession.builder.appName("discursos.counter")
    .config("spark.mongodb.input.uri", uri_in)
    .config("spark.mongodb.output.uri", uri_out)
    .getOrCreate()
)

df = spark.read.format("com.mongodb.spark.sql.DefaultSource").load()

# features transformers
regexTokenizer = RegexTokenizer(
    inputCol="content", outputCol="raw_words", pattern="[^\\p{IsAlphabetic}0-9']+"
)

stopWords = StopWordsRemover.loadDefaultStopWords("spanish")

remover = StopWordsRemover(inputCol="raw_words", outputCol="words", stopWords=stopWords)

ngram = NGram(n=2, inputCol="raw_words", outputCol="ngrams")

# features transformation applied
tokenized_by_word = regexTokenizer.transform(df)

tokenized_by_word = ngram.setParams(n=6).transform(
    tokenized_by_word, {ngram.outputCol: "ngrams_6"}
)

tokenized_by_word = ngram.setParams(n=5).transform(
    tokenized_by_word, {ngram.outputCol: "ngrams_5"}
)

tokenized_by_word = ngram.setParams(n=7).transform(
    tokenized_by_word, {ngram.outputCol: "ngrams_7"}
)

tokenized_by_word = remover.transform(tokenized_by_word)

# udf mappers
countTokens = udf(lambda words: len(set(words)), IntegerType())

item_map = udf(
    lambda word, count: {"word": str(word), "count": str(count)},
    MapType(StringType(), StringType()),
)

filter_specials = udf(
    lambda ngram: str(ngram).find("palabras del presidente") < 0
    and str(ngram).find("mauricio macri en") < 0
    and str(ngram).find("presidente de la nación") < 0
    and str(ngram).find("de la nación mauricio macri") < 0,
    BooleanType(),
)

# counter without stopwords by speech
count_by_speech = tokenized_by_word.select(
    "_id", countTokens(col("words")).alias("total_distict_words")
)

# counter without stopwords by word by speech
count_by_word_and_speech = (
    tokenized_by_word.select("_id", explode(col("words")).alias("word"))
    .groupBy("_id", "word")
    .agg(count("word").alias("word_count"))
    .select("_id", item_map(col("word"), col("word_count")).alias("item"))
    .groupBy("_id")
    .agg(collect_list("item").alias("items"))
)

# palabras usadas por discurso contabilizadas y total
joined = count_by_speech.join(count_by_word_and_speech, on="_id")

joined.write.format("com.mongodb.spark.sql.DefaultSource").option(
    "collection", "speeches_stats"
).mode("append").save()

# totales
count_by_word = (
    tokenized_by_word.select("_id", explode(col("words")).alias("word"))
    .groupBy("word")
    .agg(count("word").alias("word_count"))
    .select("word", "word_count")
    .sort("word_count", ascending=False)
)

# Palabras más usadas en total
count_by_word.write.format("com.mongodb.spark.sql.DefaultSource").option(
    "collection", "wordcounts_totals"
).mode("append").save()

ngrams_6_count = (
    tokenized_by_word.select(explode(col("ngrams_6")).alias("ngram"))
    .groupBy("ngram")
    .agg(count("ngram").alias("counter"))
    .select("ngram", "counter")
    .filter(filter_specials(col("ngram")))
    .sort("counter", ascending=False)
)

ngrams_6_count.write.format("com.mongodb.spark.sql.DefaultSource").option(
    "collection", "ngrams_6_counts"
).mode("append").save()

ngrams_5_count = (
    tokenized_by_word.select(explode(col("ngrams_5")).alias("ngram"))
    .groupBy("ngram")
    .agg(count("ngram").alias("counter"))
    .select("ngram", "counter")
    .filter(filter_specials(col("ngram")))
    .sort("counter", ascending=False)
)

ngrams_5_count.write.format("com.mongodb.spark.sql.DefaultSource").option(
    "collection", "ngrams_5_counts"
).mode("append").save()

ngrams_7_count = (
    tokenized_by_word.select(explode(col("ngrams_7")).alias("ngram"))
    .groupBy("ngram")
    .agg(count("ngram").alias("counter"))
    .select("ngram", "counter")
    .filter(filter_specials(col("ngram")))
    .sort("counter", ascending=False)
)

ngrams_7_count.write.format("com.mongodb.spark.sql.DefaultSource").option(
    "collection", "ngrams_7_counts"
).mode("append").save()


