import { BtnMyLocation, MapView } from "../components"


export const HomeScreen = () => {
  return (
    <div className="map-box">
      <MapView />
      <BtnMyLocation />
    </div>
  )
}
