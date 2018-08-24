"use strict";

const Hapi         = require( "hapi" );
const Path         = require( "path" );
const routes       = require( "./routes" );
// const plugins      = require('./plugins');

const DEFAULT_HOST = "localhost";
const DEFAULT_PORT = 8000;
const RADIX        = 10;

const server = Hapi.server( {
    host: process.env.HOST || DEFAULT_HOST,
    port: parseInt( process.env.PORT, RADIX ) || DEFAULT_PORT,
    routes: {
        files: {
            relativeTo: Path.join( __dirname, "public" )
        }
    },
    app: {}
} );


const init = async() => {
    try {
    // await server.register(plugins);
        await server.register( routes );
        await server.start();
        console.log( `Server running at" ${server.info.uri}` );

    } catch ( error ) {
        console.log( "Error", error );
    }

};

init();
