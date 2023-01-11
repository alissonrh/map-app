import axios from 'axios'
import mapboxgl, { Marker, Popup } from 'mapbox-gl'
import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { MapContext, PlacesContext } from '../context'
import { Loading } from './Loading'

export const MapView = () => {

  const { isLoading, userLocation } = useContext(PlacesContext)
  const { setMap } = useContext(MapContext)
  const mapDiv = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8002/users').then((resp) => {

      setData(resp.data)
      
    })
    
  }, []) 

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new mapboxgl.Map({
        container: mapDiv.current!, // container ID
        style: 'mapbox://styles/mapbox/dark-v10', // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 12, // starting zoom
        });

        data?.forEach((e: any) => {
          console.log(e.position.coordinates);
          new Marker()
            .setLngLat(e.position.coordinates)
            .addTo(map)
            .setPopup(
              new Popup({ offset: 25 }) // add popups
                .setHTML(
                  `<h3>${e.name}</h3>
                  <p>${e.position.type}</p>`
                )
            )
        }
        ) 

        setMap(map)
    }
   

  }, [ isLoading, data ])

  if (isLoading) {
    return (<Loading />)
  }

       


  return (
    
    <div ref={mapDiv} className="map">

    </div>
  )
}
