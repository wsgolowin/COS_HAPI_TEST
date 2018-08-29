const USER              = require( "./user.schema" );
const MENU              = require( "./menu.schema" );
const ORDER             = require( "./order.scema" );
const PRODUCT           = require( "./product.schema" );
const RESTAURANT        = require( "./restaurant.schema" );
const USER_BUCKET       = require( "./user_bucket.schema" );
const THIRD_PARTY_ORDER = require( "./3d_party_orders.scema" );


const COS_SCHEMAS = {
	USER              : USER,
	MENU              : MENU,
	ORDER             : ORDER,
	PRODUCT           : PRODUCT,
	RESTAURANT        : RESTAURANT,
	USER_BUCKET       : USER_BUCKET,
	THIRD_PARTY_ORDER : THIRD_PARTY_ORDER
};

module.exports = COS_SCHEMAS;
