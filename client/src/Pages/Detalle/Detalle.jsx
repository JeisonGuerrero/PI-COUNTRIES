import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { countriesDetail, desmontarCountry } from '../../Redux/Actions';
import './Detalle.css';

function Detalle() {
    const { id } = useParams();
    console.log("aca esta id ", id);

    const unCity = useSelector((state) => state.unCountry);
    console.log('aca unCity',unCity)
    const dispatch = useDispatch();
    
  useEffect(() => {
    dispatch(countriesDetail(id));
    return () => {
      dispatch(desmontarCountry());
    };
  }, [dispatch, id]);
  return (
    <div>
        <div className='contenedor'>
          <div className='contenedorDetalle'>
            <img className='img' src={unCity.flags} alt={unCity.name} />
            <span className='span'>Nombre:</span>
            <h2>{unCity.name}</h2>
            <span className='span'>Codigo:</span>
            <h2>{unCity.id}</h2>
            <span className='span' >Continente:</span>
            <h2>{unCity.region}</h2>
            <span className='span'>Capital:</span>
            <p>{unCity.capital}</p>
            <span className='span'>Subregion:</span>
            <p>{unCity.subregion}</p>
            <span className='span'>Area:</span>
            <p>{unCity.area} Km2</p>
            <span className='span'>Poblacion:</span>
            <p>{unCity.population} Personas</p>
            <span className='span'>Actividades:</span>
            {/* <p>{unCity.activities.map((e) => 
              <p className= 'act'>{e.name}</p>
              )}</p> */}
          </div>
        </div>
    </div>
    )}

export default Detalle