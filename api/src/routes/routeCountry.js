const { Router } = require( 'express' );
const { getCountry } = require( '../Controller/Controller.js' );
const { Countries, Activities } = require( '../db.js' )
const Sequelize = require( 'sequelize' );
const { substring } = Sequelize.Op;

// import all controllers


const routes = new Router();

// Add routes
routes.get( '/', async ( req, res ) => {
    try {
        const { name } = req.query;
        const countries = await Countries.findAll( {
            include: [{
                model: Activities,
                attributes: ["name", "dificulty", "duration", "season"],
                through: { attributes: [] }
            }]
        } );


        if ( !countries.length && !name ) {
            try {
                const response = await getCountry();
                const subiraDb = await Countries.bulkCreate( response );
                res.status( 200 ).send( subiraDb );

            } catch ( error ) {
                console.log( 'error primer condicional', error )
            }
        }


        if ( name && countries.length ) {
            try {
                const country = await Countries.findAll( {
                    where: {
                        name: { [substring]: name }
                    },
                    include: [{
                        model: Activities,
                        attributes: ["name", "dificulty", "duration", "season"],
                        through: { attributes: [] }
                    }]
                } )
                country.length ? res.status( 200 ).send( country ) :
                    res.status( 400 ).send( "Country not found" )

            } catch ( error ) {
                console.log( 'error en segundo condicional', error )
            }

        }

        if ( !name && countries.length ) {
            res.status( 200 ).send( countries )
        }

    } catch ( error ) {
        console.log( 'error en get countries', error )
    }
} );


routes.get( '/:id', async ( req, res ) => {
    let { id } = req.params;
    id = id.toUpperCase()
    try {
        const country = await Countries.findByPk( id,
            {
                include: [{
                    model: Activities,
                    attributes: ["name", "dificulty", "duration", "season"],
                    through: { attributes: [] }
                }]
            } )
        res.status( 200 ).send( country )
    } catch ( error ) {
        console.log( 'error en getById', error )
    }
} )


module.exports = routes;
