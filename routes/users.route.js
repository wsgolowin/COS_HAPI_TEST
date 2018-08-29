"use strict";

const User = require( "../models/user.schema" );

module.exports = {
	name     : "Users",
	register : async( server, options ) => {
		console.log( "\n\n\n**************************************************" );
		console.log( "[ Users route ]  == options", options );
		console.log( "***************************************************\n\n\n" );
		server.route( {
			method  : [ "GET" ],
			path    : "/api/users",
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
		server.route( {
			method  : [ "PUT", "POST" ],
			path    : "/api/users/{username}",
			handler : async( request, h ) => {

				console.log( "\n\n\n**************************************************" );
				console.log( "[ request.params ]  == ", request.params );
				console.log( "[ h ]  == ", h );
				console.log( "***************************************************\n\n\n" );
				const user = new User( {
					username : request.params.username
				} );

				user.save( ( error, new_user ) => {
					console.log( "[ new_user ]  == ", new_user );
					if ( error ) {
						console.error( error );
					}

					return new_user.id;
				} );
			},
			options : {
				description : "Say hello!",
				notes       : "The user parameter defaults to 'stranger' if unspecified",
				tags        : [ "api", "greeting" ]
			}
		} );
	}
};
