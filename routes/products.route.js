"use strict";

module.exports = {
    name: "Products",
    register: async( server/* , options */ ) => {
        server.route( {
            method: "GET",
            path: "/api/products",
            handler: async( /* request, h */ ) => {
                return "All products";
            }
        } );
    }
};
