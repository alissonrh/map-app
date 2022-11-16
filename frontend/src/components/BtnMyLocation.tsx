import { useContext } from "react"
import { MapContext, PlacesContext } from "../context"


export const BtnMyLocation = () => {

  const { map, isMapReady } = useContext(MapContext)
  const { userLocation } = useContext(PlacesContext)

  const onClick = () => {

    if (!isMapReady) throw new Error('O mapa não está carregado')
    if (!userLocation) throw new Error('Não localização de usuário')

    map?.flyTo({
      zoom: 14,
      center: userLocation
    })
  }
  return (
    <button
      onClick={onClick}
      className="btn btn-primary"
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px', 
        zIndex: 999
      }}>
      Minha Localização
    </button>
  )
}
