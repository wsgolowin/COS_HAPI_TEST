"use strict";

const mongoose           = require( "mongoose" );
const all_models         = require( "../models" );
const mongo_url          = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/";
const all_databases_keys = Object.keys( all_models );


const options   = () => ( {
	poolSize          : 2,
	reconnectInterval : 5000,
	connectTimeoutMS  : 30000,
	reconnectTries    : 300000,
	keepAlive         : 300000,
	useNewUrlParser   : true,
	autoReconnect     : true,
	ssl               : false,
	promiseLibrary    : global.Promise
} );


const create_multiple = ( ) => {

	let reducer = ( acc, value ) => {

		let database_url = `${mongo_url}${value}`;

		acc[ `${value}` ] = mongoose.createConnection( database_url, options() );

		return acc;
	};

	return all_databases_keys.reduce( reducer, {} );
};


module.exports = create_multiple;
