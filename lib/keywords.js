/*jshint esversion: 6 */
const Hanlp = require("node-hanlp");
const removeMd = require('remove-markdown');
const front = require('hexo-front-matter');
const fs = require('hexo-fs');
const util = require('./util.js');

//移除md的代码块
function removeCode(markdown) {
	'use strict';
	var pattern = new RegExp(/^```[\s\S]*?^```((\r\n)|\n)/, 'mg');
	return markdown.replace(pattern, '');
}

function removeMarkdown(markdown) {
	'use strict';
	return removeMd(markdown);
}

function generateKeywords(text) {
	'use strict';
	//分词库初始化及配置
	//https://github.com/hailiang-wang/hanlp-api
	const HanLP = new Hanlp({
		CustomDict: true, //使用自定义词典
		NameRecognize: true, //中国人名识别
		TranslatedNameRecognize: true, //音译人名识别
		JapaneseNameRecognize: true, //日本人名识别
		PlaceRecognize: true, //地名识别
		OrgRecognize: true //机构名识别
	});
	let words = HanLP.Keyword(text, 10);
	return words;
}


function relatedSum(keywords1, keywords2) {
	'use strict';
	let relatedSum = 0;
	for (let i in keywords1) {
		for (let j in keywords2) {
			if (keywords1[i] == keywords2[j]) {
				relatedSum += (keywords1.length - i) * (keywords2.length - j);
			}
		}
	}
	//归一化
	let length1 = keywords1.length;
	let length2 = keywords2.length;
	let minLength = length1 <= length2 ? length1 : length2;
	let maxSum = 0;
	for (let i = 0; i < minLength; i++) {
		maxSum += (length1 - i) * (length2 - i);
	}
	relatedSum /= maxSum;
	return relatedSum;
}


function refreshKeywords(data, keywords) {
	'use strict';
	const hashcode = util.hash(data._content);
	const keywordsJSON = util.readKeywordsFile();
	const newRelated = {};
	for (let h in keywordsJSON) {
		if (h == hashcode) continue;
		const sum = relatedSum(keywords, keywordsJSON[h].keywords);
		const related = keywordsJSON[h].related || {};
		related[hashcode] = sum;
		newRelated[h] = sum;
	}
	keywordsJSON[hashcode] = {
		'title': data.title,
		'permalink': data.permalink,
		'keywords': keywords,
		'related': newRelated
	};
	util.writeKeywordsFile(keywordsJSON);
}

function savaToPostFile(data, keywords) {
	// 写入md文件
	let tmpPost = front.parse(data.raw);
	tmpPost.keywords = keywords;
	//process post
	let postStr = front.stringify(tmpPost);
	postStr = '---\n' + postStr;
	fs.writeFileSync(data.full_source, postStr, 'utf-8');
}

module.exports = function(data) {
	'use strict';
	if (data.layout != 'post') {
		return data;
	}
	const noCodeMd = removeCode(data.raw);
	const rawText = removeMarkdown(noCodeMd);
	const keywords = data.keywords instanceof Array ? data.keywords : generateKeywords(rawText);
	data.keywords = keywords;
	refreshKeywords(data, keywords);
	return data;
};