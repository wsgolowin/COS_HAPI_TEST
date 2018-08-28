"use strict";

module.exports = {
    name: "Orders",
    register: async( server/* , options */ ) => {
        server.route( {
            method: "GET",
            path: "/api/orders",
            handler: async( /* request, h */ ) => {
                return "All Orders";
            }
        } );
    }
};
