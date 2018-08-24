console.log(`\n\n\n**************************************************`);
console.log(`[ HAPI_SERVER ]`  );
console.log(`***************************************************\n\n\n`);
"use strict";

const users       = require( "./users" );          // users route
const restaurants = require( "./restaurants" );    // restaurants route

const routes = [ users, restaurants ];

module.exports = routes;
