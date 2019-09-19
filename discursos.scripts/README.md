https://blog.forma-pro.com/an-elegant-way-to-dump-mongodb-using-docker-c19de290d3fd

docker run --rm mongo mongodump --host $1 --archive --gzip | cat > dump_$(date '+%d-%m-%Y_%H-%M-%S').gz
cat dump.gz | docker run --rm -i mongo mongorestore --host YOUR_HOST --archive --gzip --drop --db=YOUR_DATABASE_NAME

## Export database

docker exec some-mongo sh -c 'exec mongodump -h ds139969.mlab.com:39969 -d jaiio2019 -u dev -p dev12345 --archive --gzip' > $(echo $PWD)/dump/dump.gz

//no funcionó
cat ./dump/dump.gz | docker exec some-mongo sh -c 'exec mongorestore -h ds139969.mlab.com:39969 --db jaiio2019 -u dev -p dev12345 --archive --gzip'