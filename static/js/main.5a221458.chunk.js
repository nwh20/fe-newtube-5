(this["webpackJsonpfe-newtube-5"]=this["webpackJsonpfe-newtube-5"]||[]).push([[0],{10:function(e,t,a){e.exports=a(30)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(6),c=a.n(i),l=(a(15),a(2)),r=(a(16),function(e){var t=e.video,a=e.onVideoSelect,n=t.snippet.thumbnails.default.url;return o.a.createElement("li",{onClick:function(){return a(t)}},o.a.createElement("div",{className:"page-list-video-box"},o.a.createElement("img",{alt:"thumbnail",src:n})),o.a.createElement("div",{className:"page-list-video-info"},o.a.createElement("p",{className:"title"},t.snippet.title),o.a.createElement("p",{className:"channel"},t.snippet.channelTitle)))}),s=(a(17),function(e){var t=e.videos.map((function(t){return o.a.createElement(r,{onVideoSelect:e.onVideoSelect,key:t.etag,video:t})}));return o.a.createElement("ul",null,t)}),m=(a(18),function(e){var t=e.video;if(!t)return o.a.createElement("div",{className:"loading"},"Loading");var a=t.id.videoId,n="https://www.youtube.com/embed/".concat(a);return o.a.createElement("div",{className:"page-main-video"},o.a.createElement("div",{className:"page-main-video-box"},o.a.createElement("iframe",{src:n,title:"main"})))}),u=a(7),d=a.n(u),p=a(8),v=a.n(p),b=a(9),f=a.n(b),g=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(null),r=Object(l.a)(c,2),u=r[0],p=r[1];return Object(n.useEffect)((function(){var e;e="frontend",d()({key:"AIzaSyBUdrW8JHPAU-UbdHOprviDHn-PSJa7no4",term:e,order:"date"},(function(e){i(e),p(e[0])}))}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"page-main"},o.a.createElement("div",{className:"page-main-banner"},o.a.createElement("img",{src:f.a,alt:"main-logo",className:"page-main-banner-logo"}),o.a.createElement("div",{className:"page-main-banner-youtube"},"by",o.a.createElement("img",{src:v.a,alt:"youtube-logo",onClick:function(){window.open("https://www.youtube.com/","_blank")}}))),o.a.createElement(m,{video:u})),o.a.createElement("div",{className:"page-list"},o.a.createElement("div",{className:"page-list-banner"},o.a.createElement("h3",null,"The 5 New Videos For Frontend Developer")),o.a.createElement(s,{onVideoSelect:function(e){return p(e)},videos:a}),o.a.createElement("h4",{onClick:function(){window.open("https://github.com/nwh20","_blank")}},"project by nwheo")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a.p+"static/media/youtube-logo.89b03ae8.svg"},9:function(e,t,a){e.exports=a.p+"static/media/main-logo.dca1e492.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.5a221458.chunk.js.map