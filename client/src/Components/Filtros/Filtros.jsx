import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {filtroContinents, 
        filtroActivity, 
        ordenAlfabetico, 
        ordenPorPopulation,
        busquedaPorNombre,
        getContinents, 
        } from '../../Redux/Actions'
import './Filtros.css'

function Filtros({ setPaginaEnEsteMomento }) {

    const dispatch = useDispatch();
    const activity = useSelector((state) => state.activities);
    const continent = useSelector((state) => state.continents);
    console.log(continent, 'aca el vacio');
  
    useEffect(() => {
      dispatch(getContinents());
    }, [dispatch]);
  
    //ARRANCO CON LAS FUNCIONES QUE MANIPULAN MIS EVENTOS
  
    //FILTRO POR CONTINENTES:
    const filterContinents = (e) => {
      let valor = e.target.value;
      dispatch(filtroContinents(valor));
      setPaginaEnEsteMomento(1);
    };
  
    //FILTRO POR ACTIVIDADES:
    const filterActivity = (e) => {
      let valor = e.target.value;
      dispatch(filtroActivity(valor));
      setPaginaEnEsteMomento(1);
    };
  
    //ORDEN ALFABETICO:
    const cambiarOrdenAlfa = (e) => {
      let valor = e.target.value;
      dispatch(ordenAlfabetico(valor));
    };
  
    //ORDEN POR POBLACION:
    const cambiarPuntaje = (e) => {
      let valor = e.target.value;
      dispatch(ordenPorPopulation(valor));
    };
  
    //BUSCADOR POR NOMBRE:
    const [busquedaNombre, setBusquedaNombre] = useState("");
  
    const buscadorPorNombre = (e) => {
      let busqueda = e.target.value;
      setBusquedaNombre(busqueda);
    };
    const onSubmitPorNombre = (e) => {
      e.preventDefault();
      dispatch(busquedaPorNombre(busquedaNombre));
      setBusquedaNombre("");
      setPaginaEnEsteMomento(1);
    };

  return (
    <div className='contenedorF'>
    <select
      className='filtro'
      onChange={(e) => filterContinents(e)}
      name="Continentes"
    >
    <option value="todos">TODOS LOS CONTINENTES</option>
      {continent && continent.map((e, index) => {
          return (
            <option className = 'Continents' key={index} value={e}>
              {e}
            </option>
          );
        })}
    </select>

    <select
      className='filtro'
      onChange={(e) => filterActivity(e)}
      name="Actividades"
    >
      <option value="todos">TODAS LAS ACTIVIDADES</option>
      {activity && activity.map((e, index) => {
          return (
            <option key={index} value={e.name}>
              {e.name}
            </option>
          );
        })}
    </select>

    <select
      className='filtro'
      onChange={(e) => cambiarOrdenAlfa(e)}
      name="OrdenAlfabetico"
    >
      <option value="Az">Orden de la "A" a la "Z"</option>
      <option value="Za">Orden de la "Z" a la "A"</option>
    </select>

    <select
      className='filtro'
      onChange={(e) => cambiarPuntaje(e)}
      name="OrdenPuntaje"
    >
      <option value="populationMinimo">Orden por Poblacion Minima</option>
      <option value="populationMaximo">Orden por Poblacion Maxima</option>
    </select>

    <form onSubmit={(e) => onSubmitPorNombre(e)}>
      <input
        className='buscador'
        type="text"
        value={busquedaNombre}
        onChange={(e) => buscadorPorNombre(e)}
        placeholder="Busca por nombre del pais"
      />
      <input className='buscador' type="submit" value="Buscar" />
    </form>
  </div>
  )
}

export default Filtros