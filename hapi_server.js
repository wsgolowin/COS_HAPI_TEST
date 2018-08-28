"use strict";


const fs           = require( "fs" );

/* Configs */
const api_config  = require( "./configs/hapi_server.config" );

/* Mongojs */


console.log( "\n\n\n**************************************************" );
console.log( "[ api_config ]", api_config );
console.log( "***************************************************\n\n\n" );

/* MODULES */
const Hapi         = require( "hapi" );
const Path         = require( "path" );
const routes       = require( "./routes" );

/* PLUGINS */
const plugins      = require( "./plugins" );
const { main_db }      = require( "./database.connect" );

/* server CONSTANTS */
const DEFAULT_HOST = "127.0.0.1";
const DEFAULT_PORT = 8000;
const RADIX        = 10;

const server = Hapi.server( {
    host  : process.env.HOST || DEFAULT_HOST,
    port  : parseInt( process.env.PORT, RADIX ) || DEFAULT_PORT,
    debug : false,
    app   : {
        db : main_db
    },
    routes : {
        files : {
            relativeTo : Path.join( __dirname, "public" )
        }
    }
} );


const init = async() => {
    try {
        await server.register( plugins );
        await server.register( routes );
        await server.start();
        console.log( `Server running at" ${server.info.uri}` );

    } catch ( error ) {
        console.log( "Error", error );
    }

};

init();
