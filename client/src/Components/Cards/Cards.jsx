import React from 'react'
import Card from '../Card/Card'
import './Cards.css'

function Cards({ countries }) {
  return (
    <div className='DivPadreCards'>
    {countries.map((e) => {
        return (
            <div key={e.id}>
                <Card 
                    id={e.id}
                    name={e.name} 
                    flags={e.flags} 
                    region={e.region} 
                    population={e.population?e.population.toString().length ===10 ? `${e.population.toString()[0]}${e.population.toString()[1]}${e.population.toString()[2]}${e.population.toString()[3]}.${e.population.toString()[4]} Million`:
                    e.population.toString().length ===9 ? `${e.population.toString()[0]}${e.population.toString()[1]}${e.population.toString()[2]}.${e.population.toString()[3]} Million`:
                    e.population.toString().length ===8 ? `${e.population.toString()[0]}${e.population.toString()[1]}.${e.population.toString()[2]} Million`:
                    e.population.toString().length ===7 ? `${e.population.toString()[0]}.${e.population.toString()[1]} Million`:
                e.population: 0}
                />
            </div>
        )})
    }
    </div>
  )
}

export default Cards