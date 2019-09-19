#Ejecutar docker-compose up!

# Instalar Notebooks
en la carpeta /notebooks, correr
```
pip install -r requirements.txt
```

Luego ejecutar dentro del contenedor: 
```
jupyter lab --port 8888 --ip 0.0.0.0 --allow-root
```

# Wordcount de los discursos

Ejecutar 
'''
$ cd /tmp/data/Wordcount
spark-submit --packages org.mongodb.spark:mongo-spark-connector_2.11:2.2.5 wordcount.py
'''

# Ejecutar Ngrams de discursos: 

Ejecutar 
'''
$ cd /tmp/data/Wordcount
spark-submit --packages org.mongodb.spark:mongo-spark-connector_2.11:2.2.5 wordcount.py
'''

# Ver: 
https://www.tutorialkart.com/apache-spark/spark-mllib-tf-idf/
https://www.analyticsvidhya.com/blog/2018/02/the-different-methods-deal-text-data-predictive-python/
