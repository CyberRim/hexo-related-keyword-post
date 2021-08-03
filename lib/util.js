/*jshint esversion: 6 */
const keywordsFilePath = './keywords.json';
const fs = require('hexo-fs');
module.exports = {
	hash: function hash(s) {
		'use strict';
		const c = require('crypto');
		const h = c.createHash('sha256');
		h.update(s);
		return h.digest('hex') || '';
	},
	readKeywordsFile: function() {
		'use strict';
		if (!fs.existsSync(keywordsFilePath)) return {};
		const keywordsJSONStr = fs.readFileSync(keywordsFilePath) || '{}';
		const keywordsJSON = JSON.parse(keywordsJSONStr) || {};
		return keywordsJSON;
	},

	writeKeywordsFile: function(keywordsJSON) {
		'use strict';
		if (!fs.existsSync(keywordsFilePath)) fs.writeFileSync(keywordsFilePath, '');
		const keywordsJSONStr = JSON.stringify(keywordsJSON);
		return fs.writeFileSync(keywordsFilePath, keywordsJSONStr);
	},

	isKeywordsFileExists:function(){
		'use strict';
		return fs.existsSync(keywordsFilePath);
	},
};