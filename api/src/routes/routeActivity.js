const { Router } = require('express');

const { Country, Activity} = require('../db')

const route = new Router();

// Add routes

route.post('/', async(req, res)=>{
    const { id, name, dificulty, duration, season, countryName } = req.body;

    try {
    
    if(!id||!name||!dificulty||!duration||!season||!countryName){
     res.status(404).send("Missing parameters")
    }
   
    const newActivity =await Activity.create({
        id,
        name,
        dificulty,
        duration,
        season,
        countryName
    });
   
    const findCountry = await Country.findAll({
        where:{
            name: countryName
        }
    })

    await newActivity.addCountry(findCountry)

    res.status(200).send(newActivity)
    
   } catch (error) {
    console.log('Error en el post activity', error)
   }

});


module.exports = route;
