import axios from "axios";

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    access_token: 'pk.eyJ1IjoiYWxpc3NvbnJoIiwiYSI6ImNsNm5wYTkzczAzMDgzamtmcXZ1OXlnZWUifQ.lmGHAekQHVMLNbwV-CdN9w',
    overview: 'simplified',
    steps: false
  }
})

export default directionsApi;