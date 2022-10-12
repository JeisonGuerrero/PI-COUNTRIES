import axios from "axios";

export const getCountries = () => {
    return async (dispatch) => {
        try {
            let rutaCountries = await axios ('http://localhost:3001/countries');
            return dispatch ({
              type: 'GET_COUNTRIES',
              payload: rutaCountries.data,   
            });
        } catch (error) {
            console.log("ERROR EN LA LLAMADA AL BACK A LA RUTA COUNTRIES ", error);
        }
    }
};

export const getActivities = () => {
    return async (dispatch) => {
        try {
            let rutaActivities = await axios ('http://localhost:3001/activities');
            return dispatch ({
              type: 'GET_ACTIVITIES',
              payload: rutaActivities.data
            });
        } catch (error) {
            console.log("ERROR EN LA LLAMADA AL BACK A LA RUTA ACTIVITIES ", error);
        }
    }
};

export function getContinents (){
    return async function(dispatch){
        const continents = await axios.get("http://localhost:3001/continents");
        const resp = continents.data;
        return dispatch({
            type: "GET_CONTINENTS",
            payload: resp
        })
    }
}

export function countriesDetail(id) {
    return async (dispatch) => {
      try {
        let rutaById = await axios(`http://localhost:3001/countries/${id}`);
        console.log('Esto es paylaod by id', rutaById.data)
        return dispatch({
          type: "COUNTRIES_BY_ID",
          payload: rutaById.data,
        });
      } catch (error) {
        console.log("ERROR EN LA RUTA BY ID ", error);
      }
    }; 
}

export function desmontarCountry() {
    return {
      type: "DESMONTAR_COUNTRY",
    };
}

export function filterByContinent(payload){
    return {
        type:"FILTRO_CONTINENT",
        payload
    }
}

export function filterByActivity(payload){
    return {
        type:"FILTRO_ACTIVITY",
        payload
    }
}