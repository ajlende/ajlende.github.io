webpackJsonp([38811111826135],{"./node_modules/json-loader/index.js!./.cache/json/2017-09-03-hello-world.json":function(n,s){n.exports={data:{markdownRemark:{html:'<h1>Hello, World! 👋</h1>\n<p>This post is mainly for testing the creation and styling of the blog post page of my website.\nWhat do you think? I think it’s looking pretty slick so far. 😜</p>\n<hr>\n<h1>This is a &#x3C;h1></h1>\n<h2>This is a &#x3C;h2></h2>\n<h3>This is a &#x3C;h3></h3>\n<h4>This is a &#x3C;h4></h4>\n<h5>This is a &#x3C;h5></h5>\n<h6>This is a &#x3C;h6></h6>\n<hr>\n<p><em>This text is italic.</em></p>\n<p><strong>This text is bold.</strong></p>\n<p><strong><em>This text is both.</em></strong></p>\n<p><del>This text is rendered with strikethrough.</del></p>\n<blockquote>\n<p>You can use more than one level of indentation in blockquotes!<br>\nHow neat is that?</p>\n<blockquote>\n<p>That’s pretty neat!</p>\n</blockquote>\n</blockquote>\n<hr>\n<ul>\n<li>Item</li>\n<li>Item</li>\n<li>One last item</li>\n</ul>\n<hr>\n<ol>\n<li>\n<p>Item</p>\n<ol>\n<li>SubItem</li>\n<li>SubItem</li>\n</ol>\n</li>\n<li>\n<p>Item</p>\n<ul>\n<li>SubItem</li>\n</ul>\n</li>\n</ol>\n<hr>\n<ul>\n<li class="task-list-item"><input type="checkbox" disabled> First task to complete.</li>\n<li class="task-list-item"><input type="checkbox" disabled> Second task that needs done</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> This task has been completed</li>\n</ul>\n<hr>\n<table>\n<thead>\n<tr>\n<th align="left">Col1</th>\n<th align="center">Col2</th>\n<th align="right">Col3</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="left">Left-aligned</td>\n<td align="center">Centered</td>\n<td align="right">Right-aligned</td>\n</tr>\n<tr>\n<td align="left">blah</td>\n<td align="center">blah</td>\n<td align="right">blah</td>\n</tr>\n</tbody>\n</table>\n<hr>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>This is code marked by spaces\nSo is this</code></pre>\n      </div>\n<p>John didn’t even know what the <code>go_to()</code> function did!</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">get</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'axios\'</span>\n\n<span class="token keyword">const</span> Page <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> html <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n    <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span>\n    <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> __html<span class="token punctuation">:</span> html <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n  <span class="token punctuation">/></span></span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> html<span class="token punctuation">:</span> <span class="token string">\'\'</span> <span class="token punctuation">}</span>\n  <span class="token function">compoentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPage</span><span class="token punctuation">(</span><span class="token string">\'http://example.com\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">async</span> <span class="token function">getPage</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> html<span class="token punctuation">:</span> <span class="token keyword">await</span> <span class="token keyword">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>show <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Page</span> <span class="token attr-name">html</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>html<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">:</span> <span class="token keyword">null</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nMyComponent<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n  show<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> MyComponent\n</code></pre>\n      </div>\n<hr>\n<p><a href="http://test.com/" title="Link to Test.com">Click me!</a></p>\n<p><a href="http://test.com/" title="Cool!">Click this link</a> for more info about it!\n<a href="http://foobar.biz/" title="Alright!">Also check out this link</a> if you want to.</p>\n<p><a href="http://thisisalink.com/">This</a> is a link.</p>\n<p><img src="https://media.giphy.com/media/3o7abB06u9bNzA8lu8/giphy.gif" alt="This is the alt-attribute for my image" title="An optional title"></p>\n<p>Your computer crashed? Try sending a\n<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd></p>\n<p><a href="mailto:ajlende@gmail.com">ajlende@gmail.com</a></p>',frontmatter:{title:"Hello, World!",tags:["design","styles"]}}},pathContext:{slug:"hello-world"}}}});
//# sourceMappingURL=path---2017-09-03-hello-world-768b7e3e75ad21481e58.js.map