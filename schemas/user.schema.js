const Joi = require( "joi" );

const USER_OBJECT = {
    username     : Joi.string().alphanum().min( 3 ).max( 30 ).required(),
    password     : Joi.string().regex( /^[a-zA-Z0-9]{3,30}$/ ),
    access_token : [ Joi.string(), Joi.number() ],
    email        : Joi.string().email( { minDomainAtoms: 2 } )
};

const UserSchema = Joi
    .object()
    .keys( USER_OBJECT )
    .with( "username", "birthyear" )
    .without( "password", "access_token" );


module.exports = UserSchema;
