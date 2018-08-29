let mongoose       = require( "mongoose" );
let Schema         = mongoose.Schema;

let schema_options = require( "./schema.options.json" );


let RESTAURANT = new Schema( {
	restaurant : {
		type     : String,
		unique   : true,
		required : true
	}
}, schema_options );


module.exports.RESTAURANT = RESTAURANT;
