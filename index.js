/*jshint esversion: 6 */
const util = require('./lib/util.js');
(function() {
	'use strict';
	//清除文件内容
	util.writeKeywordsFile({});
	
	const priority = 20;
	hexo.extend.filter.register('before_post_render', require('./lib/keywords'),priority);
	hexo.extend.filter.register('before_post_render', require('./lib/related'),priority+1);
	hexo.extend.injector.register('body_end', require('./lib/link')(hexo),'post');
	
})();