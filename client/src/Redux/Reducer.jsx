const initialState = {
    countries: [],
    activities: [],
    unCountry: {},
    continents: [],
    countriesModificable: [],
    activityCreate: 'Inicial'
}

function reducer(state = initialState, { type, payload }) {
    switch (type) {
      case "GET_COUNTRIES":
        return {
          ...state,
          countries: payload,
          countriesModificable: payload
        };
  
      case "GET_ACTIVITIES":
        return {
          ...state,
          activities: payload,
        };

        case "GET_CONTINENTS":
            return{
                ...state,
                continents: payload
            }
  
      case "COUNTRIES_BY_ID":
        return {
          ...state,
          unCountry: payload,
        };

      case "DESMONTAR_COUNTRY":
      return {
        ...state,
        unCountry: {},
      };

      case "FILTRO_ACTIVITIES":
        console.log("este es el case filtro activities");
        const estadoCountries = [...state.countries];
        let listaCountries;
        if (payload === 'todos') {
          listaCountries = estadoCountries;
        }else{
          const aux = estadoCountries.filter((c) => { return c.activities.filter(a=> a.name.includes(payload))})

          listaCountries = aux.length ? aux : estadoCountries;
            if(!aux.length) {
              alert("EFE")
            }
        }
        return {
          ...state,
          countriesModificable: listaCountries
        };

        case "FILTRO_CONTINENT":

            const allCountries = [...state.countries];
            let listaCountry;
            if (payload === 'todos') {
                listaCountry = allCountries;
            }else{
                const continents = allCountries.filter(c => c.region.includes(payload))
                listaCountry = continents.length ? continents : allCountries;
                if(!continents.length) {
                    alert("EFE en filtro continents")
                  }
            }
            

        return{
            ...state,
            countriesModificable: listaCountry
        }

    // case "ORDEN_ALFABETICO":
    //   const listaGames = [...state.countriesModificable];
    //   let ordenados;
    //   if (payload === "Az") {
    //     ordenados = listaGames.sort((elementoUno, elementoDos) => {
    //       if (
    //         elementoUno.name.toLowerCase() < elementoDos.name.toLowerCase()
    //       ) {
    //         return -1;
    //       } else {
    //         return 1;
    //       }
    //     });
    //   }
    //   if (payload === "Za") {
    //     ordenados = listaGames.sort((elementoUno, elementoDos) => {
    //       if (
    //         elementoUno.name.toLowerCase() < elementoDos.name.toLowerCase()
    //       ) {
    //         return 1;
    //       } else {
    //         return -1;
    //       }
    //     });
    //   }
    //   return {
    //     ...state,
    //     countriesModificable: ordenados,
    //   };

    // case "ORDEN_PUNTAJE":
    //   let puntaje = [...state.countriesModificable];
    //   if (payload === "puntajeMinimo") {
    //     puntaje.sort((puntaje1, puntaje2) => {
    //       if (
    //         Number(puntaje1.rating) < Number(puntaje2.rating)
    //       ) {
    //         return -1;
    //       } else {
    //         return 1;
    //       }
    //     });
    //   }
    //   if (payload === "puntajeMaximo") {
    //     puntaje.sort((puntaje1, puntaje2) => {
    //       if (Number(puntaje1.rating) < Number(puntaje2)) {
    //         return 1;
    //       } else {
    //         return -1;
    //       }
    //     });
    //   }
    //   return {
    //     ...state,
    //     countriesModificable: puntaje,
    //   };

    // case "BUSQUEDA_POR_NOMBRE":
    //   console.log("ACA ESTA PAYLOAD ", payload);
    //   if (!payload) {
    //     return alert("NO SE ENCUENTRA UNA RECETA CON ESE NOMBRE");
    //   } else {
    //     console.log("ENCONTRE ALGO ", payload);
    //     return {
    //       ...state,
    //       countriesModificable: payload,
    //     };
    //   }

    // case "VIDEOGAME_CREADO":
    //   return {
    //     ...state,
    //     gameCreate: payload,
    //   };

    // case "VIDEOGAME_NO_CREADO":
    //   return {
    //     ...state,
    //     gameCreate: payload,
    //   };

       default: return state;
    

  }
}

  export default reducer;