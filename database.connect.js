"use strict";

const Mongoose = require( "mongoose" );


// load database
Mongoose.connect( "mongodb://127.0.0.1:27017/cos-database" );
const db = Mongoose.connection;

db.on( "error", console.error.bind( console, "connection error" ) );
db.once( "open", () => {
    console.log( "Connection with database succeeded." );
} );

exports.main_db = db;
