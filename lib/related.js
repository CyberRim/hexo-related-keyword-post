/*jshint esversion: 6 */
const fs = require('hexo-fs');
const lodash = require('lodash');
const crypto = require('crypto');



function hash(str) {
	const h = crypto.createHash('sha256');
	h.update(str);
	return h.digest('hex') || '';

}

function sortKeyByValue(json) {
	const sortArray = [];
	for (let k in json) {
		var object = {
			"k": k,
			"v": json[k]
		};
		let i = lodash.sortedIndexBy(sortArray, object, function(o) {
			return -o.v;
		});
		sortArray.splice(i, 0, object);
	}
	return sortArray;
}

function hashCodeArrayToPermalinkArray(hashCodeArray) {
	const path = './keywords.json';
	if (!fs.existsSync(path)) return [];
	const keywordsJSONStr = fs.readFileSync(path) || '{}';
	const keywordsJSON = JSON.parse(keywordsJSONStr) || {};
	return hashCodeArray.map((o) => {
		if (o.k in keywordsJSON) {
			return {
				'permalink': keywordsJSON[o.k].permalink,
				'title': keywordsJSON[o.k].title
			};
		} else {
			return {};
		}
	});
}

module.exports = function(data) {
	'use strict';
	let content = data.content;

	const path = './keywords.json';
	let keywordsStr = '[]';
	if (fs.existsSync(path)) {
		const keywordsJSONStr = fs.readFileSync(path) || '{}';
		const keywordsJSON = JSON.parse(keywordsJSONStr) || {};
		const hashCode = hash(data._content);
		if (hashCode in keywordsJSON) {
			let keywordsArray = hashCodeArrayToPermalinkArray(sortKeyByValue(keywordsJSON[hashCode].related));
			keywordsStr = JSON.stringify(keywordsArray);
		}
	}
	let scriptStr = '<script>' +
		'if(typeof hexoRelatedKeywordPost !== "object") hexoRelatedKeywordPost = {};'+
		'hexoRelatedKeywordPost.relatedPosts = ' +keywordsStr +';'+
		'</script>';

	content += scriptStr;
	data.content = content;

	return data;
};


// let scriptStr = '<script>'+
// 	'var aside = document.getElementsByTagName("aside")[0];'+
// 	'var div = document.createElement("div")'+
// 	'</script>';