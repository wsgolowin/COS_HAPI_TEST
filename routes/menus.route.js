"use strict";

module.exports = {
    name     : "Menus",
    register : async( server/* , options */ ) => {
        server.route( {
            method  : [ "PUT", "POST", "GET", "DELETE" ],
            path    : "/api/menus",
            handler : async( /* request, h */ ) => {
                return "All Menus";
            }
        } );
    }
};
