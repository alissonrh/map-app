# map-app

## The postgres container was created using:
```
docker run --name=PostGIS -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=geolocation -p 5421:5432 -d postgres          


```

docker exec -it PostGIS bash

apt-get update && apt-get install postgis -y

#then login into psql

psql -U admin -h localhost -d geolocation

#then run:

CREATE EXTENSION postgis;
CREATE EXTENSION postgis_topology;
