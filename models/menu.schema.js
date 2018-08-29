let mongoose = require( "mongoose" );
let Schema   = mongoose.Schema;

let schema_options = require( "./schema.options.json" );

let MENU = new Schema( {
	menu : {
		type     : String,
		unique   : true,
		required : true
	}
}, schema_options );


module.exports.MENU = MENU;
