const { Router } = require('express');
const { getCountry } = require('../Controller/Controller.js');
const { Country, Activity } = require('../db.js')

// import all controllers


const routes = new Router();

// Add routes
routes.get('/', async (req, res) => {
    try {
        const name = req.query;
        const countries = await Country.findAll({
            include:[{
                model: Activity,
                attributes:["id","name","dificulty","duration","season"],
                through:{attributes:[]}
               }]});

        if (!name && !countries.length) {
            const response = await getCountry();
            const subiraDb =  await Country.bulkCreate(response);
            res.status(200).send(subiraDb);
        } 

        if (name && countries.length) {
            const country = await Country.findAll({
                where: {
                    name :{[substring]: name}},
                include:[{
                    model: Activity,
                    attributes:["name","dificulty","duration","season"],
                    through:{attributes:[]}
                   }]
            })
            country.length? res.status(200).send(country):
            res.status(400).send("Country not found")
        }

        if (!name && countries.length) {
            res.status(200).send(countries)
        }
    } catch (error) {
        console.log('error en get countries', error)
    }
});

module.exports = routes;
