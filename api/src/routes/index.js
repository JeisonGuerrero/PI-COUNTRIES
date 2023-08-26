const { Router } = require('express');
const { Countries } = require('../db')
// Importar todos los routers;
const routerCountry = require('./routeCountry.js');
const routerActivity = require('./routeActivity.js');



const router = Router();

// Configurar los routers
router.use('/countries', routerCountry);
router.use('/activities', routerActivity);
router.get('/continents', async (req, res) => {
    try {
        const countries = await Countries.findAll();
        const continents = new Set(countries.map((c)=> c.region))
        console.log('esto es continents' , continents)
        let allContinents = [];
        continents.forEach(c=> allContinents.push(c))      

        res.status(200).send(allContinents)
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router;
