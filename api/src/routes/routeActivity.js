const { Router } = require('express');

const { Country, Activity} = require('../db')

const route = new Router();

// Add routes

route.post('/', async(req, res)=>{
    const { name, dificulty, duration, season, countries } = req.body;

    try {
    
    if(!name||!dificulty||!duration||!season||!countries){
     return res.status(404).send("Missing parameters")
    }
   
    const newActivity =await Activity.create({
        name,
        dificulty,
        duration,
        season,
        countries
    });
   
    const findCountry = await Country.findAll({
        where:{
            name: countries
        }
    })

    await newActivity.addCountry(findCountry)

    return res.status(200).send(newActivity)
    
   } catch (error) {
    console.log('Error en el post activity', error)
   }

});


module.exports = route;
