import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../Redux/Actions";
import './Paginado.css';

function Paginado({ setPaginaEnEsteMomento, cantidadPorPagina, paginaEnEsteMomento }) {
    const cities = useSelector((state) => state.countriesModificable);
 
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCountries);
    }, [dispatch]);
  
   
    const volverAlaAnterior = () => {
      if (paginaEnEsteMomento === 1) return;
      setPaginaEnEsteMomento(paginaEnEsteMomento - 1);
    };
  
    const irAlaSiguiente = () => {
      if (paginaEnEsteMomento >= Math.ceil(cities.length / cantidadPorPagina))
        return;
      setPaginaEnEsteMomento(paginaEnEsteMomento + 1);
    };
  
    const paginas = (numPag) => {
      setPaginaEnEsteMomento(numPag);
    };
  
    let numeroDePaginas = [];
    for (let i = 1; i <= Math.ceil(cities.length / cantidadPorPagina); i++) {
      numeroDePaginas.push(i);
    }

    return (
        <div className='contenedorPaginado' >
        <button className='boton' onClick={volverAlaAnterior}>Pagina anterior</button>
        {numeroDePaginas &&
          numeroDePaginas.map((numero, index) => {
            return numero !== paginaEnEsteMomento ? (
              <button className='pag' key={index} onClick={() => paginas(numero)}>
                {numero}
              </button>
            ): (
              <button
                      className='pagCurrent'
                      key={index}
                      onClick={() => paginas(numero)}
                    >
                      {numero}
                    </button>
            );
          })}
        <button className='boton' onClick={irAlaSiguiente}>Pagina siguiente</button>
      </div>
  )
}

export default Paginado