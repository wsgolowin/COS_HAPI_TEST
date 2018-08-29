let mongoose = require( "mongoose" );
let Schema   = mongoose.Schema;

let schema_options = require( "./schema.options.json" );

let THIRD_PARTY_ORDER = new Schema( {
	third_party_order : {
		type     : String,
		unique   : true,
		required : true
	}
}, schema_options );


module.exports.THIRD_PARTY_ORDER = THIRD_PARTY_ORDER;
