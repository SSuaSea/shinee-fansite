(this.webpackJsonpfansite=this.webpackJsonpfansite||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return s}));var n=a(37);const l=Object({NODE_ENV:"production",PUBLIC_URL:"/shinee-fansite",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_CLIENT_ID="1003bec15d984f539d363a0d890fec6b",r=Object({NODE_ENV:"production",PUBLIC_URL:"/shinee-fansite",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_CLIENT_SECRET="75818f40d0ef4c299c77a90734504053",c=e.from("".concat(l,":").concat(r)).toString("base64"),s=async()=>{try{const e=(await n.a.post("https://accounts.spotify.com/api/token","grant_type=client_credentials",{headers:{Authorization:"Basic "+c,"Content-Type":"application/x-www-form-urlencoded"}})).data.access_token;return window.localStorage.setItem("token",e),e}catch(e){return console.error("Error fetching access token:",e),null}}}).call(this,a(12).Buffer)},,function(e,t,a){e.exports=a(36)},,,,,,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),s=(a(24),a(3)),i=a(11);var m=[{id:0,name:"Onew",age:"1989. 12. 14",position:"\ub9ac\ub4dc\ubcf4\uceec",image:"https://github.com/SSuaSea/shinee-fansite/blob/main/onew.jpg?raw=true"},{id:1,name:"JongHyun",age:"1990. 04. 08",position:"\uba54\uc778\ubcf4\uceec",image:"https://github.com/SSuaSea/shinee-fansite/blob/main/jonhyun.jpg?raw=true"},{id:2,name:"Key",age:"1991. 09. 23",position:"\ub9ac\ub4dc\ub798\ud37c",image:"https://github.com/SSuaSea/shinee-fansite/blob/main/key.jpg?raw=true"},{id:3,name:"Minho",age:"1991. 12. 09",position:"\uba54\uc778\ub798\ud37c",image:"https://github.com/SSuaSea/shinee-fansite/blob/main/minho.jpg?raw=true"},{id:4,name:"Taemin",age:"1993. 07. 18",position:"\uba54\uc778\ub304\uc11c",image:"https://github.com/SSuaSea/shinee-fansite/blob/main/taemin.jpg?raw=true"}];var o=function(){const[e,t]=Object(n.useState)(null);return Object(n.useEffect)(()=>{const e=document.querySelectorAll(".item");e.forEach((a,n)=>{a.clicked=!1,a.addEventListener("click",()=>{((t,a)=>{e.forEach((e,t)=>{a!==t&&(e.clicked=!1,i.a.to(e,{width:"15vw",duration:2,ease:"elastic(1, .6)"}))}),t.clicked=!t.clicked,i.a.to(t,{width:t.clicked?"25vw":"15vw",duration:2.5,ease:"elastic(1, .3)"})})(a,n),t(a.clicked?n:null)})})},[]),l.a.createElement("div",{className:"my-5"},l.a.createElement("h1",{className:"my-5"},"ARTIST"),l.a.createElement("p",null,"\uc0ac\uc9c4\uc744 \ud074\ub9ad\ud558\uba74 \uc544\ud2f0\uc2a4\ud2b8\uc758 \uc815\ubcf4\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),l.a.createElement("div",{className:"group justify-content-center"},l.a.createElement("div",{className:"artist-row"},m.slice(0,3).map((t,a)=>l.a.createElement("div",{key:a,className:"item ".concat(e===a?"expanded":""),style:{backgroundImage:"url(".concat(t.image,")")}}))),l.a.createElement("div",{className:"artist-row"},m.slice(3,5).map((t,a)=>l.a.createElement("div",{key:a+3,className:"item ".concat(e===a+3?"expanded":""),style:{backgroundImage:"url(".concat(t.image,")")}})))),(()=>{if(null!==e){const t=m[e];return l.a.createElement("div",{className:"description"},l.a.createElement("h2",null,t.name),l.a.createElement("p",null,t.age),l.a.createElement("p",null,"Position: ",t.position))}return null})()," ")};var u=[{id:0,name:"\ub204\ub09c \ub108\ubb34 \uc608\ubed0",date:"2008.05.22",style:"\ub304\uc2a4 \ud31d, \uc54c\uc564\ube44",image:"https://github.com/SSuaSea/shinee-fansite/blob/main/album1.jpg?raw=true"},{id:1,name:"\uc0b0\uc18c \uac19\uc740 \ub108",date:"2008.08.28",style:"\ubc1c\ub77c\ub4dc, \ub304\uc2a4 \ud31d",image:"https://github.com/SSuaSea/shinee-fansite/blob/main/album2.jpg?raw=true"},{id:2,name:"\uc544.\ubbf8.\uace0",date:"2008.10.29",style:"\ubc1c\ub77c\ub4dc, \ub304\uc2a4 \ud31d",image:"https://github.com/SSuaSea/shinee-fansite/blob/main/album3.jpg?raw=true"},{id:3,name:"\uc904\ub9ac\uc5e3 (Juliette)",date:"2009.05.21",style:"\ubc1c\ub77c\ub4dc, \ub304\uc2a4 \ud31d",image:"https://github.com/SSuaSea/shinee-fansite/blob/main/album4.jpg?raw=true"},{id:4,name:"Lucifer",date:"2010.07.19",style:"\ub304\uc2a4 \ud31d",image:"https://github.com/SSuaSea/shinee-fansite/blob/main/album5.jpg?raw=true"},{id:5,name:"Sherlock",date:"2012.03.19",style:"\ub304\uc2a4 \ud31d",image:"https://github.com/SSuaSea/shinee-fansite/blob/main/album6.jpg?raw=true"},{id:6,name:"View",date:"\t2015.05.18",style:"\ub304\uc2a4 \ud31d",image:"https://github.com/SSuaSea/shinee-fansite/blob/main/album7.jpg?raw=true"},{id:7,name:"Tell Me What To Do",date:"\t2016.11.15",style:"\ubc1c\ub77c\ub4dc, \ub304\uc2a4 \ud31d, \ud31d",image:"https://github.com/SSuaSea/shinee-fansite/blob/main/album8.jpg?raw=true"},{id:8,name:"Don't Call Me",date:"\t2021.02.22",style:"\ub304\uc2a4 \ud31d",image:"https://github.com/SSuaSea/shinee-fansite/blob/main/album9.jpg?raw=true"},{id:9,name:"HARD",date:"2023.06.26",style:"\ub304\uc2a4 \ud31d, \uc54c\uc564\ube44, \ud799\ud569, \uc77c\ub809\ud2b8\ub85c\ub2c9 \ud31d",image:"https://github.com/SSuaSea/shinee-fansite/blob/main/album10.jpg?raw=true"}];a(25);var E=function(){return Object(n.useEffect)(()=>{const e=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("visible"),t.unobserve(e.target))})},{threshold:.1});return document.querySelectorAll(".card-body").forEach(t=>e.observe(t)),()=>{e.disconnect()}},[]),l.a.createElement("div",{className:"history"},l.a.createElement("h1",{className:"my-5"},"HISTORY"),u.map((e,t)=>l.a.createElement("div",{key:e.id,className:"history-container ".concat(t%2===1?"reverse":"")},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"container my-5"},l.a.createElement("div",{className:"card text-center"},l.a.createElement("div",{className:"card-img-container"},l.a.createElement("img",{src:e.image,className:"card-img-top",alt:e.name}),l.a.createElement("div",{className:"zoom"}))))),l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("div",{className:"text-container"},l.a.createElement("h5",{className:"card-title"},e.name),l.a.createElement("div",{className:"info"},l.a.createElement("h5",{className:"card-title date"},"\ubc1c\ub9e4\uc77c: ",e.date),l.a.createElement("h5",{className:"card-title style"},"\uc7a5\ub974: ",e.style)))))))},d=a(37),p=a(14);a(29);var b=function(){const[e,t]=Object(n.useState)([]),[a,r]=Object(n.useState)(null),c=Object(n.useRef)(null);return Object(n.useEffect)(()=>{(async()=>{try{const e=await Object(p.a)();if(!e)throw new Error("Failed to get access token");const a=await d.a.get("https://api.spotify.com/v1/search",{headers:{Authorization:"Bearer ".concat(e)},params:{q:"artist:SHINee",type:"track",market:"KR",limit:21}});console.log("API response:",a.data.tracks.items),t(a.data.tracks.items)}catch(e){console.error("Error fetching top tracks:",e.response?e.response.data:e.message)}})()},[]),l.a.createElement("div",{className:"toptrack"},l.a.createElement("h1",{className:"my-5"},"SHINee's Top Tracks"),l.a.createElement("ul",{className:"track-list"},e.map(e=>l.a.createElement("li",{key:e.id,className:"track-item"},l.a.createElement("img",{src:e.album.images[0].url,alt:e.album.name})," ",l.a.createElement("div",{className:"track-info"},l.a.createElement("span",{className:"track-name"},e.name),l.a.createElement("button",{onClick:()=>{return t=e.preview_url,void(a===t?(r(null),c.current&&c.current.pause()):(r(t),c.current&&(c.current.src=t,c.current.play())));var t}},a===e.preview_url?"Stop":"Play!"))))),a&&l.a.createElement("audio",{ref:c,controls:!0,autoPlay:!0},l.a.createElement("source",{src:a,type:"audio/mp3"}),"Your browser does not support the audio element."))};a(30);var h=()=>{const[e,t]=Object(n.useState)([]),[a,r]=Object(n.useState)(""),[c,s]=Object(n.useState)(null),[i,m]=Object(n.useState)("");Object(n.useEffect)(()=>{t([{id:1,text:"\uc0e4\uc774\ub2c8 \uc0ac\ub791\ud574\uc694!"},{id:2,text:"\ub298 \uc751\uc6d0\ud569\ub2c8\ub2e4!"}])},[]);return l.a.createElement("div",{className:"my-5"},l.a.createElement("h1",{className:"fanletter-header my-5"},"Fan letter"),l.a.createElement("div",{className:"fanletter-container"},l.a.createElement("p",null,"\uc544\ud2f0\uc2a4\ud2b8\uc5d0\uac8c \uc751\uc6d0\uba54\uc2dc\uc9c0\ub97c \uc804\ub2ec\ud574\ubcf4\uc138\uc694!"),l.a.createElement("div",{className:"fanletter-form"},l.a.createElement("input",{type:"text",value:a,onChange:e=>r(e.target.value),placeholder:"\ud32c\ub808\ud130 \uc791\uc131"}),l.a.createElement("button",{onClick:()=>{if(""===a.trim())return;const n={id:Date.now(),text:a};t([...e,n]),r("")}},"\uc804\ub2ec\ud558\uae30\u2661")),l.a.createElement("ul",{className:"fanletter-list"},e.map(a=>l.a.createElement("li",{key:a.id,className:"fanletter-item"},c===a.id?l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{type:"text",value:i,onChange:e=>m(e.target.value)}),l.a.createElement("button",{onClick:()=>(a=>{const n=e.map(e=>e.id===a?{...e,text:i}:e);t(n),s(null),m("")})(a.id)},"\uc800\uc7a5")):l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,a.text),l.a.createElement("div",null,l.a.createElement("button",{onClick:()=>(t=>{const a=e.find(e=>e.id===t);s(t),m(a.text)})(a.id)},"\uc218\uc815"),l.a.createElement("button",{className:"delete-button",onClick:()=>(a=>{const n=e.filter(e=>e.id!==a);t(n)})(a.id)},"\uc0ad\uc81c"))))))))};var f=function(){return l.a.createElement("section",{className:"purpose-section"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"section-title"},"\uae30\ud68d\uc758\ub3c4"),l.a.createElement("p",{className:"purpose-description"},"React\ub97c \ud559\uc2b5\ud558\ub294 \uacfc\uc815\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \uc5b4\ub5bb\uac8c \uc9c4\ud589\ud558\uba74 \uc88b\uc744\uae4c \uc0dd\uac01\ud558\ub358 \uc911,",l.a.createElement("br",null),"\ud3c9\uc18c \ub0b4\uac00 \uc88b\uc544\ud558\ub294 \uac83\uc744 \uc5f0\uad00\ud558\uc5ec \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud558\uba74 \ub354\uc6b1 \ud765\ubbf8\ub97c \ub290\ub07c\uba70 synergy \ud6a8\uacfc\ub97c \uc5bb\uc744 \uc218 \uc788\uc744 \uac83 \uac19\ub2e4\uace0 \uc0dd\uac01\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",l.a.createElement("br",null),"React + SHINee \uad00\uc2ec\uc0ac\uc640 \uad00\uc2ec\uc0ac\ub97c \ub354 \ud574 \ud55c\uce35 \ub354 \uc990\uac81\uac8c \uc774\ubc88 \uc791\uc5c5\uc744 \ud558\uac8c\ub418\uc5c8\uc2b5\ub2c8\ub2e4")))};a(31);var g=()=>{const[e,t]=Object(n.useState)(""),[a,r]=Object(n.useState)(""),[c,i]=Object(n.useState)(!1),m=Object(s.o)();return l.a.createElement("div",{className:"my-5 text-center"},l.a.createElement("h1",{className:"login-title my-5"},"Login"),l.a.createElement("div",{className:"loginform-container"},l.a.createElement("form",{className:"login-form",onSubmit:async t=>{t.preventDefault(),await new Promise(e=>setTimeout(e,1e3));const n=await fetch("/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:a})}),l=await n.json();200===n.status?(i(!1),sessionStorage.setItem("token",l.token),sessionStorage.setItem("email",l.email),sessionStorage.setItem("role",l.role),sessionStorage.setItem("storeid",l.storeId),console.log("\ub85c\uadf8\uc778\uc131\uacf5, \uc774\uba54\uc77c\uc8fc\uc18c:"+l.email),m("/")):i(!0)}},l.a.createElement("label",{htmlFor:"username",className:"form-label"},"\uc774\uba54\uc77c"),l.a.createElement("input",{type:"text",id:"username",className:"form-input",value:e,onChange:e=>t(e.target.value)}),l.a.createElement("label",{htmlFor:"password",className:"form-label"},"\ube44\ubc00\ubc88\ud638"),l.a.createElement("input",{type:"password",id:"password",className:"form-input",value:a,onChange:e=>r(e.target.value)}),c&&l.a.createElement("label",{className:"error-message"},"\uc774\uba54\uc77c \ud639\uc740 \ube44\ubc00\ubc88\ud638\uac00 \ud2c0\ub838\uc2b5\ub2c8\ub2e4."),l.a.createElement("button",{type:"submit",className:"form-button"},"\ub85c\uadf8\uc778"))))},S=a(5);a(32);function v(){const[e,t]=Object(n.useState)(""),a=e=>{t(e)};return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"logo"},l.a.createElement(S.b,{to:"/",className:"myshinee text-neon"},"My SHINee")),l.a.createElement("nav",{className:"nav-links"},l.a.createElement(S.b,{to:"/artist",className:"nav-link ".concat("Artist"===e?"active":""),onClick:()=>a("Artist")},"Artist"),l.a.createElement(S.b,{to:"/toptrack",className:"nav-link ".concat("toptrack"===e?"active":""),onClick:()=>a("Top Track")},"Top Track"),l.a.createElement(S.b,{to:"/history",className:"nav-link ".concat("History"===e?"active":""),onClick:()=>a("History")},"History"),l.a.createElement(S.b,{to:"/fanletter",className:"nav-link ".concat("Fanletter"===e?"active":""),onClick:()=>a("Fanletter")},"Fanletter")),l.a.createElement("div",{className:"login-container"},l.a.createElement(S.b,{to:"/login",className:"login-btn"},"Login")))}a(33);var N=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"footer-content"},l.a.createElement("div",{className:"footer-logo"},l.a.createElement("img",{src:"https://raw.githubusercontent.com/SSuaSea/shinee-fansite/46008e8d6aec1dc854835e3256b652933dfb25ed/logo.svg",alt:"logo"})),l.a.createElement("div",{className:"footer-links"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/SSuaSea/shinee-fansite"},"Fansite Github")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/SSuaSea"},"GitHub")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://velog.io/@suasea_77777/posts"},"Blog")))),l.a.createElement("div",{className:"footer-social"},l.a.createElement("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-facebook-f"})),l.a.createElement("a",{href:"https://www.twitter.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-twitter"})),l.a.createElement("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-instagram"})),l.a.createElement("a",{href:"https://www.linkedin.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-linkedin-in"}))))))};a(34),a(35);function y(){return l.a.createElement("div",{className:"AppContent"},l.a.createElement(v,null)," ",l.a.createElement(o,null),l.a.createElement(b,null),l.a.createElement(E,null),l.a.createElement(h,null),l.a.createElement(f,null),l.a.createElement(N,null))}function w(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null)," ",l.a.createElement(g,null),l.a.createElement(N,null))}function k(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null)," ",l.a.createElement(o,null),l.a.createElement(N,null))}function j(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement(b,null),l.a.createElement(N,null))}function O(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null)," ",l.a.createElement(E,null),l.a.createElement(N,null))}function T(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement(h,null),l.a.createElement(N,null))}function C(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement(f,null),l.a.createElement(N,null))}var _=function(){return Object(n.useEffect)(()=>()=>{},[]),l.a.createElement("div",{className:"App"},l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",element:l.a.createElement(y,null)}),l.a.createElement(s.a,{path:"/artist",element:l.a.createElement(k,null)}),l.a.createElement(s.a,{path:"/toptrack",element:l.a.createElement(j,null)}),l.a.createElement(s.a,{path:"/history",element:l.a.createElement(O,null)}),l.a.createElement(s.a,{path:"fanletter",element:l.a.createElement(T,null)}),l.a.createElement(s.a,{path:"purpose",element:l.a.createElement(C,null)}),l.a.createElement(s.a,{path:"login",element:l.a.createElement(w,null)}),l.a.createElement(s.a,{path:"/app",element:l.a.createElement(y,null)})))};var I=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:c}=t;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(S.a,{basename:"/shinee-fansite"},l.a.createElement(_,null))),I()}],[[16,1,2]]]);
//# sourceMappingURL=main.00437118.chunk.js.map