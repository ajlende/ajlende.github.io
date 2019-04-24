(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{154:function(e,t,n){"use strict";n.r(t);n(73),n(186);var r=n(71),a=n.n(r),o=(n(24),n(0)),i=n.n(o),s=n(187),l=n(160),c=n(157),u=n(158),f=n(159),h=n(169),d=n(168),p=n.n(d),m=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(e,t){var n;return Object.assign({},e,((n={})[t]=function(e){return{match:function(n){return n[t](e)}}},n))},{})}("NotAsked","Loading","Failure","Success"),y=function(){return null},b=function(){return i.a.createElement("div",{style:{textAlign:"center",margin:"0 auto"}},i.a.createElement(u.a,{faProps:{icon:"spinner",spin:!0}}),i.a.createElement("p",null,"Loading pinned items."))},v=function(){return i.a.createElement("p",null,"Failed to fetch repos. Check them out on ",i.a.createElement("a",{href:"https://github.com/ajlende"},"GitHub")," ","instead.")},g=function(e){return i.a.createElement(h.b,null,e.user.pinnedItems.nodes.map(function(e){var t=void 0===e?{}:e,n=t.id,r=t.url,o=t.name,s=t.shortDescriptionHTML,l=t.stargazers.totalCount,f=a()(t,["id","url","name","shortDescriptionHTML","stargazers"]).primaryLanguage||{color:"#ccc",name:"Unknown"},d=f.color,m=f.name;return i.a.createElement(h.a,{key:n},i.a.createElement(c.Title,{tag:"h2"},i.a.createElement("a",{href:r},o)),i.a.createElement(c.Content,{style:{flex:"1 0 auto"}},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:s}})),i.a.createElement(c.Level,{tag:"div",className:p.a.level},i.a.createElement(c.LevelLeft,null,i.a.createElement("span",{className:p.a.dot,style:{backgroundColor:d}})," ",m),i.a.createElement(c.LevelRight,null,i.a.createElement(u.a,{faProps:{icon:"star"}})," ",l)))}))},E=function(){return i.a.createElement("p",null,"From time to time I get around to doing some coding outside of work. It gives me an opportunity to try out new ideas I've had, explore new languages, and occasionally contribute something useful to the community. Only my pinned repositories are listed here, but you can see the rest of my public code as far back as programming assignments from college on"," ",i.a.createElement("a",{href:"https://github.com/ajlende?tab=repositories"},"my repositories page on GitHub"),".")};t.default=function(e){var t=e.location,n=Object(o.useState)(m.NotAsked()),r=n[0],a=n[1];return Object(o.useEffect)(function(){Object(s.request)("https://ajlende-go-api-proxy.herokuapp.com/github/graphql",'\n  query {\n    user(login: "ajlende") {\n      pinnedItems(first: 6, types: REPOSITORY) {\n        nodes {\n          ... on Repository {\n            id\n            url\n            name\n            shortDescriptionHTML\n            primaryLanguage {\n              name\n              color\n            }\n            stargazers {\n              totalCount\n            }\n          }\n        }\n      }\n    }\n  }\n').then(function(e){return m.Success(e)}).catch(function(e){return m.Failure(e)}).then(a);var e=setTimeout(function(){return a(function(e){return e.match({NotAsked:function(){return m.Loading()},Loading:function(){return e},Failure:function(){return e},Success:function(){return e}})})},1e3);return function(){return clearTimeout(e)}},[]),i.a.createElement(f.a,{location:t},i.a.createElement(l.Helmet,null,i.a.createElement("title",null,"Projects – Alex Lende")),i.a.createElement(c.Hero,{isColor:"info",isBold:!0,className:p.a.angled},i.a.createElement(c.HeroBody,null,i.a.createElement(c.Container,{hasTextAlign:"centered"},i.a.createElement(c.Title,{className:p.a.title},"Projects")))),i.a.createElement(c.Section,null,i.a.createElement(c.Container,null,i.a.createElement(E,null))),i.a.createElement(c.Section,null,i.a.createElement(c.Container,null,r.match({NotAsked:y,Loading:b,Failure:v,Success:g}))))}},158:function(e,t,n){"use strict";n(24);var r=n(71),a=n.n(r),o=n(0),i=n.n(o),s=n(3),l=n.n(s),c=n(164),u=n(162),f=n.n(u),h={border:l.a.bool,className:l.a.string,mask:l.a.oneOfType([l.a.object,l.a.array,l.a.string]),fixedWidth:l.a.bool,inverse:l.a.bool,flip:l.a.oneOf(["horizontal","vertical","both"]),icon:l.a.oneOfType([l.a.object,l.a.array,l.a.string]),listItem:l.a.bool,pull:l.a.oneOf(["right","left"]),pulse:l.a.bool,rotation:l.a.oneOf([90,180,270]),size:l.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:l.a.bool,symbol:l.a.oneOfType([l.a.bool,l.a.string]),title:l.a.string,transform:l.a.oneOfType([l.a.string,l.a.object])},d={isAlign:l.a.oneOf(["left","right"]),isSize:l.a.oneOf(["large","medium","small"]),faProps:l.a.shape(h)},p={isAlign:null,isSize:null,faProps:{border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null}},m=function(e){var t,n=e.isAlign,r=e.isSize,o=e.faProps,s=a()(e,["isAlign","isSize","faProps"]),l=f()(((t={icon:!0})["is-"+n]=!!n,t["is-"+r]=!!r,t));return i.a.createElement("span",Object.assign({},s,{className:l}),i.a.createElement(c.a,o))};m.propTypes=d,m.defaultProps=p,t.a=m},159:function(e,t,n){"use strict";n(163);var r=n(0),a=n.n(r),o=n(3),i=n.n(o),s=n(160),l=n(52),c=n(157),u=n(158),f={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},h=function(e){var t=e.to,n=e.location,r=e.children;return a.a.createElement(c.NavbarItem,{tag:l.Link,to:t,isActive:n.pathname===t},r)},d=function(e){var t=e.location,n=Object(r.useState)(!1),o=n[0],i=n[1],s=Object(r.useCallback)(function(){i(function(e){return!e})},[]);return a.a.createElement(c.Navbar,{"aria-label":"main navigation"},a.a.createElement(c.Container,null,a.a.createElement(c.NavbarBrand,null,a.a.createElement(h,{to:"/",location:t},a.a.createElement("strong",null,"Alex Lende")),a.a.createElement(c.NavbarItem,{"aria-label":"GitHub",href:"https://github.com/ajlende",isHidden:"desktop"},a.a.createElement(u.a,{faProps:{icon:["fab","github"],size:"lg"},isSize:"medium"})),a.a.createElement(c.NavbarItem,{"aria-label":"LinkedIn",href:"https://linkedin.com/in/ajlende",isHidden:"desktop"},a.a.createElement(u.a,{faProps:{icon:["fab","linkedin"],size:"lg"},isSize:"medium"})),a.a.createElement(c.NavbarItem,{"aria-label":"AngelList",href:"https://angel.co/ajlende",isHidden:"desktop"},a.a.createElement(u.a,{faProps:{icon:["fab","angellist"],size:"lg"},isSize:"medium"})),a.a.createElement(c.NavbarBurger,{tag:"a",href:"javascript:void(0)",role:"button","aria-label":"menu","aria-expanded":o,isActive:o,onClick:s})),a.a.createElement(c.NavbarMenu,{isActive:o,onClick:s},a.a.createElement(c.NavbarStart,null,a.a.createElement(h,{to:"/projects",location:t},"Projects"),a.a.createElement(h,{to:"/blog",location:t},"Blog"),a.a.createElement(h,{to:"/contact",location:t},"Contact")),a.a.createElement(c.NavbarEnd,null,a.a.createElement(c.NavbarItem,{"aria-label":"GitHub",href:"https://github.com/ajlende",isHidden:"touch"},a.a.createElement(u.a,{faProps:{icon:["fab","github"],size:"lg"},isSize:"medium"})),a.a.createElement(c.NavbarItem,{"aria-label":"LinkedIn",href:"https://linkedin.com/in/ajlende",isHidden:"touch"},a.a.createElement(u.a,{faProps:{icon:["fab","linkedin"],size:"lg"},isSize:"medium"})),a.a.createElement(c.NavbarItem,{"aria-label":"AngelList",href:"https://angel.co/ajlende",isHidden:"touch"},a.a.createElement(u.a,{faProps:{icon:["fab","angellist"],size:"lg"},isSize:"medium"}))))))};d.propTypes=f;var p=d,m=function(){return a.a.createElement(c.Footer,null,a.a.createElement(c.Container,null,a.a.createElement(c.Content,{isSize:"small"},a.a.createElement("p",null,"Contents of this site are © Copyright 2017-2019 Alex Lende. All rights reserved."),a.a.createElement("p",null,a.a.createElement("a",{href:"https://github.com/ajlende/ajlende.github.io/tree/develop"},"Source code")," is"," ","available under the"," ",a.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT license"),"."))))},y=(n(165),n(161)),b=n(166),v=n(167),g={faAjlende:{prefix:"fac",iconName:"ajlende",icon:[1024,879.1,[],"e001","M1024 879L510 0 0 879h78.6l21.5-38c39 25.4 85.5 38 139.5 38 48.7 0 87.4-8 116-24.2 28.8-16.2 50.6-39 65.6-68.3 15-29.3 25-64.7 29.6-106.2 4.7-41.5 7-87.5 7-138v-1.8H563V879h461zM392 542c0 44.4-1.6 84-4.7 118.5-3 34.6-10 63.8-20.6 87.5-10.6 23.7-26 41.7-46.3 53.8C300 814 273 820 239.4 820c-26.8 0-51-3.3-72.5-10.2-15.3-4.8-28.6-10.3-40-16.4l143-252.8h122v1.5zm0-58.5h-89.5L392 329v154.5zM629.4 335L715 483.4h-85.6V335zm0 205.3h117.8l163.3 280h-281v-280zm-172-56.8V216l52-89.5 53.6 93.2v263.7H457.5z"]},fa8tracks:{prefix:"fac",iconName:"8tracks",icon:[400,400,[],"e002","M109.8 180.2C49 180.2 0 229.4 0 290.2 0 350.7 49 400 109.8 400c60.7 0 109.7-49.2 109.7-110v-38.5h-39.2V290c0 19.6-8 37-20.6 50-13 12.8-30.3 20.7-50 20.7-19.4 0-37-8-49.7-20.7-12.8-13-20.7-30.4-20.7-50 0-19.5 8-37 20.7-49.8 12.8-12.8 30.3-20.7 49.8-20.7h180.4c60.7 0 109.8-49 109.8-109.6C400 49 351 0 290.2 0c-60.7 0-109.8 49.2-109.8 110V148h39V110c.2-19.6 8-37 21-50 12.8-12.8 30.2-20.6 49.8-20.6 19.5 0 37 7.8 50 20.6 12.6 13 20.5 30.4 20.5 50 0 19.5-8 37-20.7 49.8-12.8 12.8-30.3 20.3-49.8 20.4H109.8z"]},faVenmo:{prefix:"fac",iconName:"venmo",icon:[128,128,[],"e003","M117.258,0c4.653,7.684,6.75,15.6,6.75,25.597c0,31.889-27.222,73.315-49.315,102.403H24.23L3.992,6.981 l44.186-4.195l10.7,86.112c9.998-16.288,22.336-41.885,22.336-59.337c0-9.553-1.636-16.059-4.194-21.416L117.258,0z"]}};y.a.autoAddCss=!1,y.c.add(b.a,v.a,g),console.log("If you're looking at the console for my site, either something's broken or you're interested in learning how it was built. For the former, log an issue at https://github.com/ajlende/ajlende.github.io/issues. For the later, check out the source code which I've made available at https://github.com/ajlende/ajlende.github.io.");var E=function(e){var t=e.children,n=e.location;return a.a.createElement(a.a.Fragment,null,a.a.createElement(s.Helmet,null,a.a.createElement("html",{lang:"en"}),a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),a.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),a.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),a.a.createElement("link",{rel:"manifest",href:"/favicons/manifest.json"}),a.a.createElement("meta",{name:"apple-mobile-web-app-title",content:"Alex Lende"}),a.a.createElement("meta",{name:"application-name",content:"Alex Lende"}),a.a.createElement("meta",{name:"theme-color",content:"#073746"}),a.a.createElement("title",null,"Alex Lende"),a.a.createElement("meta",{name:"p:domain_verify",content:"b94c9d9f144c41daa7b4aac64aeef4b6"})),a.a.createElement(p,{location:n}),a.a.createElement("main",null,t),a.a.createElement(m,null))};E.propTypes={location:i.a.object,children:i.a.node};t.a=E},169:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return c});var r=n(0),a=n.n(r),o=n(157),i=n(170),s=n.n(i),l=function(e){var t=e.rowSize,n=e.children,r=a.a.Children.toArray(n).reduce(function(e,n,r,a){return r%t?e:[].concat(e,[a.slice(r,r+t)])},[]).map(function(e){return a.a.createElement(o.Tile,{key:e.reduce(function(e,t){return e+t.key},"")},e)});return a.a.createElement(o.Tile,{isAncestor:!0,isVertical:!0},r)};l.defaultProps={rowSize:2};var c=function(e){var t=e.children;return a.a.createElement(o.Tile,{isParent:!0,isSize:6},a.a.createElement(o.Tile,{isChild:!0,render:function(){return a.a.createElement(o.Box,{className:s.a.box},t)}}))}},171:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(n,r){var a=this,o=t.extractMessage(n)+": "+JSON.stringify({response:n,request:r});return(a=e.call(this,o)||this).response=n,a.request=r,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(a,t),a}return a(t,e),t.extractMessage=function(e){try{return e.errors[0].message}catch(t){return"GraphQL Error (Code: "+e.status+")"}},t}(Error);t.ClientError=o},186:function(e,t,n){var r=n(25).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(18)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},187:function(e,t,n){"use strict";var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{l(r.next(e))}catch(t){o(t)}}function s(e){try{l(r.throw(e))}catch(t){o(t)}}function l(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,s)}l((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=r[2&o[0]?"return":o[0]?"throw":"next"])&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[0,a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(s){o=[6,s],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var s=n(171),l=n(171);t.ClientError=l.ClientError,n(188);var c=function(){function e(e,t){this.url=e,this.options=t||{}}return e.prototype.rawRequest=function(e,t){return a(this,void 0,void 0,function(){var n,a,l,c,u,h,d,p,m;return o(this,function(o){switch(o.label){case 0:return n=this.options,a=n.headers,l=i(n,["headers"]),c=JSON.stringify({query:e,variables:t||void 0}),[4,fetch(this.url,r({method:"POST",headers:Object.assign({"Content-Type":"application/json"},a),body:c},l))];case 1:return[4,f(u=o.sent())];case 2:if(h=o.sent(),u.ok&&!h.errors&&h.data)return d=u.headers,p=u.status,[2,r({},h,{headers:d,status:p})];throw m="string"==typeof h?{error:h}:h,new s.ClientError(r({},m,{status:u.status,headers:u.headers}),{query:e,variables:t})}})})},e.prototype.request=function(e,t){return a(this,void 0,void 0,function(){var n,a,l,c,u,h,d;return o(this,function(o){switch(o.label){case 0:return n=this.options,a=n.headers,l=i(n,["headers"]),c=JSON.stringify({query:e,variables:t||void 0}),[4,fetch(this.url,r({method:"POST",headers:Object.assign({"Content-Type":"application/json"},a),body:c},l))];case 1:return[4,f(u=o.sent())];case 2:if(h=o.sent(),u.ok&&!h.errors&&h.data)return[2,h.data];throw d="string"==typeof h?{error:h}:h,new s.ClientError(r({},d,{status:u.status}),{query:e,variables:t})}})})},e.prototype.setHeaders=function(e){return this.options.headers=e,this},e.prototype.setHeader=function(e,t){var n,r=this.options.headers;return r?r[e]=t:this.options.headers=((n={})[e]=t,n),this},e}();function u(e,t,n){return a(this,void 0,void 0,function(){return o(this,function(r){return[2,new c(e).request(t,n)]})})}function f(e){return a(this,void 0,void 0,function(){var t;return o(this,function(n){return(t=e.headers.get("Content-Type"))&&t.startsWith("application/json")?[2,e.json()]:[2,e.text()]})})}t.GraphQLClient=c,t.rawRequest=function(e,t,n){return a(this,void 0,void 0,function(){return o(this,function(r){return[2,new c(e).rawRequest(t,n)]})})},t.request=u,t.default=u},188:function(e,t){!function(e){if(!e.fetch){var t={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(t.arrayBuffer)var n=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=function(e){return e&&DataView.prototype.isPrototypeOf(e)},a=ArrayBuffer.isView||function(e){return e&&n.indexOf(Object.prototype.toString.call(e))>-1};u.prototype.append=function(e,t){e=s(e),t=l(t);var n=this.map[e];this.map[e]=n?n+","+t:t},u.prototype.delete=function(e){delete this.map[s(e)]},u.prototype.get=function(e){return e=s(e),this.has(e)?this.map[e]:null},u.prototype.has=function(e){return this.map.hasOwnProperty(s(e))},u.prototype.set=function(e,t){this.map[s(e)]=l(t)},u.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},u.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),c(e)},u.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),c(e)},u.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),c(e)},t.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);var o=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];y.prototype.clone=function(){return new y(this,{body:this._bodyInit})},m.call(y.prototype),m.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},v.error=function(){var e=new v(null,{status:0,statusText:""});return e.type="error",e};var i=[301,302,303,307,308];v.redirect=function(e,t){if(-1===i.indexOf(t))throw new RangeError("Invalid status code");return new v(null,{status:t,headers:{location:e}})},e.Headers=u,e.Request=y,e.Response=v,e.fetch=function(e,n){return new Promise(function(r,a){var o=new y(e,n),i=new XMLHttpRequest;i.onload=function(){var e,t,n={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",t=new u,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var n=e.split(":"),r=n.shift().trim();if(r){var a=n.join(":").trim();t.append(r,a)}}),t)};n.url="responseURL"in i?i.responseURL:n.headers.get("X-Request-URL");var a="response"in i?i.response:i.responseText;r(new v(a,n))},i.onerror=function(){a(new TypeError("Network request failed"))},i.ontimeout=function(){a(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials?i.withCredentials=!0:"omit"===o.credentials&&(i.withCredentials=!1),"responseType"in i&&t.blob&&(i.responseType="blob"),o.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}function s(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function l(e){return"string"!=typeof e&&(e=String(e)),e}function c(e){var n={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t.iterable&&(n[Symbol.iterator]=function(){return n}),n}function u(e){this.map={},e instanceof u?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function f(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function h(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function d(e){var t=new FileReader,n=h(t);return t.readAsArrayBuffer(e),n}function p(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(t.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(t.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(t.arrayBuffer&&t.blob&&r(e))this._bodyArrayBuffer=p(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!t.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!a(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=p(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},t.blob&&(this.blob=function(){var e=f(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var e,t,n,r=f(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=h(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},t.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}function y(e,t){var n,r,a=(t=t||{}).body;if(e instanceof y){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new u(e.headers)),this.method=e.method,this.mode=e.mode,a||null==e._bodyInit||(a=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new u(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),o.indexOf(r)>-1?r:n),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&a)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(a)}function b(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),a=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(a))}}),t}function v(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new u(t.headers),this.url=t.url||"",this._initBody(e)}}("undefined"!=typeof self?self:this)}}]);
//# sourceMappingURL=component---src-pages-projects-jsx-62567e148a30374437b3.js.map