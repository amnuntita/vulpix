(this.webpackJsonpvulpix=this.webpackJsonpvulpix||[]).push([[0],{155:function(e,t,a){e.exports=a(443)},159:function(e,t,a){},160:function(e,t,a){},443:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(29),r=a.n(l),o=(a(159),a(160),a(12)),s=a(22),m=a(446),i=a(447),u=a(448),E=a(449),d=a(458),p=a(459),f=a(460),v=a(450),h=a(7),b=a.n(h),w=a(65),y=a(18),g=a(445),N=a(148),j="http://localhost:3002/",O=a(444),S=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),l=a[0],r=a[1],s=e.term;function m(){return 0==s.length?c.a.createElement("div",null):l.map((function(e){return c.a.createElement(O.a,{tag:"a",href:"/result/".concat(e.title),action:!0},e.title)}))}return Object(n.useEffect)((function(){function e(){return(e=Object(y.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"suggest/?q="+s);case 2:e.sent.json().then((function(e){r(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s]),c.a.createElement("div",{style:{fontSize:"small"}},c.a.createElement(m,null))},k=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],r=a[1];return c.a.createElement("div",null,c.a.createElement(g.a,Object(w.a)({type:"text",onChange:function(e){return r(e.target.value)},onKeyPress:function(e){"Enter"==e.key&&(window.location.href="/result/".concat(l))},value:l},"type","text")),c.a.createElement("div",{className:"suggest"},c.a.createElement(S,{term:l})),c.a.createElement("div",null,c.a.createElement("div",{className:"searchButton"},c.a.createElement(N.a,{style:{backgroundColor:"#000850"}},c.a.createElement(s.b,{to:"/result/".concat(l)},"Go")))))},x=function(){return c.a.createElement("div",null,c.a.createElement(m.a,{style:{backgroundColor:"#000850"},expand:"md"},c.a.createElement(i.a,{className:"mr-auto",navbar:!0},c.a.createElement(u.a,null,c.a.createElement(E.a,{href:"/home"},"Home")),c.a.createElement(d.a,{nav:!0,inNavbar:!0},c.a.createElement(p.a,{nav:!0,caret:!0},"About"),c.a.createElement(f.a,{right:!0},c.a.createElement(v.a,null,"What is VULPIX"),c.a.createElement(v.a,null,"VULPIX score"))))))},I=a(451),P=a(452),q=a(453),D=a(454),z=a(455),L=a(456),U=(a(183),a(184),function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],r=a[1],s=e.select;Object(n.useEffect)((function(){function e(){return(e=Object(y.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"app/"+s);case 2:e.sent.json().then((function(e){return r(e[0]),e})).then((function(e){return console.log(s)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s]);var m={fontSize:30,marginTop:20},i={fontSize:20,marginTop:30},u=function(e,t){var a=!1;if(l.download&&"Download"==t&&l.download.length>4){var n=l.download.split(",")[0];if(l.download.length>13)n=n.concat(l.download.split(",")[1]),a=!0;n=l.download.length>8?n.concat("M+"):n.concat("K+")}else n=e;return c.a.createElement("div",{className:"col-sm"},c.a.createElement("div",{className:"box"},c.a.createElement("div",{style:a?i:m},n),t))};return c.a.createElement("div",{className:"appcard col-11 col-md-5"},c.a.createElement(I.a,null,c.a.createElement(P.a,null,c.a.createElement("div",{className:"row"},c.a.createElement(q.a,{left:!0,className:"icon"},c.a.createElement(q.a,{src:l.icon,alt:"Generic placeholder image"})),c.a.createElement("div",{className:"col"},c.a.createElement(D.a,null,c.a.createElement("h",null,l.title)),c.a.createElement(z.a,null,c.a.createElement("b",null,"Developer:")," ",l.dev),c.a.createElement(L.a,null,c.a.createElement("b",null,"Category: ")," ",l.cat),c.a.createElement(L.a,null,c.a.createElement("b",null,"Description: ")," ",l.desc),c.a.createElement(L.a,null,c.a.createElement("b",null,"Privacy Policy: ")," ",c.a.createElement("a",{href:l.policy},l.policy)))),c.a.createElement("hr",null),c.a.createElement("div",{className:"row"},u(l.download,"Download"),u(l.rating,"Rating"),c.a.createElement("div",{className:"col-sm"},c.a.createElement("div",{className:"box",style:{borderColor:"#0000a0",borderWidth:1,backgroundColor:"#FFD801"}},c.a.createElement("div",{style:{fontSize:30,marginTop:30}},"32"),c.a.createElement("div",{style:{fontSize:15}},"VULPIX score")))))))}),C=a(457),M=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(),m=Object(o.a)(s,2),i=(m[0],m[1]),u=j+"res?appId="+e.appId+".apk&q="+e.cat,E="Media"==e.cat?"Media and Device Usage":e.cat,d=Object(n.useState)(!1),p=Object(o.a)(d,2);p[0],p[1];function f(e){var t=e.PI,a=e.leak;return c.a.createElement("div",{className:a?"leakbox":"ibox"},c.a.createElement("div",{className:"col-md-2 col-5 picon"},c.a.createElement(q.a,{src:j+"public/icon/"+t+".png"})),c.a.createElement("div",{className:"smalltext"},t))}Object(n.useEffect)((function(){function e(){return(e=Object(y.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u);case 2:e.sent.json().then((function(e){return r(e),l})).then((function(e){i(e[0])}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]);return c.a.createElement("div",{className:"appcard col-11 col-md-5"},c.a.createElement(I.a,null,c.a.createElement(P.a,null,c.a.createElement("div",{className:"row"},c.a.createElement(D.a,{className:"cat"},E)),c.a.createElement("hr",null),c.a.createElement("div",null,function(e){return 0==e.length?c.a.createElement(C.a,null,c.a.createElement(L.a,{style:{textAlign:"center"}},"----- No VULPIX result for this app -----")):c.a.createElement("div",{className:"row",style:{marginLeft:30}},Object.keys(e[0]).map((function(t){if("title"!=t)return c.a.createElement(f,{PI:t,leak:e[0][t]})})))}(l)))))},V=function(e){return c.a.createElement("div",null,c.a.createElement(x,null),c.a.createElement("div",{style:{fontFamily:"Nunito"}},c.a.createElement("div",{className:"row"},c.a.createElement(U,{select:e.select})),c.a.createElement("div",{className:"appcard col-11 col-md-5",style:{fontSize:26}},"VULPIX analysis - detected leaked information"),c.a.createElement("div",{className:"row"},c.a.createElement(M,{appId:e.select,cat:"Device"})),c.a.createElement("div",{className:"row"},c.a.createElement(M,{appId:e.select,cat:"Simcard"})),c.a.createElement("div",{className:"row"},c.a.createElement(M,{appId:e.select,cat:"User"})),c.a.createElement("div",{className:"row"},c.a.createElement(M,{appId:e.select,cat:"Media"})),c.a.createElement("div",{className:"row"},c.a.createElement(M,{appId:e.select,cat:"Location"}))))},X=(a(185),function(e){return c.a.createElement("div",null,c.a.createElement("div",{className:"credit"},"Icons made by"," ",c.a.createElement("a",{href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons"},"Smashicons")," ","from"," ",c.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")),c.a.createElement(x,null),c.a.createElement("div",{className:"logo"},c.a.createElement(q.a,null,c.a.createElement(q.a,{src:j+"public/newlogo.png",alt:"vulpix"}))),c.a.createElement("div",{className:"homesearch"},c.a.createElement(k,null)))});var A=function(){return c.a.createElement("div",null,"About")},F=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=(a[0],a[1]),r=Object(n.useState)([]),m=Object(o.a)(r,2),i=m[0],u=m[1],E=Object(n.useState)(!1),d=Object(o.a)(E,2),p=d[0],f=d[1],v="search/?q="+e.query;function h(){return c.a.createElement("div",null,c.a.createElement("div",{className:"textstyle"},p,' results for keyword "',e.query,'"'),c.a.createElement("div",{className:"row"},i.map((function(e){return c.a.createElement("div",{className:"col-12 col-md-3 m-1"},c.a.createElement("div",{className:"res"},c.a.createElement(I.a,{key:e.apk},c.a.createElement(P.a,null,c.a.createElement("div",{className:"row"},c.a.createElement(q.a,{left:!0,className:"icon"},c.a.createElement(q.a,{src:e.icon,alt:"Generic placeholder image"})),c.a.createElement("div",{className:"col"},c.a.createElement(s.b,{to:"/detail/".concat(e.apk)},c.a.createElement(D.a,{style:{fontSize:20}},e.title)),c.a.createElement(z.a,null,"Developer: ",e.dev)))))))}))))}return Object(n.useEffect)((function(){function e(){return(e=Object(y.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+v);case 2:t=e.sent,console.log(j+v),t.json().then((function(e){return l(e),e})).then((function(e){return u(e),i})).then((function(e){e.length>0&&f(e.length)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i.length]),c.a.createElement("div",null,c.a.createElement(x,null),c.a.createElement("div",{className:"resultSearch"},c.a.createElement(k,null)),c.a.createElement(h,null))},W=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),m=Object(o.a)(r,2),i=m[0],u=m[1];return c.a.createElement("div",null,c.a.createElement(s.d,null,c.a.createElement(s.c,{path:"/home"},c.a.createElement(X,null)),c.a.createElement(s.c,{path:"/about",component:A}),c.a.createElement(s.c,{path:"/detail/:appId",component:function(e){var t=e.match;return l(t.params.appId),console.log(a),c.a.createElement(V,{select:a})}}),c.a.createElement(s.c,{path:"/result/:query",component:function(e){var t=e.match;return u(t.params.query),c.a.createElement("div",null,c.a.createElement(F,{query:i}))}})))};var B=function(){return c.a.createElement(s.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(W,null)))};a(442),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[155,1,2]]]);
//# sourceMappingURL=main.f8976413.chunk.js.map