"use strict";

module.exports = {
    name     : "default",
    register : async( server/* , options */ ) => {
        server.route( {
            method  : "GET",
            path    : "/{path*}",
            options : {
                handler : {
                    directory : {
                        path            : ".",
                        redirectToSlash : true,
                        index           : [ "index.html", "default.html" ]
                    }
                },
                plugins : {
                    lout : false
                }
            }
        } );
    }
};
