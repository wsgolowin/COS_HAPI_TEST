let mongoose = require( "mongoose" );
let Schema   = mongoose.Schema;

let schema_options = require( "./schema.options.json" );


let USER_BUCKET = new Schema( {
	user_bucket : {
		type     : String,
		unique   : true,
		required : true
	}
}, schema_options );


module.exports.USER_BUCKET = USER_BUCKET;
