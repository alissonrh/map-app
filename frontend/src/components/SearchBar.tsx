import { ChangeEvent, useContext, useRef } from 'react'
import { PlacesContext } from '../context'
import { SearchResolts } from './SearchResolts'

export const SearchBar = () => {
  
  const { searchPlacesBrQuery } = useContext(PlacesContext)

  const debounceRef = useRef<NodeJS.Timeout>()

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if ( debounceRef.current ) {
      clearTimeout( debounceRef.current )
    }

    debounceRef.current = setTimeout(() => {
      // todo> buscar consulta
      console.log('debounced value', event.target.value);
      searchPlacesBrQuery( event.target.value )

    }, 1000)
  }

  return (
    <div className='search-container'>
      <input type="text"
      className='form-control'
      placeholder='Buscar Lugar'
      onChange={ onQueryChanged } />
      <SearchResolts />
    </div>
  )
}
