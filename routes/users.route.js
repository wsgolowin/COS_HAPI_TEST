"use strict";

module.exports = {
    name     : "Users",
    register : async( server/* , options */ ) => {
        server.route( {
            method  : [ "PUT", "POST", "GET" ],
            path    : "/api/users/{user_id?}",
            handler : async( /* request, h */ ) => {

                const user = request.params.user ? encodeURIComponent( request.params.user ) : "stranger";

                return `Hello ${user}!`;
            },
            options : {
                description : "Say hello!",
                notes       : "The user parameter defaults to 'stranger' if unspecified",
                tags        : [ "api", "greeting" ]
            }
        } );
    }
};
