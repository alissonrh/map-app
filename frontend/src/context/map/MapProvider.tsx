import { AnySourceData, LngLatBounds, Map, Marker, Popup } from "mapbox-gl";
import { useContext, useEffect, useReducer } from "react";
import { directionsApi } from "../../api";
import { DirectionsResponse } from "../../interfaces/IDirections";
import { PlacesContext } from "../places/PlacesContext";
import { MapContext } from "./MapContext";
import { mapReducer } from "./MapReducer";


export interface MapState {
  isMapReady: boolean;
  map?: Map;
  markers: Marker[];
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
  markers: [],
}

interface Props {
  children: JSX.Element | JSX.Element[]
}


export const MapProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

  const { places } = useContext(PlacesContext)

  useEffect(() => {
    state.markers.forEach(marker => marker.remove());
    let newMarkers: Marker[] = [];

    for (const place of places) {
      const [lng, lat] = place.center;
      const popup = new Popup()
        .setHTML(`
      <h6>${place.text}</h6>
      <h6>${place.place_name}</h6>
      `)
      const newMarker = new Marker().setPopup(popup).setLngLat([lng, lat]).addTo(state.map!);

      newMarkers.push(newMarker)

    }

    dispatch({ type: 'setMarkers', payload: newMarkers })

  }, [places])


  const setMap = async (map: Map) => {



    /*     console.log(map.getCenter())
        geoJSON.forEach((e: any) => {
          console.log(e.geometry.coordinates);
          new Marker()
            .setLngLat(e.geometry.coordinates)
            .addTo(map)
            .setPopup(
              new Popup({ offset: 25 }) // add popups
                .setHTML(
                  `<h3>${e.properties.title}</h3>
                  <p>${e.properties.description}</p>`
                )
            )
        }
        ) */


    new Marker({
      color: '000'
    })
      .setLngLat(map.getCenter())
      .addTo(map)
      .setPopup(
        new Popup({ offset: 25 }) // add popups
          .setHTML(
            `<h3>Latitude: ${map.getCenter().lat}</h3>
              <h3>Longitude: ${map.getCenter().lng}</h3>`
          ))


    dispatch({ type: 'setMap', payload: map })

  }

  const getRouteBetweenPoints = async (start: [number, number], end: [number, number]) => {
    const resp = await directionsApi.get<DirectionsResponse>(`/${start.join(',')};${end.join(',')}`);
    const { distance, duration, geometry } = resp.data.routes[0];
    const { coordinates: coords } = geometry;

    let km = distance / 1000;
    km = Math.round(km * 100);
    km = km / 100; // km /=100

    const minutes = Math.floor(duration / 60);

    const bounds = new LngLatBounds(
      start,
      start
    );

    for (const coord of coords) {
      const newCoord: [number, number] = [coord[0], coord[1]];
      bounds.extend(newCoord);
    }

    state.map?.fitBounds(bounds, {
      padding: 150
    });

    // polyline

    const sourceData: AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coords
            }
          }
        ]
      }
    }

    // TODO remover polyline se existir

    if (state.map?.getLayer('RouteString')) {
      state.map.removeLayer('RouteString');
      state.map.removeSource('RouteString');
    }

    state.map?.addSource(
      'RouteString',
      sourceData
    );

    state.map?.addLayer({
      id: 'RouteString',
      type: 'line',
      source: 'RouteString',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      paint: {
        "line-color": 'blue',
        'line-width': 3
      }
    });


    alert(JSON.stringify(`O percurso possue ${km}km e levará ${minutes} minutos. A partir do seu ponto de localização`))

   // 

  }

  return (
    <MapContext.Provider value={
      {
        ...state,
        setMap,
        getRouteBetweenPoints,
      }
    }>
      {children}
    </MapContext.Provider>
  )
}
