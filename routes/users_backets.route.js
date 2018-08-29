"use strict";

module.exports = {
	name     : "Users Backets",
	register : async( server/* , options */ ) => {
		server.route( {
			method  : [ "PUT", "POST", "GET", "DELETE" ],
			path    : "/api/users_backets",
			handler : async( /* request, h */ ) => {
				return "All USERS BACKETS";
			}
		} );
	}
};
