(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{153:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(160),i=t.n(o),l=t(158),s=t(161),c=t(159),m=t(183),d=t(169),u=t.n(d),p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Title,null,"Professional"),r.a.createElement(l.Level,{isMobile:!0},r.a.createElement(l.LevelItem,{href:"mailto:ajlende@gmail.com",title:"Email"},r.a.createElement(c.a,{faProps:{icon:"envelope",size:"3x"},isSize:"large"})),m.basics.profiles.filter(function(e){return"professional"===e.category}).map(function(e){var a=e.icon,t=e.url,n=e.network;return r.a.createElement(l.LevelItem,{href:t,title:n,key:n},r.a.createElement(c.a,{faProps:{icon:a,size:"3x"},isSize:"large"}))})))},h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Title,null,"Personal"),function e(a,t){var n=a.slice(0,t);return n.length?[n].concat(e(a.slice(t,a.length),t)):a}(m.basics.profiles.filter(function(e){return"personal"===e.category}),4).map(function(e,a){return r.a.createElement(l.Level,{isMobile:!0,key:"personal-"+a},e.map(function(e){var a=e.icon,t=e.url,n=e.network;return r.a.createElement(l.LevelItem,{href:t,title:n,key:n},r.a.createElement(c.a,{faProps:{icon:a,size:"3x"},isSize:"large"}))}))}))},g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Title,null,"Say Hi"),r.a.createElement(l.Content,null,r.a.createElement("p",null,"Here is a nearly exhaustive list of all the places that you can add/",r.a.createElement("wbr",null),"follow/",r.a.createElement("wbr",null),"friend/",r.a.createElement("wbr",null),"connect with me if you so desire. Social media is exhausting, and I try to focus my time on more productive things, so I don't spend much time on it. That being said, I'll also probably get an email notification if I get a DM on any of these, so still feel free to connect with me on any of them."),r.a.createElement("p",null,"Despite not spending much time on social media, I still check my email regularly if you really want to get in touch with me."," ",r.a.createElement("span",{role:"img","aria-label":"Victory Hand"},"✌️")),r.a.createElement("p",null,"For anything not linked to here—including various Slack groups I'm a part of—look for @ajlende.")))};a.default=function(e){var a=e.location;return r.a.createElement(s.a,{location:a},r.a.createElement(i.a,null,r.a.createElement("title",null,"Contact – Alex Lende")),r.a.createElement(l.Hero,{isColor:"success",isBold:!0,className:u.a.angled},r.a.createElement(l.HeroBody,null,r.a.createElement(l.Container,{hasTextAlign:"centered"},r.a.createElement(l.Title,{className:u.a.title},"Contact")))),r.a.createElement(l.Hero,{isSize:"medium"},r.a.createElement(l.HeroBody,null,r.a.createElement(l.Container,null,r.a.createElement(l.Columns,{isCentered:!0},r.a.createElement(l.Column,{isSize:4},r.a.createElement(p,null),r.a.createElement(h,null)),r.a.createElement(l.Column,{isOffset:1,isSize:4},r.a.createElement(g,null)))))))}},159:function(e,a,t){"use strict";t(24);var n=t(71),r=t.n(n),o=t(0),i=t.n(o),l=t(3),s=t.n(l),c=t(165),m=t(163),d=t.n(m),u={border:s.a.bool,className:s.a.string,mask:s.a.oneOfType([s.a.object,s.a.array,s.a.string]),fixedWidth:s.a.bool,inverse:s.a.bool,flip:s.a.oneOf(["horizontal","vertical","both"]),icon:s.a.oneOfType([s.a.object,s.a.array,s.a.string]),listItem:s.a.bool,pull:s.a.oneOf(["right","left"]),pulse:s.a.bool,rotation:s.a.oneOf([90,180,270]),size:s.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:s.a.bool,symbol:s.a.oneOfType([s.a.bool,s.a.string]),title:s.a.string,transform:s.a.oneOfType([s.a.string,s.a.object])},p={isAlign:s.a.oneOf(["left","right"]),isSize:s.a.oneOf(["large","medium","small"]),faProps:s.a.shape(u)},h={isAlign:null,isSize:null,faProps:{border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null}},g=function(e){var a,t=e.isAlign,n=e.isSize,o=e.faProps,l=r()(e,["isAlign","isSize","faProps"]),s=d()(((a={icon:!0})["is-"+t]=!!t,a["is-"+n]=!!n,a));return i.a.createElement("span",Object.assign({},l,{className:s}),i.a.createElement(c.a,o))};g.propTypes=p,g.defaultProps=h,a.a=g},161:function(e,a,t){"use strict";t(164);var n=t(0),r=t.n(n),o=t(3),i=t.n(o),l=t(160),s=t.n(l),c=t(52),m=t(158),d=t(159),u={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},p=function(e){var a=e.to,t=e.location,n=e.children;return r.a.createElement(m.NavbarItem,{tag:c.Link,to:a,isActive:t.pathname===a},n)},h=function(e){var a=e.location,t=Object(n.useState)(!1),o=t[0],i=t[1],l=Object(n.useCallback)(function(){i(function(e){return!e})},[]);return r.a.createElement(m.Navbar,{"aria-label":"main navigation"},r.a.createElement(m.Container,null,r.a.createElement(m.NavbarBrand,null,r.a.createElement(p,{to:"/",location:a},r.a.createElement("strong",null,"Alex Lende")),r.a.createElement(m.NavbarItem,{"aria-label":"GitHub",href:"https://github.com/ajlende",isHidden:"desktop"},r.a.createElement(d.a,{faProps:{icon:["fab","github"],size:"lg"},isSize:"medium"})),r.a.createElement(m.NavbarItem,{"aria-label":"LinkedIn",href:"https://linkedin.com/in/ajlende",isHidden:"desktop"},r.a.createElement(d.a,{faProps:{icon:["fab","linkedin"],size:"lg"},isSize:"medium"})),r.a.createElement(m.NavbarItem,{"aria-label":"AngelList",href:"https://angel.co/ajlende",isHidden:"desktop"},r.a.createElement(d.a,{faProps:{icon:["fab","angellist"],size:"lg"},isSize:"medium"})),r.a.createElement(m.NavbarBurger,{tag:"a",href:"javascript:void(0)",role:"button","aria-label":"menu","aria-expanded":o,isActive:o,onClick:l})),r.a.createElement(m.NavbarMenu,{isActive:o,onClick:l},r.a.createElement(m.NavbarStart,null,r.a.createElement(p,{to:"/projects",location:a},"Projects"),r.a.createElement(p,{to:"/blog",location:a},"Blog"),r.a.createElement(p,{to:"/contact",location:a},"Contact")),r.a.createElement(m.NavbarEnd,null,r.a.createElement(m.NavbarItem,{"aria-label":"GitHub",href:"https://github.com/ajlende",isHidden:"touch"},r.a.createElement(d.a,{faProps:{icon:["fab","github"],size:"lg"},isSize:"medium"})),r.a.createElement(m.NavbarItem,{"aria-label":"LinkedIn",href:"https://linkedin.com/in/ajlende",isHidden:"touch"},r.a.createElement(d.a,{faProps:{icon:["fab","linkedin"],size:"lg"},isSize:"medium"})),r.a.createElement(m.NavbarItem,{"aria-label":"AngelList",href:"https://angel.co/ajlende",isHidden:"touch"},r.a.createElement(d.a,{faProps:{icon:["fab","angellist"],size:"lg"},isSize:"medium"}))))))};h.propTypes=u;var g=h,f=function(){return r.a.createElement(m.Footer,null,r.a.createElement(m.Container,null,r.a.createElement(m.Content,{isSize:"small"},r.a.createElement("p",null,"Contents of this site are © Copyright 2017-2019 Alex Lende. All rights reserved."),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/ajlende/ajlende.github.io/tree/develop"},"Source code")," is"," ","available under the"," ",r.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT license"),"."))))},b=(t(166),t(162)),w=t(167),y=t(168),v={faAjlende:{prefix:"fac",iconName:"ajlende",icon:[1024,879.1,[],"e001","M1024 879L510 0 0 879h78.6l21.5-38c39 25.4 85.5 38 139.5 38 48.7 0 87.4-8 116-24.2 28.8-16.2 50.6-39 65.6-68.3 15-29.3 25-64.7 29.6-106.2 4.7-41.5 7-87.5 7-138v-1.8H563V879h461zM392 542c0 44.4-1.6 84-4.7 118.5-3 34.6-10 63.8-20.6 87.5-10.6 23.7-26 41.7-46.3 53.8C300 814 273 820 239.4 820c-26.8 0-51-3.3-72.5-10.2-15.3-4.8-28.6-10.3-40-16.4l143-252.8h122v1.5zm0-58.5h-89.5L392 329v154.5zM629.4 335L715 483.4h-85.6V335zm0 205.3h117.8l163.3 280h-281v-280zm-172-56.8V216l52-89.5 53.6 93.2v263.7H457.5z"]},fa8tracks:{prefix:"fac",iconName:"8tracks",icon:[400,400,[],"e002","M109.8 180.2C49 180.2 0 229.4 0 290.2 0 350.7 49 400 109.8 400c60.7 0 109.7-49.2 109.7-110v-38.5h-39.2V290c0 19.6-8 37-20.6 50-13 12.8-30.3 20.7-50 20.7-19.4 0-37-8-49.7-20.7-12.8-13-20.7-30.4-20.7-50 0-19.5 8-37 20.7-49.8 12.8-12.8 30.3-20.7 49.8-20.7h180.4c60.7 0 109.8-49 109.8-109.6C400 49 351 0 290.2 0c-60.7 0-109.8 49.2-109.8 110V148h39V110c.2-19.6 8-37 21-50 12.8-12.8 30.2-20.6 49.8-20.6 19.5 0 37 7.8 50 20.6 12.6 13 20.5 30.4 20.5 50 0 19.5-8 37-20.7 49.8-12.8 12.8-30.3 20.3-49.8 20.4H109.8z"]},faStrava:{prefix:"fac",iconName:"strava",icon:[24,24,[],"e003","M15.4 17.94l-2.1-4.1h-3.07L15.4 24l5.14-10.17h-3.07m-7-5.6l2.83 5.6h4.17L10.47 0l-7 13.83h4.16"]}};b.a.autoAddCss=!1,b.c.add(w.a,y.a,v),console.log("If you're looking at the console for my site, either something's broken or you're interested in learning how it was built. For the former, log an issue at https://github.com/ajlende/ajlende.github.io/issues. For the later, check out the source code which I've made available at https://github.com/ajlende/ajlende.github.io.");var k=function(e){var a=e.children,t=e.location;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),r.a.createElement("link",{rel:"manifest",href:"/favicons/manifest.json"}),r.a.createElement("meta",{name:"apple-mobile-web-app-title",content:"Alex Lende"}),r.a.createElement("meta",{name:"application-name",content:"Alex Lende"}),r.a.createElement("meta",{name:"theme-color",content:"#073746"}),r.a.createElement("title",null,"Alex Lende"),r.a.createElement("meta",{name:"p:domain_verify",content:"b94c9d9f144c41daa7b4aac64aeef4b6"})),r.a.createElement(g,{location:t}),r.a.createElement("main",null,a),r.a.createElement(f,null))};k.propTypes={location:i.a.object,children:i.a.node};a.a=k},183:function(e){e.exports={basics:{name:"Alex Lende",label:"Software Engineer",picture:"https://secure.gravatar.com/avatar/248533af8dc20ca21d72c474bd94a56d",email:"ajlende@gmail.com",phone:"+15157089425",website:"https://ajlende.com",location:{address:"4607 Jefferson St\nApt 702N",city:"Kansas City",region:"Missouri",postalCode:"64112",countryCode:"US"},profiles:[{category:"professional",icon:["fab","github"],network:"GitHub",username:"ajlende",url:"https://github.com/ajlende"},{category:"professional",icon:["fab","linkedin"],network:"LinkedIn",username:"ajlende",url:"https://linkedin.com/in/ajlende"},{category:"professional",icon:["fab","angellist"],network:"AngelList",username:"ajlende",url:"https://angel.co/ajlende"},{category:"personal",icon:["fab","facebook"],network:"Facebook",username:"ajlende",url:"https://www.facebook.com/ajlende"},{category:"personal",icon:["fab","snapchat-ghost"],network:"Snapchat",username:"ajlende",url:"https://www.snapchat.com/add/ajlende"},{category:"personal",icon:["fab","twitter"],network:"Twitter",username:"ajlende",url:"https://twitter.com/ajlende"},{category:"personal",icon:["fab","instagram"],network:"Instagram",username:"ajlende",url:"https://www.instagram.com/ajlende/"},{category:"personal",icon:["fab","goodreads"],network:"Goodreads",username:"ajlende",url:"https://www.goodreads.com/ajlende"},{category:"personal",icon:["fab","meetup"],network:"Meetup",username:"ajlende",url:"https://www.meetup.com/members/218214467/"},{category:"personal",icon:["fab","get-pocket"],network:"Pocket",username:"ajlende",url:"https://getpocket.com/@ajlende"},{category:"personal",icon:["fab","medium"],network:"Medium",username:"ajlende",url:"https://medium.com/@ajlende"},{category:"personal",icon:["fab","pinterest"],network:"Pinterest",username:"ajlende",url:"https://www.pinterest.com/ajlende/"},{category:"personal",icon:["fab","reddit"],network:"Reddit",username:"ajlende",url:"https://www.reddit.com/user/ajlende"},{category:"personal",icon:["fab","steam-square"],network:"Steam",username:"ajlende",url:"https://steamcommunity.com/id/ajlende/"},{category:"personal",icon:["fac","strava"],network:"Strava",username:"ajlende",url:"https://www.strava.com/athletes/19753792"},{category:"personal",icon:["fac","8tracks"],network:"8tracks",username:"ajlende",url:"https://8tracks.com/ajlende"},{category:"personal",icon:["fab","lastfm"],network:"Last.fm",username:"lendea",url:"https://www.last.fm/user/lendea"},{category:"personal",icon:["fab","spotify"],network:"Spotify",username:"ajlende",url:"https://open.spotify.com/user/ajlende"},{category:"personal",icon:["fab","soundcloud"],network:"Soundcloud",username:"alex-lende",url:"https://soundcloud.com/alex-lende"}]},work:[{company:"Cerner",position:"Senior Software Engineer",website:"http://cerner.com",startDate:"2016-08-22",summary:"Cerner is the leading U.S. supplier of health care information technology solutions that optimize clinical and financial outcomes.",highlights:["Collaborated on a multidisciplinary and diverse team of engineers, UI/UX designers, and data strategists","Developed an abstract data visualization platform containing 28 unique data stories connecting 11 different live data sources total for internal media wall and website","Proposed and implemented a procedural soundtrack driven by hospital data with four themes that change throughout the day","Led development of a virtual reality demo with which became the first demo of its kind at the 2018 Cerner Health Conference","Designed and prototyped other confidedential projects realated to emerging technologoes, acessibility, and UX","Improved scheduling workflow for Cerner DevCon CFP App"]},{company:"Workiva",position:"Software Developer Intern",website:"http://workiva.com",startDate:"2014-05-12",endDate:"2015-08-21",summary:"Formerly known as WebFilings, Workiva is a leading cloud platform for connected reporting across accounting, finance, audit, and internal controls.",highlights:["Created pixel-perfect components based on wireframes, drawings, and mock-ups","Prototyped workflows for organizing, sharing, and applying document permissions in WDesk","Implemented file search filtering and multi-select for WDesk","Increased unit test coverage to 93%","Followed Agile/Kanban methodologies"]},{company:"AGCO Corporation",position:"IT Intern",website:"http://agco.com",startDate:"2013-05-13",endDate:"2013-08-20",summary:"AGCO is a global leader in the design, manufacture and distribution of agricultural equipment.",highlights:["Wrote Business Requirements Document for new Employee Suggestion System","Researched systems of input of employee suggestions","Collaborated with other teams to improve user experience","Designed user login screens for the AGCO Jackson Operations intranet system and scan gun"]},{company:"Iowa State University Computer Repair Center",position:"Computer Service Technician",website:"https://www.it.iastate.edu/support/computer-repair",startDate:"2013-02-01",endDate:"2013-05-10",summary:"The Computer Repair Center helps Iowa State students, faculty, staff, and departments with a variety of computer hardware problems.",highlights:["Diagnosed and repaired computer hardware and software issues with Apple and Dell computers","Effectively documented symptoms and all steps to resolve the problem"]},{company:"Okoboji Graphics",position:"Design Associate/Computer Service Technician",website:"https://okobojigraphics.com",startDate:"2008-01-01",endDate:"2012-05-10",summary:"",highlights:["Designed/assembled vinyl decals and signs using Adobe Illustrator/Photoshop & FlexiSign","Assisted in website development with Adobe GoLive/Dreamweaver","Utilized an old computer to construct a NAS server","Researched digital signage & installed a signage station with MediaSignage"]}],education:[{institution:"Iowa State University",area:"Software Engineering",studyType:"Bachelor",startDate:"2012-08-20",endDate:"2016-05-07",courses:["Capstone Project: Computer vision algorithm for tracking an object in 3D space with a single Garmin VIRB XE action camera"]}],awards:[{title:"Development Achievement Award Q3 2018",date:"2014-11-01",awarder:"Cerner",summary:"Peer nominated award for quality, innovation, and leadership at Cerner"},{title:"1st Place HackISU Fall 2015",date:"2015-09-18",awarder:"HackISU",summary:"MLH 36-hour Hackaton where we created a small robot that could be programmed through RFID cards and a web interface for teaching kids about programming."}],publications:[{name:"WebGL in Elm",publisher:"Alex Lende",releaseDate:"2017-06-29",website:"https://ajlende.com/elm-webgl-presentation",summary:"Presented at Elm Kansas City Meetup and Cerner WebDev Meetup"},{name:"Geospacial Data Visualizations",publisher:"Alex Lende",releaseDate:"2017-09-14",website:"https://ajlende.com/geospacial-data-talk",summary:"Presented at Cerner DataCon 2017 and Cerner WebDev Meetup"}],skills:[{name:"Programming Languages",keywords:["C#","C/C++","CSS","Dart","Elm","GraphQL","HTML","JavaScript","LESS","PostgreSQL","Python","Ruby","SASS","TypeScript","WebGL/GLSL"]},{name:"Frameworks/Libraries",keywords:["A-Frame","AngularJS","Bootstrap","Cesium.js","Django","Enzyme","Express","Gatsby","JAMStack","JQuery","Jasmine","Java","Jest","Node.js","OpenCV","RXJS","Rails","React Intl","React Router","React Testing Library","React","Selenium","Three.js","Tone.js"]},{name:"Tools",keywords:["Axure","Docker","Dreamweaver","Git","GitHub","HTC Vive","Illustrator","JIRA","Jenkins & Blue Ocean","Photoshop","Postman","Trello","Unity3D","Vim","Webpack"]},{name:"Personal",keywords:["Adaptable","Clear Communicator","Collaboration","Eye for Design","Leader","Practical","Resourceful","Self-Motivated","Strong Work Ethic"]}],languages:[{language:"English",fluency:"Native Speaker"},{language:"Spanish",fluency:"Limited Working Proficiency"}],interests:[{name:"Open Source",keywords:["Hacktoberfest","cerner/terra-core","chriskempson/base16","denysdovhan/spaceship-prompt","elm-community/webgl","kentcdodds/react-testing-library"]},{name:"Travel",keywords:["Boundary Waters Canoe Area Wilderness, USA","Dhamma Giri, India","Longues-su-Mer, France","Quetico Provincial Park, Canada","RAGBRAI Iowa, USA","Tokyo, Japan"]},{name:"Meetups",keywords:["Elm Kansas City","Cerner WebDev","JavaScript KC"]},{name:"Podcasts",keywords:["10% Happier","Elm Town","Flash Forward","Happier with Gretchen Rubin","JavaScript Jabber","Jocko Podcast","Note to Self","Soft Skills Engineering","Stuff You Should Know","Syntax","The Art of Manliness","The Frontside Podcast","The Joe Rogan Experience","The Jordan Harbinger Show","The Minimalists","The School of Greatness","The Unmistakable Creative","Vergecast"]},{name:"Music",keywords:["Ukulele","Acoustic Guitar","Electric Guitar","Trombone","Baritone","Tenor Saxophone","Alto Saxophone","Flute","Piano","Vocals"]}]}}}]);
//# sourceMappingURL=component---src-pages-contact-jsx-8c5bb4010c5abab16187.js.map