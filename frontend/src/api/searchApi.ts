import axios from "axios";

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    langusge: 'pt',
    access_token: 'pk.eyJ1IjoiYWxpc3NvbnJoIiwiYSI6ImNsNm5wYTkzczAzMDgzamtmcXZ1OXlnZWUifQ.lmGHAekQHVMLNbwV-CdN9w',
    country: 'br'
  }
})

export default searchApi;