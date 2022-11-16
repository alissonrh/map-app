<h1 align="center">Map App</h1>

## PostGIS via Docker:

1 - Crie o contêiner do Postgres
```
docker run --name=PostGIS -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=geolocation -p 5421:5432 -d postgres          
```
2 - Acesse o bash do contêiner
```
docker exec -it PostGIS bash
```
3 - instale o **PostGIS**
```
apt-get update && apt-get install postgis -y
```
4 - Acesse o banco de dado geolocation
```
psql -U admin -h localhost -d geolocation
```
5- Rode os comandos
```
CREATE EXTENSION postgis;
CREATE EXTENSION postgis_topology;

```

