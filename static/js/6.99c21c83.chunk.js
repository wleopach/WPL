(window["webpackJsonplaguna-ai"]=window["webpackJsonplaguna-ai"]||[]).push([[6],{189:function(e,a,t){},190:function(e,a,t){e.exports=t.p+"static/media/logo.07c9babb.png"},394:function(e,a,t){"use strict";t.r(a);var n=t(11),l=t(12),s=t(16),c=t(14),i=t(13),r=t(0),o=t.n(r),m=t(157),d=t(129),u=(t(189),t(128)),v=t.n(u),p=t(8),E=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).props=e,l.scrollTargetIds=l.props.scrollTargetIds,l.activeNavClass=l.props.activeNavClass,l.scrollDuration=Number(l.props.scrollDuration)||1e3,l.headerBackground="true"===l.props.headerBackground,l.props.router&&"HashRouter"===l.props.router?(l.homeDefaultLink="#/",l.hashIdentifier="#/#"):(l.homeDefaultLink="/",l.hashIdentifier="#"),l}return Object(l.a)(t,[{key:"easeInOutQuad",value:function(e,a,t,n){return(e/=n/2)<1?t/2*e*e+a:-t/2*(--e*(e-2)-1)+a}},{key:"scrollTo",value:function(e,a,t){var n=this,l=a-e,s=0;!function a(){s+=10;var c=n.easeInOutQuad(s,e,l,t);window.scrollTo(0,c),s<t&&setTimeout(a,10)}()}},{key:"getNavLinkElement",value:function(e){return document.querySelector("a[href='".concat(this.hashIdentifier).concat(e,"']"))}},{key:"getNavToSectionID",value:function(e){return e.includes(this.hashIdentifier)?e.replace(this.hashIdentifier,""):""}},{key:"componentDidMount",value:function(){var e=this;document.querySelector("a[href='".concat(this.homeDefaultLink,"']"))&&document.querySelector("a[href='".concat(this.homeDefaultLink,"']")).addEventListener("click",(function(a){a.preventDefault(),e.scrollTo(window.pageYOffset,0,e.scrollDuration),window.location.hash=""})),document.querySelector("div[data-nav='list']").querySelectorAll("a").forEach((function(a){a.addEventListener("click",(function(t){t.preventDefault();var n=e.getNavToSectionID(a.getAttribute("href"));if(n){var l=document.getElementById(n).offsetTop-(e.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0);e.scrollTo(window.pageYOffset,l,e.scrollDuration)}else e.scrollTo(window.pageYOffset,0,e.scrollDuration)}))})),window.addEventListener("scroll",(function(){var a;e.scrollTargetIds.map((function(t,n){a=document.getElementById(t).offsetTop-(e.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0),window.pageYOffset>=a&&window.pageYOffset<a+document.getElementById(t).scrollHeight?(e.getNavLinkElement(t).classList.add(e.activeNavClass),e.getNavLinkElement(t).parentNode.classList.add(e.activeNavClass),e.clearOtherNavLinkActiveStyle(t)):(e.getNavLinkElement(t).classList.remove(e.activeNavClass),e.getNavLinkElement(t).parentNode.classList.remove(e.activeNavClass)),window.innerHeight+window.pageYOffset>=document.body.scrollHeight&&n===e.scrollTargetIds.length-1&&(e.getNavLinkElement(t).classList.add(e.activeNavClass),e.getNavLinkElement(t).parentNode.classList.add(e.activeNavClass),e.clearOtherNavLinkActiveStyle(t))}))}))}},{key:"clearOtherNavLinkActiveStyle",value:function(e){var a=this;this.scrollTargetIds.map((function(t,n){t!==e&&(a.getNavLinkElement(t).classList.remove(a.activeNavClass),a.getNavLinkElement(t).parentNode.classList.remove(a.activeNavClass))}))}},{key:"render",value:function(){return o.a.createElement("div",{"data-nav":"list",className:this.props.className},this.props.children)}}]),t}(r.Component),N=t(190),g=t.n(N),f=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).toggleMenu=function(){l.setState({isOpen:!l.state.isOpen})},l.setActiveTab=function(e,a){l.setState({Tab:e})},l.state={Tab:"",isOpen:!1},l.toggleMenu=l.toggleMenu.bind(Object(s.a)(l)),l}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"is-sticky"},o.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-custom sticky",id:"nav-bar"},o.a.createElement("div",{className:"container"},o.a.createElement(p.b,{className:"navbar-brand logo text-uppercase",to:"/"},o.a.createElement("img",{id:"logo",src:g.a,alt:"Logo",width:"100%",height:"50px"})," "),o.a.createElement("button",{className:"navbar-toggler",onClick:this.toggleMenu,type:"button"},o.a.createElement("i",{className:"mdi mdi-menu"})),o.a.createElement("div",{className:this.state.isOpen?"collapse navbar-collapse show":"collapse navbar-collapse",style:{display:this.state.isOpen?"inline-grid":""},id:"navbarCollapse"},o.a.createElement(E,{scrollTargetIds:["home","services","about","contact"],activeNavClass:"active",scrollDuration:"400",headerBackground:"true",className:this.state.isOpen?"navbar-nav ml-0 float-left":"navbar-nav navbar-center"},o.a.createElement("ul",{className:this.state.isOpen?"navbar-nav navbar-left":"navbar-nav ml-auto navbar-left",id:"mySidenav"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement("a",{style:{fontSize:"18px"},href:"#home",className:"nav-link"},"Inicio")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{style:{fontSize:"18px"},href:"#services",className:"nav-link"},"Servicios")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{style:{fontSize:"18px"},href:"#about",className:"nav-link"},"Acerca de nosotros")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{style:{fontSize:"18px"},href:"#contact",className:"nav-link"},"Contacto")," "))))))))}}]),t}(r.Component),b=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={},l}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"footer-alt"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"float-left pull-none"},o.a.createElement("p",{className:"copy-rights text-muted mb-3 mb-sm-0"},(new Date).getFullYear()," - Laguna-ai"),o.a.createElement("p",{style:{display:"none"},className:"copy-rights text-muted mb-3 mb-sm-0"},(new Date).getFullYear()," \xa9 Hiric - Themesbrand")),o.a.createElement("div",{className:"float-right pull-none "},o.a.createElement("ul",{className:"list-inline social m-0"},o.a.createElement("li",{className:"list-inline-item"},o.a.createElement(p.b,{to:{pathname:"https://www.facebook.com/Laguna-ai-106208701804570"},className:"social-icon",target:"_blank"},o.a.createElement("i",{style:{color:"#FFFFFF"},className:"mdi mdi-facebook"}))),o.a.createElement("li",{className:"list-inline-item"},o.a.createElement(p.b,{to:{pathname:"https://twitter.com/Laguna_ai"},className:"social-icon",target:"_blank"},o.a.createElement("i",{style:{color:"#FFFFFF"},className:"mdi mdi-twitter"}))),o.a.createElement("li",{className:"list-inline-item"},o.a.createElement(p.b,{to:{pathname:"https://www.linkedin.com/company/laguna-ai/"},className:"social-icon",target:"_blank"},o.a.createElement("i",{style:{color:"#FFFFFF"},className:"mdi mdi-linkedin"}))),o.a.createElement("li",{className:"list-inline-item"},o.a.createElement(p.b,{to:{pathname:"https://www.instagram.com/laguna.ai/"},className:"social-icon",target:"_blank"},o.a.createElement("i",{style:{color:"#FFFFFF"},className:"mdi mdi-instagram"}))))),o.a.createElement("div",{className:"clearfix"}))))))}}]),t}(r.Component),h=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={},l}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"section bg-light",id:"services"},o.a.createElement("div",{className:"container"},o.a.createElement("div",null,o.a.createElement(d.a,{lg:"8",className:"offset-lg-2"},o.a.createElement("h1",{className:"section-title text-center"},"Nuestros Servicios"),o.a.createElement("div",{className:"section-title-border margin-t-20"}))),o.a.createElement("div",{className:"row margin-t-30"},o.a.createElement(d.a,{lg:"4",className:"margin-t-20"},o.a.createElement("div",{className:"services-box"},o.a.createElement("div",{className:"media"},o.a.createElement("i",{className:"pe-7s-chat text-custom"}),o.a.createElement("div",{className:"media-body ml-4"},o.a.createElement("h4",null,"Chatbots inteligentes"),o.a.createElement("p",{className:"pt-2 text-muted"},"Asistentes conversacionales capaces de atender las necesidades de tus clientes 24/7"))))),o.a.createElement(d.a,{lg:"4",className:"margin-t-20"},o.a.createElement("div",{className:"services-box"},o.a.createElement("div",{className:"media"},o.a.createElement("i",{className:"pe-7s-like2 text-custom"}),o.a.createElement("div",{className:"media-body ml-4"},o.a.createElement("h4",null,"Clasificaci\xf3n de textos"),o.a.createElement("p",{className:"pt-2 text-muted"},"Clasificaci\xf3n de datos no estructurados. An\xe1lisis de sentimientos y clasificaci\xf3n de PQR. Te ayudamos a entender como se relacionan tus clientes con tu producto."))))),o.a.createElement(d.a,{lg:"4",className:"margin-t-20"},o.a.createElement("div",{className:"services-box"},o.a.createElement("div",{className:"media"},o.a.createElement("i",{className:"pe-7s-note2 text-custom"}),o.a.createElement("div",{className:"media-body ml-4"},o.a.createElement("h4",null,"Sumarizaci\xf3n autom\xe1tica"),o.a.createElement("p",{className:"pt-2 text-muted"},"Algoritmos para la extracci\xf3n y estructuraci\xf3n de informaci\xf3n relevante en textos. Disminuye el tiempo dedicado al escrutinio del lenguaje.")))))),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement(d.a,{lg:"4",className:"margin-t-20"},o.a.createElement("div",{className:"services-box"},o.a.createElement("div",{className:"media"},o.a.createElement("i",{className:"pe-7s-graph2 text-custom"}),o.a.createElement("div",{className:"media-body ml-4"},o.a.createElement("h4",null,"An\xe1lisis de datos"),o.a.createElement("p",{className:"pt-2 text-muted"},"Exploraci\xf3n y visualizaci\xf3n de datos, an\xe1lisis y modelizaci\xf3n reportados en tableros de control. Extrae valor de la informaci\xf3n de tu empresa."))))),o.a.createElement(d.a,{lg:"4",className:"margin-t-20"},o.a.createElement("div",{className:"services-box"},o.a.createElement("div",{className:"media"},o.a.createElement("i",{className:"pe-7s-tools text-custom"}),o.a.createElement("div",{className:"media-body ml-4"},o.a.createElement("h4",null,"Modelos anal\xedticos"),o.a.createElement("p",{className:"pt-2 text-muted"},"Modelos de regresi\xf3n lineal y log\xedstica, An\xe1lisis de series de tiempo, Redes Neuronales, An\xe1lisis topol\xf3gico de datos")))))))))}}]),t}(r.Component),y=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={},l}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"section",id:"about"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement(d.a,{lg:"8",className:"offset-lg-2"},o.a.createElement("h1",{className:"section-title text-center"},"Acerca de nosotros"),o.a.createElement("div",{className:"section-title-border margin-t-20"}),o.a.createElement("p",{className:"section-subtitle text-center font-secondary padding-t-30"},"Fundamos LAGUNA-AI con el fin de adaptar toda empresa a la cuarta revoluci\xf3n industrial. Pensando en esto, ofrecemos servicios tecnol\xf3gicos y estad\xedsticos. Nos enfocamos en el procesamiento de lenguaje natural, rama de la inteligencia artificial que ayuda a las computadoras a entender, interpretar y manipular el lenguaje humano. Para hacerlo, nuestro equipo cuenta con profesionales en matem\xe1ticas, estad\xedstica y ciencia de datos. ",o.a.createElement("br",null)," ",o.a.createElement("br",null)," Nos gusta prestar servicios \xfatiles y de calidad.")))),o.a.createElement("div",{className:"text-center mt-3"},o.a.createElement(p.c,{to:"/about"},o.a.createElement("button",{type:"button",className:"btn btn-custom navbar-btn btn-rounded waves-effect waves-light"},"\xa1Conoce nuestro equipo!")))))}}]),t}(r.Component),k=t(191),w=t(393),O=t(75),x=t.n(O),F=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){var e;return Object(n.a)(this,t),(e=a.call(this)).handleSubmit=function(a,t,n){e.setState({nonVisible:!1}),w.a.send("service_tjyqkyc","template_xee9czy",n,"user_4ktiAfiGoAzJWwLCblbSL").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))},e.state={nonVisible:!0},e}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"section ",id:"contact"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-8 offset-lg-2"},o.a.createElement("h1",{className:"section-title text-center"},"Cont\xe1ctanos"),o.a.createElement("div",{className:"section-title-border margin-t-20"}),o.a.createElement("p",{className:"section-subtitle text-center font-secondary padding-t-30"},"Queremos ofrecerte nuestros servicios de acuerdo a tus necesidades, cont\xe1ctanos ahora para recibir asesor\xeda. "))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"custom-form mt-4 pt-4"},o.a.createElement("div",{id:"message"}),o.a.createElement(k.AvForm,{id:"contact-form",onSubmit:this.handleSubmit},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"form-group mt-2"},o.a.createElement(k.AvField,{type:"text",name:"names",className:"form-control",placeholder:"Nombre*",required:!0}))),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"form-group mt-2"},o.a.createElement(k.AvField,{type:"email",name:"email",className:"form-control",placeholder:"Correo electr\xf3nico*",required:!0}))),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"form-group mt-2"},o.a.createElement(k.AvField,{type:"text",name:"enterprise",className:"form-control",placeholder:"Empresa*",required:!0})))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"form-group mt-2"},o.a.createElement(k.AvField,{type:"text",name:"subject",className:"form-control",placeholder:"Asunto*",required:!0})))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"form-group mt-2"},o.a.createElement(x.a,{type:"textarea",name:"comments",id:"comments",rows:"4",className:"form-control",placeholder:"Tu mensaje..."})))),o.a.createElement("p",{hidden:this.state.nonVisible,className:"section-subtitle text-center font-secondary padding-t-30"},"\xa1Mensaje enviado!"),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12 text-right"},o.a.createElement("input",{type:"submit",id:"submit",name:"send",className:"submitBnt btn btn-custom",value:"Enviar Mensaje"}),o.a.createElement("div",{id:"simple-msg"}))))))))))}}]),t}(r.Component),j=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?(document.getElementById("nav-bar").classList.add("sticky-dark"),document.getElementById("is-sticky").classList.add("is-sticky")):(document.getElementById("nav-bar").classList.remove("sticky-dark"),document.getElementById("is-sticky").classList.remove("is-sticky"))},l.state={isOpen:!1},l.openModal=l.openModal.bind(Object(s.a)(l)),l}return Object(l.a)(t,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"componentDidMount",value:function(){document.body.classList="",window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f,null),o.a.createElement("section",{className:"section bg-home height-100vh",id:"home"},o.a.createElement("div",{className:"bg-overlay"}),o.a.createElement("div",{className:""},o.a.createElement("div",{className:""},o.a.createElement("div",{className:"container slidero"},o.a.createElement(m.a,null,o.a.createElement(d.a,{lg:"8",className:"offset-lg-2 text-white text-center"},o.a.createElement("h4",{className:"home-small-title"},"An\xe1lisis de datos"),o.a.createElement("h1",{className:"home-title"},"Especializados en procesamiento del lenguaje natural"),o.a.createElement("p",{style:{color:"#FFFFFF"},className:"padding-t-15 home-desc mx-auto"},"Ofrecemos servicios tecnol\xf3gicos y estad\xedsticos. Nos enfocamos en el procesamiento de lenguaje natural, rama de la inteligencia artificial que ayuda a las computadoras a entender, interpretar y manipular el lenguaje humano.")))))),o.a.createElement(v.a,{style:{position:"absolute"},params:{particles:{number:{value:200,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},opacity:{value:0,random:!0,anim:{enable:!0,speed:1,opacity_min:1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:4,direction:"none",random:!1,straight:!1,out_mode:"bounce",bounce:!0,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:.5},repulse:{distance:80,duration:.5},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}})),o.a.createElement(h,null),o.a.createElement(y,null),o.a.createElement(F,null),o.a.createElement(b,null))}}]),t}(r.Component);a.default=j}}]);
//# sourceMappingURL=6.99c21c83.chunk.js.map