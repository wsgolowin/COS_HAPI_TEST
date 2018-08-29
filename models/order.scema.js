let mongoose       = require( "mongoose" );
let Schema         = mongoose.Schema;

let schema_options = require( "./schema.options.json" );


let ORDER = new Schema( {
	order : {
		type     : String,
		unique   : true,
		required : true
	}
}, schema_options );

module.exports.ORDER = ORDER;
