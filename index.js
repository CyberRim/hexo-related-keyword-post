/*jshint esversion: 6 */
(function() {
	'use strict';
	const priority = 20;
	hexo.extend.filter.register('before_post_render', require('./lib/keywords'),priority);
	hexo.extend.filter.register('before_post_render', require('./lib/related'),priority+1);
	hexo.extend.injector.register('body_end', require('./lib/link')(hexo),'post');
	
})();