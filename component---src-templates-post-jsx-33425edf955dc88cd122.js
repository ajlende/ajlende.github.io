(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{151:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",function(){return s});var n=t(0),l=t.n(n),i=t(161),r=t.n(i),o=t(158),c=t(160);a.default=function(e){var a=e.data,t=e.location,n=a.markdownRemark.frontmatter.title;return l.a.createElement(c.a,{location:t},l.a.createElement(o.Section,null,l.a.createElement(r.a,null,l.a.createElement("title",null,n," – Alex Lende")),l.a.createElement(o.Columns,{isCentered:!0},l.a.createElement(o.Column,{isSize:6},l.a.createElement(o.Content,{dangerouslySetInnerHTML:{__html:a.markdownRemark.html}})))))};var s="3498585245"},159:function(e,a,t){"use strict";t(24);var n=t(71),l=t.n(n),i=t(0),r=t.n(i),o=t(3),c=t.n(o),s=t(165),m=t(163),u=t.n(m),d={border:c.a.bool,className:c.a.string,mask:c.a.oneOfType([c.a.object,c.a.array,c.a.string]),fixedWidth:c.a.bool,inverse:c.a.bool,flip:c.a.oneOf(["horizontal","vertical","both"]),icon:c.a.oneOfType([c.a.object,c.a.array,c.a.string]),listItem:c.a.bool,pull:c.a.oneOf(["right","left"]),pulse:c.a.bool,rotation:c.a.oneOf([90,180,270]),size:c.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:c.a.bool,symbol:c.a.oneOfType([c.a.bool,c.a.string]),title:c.a.string,transform:c.a.oneOfType([c.a.string,c.a.object])},p={isAlign:c.a.oneOf(["left","right"]),isSize:c.a.oneOf(["large","medium","small"]),faProps:c.a.shape(d)},h={isAlign:null,isSize:null,faProps:{border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null}},f=function(e){var a,t=e.isAlign,n=e.isSize,i=e.faProps,o=l()(e,["isAlign","isSize","faProps"]),c=u()(((a={icon:!0})["is-"+t]=!!t,a["is-"+n]=!!n,a));return r.a.createElement("span",Object.assign({},o,{className:c}),r.a.createElement(s.a,i))};f.propTypes=p,f.defaultProps=h,a.a=f},160:function(e,a,t){"use strict";t(164);var n=t(0),l=t.n(n),i=t(3),r=t.n(i),o=t(161),c=t.n(o),s=t(52),m=t(158),u=t(159),d={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},p=function(e){var a=e.to,t=e.location,n=e.children;return l.a.createElement(m.NavbarItem,{tag:s.Link,to:a,isActive:t.pathname===a},n)},h=function(e){var a=e.location,t=Object(n.useState)(!1),i=t[0],r=t[1],o=Object(n.useCallback)(function(){r(function(e){return!e})},[]);return l.a.createElement(m.Navbar,{"aria-label":"main navigation"},l.a.createElement(m.Container,null,l.a.createElement(m.NavbarBrand,null,l.a.createElement(p,{to:"/",location:a},l.a.createElement("strong",null,"Alex Lende")),l.a.createElement(m.NavbarItem,{"aria-label":"GitHub",href:"https://github.com/ajlende",isHidden:"desktop"},l.a.createElement(u.a,{faProps:{icon:["fab","github"],size:"lg"},isSize:"medium"})),l.a.createElement(m.NavbarItem,{"aria-label":"LinkedIn",href:"https://linkedin.com/in/ajlende",isHidden:"desktop"},l.a.createElement(u.a,{faProps:{icon:["fab","linkedin"],size:"lg"},isSize:"medium"})),l.a.createElement(m.NavbarItem,{"aria-label":"AngelList",href:"https://angel.co/ajlende",isHidden:"desktop"},l.a.createElement(u.a,{faProps:{icon:["fab","angellist"],size:"lg"},isSize:"medium"})),l.a.createElement(m.NavbarBurger,{tag:"a",href:"javascript:void(0)",role:"button","aria-label":"menu","aria-expanded":i,isActive:i,onClick:o})),l.a.createElement(m.NavbarMenu,{isActive:i,onClick:o},l.a.createElement(m.NavbarStart,null,l.a.createElement(p,{to:"/projects",location:a},"Projects"),l.a.createElement(p,{to:"/blog",location:a},"Blog"),l.a.createElement(p,{to:"/contact",location:a},"Contact")),l.a.createElement(m.NavbarEnd,null,l.a.createElement(m.NavbarItem,{"aria-label":"GitHub",href:"https://github.com/ajlende",isHidden:"touch"},l.a.createElement(u.a,{faProps:{icon:["fab","github"],size:"lg"},isSize:"medium"})),l.a.createElement(m.NavbarItem,{"aria-label":"LinkedIn",href:"https://linkedin.com/in/ajlende",isHidden:"touch"},l.a.createElement(u.a,{faProps:{icon:["fab","linkedin"],size:"lg"},isSize:"medium"})),l.a.createElement(m.NavbarItem,{"aria-label":"AngelList",href:"https://angel.co/ajlende",isHidden:"touch"},l.a.createElement(u.a,{faProps:{icon:["fab","angellist"],size:"lg"},isSize:"medium"}))))))};h.propTypes=d;var f=h,b=function(){return l.a.createElement(m.Footer,null,l.a.createElement(m.Container,null,l.a.createElement(m.Content,{isSize:"small"},l.a.createElement("p",null,"Contents of this site are © Copyright 2017-2019 Alex Lende. All rights reserved."),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/ajlende/ajlende.github.io/tree/develop"},"Source code")," is"," ","available under the"," ",l.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT license"),"."))))},g=(t(166),t(162)),E=t(167),v=t(168),z={faAjlende:{prefix:"fac",iconName:"ajlende",icon:[1024,879.1,[],"e001","M1024 879L510 0 0 879h78.6l21.5-38c39 25.4 85.5 38 139.5 38 48.7 0 87.4-8 116-24.2 28.8-16.2 50.6-39 65.6-68.3 15-29.3 25-64.7 29.6-106.2 4.7-41.5 7-87.5 7-138v-1.8H563V879h461zM392 542c0 44.4-1.6 84-4.7 118.5-3 34.6-10 63.8-20.6 87.5-10.6 23.7-26 41.7-46.3 53.8C300 814 273 820 239.4 820c-26.8 0-51-3.3-72.5-10.2-15.3-4.8-28.6-10.3-40-16.4l143-252.8h122v1.5zm0-58.5h-89.5L392 329v154.5zM629.4 335L715 483.4h-85.6V335zm0 205.3h117.8l163.3 280h-281v-280zm-172-56.8V216l52-89.5 53.6 93.2v263.7H457.5z"]},fa8tracks:{prefix:"fac",iconName:"8tracks",icon:[400,400,[],"e002","M109.8 180.2C49 180.2 0 229.4 0 290.2 0 350.7 49 400 109.8 400c60.7 0 109.7-49.2 109.7-110v-38.5h-39.2V290c0 19.6-8 37-20.6 50-13 12.8-30.3 20.7-50 20.7-19.4 0-37-8-49.7-20.7-12.8-13-20.7-30.4-20.7-50 0-19.5 8-37 20.7-49.8 12.8-12.8 30.3-20.7 49.8-20.7h180.4c60.7 0 109.8-49 109.8-109.6C400 49 351 0 290.2 0c-60.7 0-109.8 49.2-109.8 110V148h39V110c.2-19.6 8-37 21-50 12.8-12.8 30.2-20.6 49.8-20.6 19.5 0 37 7.8 50 20.6 12.6 13 20.5 30.4 20.5 50 0 19.5-8 37-20.7 49.8-12.8 12.8-30.3 20.3-49.8 20.4H109.8z"]},faStrava:{prefix:"fac",iconName:"strava",icon:[24,24,[],"e003","M15.4 17.94l-2.1-4.1h-3.07L15.4 24l5.14-10.17h-3.07m-7-5.6l2.83 5.6h4.17L10.47 0l-7 13.83h4.16"]}};g.a.autoAddCss=!1,g.c.add(E.a,v.a,z),console.log("If you're looking at the console for my site, either something's broken or you're interested in learning how it was built. For the former, log an issue at https://github.com/ajlende/ajlende.github.io/issues. For the later, check out the source code which I've made available at https://github.com/ajlende/ajlende.github.io.");var k=function(e){var a=e.children,t=e.location;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null,l.a.createElement("html",{lang:"en"}),l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),l.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),l.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),l.a.createElement("link",{rel:"manifest",href:"/favicons/manifest.json"}),l.a.createElement("meta",{name:"apple-mobile-web-app-title",content:"Alex Lende"}),l.a.createElement("meta",{name:"application-name",content:"Alex Lende"}),l.a.createElement("meta",{name:"theme-color",content:"#073746"}),l.a.createElement("title",null,"Alex Lende"),l.a.createElement("meta",{name:"p:domain_verify",content:"b94c9d9f144c41daa7b4aac64aeef4b6"})),l.a.createElement(f,{location:t}),l.a.createElement("main",null,a),l.a.createElement(b,null))};k.propTypes={location:r.a.object,children:r.a.node};a.a=k}}]);
//# sourceMappingURL=component---src-templates-post-jsx-33425edf955dc88cd122.js.map