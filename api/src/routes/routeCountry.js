const { Router } = require('express');
const { getCountry } = require('../Controller/Controller.js');
const { Country, Activity } = require('../db.js')

// import all controllers


const routes = new Router();

// Add routes
routes.get('/', async (req, res) => {
    try {
        const { name } = req.query;
        const countries = await Country.findAll({
            include:[{
                model: Activity,
                attributes:["id","name","dificulty","duration","season"],
                through:{attributes:[]}
            }]});
            
            
            if ( !countries.length && !name ) {
                try {
                    const response = await getCountry();
                    const subiraDb =  await Country.bulkCreate(response);
                    res.status(200).send(subiraDb);
                    
                } catch (error) {
                    console.log('error primer condicional',error)
                }
            } 
            
            
            if (name && countries.length) {
                try {
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
                    
                } catch (error) {
                    console.log('error en tercer condicional', error)
                }
                
            }

            if (!name && countries.length) {
                res.status(200).send(countries)
            }
        
    } catch (error) {
        console.log('error en get countries', error)
    }
});


routes.get("/:id", async(req, res)=>{
    const { id } = req.params;
    try {
        const country = await Country.findByPk(id,
            {include:[{
                model: Activity,
                attributes:["name","dificulty","duration","season"],
                through:{attributes:[]}
               }]
            })
            res.status(200).send(country)
    } catch (error) {
        console.log('error en getById', error)
    }
})

module.exports = routes;
