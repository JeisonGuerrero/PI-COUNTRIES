import React from 'react'
import Cards from '../../Components/Cards/Cards'
import './Home.css'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from '../../Redux/Actions';
import Filtros from '../../Components/Filtros/Filtros';
import Paginado from '../../Components/Paginado/Paginado';
import BarraDeNavegacion from '../../Components/BarraDeNavegacion/BarraDeNavegacion';

function Home() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const allCountries = useSelector((state) => state.countriesModificable);

  const [paginaEnEsteMomento, setPaginaEnEsteMomento] = useState(1);
  const cantidadPorPagina = 10;
  const indiceUno = paginaEnEsteMomento * cantidadPorPagina;
  const ultimoIndice = indiceUno - cantidadPorPagina;
  const listaDeCountries = allCountries.slice(ultimoIndice, indiceUno);

  return (
    <div className='DivPadreHome'>
      <BarraDeNavegacion/>
      <Filtros setPaginaEnEsteMomento={setPaginaEnEsteMomento}/>
      <Paginado
        setPaginaEnEsteMomento={setPaginaEnEsteMomento}
        cantidadPorPagina={cantidadPorPagina}
        paginaEnEsteMomento={paginaEnEsteMomento}
      />
      <Cards countries={listaDeCountries}/>
    </div>
  )
}

export default Home