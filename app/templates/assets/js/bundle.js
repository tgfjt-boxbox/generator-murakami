/**
 * @license
 * Murakami 0.0.1
 * Copyright (C) Murakami
 */

/**
 * [murakami]
 * @namespace
 */
var murakami = murakami || {};


/**
 * [Base of murakami]
 * @constructor
 */
murakami.Base = function() {
	this.name = '<%= area %>';
};

/**
 * [hello message]
 * @return {String} name.
 */
murakami.Base.prototype.hello = function() {
	return 'hello' + this.name;
};
