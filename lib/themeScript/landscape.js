(function() {
	if (typeof hexoRelatedKeywordPost !== "object") hexoRelatedKeywordPost = {};
	var relatedPosts = hexoRelatedKeywordPost.relatedPosts;
	if (relatedPosts == null || relatedPosts == undefined || !(relatedPosts instanceof Array) || relatedPosts.length == 0) return;

	//获取Next主题的sidebar
	var aside = document.getElementsByTagName("aside")[0];
	if (aside == null || aside == undefined) return;

	//在aside内创建dom
	var divP = createElement('div', aside, {
		'class': 'widget-wrap'
	});
	var h3 = createElement('h3', divP, {
		'class': 'widget-title'
	});
	h3.innerHTML = "相关文章";
	var div1 = createElement('div', divP, {
		'class': 'widget'
	});
	var ul = createElement('div', div1, {
		'class': ''
	});
	var li;
	var a;
	relatedPosts.forEach((item, index) => {
		li = createElement('li', ul, {
			'class': ''
		});
		a = createElement('a', li, {
			'href': item.permalink
		});
		a.innerHTML = item.title;
	});
	/*
	 *attributeObject={
	 *	"attributeName1":"attributeValue1",
	 *	"attributeName2":"attributeValue2",
	 *	"attributeName3":"attributeValue3",
	 *	"attributeName4":"attributeValue4"
	 *}
	 */
	function createElement(tagName, parent, attributeObject) {
		if (tagName == null || tagName == undefined || typeof tagName !== 'string') tagName = 'div';
		var e = document.createElement(tagName);
		for (var attributeName in attributeObject) {
			if (attributeName != null && attributeName != undefined && typeof attributeName === 'string') {
				if (attributeObject[attributeName] != null && attributeObject[attributeName] != undefined && typeof attributeObject[attributeName] === 'string') {
					e.setAttribute(attributeName, attributeObject[attributeName]);
				}
			}

		}
		if (parent != null && parent != undefined && typeof(parent.appendChild) === 'function') parent.appendChild(e);
		return e;
	}
})();