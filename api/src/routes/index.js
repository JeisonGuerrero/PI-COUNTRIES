const { Router } = require('express');
// Importar todos los routers;
const routerCountry = require('./routeCountry.js');
const routerActivity = require('./routeActivity.js');


const router = Router();

// Configurar los routers
router.use('/countries', routerCountry);
router.use('/activities', routerActivity);


module.exports = router;
