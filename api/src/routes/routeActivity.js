const { Router } = require('express');

const { Countries, Activities} = require('../db')

const route = new Router();

// Add routes

route.post('/', async(req, res)=>{
    const { name, dificulty, duration, season, countries } = req.body;

    try {
    
    if(!name||!dificulty||!duration||!season||!countries){
     return res.status(404).send("Missing parameters")
    }
   
    const newActivity =await Activities.create({
        name,
        dificulty,
        duration,
        season,
        countries
    });
   
    const findCountry = await Countries.findAll({
        where:{
            name: countries
        }
    })

    await newActivity.addCountries(findCountry)

    return res.status(200).send(newActivity)
    
   } catch (error) {
    console.log('Error en el post activity', error)
   }

});


module.exports = route;
