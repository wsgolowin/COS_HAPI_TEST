// 3rd_party_orders_route

"use strict";

module.exports = {
	name     : "THIRD PARTY ORDERS",
	register : async( server/* , options */ ) => {
		server.route( {
			method  : [ "PUT", "POST", "GET", "DELETE" ],
			path    : "/api/third_party_orders",
			handler : async( /* request, h */ ) => {
				return "THIRD PARTY ORDERS";
			}
		} );
	}
};
