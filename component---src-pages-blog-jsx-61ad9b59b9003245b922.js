(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{157:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(160),r=t.n(l),o=t(158),c=t(52),s=t(181),m=t.n(s),d=t(161),u=t(182),f=t.n(u),h=function(e){var a=e.rowSize,t=e.children,n=i.a.Children.toArray(t).reduce(function(e,t,n,i){return n%a?e:[].concat(e,[i.slice(n,n+a)])},[]).map(function(e){return i.a.createElement(o.Tile,{key:e.reduce(function(e,a){return e+a.key},"")},e)});return i.a.createElement(o.Tile,{isAncestor:!0,isVertical:!0},n)};h.defaultProps={rowSize:2};var p=function(e){var a=e.children;return i.a.createElement(o.Tile,{isParent:!0,isSize:6},i.a.createElement(o.Tile,{isChild:!0,render:function(){return i.a.createElement(o.Box,{className:f.a.box},a)}}))},g=t(169),y=t.n(g);t.d(a,"pageQuery",function(){return b});a.default=function(e){var a=e.data,t=e.location;return i.a.createElement(d.a,{location:t},i.a.createElement(r.a,null,i.a.createElement("title",null,"Blog – Alex Lende")),i.a.createElement(o.Hero,{isColor:"warning",isBold:!0,className:y.a.angled},i.a.createElement(o.HeroBody,null,i.a.createElement(o.Container,{hasTextAlign:"centered"},i.a.createElement(o.Title,{className:y.a.title},"Blog")))),i.a.createElement(o.Section,null,i.a.createElement(o.Container,null,i.a.createElement(h,null,a.remark.posts.filter(function(e){return"/404/"!==e.path}).map(function(e){var a=e.post,t=a.timeToRead,n=a.id,l=a.frontmatter,r=l.title,s=l.description,d=l.date,u=l.slug;return i.a.createElement(p,{key:n},i.a.createElement(o.Title,null,i.a.createElement(c.Link,{to:m()(d,"UTC:yyyy/mm/dd")+"/"+u},r)),i.a.createElement(o.Level,{style:{fontSize:"0.9em"}},i.a.createElement(o.LevelLeft,null,m()(d,"UTC:mmm d, yyyy")),i.a.createElement(o.LevelRight,null,t," min read")),i.a.createElement(o.Content,null,s))})))))};var b="231273186"},159:function(e,a,t){"use strict";t(24);var n=t(71),i=t.n(n),l=t(0),r=t.n(l),o=t(3),c=t.n(o),s=t(165),m=t(163),d=t.n(m),u={border:c.a.bool,className:c.a.string,mask:c.a.oneOfType([c.a.object,c.a.array,c.a.string]),fixedWidth:c.a.bool,inverse:c.a.bool,flip:c.a.oneOf(["horizontal","vertical","both"]),icon:c.a.oneOfType([c.a.object,c.a.array,c.a.string]),listItem:c.a.bool,pull:c.a.oneOf(["right","left"]),pulse:c.a.bool,rotation:c.a.oneOf([90,180,270]),size:c.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:c.a.bool,symbol:c.a.oneOfType([c.a.bool,c.a.string]),title:c.a.string,transform:c.a.oneOfType([c.a.string,c.a.object])},f={isAlign:c.a.oneOf(["left","right"]),isSize:c.a.oneOf(["large","medium","small"]),faProps:c.a.shape(u)},h={isAlign:null,isSize:null,faProps:{border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null}},p=function(e){var a,t=e.isAlign,n=e.isSize,l=e.faProps,o=i()(e,["isAlign","isSize","faProps"]),c=d()(((a={icon:!0})["is-"+t]=!!t,a["is-"+n]=!!n,a));return r.a.createElement("span",Object.assign({},o,{className:c}),r.a.createElement(s.a,l))};p.propTypes=f,p.defaultProps=h,a.a=p},161:function(e,a,t){"use strict";t(164);var n=t(0),i=t.n(n),l=t(3),r=t.n(l),o=t(160),c=t.n(o),s=t(52),m=t(158),d=t(159),u={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},f=function(e){var a=e.to,t=e.location,n=e.children;return i.a.createElement(m.NavbarItem,{tag:s.Link,to:a,isActive:t.pathname===a},n)},h=function(e){var a=e.location,t=Object(n.useState)(!1),l=t[0],r=t[1],o=Object(n.useCallback)(function(){r(function(e){return!e})},[]);return i.a.createElement(m.Navbar,{"aria-label":"main navigation"},i.a.createElement(m.Container,null,i.a.createElement(m.NavbarBrand,null,i.a.createElement(f,{to:"/",location:a},i.a.createElement("strong",null,"Alex Lende")),i.a.createElement(m.NavbarItem,{"aria-label":"GitHub",href:"https://github.com/ajlende",isHidden:"desktop"},i.a.createElement(d.a,{faProps:{icon:["fab","github"],size:"lg"},isSize:"medium"})),i.a.createElement(m.NavbarItem,{"aria-label":"LinkedIn",href:"https://linkedin.com/in/ajlende",isHidden:"desktop"},i.a.createElement(d.a,{faProps:{icon:["fab","linkedin"],size:"lg"},isSize:"medium"})),i.a.createElement(m.NavbarItem,{"aria-label":"AngelList",href:"https://angel.co/ajlende",isHidden:"desktop"},i.a.createElement(d.a,{faProps:{icon:["fab","angellist"],size:"lg"},isSize:"medium"})),i.a.createElement(m.NavbarBurger,{tag:"a",href:"javascript:void(0)",role:"button","aria-label":"menu","aria-expanded":l,isActive:l,onClick:o})),i.a.createElement(m.NavbarMenu,{isActive:l,onClick:o},i.a.createElement(m.NavbarStart,null,i.a.createElement(f,{to:"/projects",location:a},"Projects"),i.a.createElement(f,{to:"/blog",location:a},"Blog"),i.a.createElement(f,{to:"/contact",location:a},"Contact")),i.a.createElement(m.NavbarEnd,null,i.a.createElement(m.NavbarItem,{"aria-label":"GitHub",href:"https://github.com/ajlende",isHidden:"touch"},i.a.createElement(d.a,{faProps:{icon:["fab","github"],size:"lg"},isSize:"medium"})),i.a.createElement(m.NavbarItem,{"aria-label":"LinkedIn",href:"https://linkedin.com/in/ajlende",isHidden:"touch"},i.a.createElement(d.a,{faProps:{icon:["fab","linkedin"],size:"lg"},isSize:"medium"})),i.a.createElement(m.NavbarItem,{"aria-label":"AngelList",href:"https://angel.co/ajlende",isHidden:"touch"},i.a.createElement(d.a,{faProps:{icon:["fab","angellist"],size:"lg"},isSize:"medium"}))))))};h.propTypes=u;var p=h,g=function(){return i.a.createElement(m.Footer,null,i.a.createElement(m.Container,null,i.a.createElement(m.Content,{isSize:"small"},i.a.createElement("p",null,"Contents of this site are © Copyright 2017-2019 Alex Lende. All rights reserved."),i.a.createElement("p",null,i.a.createElement("a",{href:"https://github.com/ajlende/ajlende.github.io/tree/develop"},"Source code")," is"," ","available under the"," ",i.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT license"),"."))))},y=(t(166),t(162)),b=t(167),v=t(168),E={faAjlende:{prefix:"fac",iconName:"ajlende",icon:[1024,879.1,[],"e001","M1024 879L510 0 0 879h78.6l21.5-38c39 25.4 85.5 38 139.5 38 48.7 0 87.4-8 116-24.2 28.8-16.2 50.6-39 65.6-68.3 15-29.3 25-64.7 29.6-106.2 4.7-41.5 7-87.5 7-138v-1.8H563V879h461zM392 542c0 44.4-1.6 84-4.7 118.5-3 34.6-10 63.8-20.6 87.5-10.6 23.7-26 41.7-46.3 53.8C300 814 273 820 239.4 820c-26.8 0-51-3.3-72.5-10.2-15.3-4.8-28.6-10.3-40-16.4l143-252.8h122v1.5zm0-58.5h-89.5L392 329v154.5zM629.4 335L715 483.4h-85.6V335zm0 205.3h117.8l163.3 280h-281v-280zm-172-56.8V216l52-89.5 53.6 93.2v263.7H457.5z"]},fa8tracks:{prefix:"fac",iconName:"8tracks",icon:[400,400,[],"e002","M109.8 180.2C49 180.2 0 229.4 0 290.2 0 350.7 49 400 109.8 400c60.7 0 109.7-49.2 109.7-110v-38.5h-39.2V290c0 19.6-8 37-20.6 50-13 12.8-30.3 20.7-50 20.7-19.4 0-37-8-49.7-20.7-12.8-13-20.7-30.4-20.7-50 0-19.5 8-37 20.7-49.8 12.8-12.8 30.3-20.7 49.8-20.7h180.4c60.7 0 109.8-49 109.8-109.6C400 49 351 0 290.2 0c-60.7 0-109.8 49.2-109.8 110V148h39V110c.2-19.6 8-37 21-50 12.8-12.8 30.2-20.6 49.8-20.6 19.5 0 37 7.8 50 20.6 12.6 13 20.5 30.4 20.5 50 0 19.5-8 37-20.7 49.8-12.8 12.8-30.3 20.3-49.8 20.4H109.8z"]},faStrava:{prefix:"fac",iconName:"strava",icon:[24,24,[],"e003","M15.4 17.94l-2.1-4.1h-3.07L15.4 24l5.14-10.17h-3.07m-7-5.6l2.83 5.6h4.17L10.47 0l-7 13.83h4.16"]}};y.a.autoAddCss=!1,y.c.add(b.a,v.a,E),console.log("If you're looking at the console for my site, either something's broken or you're interested in learning how it was built. For the former, log an issue at https://github.com/ajlende/ajlende.github.io/issues. For the later, check out the source code which I've made available at https://github.com/ajlende/ajlende.github.io.");var T=function(e){var a=e.children,t=e.location;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("html",{lang:"en"}),i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),i.a.createElement("link",{rel:"manifest",href:"/favicons/manifest.json"}),i.a.createElement("meta",{name:"apple-mobile-web-app-title",content:"Alex Lende"}),i.a.createElement("meta",{name:"application-name",content:"Alex Lende"}),i.a.createElement("meta",{name:"theme-color",content:"#073746"}),i.a.createElement("title",null,"Alex Lende"),i.a.createElement("meta",{name:"p:domain_verify",content:"b94c9d9f144c41daa7b4aac64aeef4b6"})),i.a.createElement(p,{location:t}),i.a.createElement("main",null,a),i.a.createElement(g,null))};T.propTypes={location:r.a.object,children:r.a.node};a.a=T},181:function(e,a,t){var n;!function(i){"use strict";var l,r,o,c=(l=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,r=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,o=/[^-+\dA-Z]/g,function(e,a,t,n){if(1!==arguments.length||"string"!==(null===(i=e)?"null":void 0===i?"undefined":"object"!=typeof i?typeof i:Array.isArray(i)?"array":{}.toString.call(i).slice(8,-1).toLowerCase())||/\d/.test(e)||(a=e,e=void 0),(e=e||new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var i,m=(a=String(c.masks[a]||a||c.masks.default)).slice(0,4);"UTC:"!==m&&"GMT:"!==m||(a=a.slice(4),t=!0,"GMT:"===m&&(n=!0));var d=t?"getUTC":"get",u=e[d+"Date"](),f=e[d+"Day"](),h=e[d+"Month"](),p=e[d+"FullYear"](),g=e[d+"Hours"](),y=e[d+"Minutes"](),b=e[d+"Seconds"](),v=e[d+"Milliseconds"](),E=t?0:e.getTimezoneOffset(),T=function(e){var a=new Date(e.getFullYear(),e.getMonth(),e.getDate());a.setDate(a.getDate()-(a.getDay()+6)%7+3);var t=new Date(a.getFullYear(),0,4);t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=a.getTimezoneOffset()-t.getTimezoneOffset();a.setHours(a.getHours()-n);var i=(a-t)/6048e5;return 1+Math.floor(i)}(e),M=function(e){var a=e.getDay();return 0===a&&(a=7),a}(e),N={d:u,dd:s(u),ddd:c.i18n.dayNames[f],dddd:c.i18n.dayNames[f+7],m:h+1,mm:s(h+1),mmm:c.i18n.monthNames[h],mmmm:c.i18n.monthNames[h+12],yy:String(p).slice(2),yyyy:p,h:g%12||12,hh:s(g%12||12),H:g,HH:s(g),M:y,MM:s(y),s:b,ss:s(b),l:s(v,3),L:s(Math.round(v/10)),t:g<12?c.i18n.timeNames[0]:c.i18n.timeNames[1],tt:g<12?c.i18n.timeNames[2]:c.i18n.timeNames[3],T:g<12?c.i18n.timeNames[4]:c.i18n.timeNames[5],TT:g<12?c.i18n.timeNames[6]:c.i18n.timeNames[7],Z:n?"GMT":t?"UTC":(String(e).match(r)||[""]).pop().replace(o,""),o:(E>0?"-":"+")+s(100*Math.floor(Math.abs(E)/60)+Math.abs(E)%60,4),S:["th","st","nd","rd"][u%10>3?0:(u%100-u%10!=10)*u%10],W:T,N:M};return a.replace(l,function(e){return e in N?N[e]:e.slice(1,e.length-1)})});function s(e,a){for(e=String(e),a=a||2;e.length<a;)e="0"+e;return e}c.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},c.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},void 0===(n=function(){return c}.call(a,t,a,e))||(e.exports=n)}()}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-61ad9b59b9003245b922.js.map