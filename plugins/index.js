const vision       = require( "./vision.plugin" );
const inert        = require( "./inert.plugin" );
const lout         = require( "./lout.plugin" );
const good         = require( "./good.plugin" );

const plugins = [
	vision,
	inert,
	lout,
	good
];

module.exports = plugins;
