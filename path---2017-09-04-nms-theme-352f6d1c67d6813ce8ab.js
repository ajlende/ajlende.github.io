webpackJsonp([89161339112494],{"./node_modules/json-loader/index.js!./.cache/json/2017-09-04-nms-theme.json":function(n,s){n.exports={data:{markdownRemark:{html:'<h1>NMS Theme</h1>\n<p>The syntax theme is based off of the NMS theme that I maintain for Vim (<a href="https://github.com/ajlende/nms.vim">nms.vim</a>), Atom (<a href="https://github.com/ajlende/nms.vim">nms-syntax</a>) and soon <a href="https://prismjs.com">Prism</a>!</p>\n<p>I created NMS for Vim after browsing too much <a href="https://reddit.com/r/unixporn">reddit</a> and deciding that I needed to rice my desktop. It’s inspired by the No Man’s Sky wallpaper that I was using at the time. I’d been using the NMS theme at work for a while when a colleague commented on it and asked if there was an Atom variant which prompted me to created one. Now that I’m starting a blog, it made sense to move the NMS theme to a web syntax highlighter, so here we are with Prism-nms. 🙂</p>\n<p><img src="https://camo.githubusercontent.com/1196dddb65e6eef1ee8fc07f83d255e235838c93/687474703a2f2f692e696d6775722e636f6d2f51344b507348652e6a7067" alt="No Man&#x27;s Sky"></p>\n<h2>JSX</h2>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token string">\'./styles.css\'</span>\n\n<span class="token keyword">const</span> Dot <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> diameter <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    borderRadius<span class="token punctuation">:</span> <span class="token string">\'50%\'</span><span class="token punctuation">,</span>\n    width<span class="token punctuation">:</span> diameter<span class="token punctuation">,</span>\n    height<span class="token punctuation">:</span> diameter<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">class</span> <span class="token class-name">DotComponent</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> count<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> diameter<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token punctuation">}</span>\n\n  <span class="token comment" spellcheck="true">/**\n   * Increments the number of dots shown on the page\n   */</span>\n  <span class="token function">onIncrement</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>state <span class="token operator">=></span> <span class="token punctuation">{</span> count<span class="token punctuation">:</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment" spellcheck="true">/**\n   * Decrements the number of dots shown on the page\n   */</span>\n  <span class="token function">onDecrement</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>state <span class="token operator">=></span> <span class="token punctuation">{</span> count<span class="token punctuation">:</span> state<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment" spellcheck="true">/**\n   * Increases the size of the dots on the page by 1px\n   */</span>\n  <span class="token function">onLarger</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>state <span class="token operator">=></span> <span class="token punctuation">{</span> count<span class="token punctuation">:</span> state<span class="token punctuation">.</span>diameter <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment" spellcheck="true">/**\n   * Decreases the size of the dots on the page by 1px\n   */</span>\n  <span class="token function">onSmaller</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>state <span class="token operator">=></span> <span class="token punctuation">{</span> count<span class="token punctuation">:</span> state<span class="token punctuation">.</span>diameter <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onIncrement<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">+</span> #<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onDecrement<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">-</span> #<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onLarger<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">+</span> ◉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onSmaller<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">-</span> ⦿<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span>\n            Array<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span>\n              <span class="token punctuation">{</span> length<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              <span class="token punctuation">(</span>_<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dot</span> <span class="token attr-name">diameter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>dotSize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px`</span></span><span class="token punctuation">}</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n              <span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token punctuation">)</span>\n          <span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> DotComponent\n</code></pre>\n      </div>\n<h2>SCSS</h2>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token comment" spellcheck="true">/* Just a button */</span>\n<span class="token selector">button.btn </span><span class="token punctuation">{</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> #F68<span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">/* Custom scrollbars for code on this site */</span>\n<span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>pre<span class="token punctuation">)</span> <span class="token selector">> code[class*="language-"],\npre[class*="language-"],\npre[class*="language-"] > code </span><span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$black-bis</span><span class="token punctuation">;</span>\n  <span class="token selector"><span class="token parent important">&amp;</span>::-webkit-scrollbar </span><span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector"><span class="token parent important">&amp;</span>::-webkit-scrollbar-color </span><span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$black-bis</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector"><span class="token parent important">&amp;</span>::-webkit-scrollbar-thumb </span><span class="token punctuation">{</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 3px solid <span class="token variable">$black-bis</span><span class="token punctuation">;</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$grey-darker</span><span class="token punctuation">;</span>\n    <span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector"><span class="token parent important">&amp;</span>::-webkit-scrollbar-track </span><span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$black-bis</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Wat</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> doWhileLoopTest <span class="token operator">=</span> <span class="token punctuation">(</span>start<span class="token punctuation">,</span> stop<span class="token punctuation">,</span> exponent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> x <span class="token operator">=</span> start<span class="token punctuation">;</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> Number<span class="token punctuation">.</span>MAX_VALUE<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">switch</span> <span class="token punctuation">(</span>x <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>\n        document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>\n        <span class="token function">alert</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n      <span class="token keyword">default</span><span class="token punctuation">:</span>\n        <span class="token keyword">throw</span> x<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    x <span class="token operator">=</span> x <span class="token operator">**</span> exponent<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> stop<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> generatorTest <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> fizzbuzz <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">fizzbuzzGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token string">\'Fizz\'</span><span class="token punctuation">,</span> <span class="token string">\'Buzz\'</span><span class="token punctuation">,</span> <span class="token string">\'FizzBuzz\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span>\n      <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n      i <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">;</span>\n      <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">%</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">?</span>\n        <span class="token punctuation">(</span><span class="token keyword">yield</span> i<span class="token punctuation">)</span> <span class="token punctuation">:</span>\n        <span class="token punctuation">(</span><span class="token keyword">yield</span> a<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      i<span class="token operator">++</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token keyword">of</span> fizzbuzz<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> asyncTest <span class="token operator">=</span> <span class="token punctuation">(</span>array<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> wait <span class="token operator">=</span> ms <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> ms<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  array<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> <span class="token function">wait</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> wat <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>$<span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`($=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>$<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)()`</span></span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>',frontmatter:{title:"NMS Theme",tags:["design","javascript","styles"]}}},pathContext:{slug:"nms-theme"}}}});
//# sourceMappingURL=path---2017-09-04-nms-theme-352f6d1c67d6813ce8ab.js.map