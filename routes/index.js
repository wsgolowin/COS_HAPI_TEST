"use strict";

const DEFAULT_ROUTE       = require( "./default.route" );
const SOME_JSONS_ROUTE    = require( "./some_json.route" );

const MENUS               = require( "./menus.route" );
const ORDERS              = require( "./orders.route" );
const USERS               = require( "./users.route" );
const INGRIDIENTS         = require( "./products.route" );
const RESTAURANTS         = require( "./restaurants.route" );
const THIRD_PARTY_ORDERS  = require( "./3d_party_orders.route" );
const USERS_BACKETS_ROUTE = require( "./users_backets.route" );

const routes = [
    DEFAULT_ROUTE,
    SOME_JSONS_ROUTE,

    MENUS,
    ORDERS,
    USERS,
    INGRIDIENTS,
    RESTAURANTS,
    THIRD_PARTY_ORDERS,
    USERS_BACKETS_ROUTE
];

module.exports = routes;
