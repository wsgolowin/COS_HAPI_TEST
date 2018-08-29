"use strict";


/* Mongojs */
const mongose_models = require( "./models" );

/* MODULES */
const Hapi        = require( "hapi" );
const Path        = require( "path" );
const routes      = require( "./routes" );

/* PLUGINS */
const plugins     = require( "./plugins" );
const connections = require( "./middleware/database.connect" )();

const connection_keys = Object.keys( connections );


/* server CONSTANTS */
const DEFAULT_HOST = "127.0.0.1";
const DEFAULT_PORT = 8000;
const RADIX        = 10;

const server = Hapi.server( {
	host   : process.env.HOST || DEFAULT_HOST,
	port   : parseInt( process.env.PORT, RADIX ) || DEFAULT_PORT,
	debug  : false,
	app    : { },
	routes : {
		files : {
			relativeTo : Path.join( __dirname, "public" )
		}
	}
} );


Promise.all( connection_keys.map( ( key ) => {
	server.app[ `DB_${key}` ] = connections[ `${key}` ];
} ) );


console.log( "\n\n\n**************************************************" );
console.log( "[ server.app.PRODUCT ]", server.app.DB_PRODUCT );
console.log( "***************************************************\n\n\n" );

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

module.exports = init;

