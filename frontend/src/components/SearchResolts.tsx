import { useContext, useState } from "react"
import { MapContext, PlacesContext } from "../context"
import { Feature } from "../interfaces/IPlaces"

export const SearchResolts = () => {
  const { places, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext)

  const [activePlaceId, setActivePlaceId] = useState('')

  const onPlaceClicked = (place: Feature) => {
    const [lng, lat] = place.center
    setActivePlaceId(place.id)
    map?.flyTo({
      zoom: 14,
      center: [lng, lat]
    })
  }
  /* 
    if (isLoadingPlaces) {
      return (<div
        className="alert alert-primary"
      >
        <h6>
          Buscando..
        </h6>
      </div>)
    }
   */

  const getRoute = (place: Feature) => {
    if (!userLocation) return;
    const [lng, lat] = place.center;

    getRouteBetweenPoints(userLocation, [lng, lat])
  }

  return (
    <ul className='list-group'>

      {
        places.map(place => (
          <li
            key={place.id}
            className={`list-group-item list-grup-item-action pointer ${activePlaceId === place.id && 'active'}`}
            onClick={() => onPlaceClicked(place)}
          >
            <h6>{place.text}</h6>
            <p
              style={{
                fontSize: '12px'
              }}
            >{place.place_name}</p>
            <button
              onClick={() => getRoute(place)}
              className={`btn ${activePlaceId === place.id ? 'btn-outline-light' : 'btn-outline-primary '} btn-sm`}>
              Direção
            </button>
          </li>

        ))
      }


    </ul>
  )
}
