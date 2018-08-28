"use strict";

module.exports = {
    name: "Restaurants",
    register: async( server/* , options */ ) => {
        server.route( {
            method: "GET",
            path: "/api/restaurants",
            handler: async( /* request, h */ ) => {
                return "All USERS";
            }
        } );
    }
};
