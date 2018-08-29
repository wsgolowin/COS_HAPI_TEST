let mongoose       = require( "mongoose" );
let Schema         = mongoose.Schema;

let schema_options = require( "./schema.options.json" );

let PRODUCT = new Schema( {
	product : {
		type     : String,
		unique   : true,
		required : true
	}
}, schema_options );


module.exports.PRODUCT = PRODUCT;
