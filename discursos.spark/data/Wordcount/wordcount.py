from pyspark.sql import SparkSession
from pyspark.sql.functions import (
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

import sys

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

speeches = df.select(col("_id"), explode(split(col("content"), " |\n")).alias("word"))
speeches = speeches.select(col("_id"), lower(col("word")).alias("word"))

# Contamos las palabras por discurso
speeches_count_total = (
    speeches.groupBy("_id")
    .agg(countDistinct("word").alias("total_distict_words"))
    .sort("total_distict_words", ascending=False)
)

speeches_count_by_id_and_word = (
    speeches.select(col("_id"), col("word"))
    .groupBy("_id", "word")
    .agg(count("word").alias("word_count"))
)

# speeches_count_by_id_and_word = (
#     speeches_count_by_id_and_word.withColumn("val", lit(1))
#     .select(col("_id"), col("word"), col("word_count"), col("val"))
#     .groupBy("_id")
#     .agg(count("val").alias("des"))
# )

# speeches_count_by_id_and_word = (
#     speeches_count_by_id_and_word.select(
#         "_id", create_map("word", "word_count").alias("item")
#     )
#     .groupBy("_id")
#     .agg(collect_list("item").alias("items"))
# )

def parser(a):
    d = list()
    d = [(k, v) for k, v in a[1]]
    return {"_id": a[0], "items": d}


persist = (
    speeches_count_by_id_and_word.rdd.map(
        lambda a: (a["_id"], (a["word"], a["word_count"]))
    )
    .groupByKey()
    .map(parser)
)

persist = spark.createDataFrame(persist, ["_id", "items"])

persist.join(
    speeches_count_total, persist["_id"] == speeches_count_total["_id"]
).write.format("com.mongodb.spark.sql.DefaultSource").option(
    "collection", "speeches_stats"
).mode(
    "append"
).save()
