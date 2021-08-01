/*jshint esversion: 6 */
const fs = require('hexo-fs');
//适配next主题
module.exports = function(hexo) {
	'use strict';
	let theme = hexo.config.theme || 'landscape';
	let path = __dirname +'/themeScript/' + theme + '.js';
	if(!fs.existsSync(path)) {
		path = __dirname +'/themeScript/default.js';
	}
	let scriptStr = '';
	scriptStr += '<script>';
	scriptStr += fs.readFileSync(path);
	scriptStr += '</script>';
	return scriptStr;
};