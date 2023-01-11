import { useContext, useEffect, useReducer } from "react";
import { searchApi } from "../../api";
import { getUserLocation } from "../../helpers/getUserLocation";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesReducer";
import { Feature, PlacesResponse } from "../../interfaces/IPlaces";



export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: true,
  places: [],
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

  const searchPlacesBrQuery = async (query: string): Promise<Feature[] | any> => {
    if (query.length === 0) {
      dispatch({ type: "setPlaces", payload: [] })
      return []
    }
    if (!state.userLocation) throw new Error('Não há localização');

    dispatch({ type: "setLoadingPlaces" })

    const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(',')
      }
    });

    dispatch({ type: "setPlaces", payload: resp.data.features })

    return resp.data.features;
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
