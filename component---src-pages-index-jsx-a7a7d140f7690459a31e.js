(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return m(t||a).src},m=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},h=Object.create({}),p=function(e){var t=u(e),a=g(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,E=v&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function z(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?z(e,!0):"")+z(e)})).join("")+"<img "+d+l+s+a+r+t+i+n+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(V,(0,o.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},V=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:n},g,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));V.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=g(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,h=e.fluid,p=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,E=e.Tag,y=e.itemProp,w=e.loading,z=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,o.default)({opacity:k?1:0,transition:C?"opacity "+v+"ms":"none"},s),T="boolean"==typeof b?"lightgray":b,N={transitionDelay:v+"ms"},P=(0,o.default)({opacity:this.state.imgLoaded?0:1},C&&N,{},s,{},f),j={title:t,alt:this.state.isVisible?"":a,style:P,className:g,itemProp:y};if(h){var G=h,A=m(h);return d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(A.srcSet)},d.default.createElement(E,{style:{width:"100%",paddingBottom:100/A.aspectRatio+"%"}}),T&&d.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&N)}),A.base64&&d.default.createElement(O,{src:A.base64,spreadProps:j,imageVariants:G,generateSources:L}),A.tracedSVG&&d.default.createElement(O,{src:A.tracedSVG,spreadProps:j,imageVariants:G,generateSources:I}),this.state.isVisible&&d.default.createElement("picture",null,S(G),d.default.createElement(V,{alt:a,title:t,sizes:A.sizes,src:A.src,crossOrigin:this.props.crossOrigin,srcSet:A.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:z})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:w},A,{imageVariants:G}))}}))}if(p){var W=p,q=m(p),M=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete M.display,d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},T&&d.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:T,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},C&&N)}),q.base64&&d.default.createElement(O,{src:q.base64,spreadProps:j,imageVariants:W,generateSources:L}),q.tracedSVG&&d.default.createElement(O,{src:q.tracedSVG,spreadProps:j,imageVariants:W,generateSources:I}),this.state.isVisible&&d.default.createElement("picture",null,S(W),d.default.createElement(V,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:z})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:w},q,{imageVariants:W}))}}))}return null},t}(d.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),T=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});C.propTypes={resolutions:R,sizes:T,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([T,c.default.arrayOf(T)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=C;t.default=N},Dtc0:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("TSYQ"),l=a.n(i),s=a("HPK8"),o=a("9eSz"),d=a.n(o),c=a("rsDu"),u=a.n(c),f=function(){return n.a.createElement("div",{"aria-hidden":!0},n.a.createElement("div",{className:u.a.stars1}),n.a.createElement("div",{className:u.a.stars2}),n.a.createElement("div",{className:u.a.stars3}))},g=a("L6Je"),m=(a("E5k/"),function(e){return n.a.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 1024 879.1"},e),n.a.createElement("path",{d:"M1024 879L510 0 0 879h78.6l21.5-38c39 25.4 85.5 38 139.5 38 48.7 0 87.4-8 116-24.2 28.8-16.2 50.6-39 65.6-68.3 15-29.3 25-64.7 29.6-106.2 4.7-41.5 7-87.5 7-138v-1.8H563V879h461zM392 542c0 44.4-1.6 84-4.7 118.5-3 34.6-10 63.8-20.6 87.5-10.6 23.7-26 41.7-46.3 53.8C300 814 273 820 239.4 820c-26.8 0-51-3.3-72.5-10.2-15.3-4.8-28.6-10.3-40-16.4l143-252.8h122v1.5zm0-58.5h-89.5L392 329v154.5zM629.4 335L715 483.4h-85.6V335zm0 205.3h117.8l163.3 280h-281v-280zm-172-56.8V216l52-89.5 53.6 93.2v263.7H457.5z"}))}),h=a("OrJL"),p=a.n(h);a.d(t,"fluidImage",(function(){return y})),a.d(t,"pageQuery",(function(){return S}));var b=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.Title,{hasTextAlign:"centered"},"Welcome!"),n.a.createElement(s.Content,null,n.a.createElement("p",null,"I'm a Software Engineer for ",n.a.createElement("a",{href:"https://automattic.com"},"Automattic")," where I tinker with various projects to explore and expand what can be done on the web on platforms like WordPress. You can find me most places on the internet as @ajlende."),n.a.createElement("p",null,"I love learning, and I think that's why the ever-changing landscape of frontend web development has been so appealing to me. I like to push the limits of what can be done in a web browser, from building virtual reality experiences with the WebXR API to generating music with the Web Audio API to exploring other programming languages that can compile and run on the web like Elm and Rust. I've given few talks at local meetups and a local conference to talk about some of the stuff that I like to do."," ",n.a.createElement("a",{href:"https://github.com/ajlende/elm-webgl-presentation"},"WebGL in Elm")," and"," ",n.a.createElement("a",{href:"https://github.com/ajlende/geospacial-data-talk"},"Geospacial Data Visualizations")," ","both have the slides and speaker notes available on my"," ",n.a.createElement("a",{href:"https://github.com/ajlende"},"GitHub"),"."),n.a.createElement("p",null,"Outside of tech, I enjoy The Great Outdoors™, playing ukulele, and exploring the world. I achieved the rank of Eagle Scout while in the Boy Scouts of America, and still enjoy camping as often as I can.")))},v=function(e){var t=e.date,a=e.title,r=e.img,i=e.alt;return n.a.createElement("div",{className:p.a.imgGrp},n.a.createElement(d.a,{fluid:r,alt:i}),n.a.createElement("div",{className:p.a.imgInfo},a,n.a.createElement("br",null),t))},E=function(e){var t=e.data;return n.a.createElement("div",{className:p.a.imgGrid},n.a.createElement(v,{img:t.quetico.childImageSharp.fluid,date:"September 2018",title:"Quetico Provincial Park, Canada",alt:"Alex carrying a canoe and Duluth pack through a forested portage area"}),n.a.createElement(v,{img:t.india.childImageSharp.fluid,date:"September 2017",title:"Dhamma Giri, India",alt:"Alex standing in front of the golden pagoda"}),n.a.createElement(v,{img:t.ragbrai.childImageSharp.fluid,date:"July 2017",title:"Lansing, Iowa",alt:"Alex holding his bike above his head in front of the river"}),n.a.createElement(v,{img:t.france.childImageSharp.fluid,date:"June 2016",title:"Longues-su-Mer, France",alt:"Alex standing next to a World War II battery cannon in Normandy"}))},y=(t.default=function(e){var t=e.data,a=e.location;return n.a.createElement(g.a,{location:a},n.a.createElement(s.Hero,{isColor:"dark",isFullHeight:!0,isBold:!0,className:l()(p.a.angled,p.a.offset)},n.a.createElement(f,null),n.a.createElement(s.HeroBody,null,n.a.createElement(s.Container,{hasTextAlign:"centered"},n.a.createElement(m,{className:p.a.monogram}),n.a.createElement(s.Title,{className:p.a.title,isSpaced:!0,hasTextAlign:"centered"},"Alex Lende"),n.a.createElement(s.Subtitle,{className:p.a.subtitle},"Software Engineer")))),n.a.createElement(s.Section,null,n.a.createElement(s.Container,null,n.a.createElement(s.Columns,{isCentered:!0},n.a.createElement(s.Column,{isSize:6},n.a.createElement(b,null),n.a.createElement(E,{data:t}))))))},"525075532"),S="724844088"},"t+fG":function(e,t,a){var r=a("P8UN"),n=a("96qb"),i=a("ap2Z"),l=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(l,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},zTTH:function(e,t,a){"use strict";var r=a("P8UN"),n=a("Wadk")(6),i="findIndex",l=!0;i in[]&&Array(1)[i]((function(){l=!1})),r(r.P+r.F*l,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(i)}}]);
//# sourceMappingURL=component---src-pages-index-jsx-a7a7d140f7690459a31e.js.map