"use strict";

module.exports = {
    name: "Users",
    register: async( server/* , options */ ) => {
        server.route( {
            method: "GET",
            path: "/api/users",
            handler: async( /* request, h */ ) => {
                return "All USERS";
            }
        } );
    }
};
