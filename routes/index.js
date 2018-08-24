"use strict";

const users       = require( "./users" );          // users route
const restaurants = require( "./restaurants" );    // restaurants route

const routes = [ users, restaurants ];

module.exports = routes;
