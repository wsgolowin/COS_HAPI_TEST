"use strict";

module.exports = {
    name: "Menus",
    register: async( server/* , options */ ) => {
        server.route( {
            method: "GET",
            path: "/api/menus",
            handler: async( /* request, h */ ) => {
                return "All Menus";
            }
        } );
    }
};
