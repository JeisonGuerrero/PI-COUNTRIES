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

export function filtroContinents(payload){
    return {
        type:"FILTRO_CONTINENT",
        payload
    }
}

export function filtroActivity(payload){
    return {
        type:"FILTRO_ACTIVITY",
        payload
    }
}

export function ordenAlfabetico(payload) {
    return {
      type: "ORDEN_ALFABETICO",
      payload,
    };
}
  
export function ordenPorPopulation(payload) {
    return {
      type: "ORDEN_POPULATION",
      payload,
    };
}
  
export const busquedaPorNombre = (nombre) => {
    return async function (dispatch) {
      try {
        if (nombre) {
          let respuesta = await axios(
            `http://localhost:3001/videogames?name=${nombre}`
          );
          return dispatch({
            type: "BUSQUEDA_POR_NOMBRE",
            payload: respuesta.data,
          });
        } else {
          alert("INGRESA UN NOMBRE DE UN VIDEOGAME");
        }
      } catch (error) {
        console.log("ERROR EN LA LLAMADA POR QUERY NOMBRE ", error);
        alert("NO EXISTE EL VIDEOGAME");
      }
    };
};

// export const formularioDeCreacion = async (payload) => {
//     try {
//       console.log("ACA ESTA PAYLOAD FORMULARIO ", JSON.stringify(payload));
//       let crearReceta = await axios.post(
//         "http://localhost:3001/videogames",
//         payload
//       );
//       return crearReceta;
//     } catch (error) {
//       console.log("ERROR EN LA RUTA DE CREACION ", error);
//     }
// }