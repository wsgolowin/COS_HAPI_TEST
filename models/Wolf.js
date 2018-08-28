const mongoose = require( "mongoose" );
const Schema = mongoose.Schema;
let WolfSchema = new Schema( {
    name : String
} );

module.exports = mongoose.model( "Wolf", WolfSchema );
