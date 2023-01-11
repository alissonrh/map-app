<h1 align="center">Map App</h1>

# Front-End

O Front-end deste projeto foi construido no curso de ReactPro do Fernando Herrera (@Fernando_Her85 *Twitter*). Ele ensina como usar e manipular mapas do [mapbox](https://www.mapbox.com/) na aplicação React feita com **TypeScrip**. 

# Back-End

Com a finalidade de aprender a usar o **PostGIS** do **Postgres** construi essa aplicação que poderia ter os seus dados *georreferenciados* expostos na minha aplicação front-end deste projeto.

## PostGIS via Docker:

1 - Crie o contêiner do Postgres
```
docker run --name=PostGIS -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=geolocation -p 5422:5432 -d postgres          
```
2 - Acesse o bash do contêiner
```
docker exec -it PostGIS bash
```
3 - Instale o **PostGIS**
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

## Preview 

Para ver e interagir com o projeto [clique aqui](https://react-map-alisson.netlify.app/).

