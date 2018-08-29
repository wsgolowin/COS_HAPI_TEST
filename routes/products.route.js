"use strict";

module.exports = {
	name     : "Products",
	register : async( server/* , options */ ) => {
		server.route( {
			method  : [ "PUT", "POST", "GET", "DELETE" ],
			path    : "/api/products",
			handler : async( /* request, h */ ) => {
				return "All products";
			}
		} );
	}
};
