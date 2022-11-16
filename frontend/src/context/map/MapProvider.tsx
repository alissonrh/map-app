import { Map, Marker, Popup } from "mapbox-gl";
import { useReducer } from "react";
import { MapContext } from "./MapContext";
import { mapReducer } from "./MapReducer";


export interface MapState {
  isMapReady: boolean;
  map?: Map;
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined
}

interface Props {
  children: JSX.Element | JSX.Element[]
}


export const MapProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);
  


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

  return (
    <MapContext.Provider value={
      {
        ...state,
        setMap
      }
    }>
      {children}
    </MapContext.Provider>
  )
}
