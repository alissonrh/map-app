import React from 'react'
import { MapProvider, PlacesProvides } from './context'
import { HomeScreen } from './screens/HomeScreen'
import './index.css';

export const MapsApp = () => {
  return (
    <PlacesProvides>
      <MapProvider>
        <HomeScreen />
      </MapProvider>

    </PlacesProvides>
  )
}
