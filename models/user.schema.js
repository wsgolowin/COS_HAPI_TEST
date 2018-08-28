let mongoose = require( "mongoose" );
let Schema   = mongoose.Schema;

let User = new Schema( {
    username : {
        type     : String,
        unique   : true,
        required : true
    }/* ,
    email           : String,
    firstname       : String,
    lastname        : String,
    password        : String,
    token           : String,
    tokenExpires    : Date,
    passwordExpires : Date,
    connectionID   	: String,
    authToken      	: String */
} );


module.exports = mongoose.model( "User", User );

