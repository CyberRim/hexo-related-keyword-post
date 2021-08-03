/*jshint esversion: 6 */
const lodash = require('lodash');
const util = require('./util.js');

function sortKeyByValue(json) {
	'use strict';
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
	'use strict';
	const keywordsJSON = util.readKeywordsFile();
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
	let relatedPostsArrayStr = '[]';
	if (util.isKeywordsFileExists()) {
		const keywordsJSON = util.readKeywordsFile();
		const hashCode = util.hash(data._content);
		if (hashCode in keywordsJSON) {
			let relatedPostsArray = hashCodeArrayToPermalinkArray(sortKeyByValue(keywordsJSON[hashCode].related));
			relatedPostsArrayStr = JSON.stringify(relatedPostsArray);
		}
	}
	let scriptStr = '<script>' +
		'if(typeof hexoRelatedKeywordPost !== "object") hexoRelatedKeywordPost = {};' +
		'hexoRelatedKeywordPost.relatedPosts = ' + relatedPostsArrayStr + ';' +
		'</script>';
	content += scriptStr;
	data.content = content;
	return data;
};


// let scriptStr = '<script>'+
// 	'var aside = document.getElementsByTagName("aside")[0];'+
// 	'var div = document.createElement("div")'+
// 	'</script>';