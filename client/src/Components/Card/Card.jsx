import React from 'react';
import { Link } from "react-router-dom";
import './Card.css';

function Card({ flags, name, region, id, population }) {
  return (
    <div className='DivPadreCard'>
        <Link to={`/detalle/${id}`} className='link'>
        <img className='img' src={ flags } alt={ name } />
        <h2 className='Name'>{ name }</h2>
        <div className='DivContinent'>
        <h4 className='cardContinent'> Continent: { region }</h4>
        <h4 className='cardPopulation'> Population: { population }</h4>
        </div>
        </Link>
    </div>
  )
}

export default Card