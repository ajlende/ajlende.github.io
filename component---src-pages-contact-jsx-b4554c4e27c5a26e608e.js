(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(159),i=a.n(o),l=a(158),s=a(160),c=(a(24),a(72)),u=a.n(c),m=a(3),p=a.n(m),d=a(183),f=a(168),h=a.n(f),g={border:p.a.bool,className:p.a.string,mask:p.a.oneOfType([p.a.object,p.a.array,p.a.string]),fixedWidth:p.a.bool,inverse:p.a.bool,flip:p.a.oneOf(["horizontal","vertical","both"]),icon:p.a.oneOfType([p.a.object,p.a.array,p.a.string]),listItem:p.a.bool,pull:p.a.oneOf(["right","left"]),pulse:p.a.bool,rotation:p.a.oneOf([90,180,270]),size:p.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.a.bool,symbol:p.a.oneOfType([p.a.bool,p.a.string]),title:p.a.string,transform:p.a.oneOfType([p.a.string,p.a.object])},b={isAlign:p.a.oneOf(["left","right"]),isSize:p.a.oneOf(["large","medium","small"]),faProps:p.a.shape(g)},y={isAlign:null,isSize:null,faProps:{border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null}},w=function(e){var t,a=e.isAlign,n=e.isSize,o=e.faProps,i=u()(e,["isAlign","isSize","faProps"]),l=h()(((t={icon:!0})["is-"+a]=!!a,t["is-"+n]=!!n,t));return r.a.createElement("span",Object.assign({},i,{className:l}),r.a.createElement(d.a,o))};w.propTypes=b,w.defaultProps=y;var v=w,k=a(184),E=a(167),j=a.n(E),S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Title,null,"Professional"),r.a.createElement(l.Level,{isMobile:!0},r.a.createElement(l.LevelItem,{href:"mailto:ajlende@gmail.com",title:"Email"},r.a.createElement(v,{faProps:{icon:"envelope",size:"3x"},isSize:"large"})),k.basics.profiles.filter(function(e){return"professional"===e.category}).map(function(e){var t=e.icon,a=e.url,n=e.network;return r.a.createElement(l.LevelItem,{href:a,title:n,key:n},r.a.createElement(v,{faProps:{icon:t,size:"3x"},isSize:"large"}))})))},C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Title,null,"Personal"),function e(t,a){var n=t.slice(0,a);return n.length?[n].concat(e(t.slice(a,t.length),a)):t}(k.basics.profiles.filter(function(e){return"personal"===e.category}),4).map(function(e,t){return r.a.createElement(l.Level,{isMobile:!0,key:"personal-"+t},e.map(function(e){var t=e.icon,a=e.url,n=e.network;return r.a.createElement(l.LevelItem,{href:a,title:n,key:n},r.a.createElement(v,{faProps:{icon:t,size:"3x"},isSize:"large"}))}))}))},x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Title,null,"Say Hi"),r.a.createElement(l.Content,null,r.a.createElement("p",null,"Here is a nearly exhaustive list of all the places that you can add/",r.a.createElement("wbr",null),"follow/",r.a.createElement("wbr",null),"friend/",r.a.createElement("wbr",null),"connect with me if you so desire. Social media is exhausting, and I try to focus my time on more productive things, so I don't spend much time on it. That being said, I'll also probably get an email notification if I get a DM on any of these, so still feel free to connect with me on any of them."),r.a.createElement("p",null,"Despite not spending much time on social media, I still check my email regularly if you really want to get in touch with me."," ",r.a.createElement("span",{role:"img","aria-label":"Victory Hand"},"✌️")),r.a.createElement("p",null,"For anything not linked to here—including various Slack groups I'm a part of—look for @ajlende.")))};t.default=function(e){var t=e.location;return r.a.createElement(s.a,{location:t},r.a.createElement(i.a,null,r.a.createElement("title",null,"Contact – Alex Lende")),r.a.createElement(l.Hero,{isColor:"success",isBold:!0,className:j.a.angled},r.a.createElement(l.HeroBody,null,r.a.createElement(l.Container,{hasTextAlign:"centered"},r.a.createElement(l.Title,{className:j.a.title},"Contact")))),r.a.createElement(l.Hero,{isSize:"medium"},r.a.createElement(l.HeroBody,null,r.a.createElement(l.Container,null,r.a.createElement(l.Columns,{isCentered:!0},r.a.createElement(l.Column,{isSize:4},r.a.createElement(S,null),r.a.createElement(C,null)),r.a.createElement(l.Column,{isOffset:1,isSize:4},r.a.createElement(x,null)))))))}},160:function(e,t,a){"use strict";a(162);var n=a(0),r=a.n(n),o=a(3),i=a.n(o),l=a(159),s=a.n(l),c=a(6),u=a.n(c),m=(a(163),a(52)),p=a(158),d={location:i.a.object},f=function(e){var t=e.link,a=e.location,n=e.children;return r.a.createElement(p.NavbarItem,{href:"javascript:void(0)",onClick:function(){return Object(m.navigate)(t)},isActive:a.pathname===t},n)},h=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={isDropdownOpen:!1},t.onClickDropdown=function(){t.setState(function(e){return{isDropdownOpen:!e.isDropdownOpen}})},t}return u()(t,e),t.prototype.render=function(){return r.a.createElement(p.Navbar,null,r.a.createElement(p.Container,null,r.a.createElement(p.NavbarBrand,null,r.a.createElement(f,{link:"/",location:this.props.location},r.a.createElement("strong",null,"Alex Lende")),r.a.createElement(p.NavbarItem,{"aria-label":"GitHub",href:"https://github.com/ajlende",isHidden:"desktop"},r.a.createElement(p.Icon,{icon:"github"})),r.a.createElement(p.NavbarItem,{"aria-label":"LinkedIn",href:"https://linkedin.com/in/ajlende",isHidden:"desktop"},r.a.createElement(p.Icon,{icon:"linkedin"})),r.a.createElement(p.NavbarItem,{"aria-label":"AngelList",href:"https://angel.co/ajlende",isHidden:"desktop"},r.a.createElement(p.Icon,{icon:"angellist"})),r.a.createElement(p.NavbarBurger,{isActive:this.state.isDropdownOpen,onClick:this.onClickDropdown})),r.a.createElement(p.NavbarMenu,{isActive:this.state.isDropdownOpen,onClick:this.onClickDropdown},r.a.createElement(p.NavbarStart,null,r.a.createElement(f,{link:"/projects",location:this.props.location},"Projects"),r.a.createElement(f,{link:"/blog",location:this.props.location},"Blog"),r.a.createElement(f,{link:"/contact",location:this.props.location},"Contact")),r.a.createElement(p.NavbarEnd,null,r.a.createElement(p.NavbarItem,{href:"https://github.com/ajlende",isHidden:"touch"},r.a.createElement(p.Icon,{icon:"github"})),r.a.createElement(p.NavbarItem,{href:"https://linkedin.com/in/ajlende",isHidden:"touch"},r.a.createElement(p.Icon,{icon:"linkedin"})),r.a.createElement(p.NavbarItem,{href:"https://angel.co/ajlende",isHidden:"touch"},r.a.createElement(p.Icon,{icon:"angellist"}))))))},t}(r.a.Component);h.propTypes=d;var g=h,b=function(){return r.a.createElement(p.Footer,null,r.a.createElement(p.Container,null,r.a.createElement(p.Content,{isSize:"small"},r.a.createElement("p",null,"Contents of this site are © Copyright 2017-2019 Alex Lende. All rights reserved."),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/ajlende/ajlende.github.io/tree/develop"},"Source code")," is"," ","available under the"," ",r.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT license"),"."))))},y=(a(164),a(161)),w=a(165),v=a(166),k={faAjlende:{prefix:"fac",iconName:"ajlende",icon:[1024,879.1,[],"e001","M1024 879L510 0 0 879h78.6l21.5-38c39 25.4 85.5 38 139.5 38 48.7 0 87.4-8 116-24.2 28.8-16.2 50.6-39 65.6-68.3 15-29.3 25-64.7 29.6-106.2 4.7-41.5 7-87.5 7-138v-1.8H563V879h461zM392 542c0 44.4-1.6 84-4.7 118.5-3 34.6-10 63.8-20.6 87.5-10.6 23.7-26 41.7-46.3 53.8C300 814 273 820 239.4 820c-26.8 0-51-3.3-72.5-10.2-15.3-4.8-28.6-10.3-40-16.4l143-252.8h122v1.5zm0-58.5h-89.5L392 329v154.5zM629.4 335L715 483.4h-85.6V335zm0 205.3h117.8l163.3 280h-281v-280zm-172-56.8V216l52-89.5 53.6 93.2v263.7H457.5z"]},fa8tracks:{prefix:"fac",iconName:"8tracks",icon:[400,400,[],"e002","M109.8 180.2C49 180.2 0 229.4 0 290.2 0 350.7 49 400 109.8 400c60.7 0 109.7-49.2 109.7-110v-38.5h-39.2V290c0 19.6-8 37-20.6 50-13 12.8-30.3 20.7-50 20.7-19.4 0-37-8-49.7-20.7-12.8-13-20.7-30.4-20.7-50 0-19.5 8-37 20.7-49.8 12.8-12.8 30.3-20.7 49.8-20.7h180.4c60.7 0 109.8-49 109.8-109.6C400 49 351 0 290.2 0c-60.7 0-109.8 49.2-109.8 110V148h39V110c.2-19.6 8-37 21-50 12.8-12.8 30.2-20.6 49.8-20.6 19.5 0 37 7.8 50 20.6 12.6 13 20.5 30.4 20.5 50 0 19.5-8 37-20.7 49.8-12.8 12.8-30.3 20.3-49.8 20.4H109.8z"]},faStrava:{prefix:"fac",iconName:"strava",icon:[24,24,[],"e003","M15.4 17.94l-2.1-4.1h-3.07L15.4 24l5.14-10.17h-3.07m-7-5.6l2.83 5.6h4.17L10.47 0l-7 13.83h4.16"]}};y.a.autoAddCss=!1,y.c.add(w.a,v.a,k),console.log("If you're looking at the console for my site, either something's broken or you're interested in learning how it was built. For the former, log an issue at https://github.com/ajlende/ajlende.github.io/issues. For the later, check out the source code which I've made available at https://github.com/ajlende/ajlende.github.io.");var E=function(e){var t=e.children,a=e.location;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),r.a.createElement("link",{rel:"manifest",href:"/favicons/manifest.json"}),r.a.createElement("meta",{name:"apple-mobile-web-app-title",content:"Alex Lende"}),r.a.createElement("meta",{name:"application-name",content:"Alex Lende"}),r.a.createElement("meta",{name:"theme-color",content:"#073746"}),r.a.createElement("title",null,"Alex Lende"),r.a.createElement("meta",{name:"p:domain_verify",content:"b94c9d9f144c41daa7b4aac64aeef4b6"})),r.a.createElement(g,{location:a}),r.a.createElement("main",null,t),r.a.createElement(b,null))};E.propTypes={location:i.a.object,children:i.a.node};t.a=E},168:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===o)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},183:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return w});var n=a(161),r=a(3),o=a.n(r),i=a(0),l=a.n(i);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){c(e,t,a[t])})}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var d="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var f,h=(function(e){var t,a,n,r,o,i,l,s,c,u,m,p,f,h,g;t=d,a=function(e,t,n){if(!s(t)||u(t)||m(t)||p(t)||l(t))return t;var r,o=0,i=0;if(c(t))for(r=[],i=t.length;o<i;o++)r.push(a(e,t[o],n));else for(var d in r={},t)Object.prototype.hasOwnProperty.call(t,d)&&(r[e(d,n)]=a(e,t[d],n));return r},n=function(e){return f(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)},r=function(e){var t=n(e);return t.substr(0,1).toUpperCase()+t.substr(1)},o=function(e,t){return function(e,t){var a=(t=t||{}).separator||"_",n=t.split||/(?=[A-Z])/;return e.split(n).join(a)}(e,t).toLowerCase()},i=Object.prototype.toString,l=function(e){return"function"==typeof e},s=function(e){return e===Object(e)},c=function(e){return"[object Array]"==i.call(e)},u=function(e){return"[object Date]"==i.call(e)},m=function(e){return"[object RegExp]"==i.call(e)},p=function(e){return"[object Boolean]"==i.call(e)},f=function(e){return(e-=0)==e},h=function(e,t){var a=t&&"process"in t?t.process:t;return"function"!=typeof a?e:function(t,n){return a(t,e,n)}},g={camelize:n,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(e,t){return a(h(n,t),e)},decamelizeKeys:function(e,t){return a(h(o,t),e,t)},pascalizeKeys:function(e,t){return a(h(r,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}},e.exports?e.exports=g:t.humps=g}(f={exports:{}},f.exports),f.exports);var g=!1;try{g=!0}catch(k){}function b(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}function y(e){return null===e?null:"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function w(e){var t=e.icon,a=e.mask,r=e.symbol,o=e.className,i=e.title,l=y(t),s=b("classes",[].concat(p(function(e){var t,a=(c(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-inverse":e.inverse,"fa-border":e.border,"fa-li":e.listItem,"fa-flip-horizontal":"horizontal"===e.flip||"both"===e.flip,"fa-flip-vertical":"vertical"===e.flip||"both"===e.flip},"fa-".concat(e.size),null!==e.size),c(t,"fa-rotate-".concat(e.rotation),null!==e.rotation),c(t,"fa-pull-".concat(e.pull),null!==e.pull),t);return Object.keys(a).map(function(e){return a[e]?e:null}).filter(function(e){return e})}(e)),p(o.split(" ")))),m=b("transform","string"==typeof e.transform?n.d.transform(e.transform):e.transform),d=b("mask",y(a)),f=Object(n.b)(l,u({},s,m,d,{symbol:r,title:i}));if(!f)return function(){var e;!g&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",l),null;var h=f.abstract,k={};return Object.keys(e).forEach(function(t){w.defaultProps.hasOwnProperty(t)||(k[t]=e[t])}),v(h[0],k)}w.displayName="FontAwesomeIcon",w.propTypes={border:o.a.bool,className:o.a.string,mask:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),fixedWidth:o.a.bool,inverse:o.a.bool,flip:o.a.oneOf(["horizontal","vertical","both"]),icon:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),listItem:o.a.bool,pull:o.a.oneOf(["right","left"]),pulse:o.a.bool,rotation:o.a.oneOf([90,180,270]),size:o.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o.a.bool,symbol:o.a.oneOfType([o.a.bool,o.a.string]),title:o.a.string,transform:o.a.oneOfType([o.a.string,o.a.object])},w.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null};var v=function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var r=(a.children||[]).map(function(a){return e(t,a)}),o=Object.keys(a.attributes||{}).reduce(function(e,t){var n=a.attributes[t];switch(t){case"class":e.attrs.className=n,delete a.attributes.class;break;case"style":e.attrs.style=n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var a,n=t.indexOf(":"),r=h.camelize(t.slice(0,n)),o=t.slice(n+1).trim();return r.startsWith("webkit")?e[(a=r,a.charAt(0).toUpperCase()+a.slice(1))]=o:e[r]=o,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[h.camelize(t)]=n}return e},{attrs:{}}),i=n.style,l=void 0===i?{}:i,s=m(n,["style"]);return o.attrs.style=u({},o.attrs.style,l),t.apply(void 0,[a.tag,u({},o.attrs,s)].concat(p(r)))}.bind(null,l.a.createElement)}).call(this,a(71))},184:function(e){e.exports={basics:{name:"Alex Lende",label:"Software Engineer",picture:"https://secure.gravatar.com/avatar/248533af8dc20ca21d72c474bd94a56d",email:"ajlende@gmail.com",phone:"+15157089425",website:"https://ajlende.com",location:{address:"4607 Jefferson St\nApt 702N",city:"Kansas City",region:"Missouri",postalCode:"64112",countryCode:"US"},profiles:[{category:"professional",icon:["fab","github"],network:"GitHub",username:"ajlende",url:"https://github.com/ajlende"},{category:"professional",icon:["fab","linkedin"],network:"LinkedIn",username:"ajlende",url:"https://linkedin.com/in/ajlende"},{category:"professional",icon:["fab","angellist"],network:"AngelList",username:"ajlende",url:"https://angel.co/ajlende"},{category:"personal",icon:["fab","facebook"],network:"Facebook",username:"ajlende",url:"https://www.facebook.com/ajlende"},{category:"personal",icon:["fab","snapchat-ghost"],network:"Snapchat",username:"ajlende",url:"https://www.snapchat.com/add/ajlende"},{category:"personal",icon:["fab","twitter"],network:"Twitter",username:"ajlende",url:"https://twitter.com/ajlende"},{category:"personal",icon:["fab","instagram"],network:"Instagram",username:"ajlende",url:"https://www.instagram.com/ajlende/"},{category:"personal",icon:["fab","goodreads"],network:"Goodreads",username:"ajlende",url:"https://www.goodreads.com/ajlende"},{category:"personal",icon:["fab","meetup"],network:"Meetup",username:"ajlende",url:"https://www.meetup.com/members/218214467/"},{category:"personal",icon:["fab","get-pocket"],network:"Pocket",username:"ajlende",url:"https://getpocket.com/@ajlende"},{category:"personal",icon:["fab","medium"],network:"Medium",username:"ajlende",url:"https://medium.com/@ajlende"},{category:"personal",icon:["fab","pinterest"],network:"Pinterest",username:"ajlende",url:"https://www.pinterest.com/ajlende/"},{category:"personal",icon:["fab","reddit"],network:"Reddit",username:"ajlende",url:"https://www.reddit.com/user/ajlende"},{category:"personal",icon:["fab","steam-square"],network:"Steam",username:"ajlende",url:"https://steamcommunity.com/id/ajlende/"},{category:"personal",icon:["fac","strava"],network:"Strava",username:"ajlende",url:"https://www.strava.com/athletes/19753792"},{category:"personal",icon:["fac","8tracks"],network:"8tracks",username:"ajlende",url:"https://8tracks.com/ajlende"},{category:"personal",icon:["fab","lastfm"],network:"Last.fm",username:"lendea",url:"https://www.last.fm/user/lendea"},{category:"personal",icon:["fab","spotify"],network:"Spotify",username:"ajlende",url:"https://open.spotify.com/user/ajlende"},{category:"personal",icon:["fab","soundcloud"],network:"Soundcloud",username:"alex-lende",url:"https://soundcloud.com/alex-lende"}]},work:[{company:"Cerner",position:"Senior Software Engineer",website:"http://cerner.com",startDate:"2016-08-22",summary:"Cerner is the leading U.S. supplier of health care information technology solutions that optimize clinical and financial outcomes.",highlights:["Collaborated on a multidisciplinary and diverse team of engineers, UI/UX designers, and data strategists","Developed an abstract data visualization platform containing 28 unique data stories connecting 11 different live data sources total for internal media wall and website","Proposed and implemented a procedural soundtrack driven by hospital data with four themes that change throughout the day","Led development of a virtual reality demo with which became the first demo of its kind at the 2018 Cerner Health Conference","Designed and prototyped other confidedential projects realated to emerging technologoes, acessibility, and UX","Improved scheduling workflow for Cerner DevCon CFP App"]},{company:"Workiva",position:"Software Developer Intern",website:"http://workiva.com",startDate:"2014-05-12",endDate:"2015-08-21",summary:"Formerly known as WebFilings, Workiva is a leading cloud platform for connected reporting across accounting, finance, audit, and internal controls.",highlights:["Created pixel-perfect components based on wireframes, drawings, and mock-ups","Prototyped workflows for organizing, sharing, and applying document permissions in WDesk","Implemented file search filtering and multi-select for WDesk","Increased unit test coverage to 93%","Followed Agile/Kanban methodologies"]},{company:"AGCO Corporation",position:"IT Intern",website:"http://agco.com",startDate:"2013-05-13",endDate:"2013-08-20",summary:"AGCO is a global leader in the design, manufacture and distribution of agricultural equipment.",highlights:["Wrote Business Requirements Document for new Employee Suggestion System","Researched systems of input of employee suggestions","Collaborated with other teams to improve user experience","Designed user login screens for the AGCO Jackson Operations intranet system and scan gun"]},{company:"Iowa State University Computer Repair Center",position:"Computer Service Technician",website:"https://www.it.iastate.edu/support/computer-repair",startDate:"2013-02-01",endDate:"2013-05-10",summary:"The Computer Repair Center helps Iowa State students, faculty, staff, and departments with a variety of computer hardware problems.",highlights:["Diagnosed and repaired computer hardware and software issues with Apple and Dell computers","Effectively documented symptoms and all steps to resolve the problem"]},{company:"Okoboji Graphics",position:"Design Associate/Computer Service Technician",website:"https://okobojigraphics.com",startDate:"2008-01-01",endDate:"2012-05-10",summary:"",highlights:["Designed/assembled vinyl decals and signs using Adobe Illustrator/Photoshop & FlexiSign","Assisted in website development with Adobe GoLive/Dreamweaver","Utilized an old computer to construct a NAS server","Researched digital signage & installed a signage station with MediaSignage"]}],education:[{institution:"Iowa State University",area:"Software Engineering",studyType:"Bachelor",startDate:"2012-08-20",endDate:"2016-05-07",courses:["Capstone Project: Computer vision algorithm for tracking an object in 3D space with a single Garmin VIRB XE action camera"]}],awards:[{title:"Development Achievement Award Q3 2018",date:"2014-11-01",awarder:"Cerner",summary:"Peer nominated award for quality, innovation, and leadership at Cerner"},{title:"1st Place HackISU Fall 2015",date:"2015-09-18",awarder:"HackISU",summary:"MLH 36-hour Hackaton where we created a small robot that could be programmed through RFID cards and a web interface for teaching kids about programming."}],publications:[{name:"WebGL in Elm",publisher:"Alex Lende",releaseDate:"2017-06-29",website:"https://ajlende.com/elm-webgl-presentation",summary:"Presented at Elm Kansas City Meetup and Cerner WebDev Meetup"},{name:"Geospacial Data Visualizations",publisher:"Alex Lende",releaseDate:"2017-09-14",website:"https://ajlende.com/geospacial-data-talk",summary:"Presented at Cerner DataCon 2017 and Cerner WebDev Meetup"}],skills:[{name:"Programming Languages",keywords:["C#","C/C++","CSS","Dart","Elm","GraphQL","HTML","JavaScript","LESS","PostgreSQL","Python","Ruby","SASS","TypeScript","WebGL/GLSL"]},{name:"Frameworks/Libraries",keywords:["A-Frame","AngularJS","Bootstrap","Cesium.js","Django","Enzyme","Express","Gatsby","JAMStack","JQuery","Jasmine","Java","Jest","Node.js","OpenCV","RXJS","Rails","React Intl","React Router","React Testing Library","React","Selenium","Three.js","Tone.js"]},{name:"Tools",keywords:["Axure","Docker","Dreamweaver","Git","GitHub","HTC Vive","Illustrator","JIRA","Jenkins & Blue Ocean","Photoshop","Postman","Trello","Unity3D","Vim","Webpack"]},{name:"Personal",keywords:["Adaptable","Clear Communicator","Collaboration","Eye for Design","Leader","Practical","Resourceful","Self-Motivated","Strong Work Ethic"]}],languages:[{language:"English",fluency:"Native Speaker"},{language:"Spanish",fluency:"Limited Working Proficiency"}],interests:[{name:"Open Source",keywords:["Hacktoberfest","cerner/terra-core","chriskempson/base16","denysdovhan/spaceship-prompt","elm-community/webgl","kentcdodds/react-testing-library"]},{name:"Travel",keywords:["Boundary Waters Canoe Area Wilderness, USA","Dhamma Giri, India","Longues-su-Mer, France","Quetico Provincial Park, Canada","RAGBRAI Iowa, USA","Tokyo, Japan"]},{name:"Meetups",keywords:["Elm Kansas City","Cerner WebDev","JavaScript KC"]},{name:"Podcasts",keywords:["10% Happier","Elm Town","Flash Forward","Happier with Gretchen Rubin","JavaScript Jabber","Jocko Podcast","Note to Self","Soft Skills Engineering","Stuff You Should Know","Syntax","The Art of Manliness","The Frontside Podcast","The Joe Rogan Experience","The Jordan Harbinger Show","The Minimalists","The School of Greatness","The Unmistakable Creative","Vergecast"]},{name:"Music",keywords:["Ukulele","Acoustic Guitar","Electric Guitar","Trombone","Baritone","Tenor Saxophone","Alto Saxophone","Flute","Piano","Vocals"]}]}}}]);
//# sourceMappingURL=component---src-pages-contact-jsx-b4554c4e27c5a26e608e.js.map