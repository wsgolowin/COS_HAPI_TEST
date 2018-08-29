"use strict";

module.exports = {
	name     : "Orders",
	register : async( server/* , options */ ) => {
		server.route( {
			method  : [ "PUT", "POST", "GET", "DELETE" ],
			path    : "/api/orders",
			handler : async( /* request, h */ ) => {
				return "All Orders";
			}
		} );
	}
};
