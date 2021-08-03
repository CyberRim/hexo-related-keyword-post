/*jshint esversion: 6 */
const fs = require('hexo-fs');

module.exports = function(hexo) {
	'use strict';
	const theme = hexo.config.theme || 'landscape';
	let path = __dirname +'/themeScript/' + theme + '.js';
	if(!fs.existsSync(path)) {
		path = __dirname +'/themeScript/default.js';
	}
	let scriptStr = '';
	scriptStr += '<script>\n';
	scriptStr += fs.readFileSync(path);
	scriptStr += '</script>\n';
	return scriptStr;
};