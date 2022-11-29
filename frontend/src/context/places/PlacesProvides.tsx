import { useEffect, useReducer } from "react";
import { searchApi } from "../../api";
import { getUserLocation } from "../../helpers/getUserLocation";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesReducer";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number]
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const PlacesProvides = ({ children }: Props) => {

  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation()
      .then(lngLat => dispatch({ type: "setUserLocation", payload: lngLat }))
  }, []);

  const searchPlacesBrQuery = async (query: string) => {
    if (query.length === 0) return []; //limpa o state
    if (!state.userLocation) throw new Error('Não há localização')


    const resp = await searchApi.get(`/${query}.json`, {
      params: {
        promixity: state.userLocation.join(',')
      }
    });

    console.log(resp);
    return resp.data
  }

  return (
    <PlacesContext.Provider value={
      {
        ...state,
        searchPlacesBrQuery
      }
    }>
      {children}

    </PlacesContext.Provider>
  )
}
