(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],u=0,m=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var p=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Navbar"),a("v-main",[a("router-view")],1),a("Footer")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",[t.$vuetify.breakpoint.smAndDown?a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}):t._e(),a("v-toolbar-title",[t._v("Ravi K")]),a("v-spacer"),t.$vuetify.breakpoint.mdAndUp?a("v-toolbar-items",[a("v-btn",{attrs:{to:"/",link:"",text:""}},[t._v("Home")]),a("v-btn",{attrs:{to:"blog",link:"",text:""}},[t._v("Blog")]),a("v-btn",{attrs:{to:"about",link:"",text:""}},[t._v("About")]),a("v-btn",{attrs:{to:"projects",link:"",text:""}},[t._v("Projects")]),a("v-btn",{attrs:{href:"https://github.com/ravikalyane/files/raw/master/resume/resume.pdf",link:"",text:""}},[t._v("Resume")]),a("v-btn",{attrs:{to:"contact",link:"",text:""}},[t._v("Contact")])],1):t._e()],1),a("v-navigation-drawer",{attrs:{absolute:"",temporary:"",left:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{to:e.link,link:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:""}},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[t._v(t._s(e.title))])],1)})),1)],1)],1)},s=[],l={data:function(){return{drawer:!1,items:[{title:"Home",link:"/",icon:"mdi-home"},{title:"Blog",link:"blog",icon:"mdi-home"},{title:"About",link:"about",icon:"mdi-home"},{title:"Projects",link:"projects",icon:"mdi-home"},{title:"Contact",link:"contact",icon:"mdi-home"}]}}},c=l,p=a("2877"),u=a("6544"),m=a.n(u),v=a("40dc"),f=a("5bc1"),d=a("8336"),b=a("132d"),h=a("8860"),g=a("da13"),k=a("5d23"),_=a("34c3"),y=a("f774"),w=a("2fa4"),C=a("2a7f"),j=Object(p["a"])(c,i,s,!1,null,null,null),V=j.exports;m()(j,{VAppBar:v["a"],VAppBarNavIcon:f["a"],VBtn:d["a"],VIcon:b["a"],VList:h["a"],VListItem:g["a"],VListItemContent:k["a"],VListItemIcon:_["a"],VNavigationDrawer:y["a"],VSpacer:w["a"],VToolbarItems:C["a"],VToolbarTitle:C["b"]});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"py-4"},[a("v-btn",{attrs:{fab:"",text:"",small:"",link:"",href:"https://www.instagram.com/ravikalyane"}},[a("v-icon",[t._v("fab fa-instagram")])],1),a("v-btn",{attrs:{fab:"",text:"",small:"",link:"",href:"https://twitter.com/raviikalyane"}},[a("v-icon",[t._v("fab fa-twitter")])],1),a("v-btn",{attrs:{fab:"",text:"",small:"",link:"",href:"https://github.com/ravikalyane"}},[a("v-icon",[t._v("fab fa-github")])],1),a("v-spacer"),a("div",[t._v(" ©"+t._s((new Date).getFullYear())+" - "),a("span",{staticClass:"font-weight-medium"},[t._v("Ravi Kalyane")])])],1)},I=[],S=a("553a"),A={},L=Object(p["a"])(A,x,I,!1,null,null,null),D=L.exports;m()(L,{VBtn:d["a"],VFooter:S["a"],VIcon:b["a"],VSpacer:w["a"]});var P={components:{Navbar:V,Footer:D}},R=P,M=a("7496"),O=a("f6c4"),T=Object(p["a"])(R,o,r,!1,null,null,null),B=T.exports;m()(T,{VApp:M["a"],VMain:O["a"]});var E=a("8c4f"),W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mt-16 d-flex flex-column justify-center align-start"},[a("h1",{staticClass:"px-16 mt-16 font-weight-regular"},[t._v("Hello! I'm Ravi")]),a("h1",{staticClass:"px-16 mt-4 font-weight-regular"},[t._v("I make WebApps and Websites")]),a("div",{staticClass:"mt-8 px-16"},[a("v-btn",{staticClass:"mr-2",attrs:{outlined:"",color:"primary",to:"contact"}},[t._v("Start a Project")]),a("v-btn",{attrs:{outlined:"",color:"primary",to:"projects"}},[t._v("Portfolio")])],1)])},N=[],$={},H=$,F=a("a523"),U=Object(p["a"])(H,W,N,!1,null,"161a6cc0",null),K=U.exports;m()(U,{VBtn:d["a"],VContainer:F["a"]});var J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("Blogs are coming soon...")])},Q=[],X={},q=X,Y=Object(p["a"])(q,J,Q,!1,null,"2995fe9f",null),z=Y.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h1",{staticClass:"display-2 text-center ma-10 font-weight-normal"},[t._v("About me")]),a("v-row",{staticClass:"d-flex justify-center"},[a("v-col",{staticClass:"d-flex justify-center align-start",attrs:{cols:"12",width:"220",height:"220",sm:"12",md:"3"}},[a("v-card",{attrs:{elevation:0,width:"200"}},[a("v-img",{staticClass:"rounded-circle",attrs:{width:"200px",src:"https://lh3.googleusercontent.com/pw/ACtC-3fUzFmT1BerpMojOXMoaI3cX5xXjNIRUemQsKRqy7LXSP9UruENQ4hwXvm-jA5-A_Cz04byQfBmMMHpwBBVQqRByy5a2ZCbSkKyEW3jbKwQ2ATwSNnETnoR6AVMAfukIZieHkWHvRCfIrR2cmCFV7Y-5w=s657-no?authuser=0"}}),t.$vuetify.breakpoint.smAndUp?a("div",{staticClass:"d-flex flex-column justify-center align-center"},[a("v-card-subtitle",{staticClass:"mt-3"},[t._v("Web Developer")]),a("v-card-subtitle",{staticClass:"mt-n6"},[t._v("Mumbai")]),a("v-card-subtitle",{staticClass:"mt-n6"},[t._v("contact@ravikalyane.com")])],1):t._e()],1)],1),a("v-col",{staticClass:"px-10",attrs:{cols:"12",sm:"12",md:"6"}},[a("p",[t._v("I'm Ravi, Mumbai based Web developer.")]),a("p",[t._v("I make responsive Web apps, CMS and websites using latest technologies like Djagno, Vue.")]),a("p",[t._v(" I'm a self-taught full-stack developer. Currently I'm pursuing the oppurtunity to begin my career in web development. I am fast learner and I keep myself updated with latest technologies. ")]),a("p",[t._v("I have 7 months hands on experience of Django, Python, HTML, CSS, Javascript, Vue.")]),a("p",[t._v("My Recent projects are a todo app using Django + Vue + DjangoRestFramework, Blogsite, Instagram Clone, Note taking app and many other small projects.")]),a("p",[t._v("Aside from building these small projects I would love to enter a position where I can be a part of a bigger team and learn from other with more experience than myself.")])])],1)],1)},G=[],tt={},et=tt,at=(a("e76e"),a("b0af")),nt=a("99d9"),ot=a("62ad"),rt=a("adda"),it=a("0fd9"),st=Object(p["a"])(et,Z,G,!1,null,null,null),lt=st.exports;m()(st,{VCard:at["a"],VCardSubtitle:nt["b"],VCol:ot["a"],VContainer:F["a"],VImg:rt["a"],VRow:it["a"]});var ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h1",{staticClass:"display-2 text-center ma-10 font-weight-normal"},[t._v("Projects")]),a("v-row",{attrs:{"no-gutters":""}},t._l(t.projects,(function(e){return a("v-col",{key:e.title,staticClass:"my-1",attrs:{cols:"12",sm:"12",md:"6",lg:"4"}},[a("v-card",{staticClass:"fill-height",attrs:{tile:"",outlined:"",elevation:0}},[a("v-img",{attrs:{src:e.image}}),a("v-card-title",[t._v(t._s(e.title))]),a("v-card-subtitle",[t._v(t._s(e.about))]),a("v-card-actions",[a("v-btn",{attrs:{disabled:"",text:"",depressed:"",fab:"",small:"",href:e.githubLink,link:""}},[a("v-icon",[t._v("fab fa-github")])],1),a("v-btn",{attrs:{text:"",depressed:"",fab:"",small:"",href:e.projectLink,link:""}},[a("v-icon",[t._v("mdi-link")])],1)],1)],1)],1)})),1)],1)},pt=[],ut={data:function(){return{projects:[{title:"Portfolio Website | August 2020",about:"Developed this website using Vue and Vuetify. Hosted on Netlify",projectLink:"https://ravikalyane.com/",githubLink:"",image:"https://raw.githubusercontent.com/ravikalyane/files/master/images/portfolio.jpg"},{title:"Learn CSS | August 2020",about:"Created an interactive  CSS learning App using Vue. User can apply different CSS properties to elements in realtime.",projectLink:"https://rklearncss.netlify.app/",githubLink:"",image:"https://raw.githubusercontent.com/ravikalyane/files/master/images/learn_css.jpg"},{title:"Todo App | August 2020",about:"Developed a Todo App with CRUD functionality using Django, Django RestFrameWork and Vue. Integrated the frontend and backend using Axios and REST API",projectLink:"https://djangovuetodo.herokuapp.com/",githubLink:"",image:"https://raw.githubusercontent.com/ravikalyane/files/master/images/todo-django-vue.jpg"},{title:"Photogram | June 2020",about:"Developed a Photo Sharing app like Instagram using Django in Backend, HTML, CSS in frontend hosted on Heroku and AWS. User can crop and upload photos, comment and like other users photos",projectLink:"http://rk-photogram.herokuapp.com/",githubLink:"",image:"https://raw.githubusercontent.com/ravikalyane/files/master/images/photogram.jpg"},{title:"Blog Website | May 2020",about:"Developed a CMS blogsite with text editor for creating and editing blogs with images and category options",projectLink:"http://ravik-newblog.herokuapp.com/",githubLink:"",image:"https://raw.githubusercontent.com/ravikalyane/files/master/images/blog.jpg"},{title:"Notes App | April 2020",about:"Developed a todo app and a note taking app with Django in backend with authentication system and CRUD functionality",projectLink:"",githubLink:"",image:"https://raw.githubusercontent.com/ravikalyane/files/master/images/notes.jpg"},{title:"Portfolio Website | ",about:"Designed a clean Portfolio Website using HTML, CSS and Javascript.",projectLink:"https://ravikalyane.github.io/",githubLink:"",image:"https://raw.githubusercontent.com/ravikalyane/files/master/images/html_css_porfolio.jpg"},{title:"To-do | April 2020",about:"Developed a todo app and a note taking app with Django in backend with authentication system and CRUD functionality",projectLink:"",githubLink:"",image:"https://raw.githubusercontent.com/ravikalyane/files/master/images/todo_django.jpg"}]}}},mt=ut,vt=(a("ef6f"),Object(p["a"])(mt,ct,pt,!1,null,"19e4851e",null)),ft=vt.exports;m()(vt,{VBtn:d["a"],VCard:at["a"],VCardActions:nt["a"],VCardSubtitle:nt["b"],VCardTitle:nt["c"],VCol:ot["a"],VContainer:F["a"],VIcon:b["a"],VImg:rt["a"],VRow:it["a"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h1",{staticClass:"display-2 text-center ma-10 font-weight-normal"},[t._v("Contact")]),a("v-row",[a("v-col",{attrs:{"fill-height":"",cols:"12",sm:"12",md:"4","offset-md":"1"}},[a("v-card",{staticClass:"fill-height pa-5",attrs:{elevation:1}},[a("h2",{staticClass:"pl-10 display-1 mb-10"},[t._v("Get in touch")]),a("v-row",{staticClass:"pl-10"},[a("v-col",{attrs:{cols:"1"}},[a("v-icon",{attrs:{small:""}},[t._v("fas fa-user-alt")])],1),a("v-col",{attrs:{cols:"11"}},[t._v("Ravi Kalyane")])],1),a("v-row",{staticClass:"pl-10"},[a("v-col",{attrs:{cols:"1"}},[a("v-icon",{attrs:{small:""}},[t._v("fas fa-code")])],1),a("v-col",[t._v("Web Developer")])],1),a("v-row",{staticClass:"pl-10"},[a("v-col",{attrs:{cols:"1"}},[a("v-icon",{attrs:{small:""}},[t._v("fas fa-map-pin")])],1),a("v-col",{attrs:{cols:"11"}},[t._v("Mumbai")])],1),a("v-row",{staticClass:"pl-10"},[a("v-col",{attrs:{cols:"1"}},[a("v-icon",{staticClass:"rotate",attrs:{small:""}},[t._v("fas fa-phone")])],1),a("v-col",{attrs:{cols:"11"}},[t._v("+91 8291802846")])],1),a("v-row",{staticClass:"pl-10"},[a("v-col",{attrs:{cols:"1"}},[a("v-icon",{attrs:{small:""}},[t._v("fas fa-envelope")])],1),a("v-col",{attrs:{cols:"11"}},[t._v("contact@ravikalyane.com")])],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[a("v-card",{staticClass:"pa-5",attrs:{elevation:1}},[a("h2",{staticClass:"display-1 mb-10"},[t._v("Drop a message")]),a("form",{attrs:{action:"https://formspree.io/mknqjokl",method:"POST"}},[a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control",attrs:{type:"text",name:"Name",placeholder:"Name"}})]),a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control",attrs:{type:"email",name:"Email",id:"exampleFormControlInput1",placeholder:"Email address"}})]),a("div",{staticClass:"form-group"},[a("textarea",{staticClass:"form-control",attrs:{name:"Message",id:"exampleFormControlTextarea1",rows:"3",placeholder:"Your message"}})]),a("button",{staticClass:"btn btn-primary btn-block"},[t._v("Send")])])])],1)],1)],1)},bt=[],ht=(a("b0c0"),{data:function(){return{name:"",email:"",message:""}},methods:{reset:function(){this.name="",this.email="",this.message=""}}}),gt=ht,kt=(a("ebbb"),Object(p["a"])(gt,dt,bt,!1,null,"2a0a3546",null)),_t=kt.exports;m()(kt,{VCard:at["a"],VCol:ot["a"],VContainer:F["a"],VIcon:b["a"],VRow:it["a"]}),n["a"].use(E["a"]);var yt=[{path:"/",name:"home",component:K},{path:"/blog",name:"blog",component:z},{path:"/about",name:"about",component:lt},{path:"/projects",name:"projects",component:ft},{path:"/contact",name:"contact",component:_t}],wt=new E["a"]({mode:"history",base:"/",routes:yt}),Ct=wt,jt=a("f309");n["a"].use(jt["a"]);var Vt=new jt["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Ct,vuetify:Vt,render:function(t){return t(B)}}).$mount("#app")},5994:function(t,e,a){},"75af":function(t,e,a){},"91aa":function(t,e,a){},e76e:function(t,e,a){"use strict";var n=a("91aa"),o=a.n(n);o.a},ebbb:function(t,e,a){"use strict";var n=a("75af"),o=a.n(n);o.a},ef6f:function(t,e,a){"use strict";var n=a("5994"),o=a.n(n);o.a}});
//# sourceMappingURL=app.95e1651c.js.map