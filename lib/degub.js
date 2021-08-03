let array ;
console.log(array instanceof Array);
console.log(s.substring(0,3));



// var Document = {
// 	title: 'No1.两数之和',
// 	abbrlink: 703273030,
// 	date: Moment < 2021 - 07 - 10 T19: 01: 57 + 08: 00 > ,
// 	_content: '\n' +
// 		'## 题目描述\n' +
// 		'\n' +
// 		'No1.两数之和 ——[中文站](https://leetcode-cn.com/problems/two-sum/)，[原站](https://leetcode.com/problems/two-sum/)\n' +
// 		'\n' +
// 		'难度：简单[简书]: \n' +
// 		'\n' +
// 		'给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。\n' +
// 		'\n' +
// 		'你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。\n' +
// 		'\n' +
// 		'你可以按任意顺序返回答案。\n' +
// 		'\n' +
// 		'**示例 1：**\n' +
// 		'\n' +
// 		'```java\n' +
// 		'输入：nums = [2,7,11,15], target = 9\n' +
// 		'输出：[0,1]\n' +
// 		'解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。\n' +
// 		'```\n' +
// 		'\n' +
// 		'**示例 2：**\n' +
// 		'\n' +
// 		'```java\n' +
// 		'输入：nums = [3,2,4], target = 6\n' +
// 		'输出：[1,2]\n' +
// 		'```\n' +
// 		'\n' +
// 		'**示例 3：**\n' +
// 		'\n' +
// 		'```java\n' +
// 		'输入：nums = [3,3], target = 6\n' +
// 		'输出：[0,1]\n' +
// 		'```\n' +
// 		'\n' +
// 		'**提示：**\n' +
// 		'\n' +
// 		'- `2 <= nums.length <= 104`\n' +
// 		'- `-109 <= nums[i] <= 109`\n' +
// 		'- `-109 <= target <= 109`\n' +
// 		'- **只会存在一个有效答案**\n' +
// 		'\n' +
// 		'**进阶：**你可以想出一个时间复杂度小于 $O(n^2)$ 的算法吗？\n' +
// 		'\n' +
// 		'---\n' +
// 		'\n' +
// 		'## 题解\n' +
// 		'\n' +
// 		'#### 暴力遍历\n' +
// 		'\n' +
// 		'一个数组找出2个满足一定条件的数，嵌套循环，遍历完所有的可能性，判断满足的条件。\n' +
// 		'\n' +
// 		'时间复杂度：$O(N^2)$，空间复杂度：$O(1)$\n' +
// 		'\n' +
// 		'#### `HashMap`存值\n' +
// 		'\n' +
// 		'上面的暴力解法，将大量的时间都用在遍历之前已经判断过的值上，要降低时间复杂度必然不能遍历无效结果。\n' +
// 		'\n' +
// 		'我们可以在只遍历一次数组，在遍历每一个值时，将值和其下标存在`HashMap`中，K为值，V为下标，并从之前已经储存在`HashMap`的值中寻找是否存在满足条件的值，即为`target`与当前值的差，如果没有，继续往下遍历，如果存在，取出它的下标和当前值的下标得到结果。\n' +
// 		'\n' +
// 		'leetcode上有评论提到了哈希碰撞会导致查找差值的时间复杂度不会是$O(1)$，当把相同的值放进\n' +
// 		'\n' +
// 		'\n' +
// 		'\n' +
// 		'由于`HashMap`的查找时间复杂度为$O(1)$，我们只遍历了数组一次，所以整个的时间复杂度为$O(N)$。如果我们使用数组，链表来存值，每次查找需要$O(N)$时间复杂度，最终同样是$O(N^2)$的时间复杂度。\n' +
// 		'\n' +
// 		'```java\n' +
// 		'class Solution{\n' +
// 		'\tpublic int[] twoSum(int[] nums, int target) {\n' +
// 		'        HashMap<Integer,Integer> hashMap = new HashMap<Integer,Integer>();\n' +
// 		'        for(int i=0;i<nums.length;i++){\n' +
// 		'            int complement = target-nums[i];\n' +
// 		'            if(hashMap.containsKey(complement)){\n' +
// 		'                int j = hashMap.get(complement);\n' +
// 		'                return new int[] {i,j};\n' +
// 		'            }\n' +
// 		'            hashMap.put(nums[i],i);\n' +
// 		'        }\n' +
// 		'        return new int[]{};\n' +
// 		'    }\n' +
// 		'\n' +
// 		'}\n' +
// 		'```\n' +
// 		'\n' +
// 		'\n' +
// 		'\n' +
// 		'\n' +
// 		'\n' +
// 		'\n' +
// 		'\n',
// 	source: '_posts/No1-两数之和.md',
// 	raw: '---\n' +
// 		'title: No1.两数之和\n' +
// 		'abbrlink: 703273030\n' +
// 		'date: 2021-07-10 19:01:57\n' +
// 		'categories:\n' +
// 		'- 算法\n' +
// 		'tags:\n' +
// 		'- leetcode\n' +
// 		'---\n' +
// 		'\n' +
// 		'## 题目描述\n' +
// 		'\n' +
// 		'No1.两数之和 ——[中文站](https://leetcode-cn.com/problems/two-sum/)，[原站](https://leetcode.com/problems/two-sum/)\n' +
// 		'\n' +
// 		'难度：简单[简书]: \n' +
// 		'\n' +
// 		'给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。\n' +
// 		'\n' +
// 		'你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。\n' +
// 		'\n' +
// 		'你可以按任意顺序返回答案。\n' +
// 		'\n' +
// 		'**示例 1：**\n' +
// 		'\n' +
// 		'```java\n' +
// 		'输入：nums = [2,7,11,15], target = 9\n' +
// 		'输出：[0,1]\n' +
// 		'解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。\n' +
// 		'```\n' +
// 		'\n' +
// 		'**示例 2：**\n' +
// 		'\n' +
// 		'```java\n' +
// 		'输入：nums = [3,2,4], target = 6\n' +
// 		'输出：[1,2]\n' +
// 		'```\n' +
// 		'\n' +
// 		'**示例 3：**\n' +
// 		'\n' +
// 		'```java\n' +
// 		'输入：nums = [3,3], target = 6\n' +
// 		'输出：[0,1]\n' +
// 		'```\n' +
// 		'\n' +
// 		'**提示：**\n' +
// 		'\n' +
// 		'- `2 <= nums.length <= 104`\n' +
// 		'- `-109 <= nums[i] <= 109`\n' +
// 		'- `-109 <= target <= 109`\n' +
// 		'- **只会存在一个有效答案**\n' +
// 		'\n' +
// 		'**进阶：**你可以想出一个时间复杂度小于 $O(n^2)$ 的算法吗？\n' +
// 		'\n' +
// 		'---\n' +
// 		'\n' +
// 		'## 题解\n' +
// 		'\n' +
// 		'#### 暴力遍历\n' +
// 		'\n' +
// 		'一个数组找出2个满足一定条件的数，嵌套循环，遍历完所有的可能性，判断满足的条件。\n' +
// 		'\n' +
// 		'时间复杂度：$O(N^2)$，空间复杂度：$O(1)$\n' +
// 		'\n' +
// 		'#### `HashMap`存值\n' +
// 		'\n' +
// 		'上面的暴力解法，将大量的时间都用在遍历之前已经判断过的值上，要降低时间复杂度必然不能遍历无效结果。\n' +
// 		'\n' +
// 		'我们可以在只遍历一次数组，在遍历每一个值时，将值和其下标存在`HashMap`中，K为值，V为下标，并从之前已经储存在`HashMap`的值中寻找是否存在满足条件的值，即为`target`与当前值的差，如果没有，继续往下遍历，如果存在，取出它的下标和当前值的下标得到结果。\n' +
// 		'\n' +
// 		'leetcode上有评论提到了哈希碰撞会导致查找差值的时间复杂度不会是$O(1)$，当把相同的值放进\n' +
// 		'\n' +
// 		'\n' +
// 		'\n' +
// 		'由于`HashMap`的查找时间复杂度为$O(1)$，我们只遍历了数组一次，所以整个的时间复杂度为$O(N)$。如果我们使用数组，链表来存值，每次查找需要$O(N)$时间复杂度，最终同样是$O(N^2)$的时间复杂度。\n' +
// 		'\n' +
// 		'```java\n' +
// 		'class Solution{\n' +
// 		'\tpublic int[] twoSum(int[] nums, int target) {\n' +
// 		'        HashMap<Integer,Integer> hashMap = new HashMap<Integer,Integer>();\n' +
// 		'        for(int i=0;i<nums.length;i++){\n' +
// 		'            int complement = target-nums[i];\n' +
// 		'            if(hashMap.containsKey(complement)){\n' +
// 		'                int j = hashMap.get(complement);\n' +
// 		'                return new int[] {i,j};\n' +
// 		'            }\n' +
// 		'            hashMap.put(nums[i],i);\n' +
// 		'        }\n' +
// 		'        return new int[]{};\n' +
// 		'    }\n' +
// 		'\n' +
// 		'}\n' +
// 		'```\n' +
// 		'\n' +
// 		'\n' +
// 		'\n' +
// 		'\n' +
// 		'\n' +
// 		'\n' +
// 		'\n',
// 	slug: 'No1-两数之和',
// 	published: true,
// 	updated: Moment < 2021 - 07 - 30 T02: 05: 48 + 08: 00 > ,
// 	comments: true,
// 	layout: 'post',
// 	photos: [],
// 	link: '',
// 	_id: 'ckrpa5mnf000anwndes78ff3o',
// 	path: [Getter],
// 	permalink: [Getter],
// 	full_source: [Getter],
// 	asset_dir: [Getter],
// 	tags: [Getter],
// 	categories: [Getter],
// 	content: '\n' +
// 		'## 题目描述\n' +
// 		'\n' +
// 		'No1.两数之和 ——[中文站](https://leetcode-cn.com/problems/two-sum/)，[原站](https://leetcode.com/problems/two-sum/)\n' +
// 		'\n' +
// 		'难度：简单[简书]: \n' +
// 		'\n' +
// 		'给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。\n' +
// 		'\n' +
// 		'你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。\n' +
// 		'\n' +
// 		'你可以按任意顺序返回答案。\n' +
// 		'\n' +
// 		'**示例 1：**\n' +
// 		'\n' +
// 		'<hexoPostRenderCodeBlock><figure class="highlight java"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br></pre></td><td class="code"><pre><span class="line">输入：nums = [<span class="number">2</span>,<span class="number">7</span>,<span class="number">11</span>,<span class="number">15</span>], target = <span class="number">9</span></span><br><span class="line">输出：[<span class="number">0</span>,<span class="number">1</span>]</span><br><span class="line">解释：因为 nums[<span class="number">0</span>] + nums[<span class="number">1</span>] == <span class="number">9</span> ，返回 [<span class="number">0</span>, <span class="number">1</span>] 。</span><br></pre></td></tr></table></figure></hexoPostRenderCodeBlock>\n' +
// 		'\n' +
// 		'**示例 2：**\n' +
// 		'\n' +
// 		'<hexoPostRenderCodeBlock><figure class="highlight java"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line">输入：nums = [<span class="number">3</span>,<span class="number">2</span>,<span class="number">4</span>], target = <span class="number">6</span></span><br><span class="line">输出：[<span class="number">1</span>,<span class="number">2</span>]</span><br></pre></td></tr></table></figure></hexoPostRenderCodeBlock>\n' +
// 		'\n' +
// 		'**示例 3：**\n' +
// 		'\n' +
// 		'<hexoPostRenderCodeBlock><figure class="highlight java"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line">输入：nums = [<span class="number">3</span>,<span class="number">3</span>], target = <span class="number">6</span></span><br><span class="line">输出：[<span class="number">0</span>,<span class="number">1</span>]</span><br></pre></td></tr></table></figure></hexoPostRenderCodeBlock>\n' +
// 		'\n' +
// 		'**提示：**\n' +
// 		'\n' +
// 		'- `2 <= nums.length <= 104`\n' +
// 		'- `-109 <= nums[i] <= 109`\n' +
// 		'- `-109 <= target <= 109`\n' +
// 		'- **只会存在一个有效答案**\n' +
// 		'\n' +
// 		'**进阶：**你可以想出一个时间复杂度小于 $O(n^2)$ 的算法吗？\n' +
// 		'\n' +
// 		'---\n' +
// 		'\n' +
// 		'## 题解\n' +
// 		'\n' +
// 		'#### 暴力遍历\n' +
// 		'\n' +
// 		'一个数组找出2个满足一定条件的数，嵌套循环，遍历完所有的可能性，判断满足的条件。\n' +
// 		'\n' +
// 		'时间复杂度：$O(N^2)$，空间复杂度：$O(1)$\n' +
// 		'\n' +
// 		'#### `HashMap`存值\n' +
// 		'\n' +
// 		'上面的暴力解法，将大量的时间都用在遍历之前已经判断过的值上，要降低时间复杂度必然不能遍历无效结果。\n' +
// 		'\n' +
// 		'我们可以在只遍历一次数组，在遍历每一个值时，将值和其下标存在`HashMap`中，K为值，V为下标，并从之前已经储存在`HashMap`的值中寻找是否存在满足条件的值，即为`target`与当前值的差，如果没有，继续往下遍历，如果存在，取出它的下标和当前值的下标得到结果。\n' +
// 		'\n' +
// 		'leetcode上有评论提到了哈希碰撞会导致查找差值的时间复杂度不会是$O(1)$，当把相同的值放进\n' +
// 		'\n' +
// 		'\n' +
// 		'\n' +
// 		'由于`HashMap`的查找时间复杂度为$O(1)$，我们只遍历了数组一次，所以整个的时间复杂度为$O(N)$。如果我们使用数组，链表来存值，每次查找需要$O(N)$时间复杂度，最终同样是$O(N^2)$的时间复杂度。\n' +
// 		'\n' +
// 		'<hexoPostRenderCodeBlock><figure class="highlight java"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br></pre></td><td class="code"><pre><span class="line"><span class="class"><span class="keyword">class</span> <span class="title">Solution</span></span>&#123;</span><br><span class="line">\t<span class="keyword">public</span> <span class="keyword">int</span>[] twoSum(<span class="keyword">int</span>[] nums, <span class="keyword">int</span> target) &#123;</span><br><span class="line">        HashMap&lt;Integer,Integer&gt; hashMap = <span class="keyword">new</span> HashMap&lt;Integer,Integer&gt;();</span><br><span class="line">        <span class="keyword">for</span>(<span class="keyword">int</span> i=<span class="number">0</span>;i&lt;nums.length;i++)&#123;</span><br><span class="line">            <span class="keyword">int</span> complement = target-nums[i];</span><br><span class="line">            <span class="keyword">if</span>(hashMap.containsKey(complement))&#123;</span><br><span class="line">                <span class="keyword">int</span> j = hashMap.get(complement);</span><br><span class="line">                <span class="keyword">return</span> <span class="keyword">new</span> <span class="keyword">int</span>[] &#123;i,j&#125;;</span><br><span class="line">            &#125;</span><br><span class="line">            hashMap.put(nums[i],i);</span><br><span class="line">        &#125;</span><br><span class="line">        <span class="keyword">return</span> <span class="keyword">new</span> <span class="keyword">int</span>[]&#123;&#125;;</span><br><span class="line">    &#125;</span><br><span class="line"></span><br><span class="line">&#125;</span><br></pre></td></tr></table></figure></hexoPostRenderCodeBlock>\n' +
// 		'\n' +
// 		'\n' +
// 		'\n' +
// 		'\n' +
// 		'\n' +
// 		'\n' +
// 		'\n',
// 	site: {
// 		data: {}
// 	}
// }