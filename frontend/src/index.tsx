import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MapsApp } from './MapsApp';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';

 
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpc3NvbnJoIiwiYSI6ImNsNm5wYTkzczAzMDgzamtmcXZ1OXlnZWUifQ.lmGHAekQHVMLNbwV-CdN9w';



if ( !navigator.geolocation ) {
  alert('O navegador não tem opção de geolocalização')
  throw new Error('O navegador não tem opção de geolocalização')
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <React.StrictMode>
    
    <MapsApp />
  
  </React.StrictMode>
);

