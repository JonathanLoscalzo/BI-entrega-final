## Obtención del dolar

El valor de la divisa USD se obtiene de https://api.estadisticasbcra.com/usd

## Pruebas
Algunas queries en la db de mongo para comprobar: 
```
// obtener los exchanges ordenados por fecha
db.getCollection('exchanges').find({}).sort( { date: -1 } )
```

