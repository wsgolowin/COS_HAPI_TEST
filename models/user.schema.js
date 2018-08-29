let mongoose = require( "mongoose" );
let Schema   = mongoose.Schema;

let schema_options = require( "./schema.options.json" );


let USER = new Schema( {
	user : {
		type     : String,
		unique   : true,
		required : true
	},
	email           : String,
	firstname       : String,
	lastname        : String,
	password        : String,
	token           : String,
	tokenExpires    : Date,
	passwordExpires : Date,
	connectionID   	: String,
	authToken      	: String
}, schema_options );

module.exports.USER = USER;

