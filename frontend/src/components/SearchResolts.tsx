import { useContext } from "react"
import { PlacesContext } from "../context"

export const SearchResolts = () => {
  const { places } = useContext(PlacesContext)
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
  return (
    <ul className='list-group'>

      {
        places.map(place => (
          <li
            key={place.id}
            className='list-group-item list-grup-item-action'
          >
            <h6>{place.text}</h6>
            <p
              className='text-muted'
              style={{
                fontSize: '12px'
              }}
            >{place.place_name}</p>
            <button className='btn btn-outline-primary btn-sm'>
              Direção
            </button>
          </li>

        ))
      }


    </ul>
  )
}
