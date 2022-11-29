import { BtnMyLocation, MapView, SearchBar } from "../components"


export const HomeScreen = () => {
  return (
    <div className="map-box">
      <MapView />
      <BtnMyLocation />
      <SearchBar />
    </div>
  )
}
