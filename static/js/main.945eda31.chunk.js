(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{245:function(t,e,n){},262:function(t,e){},264:function(t,e){},268:function(t,e){},269:function(t,e){},296:function(t,e){},298:function(t,e){},308:function(t,e){},310:function(t,e){},320:function(t,e){},322:function(t,e){},338:function(t,e){},372:function(t,e){},373:function(t,e){},443:function(t,e){},445:function(t,e){},450:function(t,e){},452:function(t,e){},459:function(t,e){},471:function(t,e){},474:function(t,e){},479:function(t,e){},554:function(t,e,n){"use strict";n.r(e);var r=n(5),c=n.n(r),a=n(233),s=n.n(a),o=(n(245),n(14),n(25),n(17)),u=n(8),i=function(t){var e=t.color,n=t.text,r=t.setShow;return Object(u.jsx)("button",{onClick:r,style:{backgroundColor:e},className:"btn",children:n})},l=n(18),b=function(t){var e=t.showAdd,n=t.setShow,r=t.addEnabled,c=Object(l.e)();return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("h1",{children:" NFT Dapp "}),"/"===c.pathname&&r&&Object(u.jsx)(i,{text:e?"Close":"Add",color:e?"red":"steelBlue",setShow:n})]})},h=n(59),d=function(){return Object(u.jsxs)("footer",{children:[Object(u.jsx)("p",{children:"Copyright \xa9 2021"}),Object(u.jsx)(h.b,{to:"/about",children:"About"})]})},j=(n(239),function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Version 1.0.0"}),Object(u.jsx)(h.b,{to:"/",children:"Go back"})]})}),f=n(19),p=n.n(f),x=n(31),O=n(248),m=new O(O.givenProvider||"http://localhost:8545"),w=function(){var t=Object(x.a)(p.a.mark((function t(){var e,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.ethereum){t.next=14;break}return t.prev=1,t.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:return e=t.sent,n={status:"Click the above box to mint your NFT!",address:e[0]},t.abrupt("return",n);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",{address:"",status:"\ud83d\ude25 "+t.t0.message});case 12:t.next=15;break;case 14:return t.abrupt("return",{address:"",status:Object(u.jsx)("span",{children:Object(u.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(u.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",rel:"noreferrer",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 15:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(x.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.ethereum){t.next=17;break}return t.prev=1,t.next=4,window.ethereum.request({method:"eth_accounts"});case 4:if(!((e=t.sent).length>0)){t.next=9;break}return t.abrupt("return",{address:e[0],status:"Click the above box to mint your NFT!"});case 9:return t.abrupt("return",{address:"",status:"\ud83e\udd8a Connect to Metamask using the button below."});case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(1),t.abrupt("return",{address:"",status:"\ud83d\ude25 "+t.t0.message});case 15:t.next=18;break;case 17:return t.abrupt("return",{address:"",status:Object(u.jsx)("span",{children:Object(u.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 18:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(x.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.ethereum){t.next=15;break}return t.prev=1,t.next=4,window.ethereum.request({method:"eth_chainId"});case 4:if(e=t.sent,1!==parseInt(e,16)){t.next=9;break}return t.abrupt("return",{chainStatus:"Click the above box to mint your NFT!"});case 9:return t.abrupt("return",{chainStatus:"\ud83e\udd8a Connect to the main Ethereum network"});case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(1),t.abrupt("return",{status:"\ud83d\ude25 "+t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(r.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(""),s=Object(o.a)(a,2),i=s[0],l=s[1],b=Object(r.useState)(0),h=Object(o.a)(b,2),d=h[0],j=h[1];Object(r.useEffect)((function(){function t(){return t=Object(x.a)(p.a.mark((function t(){var e,n,r,a,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k();case 2:return e=t.sent,n=e.address,r=e.status,c(n),l(r),O(),t.next=10,v();case 10:a=t.sent,s=a.chainStatus,l(s),g();case 14:case"end":return t.stop()}}),t)}))),t.apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n]),Object(r.useEffect)((function(){!function(t,e){console.log(t),t.length>0?m.eth.getBalance(t,(function(t,n){t?console.log(t):e(m.utils.fromWei(n,"ether").substring(0,6))})):e("0")}(n,j)}),[n,i]);var f=function(){var t=Object(x.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:e=t.sent,l(e.status),c(e.address);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function O(){window.ethereum?window.ethereum.on("accountsChanged",(function(t){t.length>0?(c(t[0]),l("Click the above box to mint your NFT!")):(c(""),l("\ud83e\udd8a Connect to Metamask using button below."))})):l(Object(u.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]}))}function g(){window.ethereum&&window.ethereum.on("chainChanged",(function(t){1!==parseInt(t,16)?l("\ud83e\udd8a Connect to the main Ethereum network."):l("Click the above box to mint your NFT!")}))}return Object(u.jsxs)("div",{className:"crypto-box",children:[Object(u.jsx)("p",{id:"status",children:i}),Object(u.jsxs)("p",{className:"balance",children:[Object(u.jsx)("strong",{children:"Balance: \u039e"}),d]}),Object(u.jsx)("button",{onClick:f,className:"btn btn-connect",children:n.length>0?"Connected: "+String(n).substring(0,6)+"..."+String(n).substring(38):Object(u.jsx)("span",{children:"Connect Wallet"})})]})},C=n(32),y=function(){var t=Object(r.useRef)(),e=Object(r.useState)(!1),n=Object(o.a)(e,2),c=n[0],a=n[1],s=Object(r.useState)(!1),i=Object(o.a)(s,2),l=i[0],b=i[1],h=Object(r.useState)(1),d=Object(o.a)(h,2),j=d[0],f=d[1];Object(C.b)((function(e,n){t.current.rotation.z+=.01*j,t.current.rotation.x+=.001*j,t.current.rotation.y+=.003*j}));return Object(u.jsxs)("mesh",{ref:t,scale:l?1.1:1,onClick:function(t){f(5/j),b(!l)},onDoubleClick:function(t){return console.log("doubleClicked")},onPointerOver:function(t){return a(!0)},onPointerOut:function(t){return a(!1)},children:[Object(u.jsx)("boxGeometry",{args:[3,3,3]}),Object(u.jsx)("meshStandardMaterial",{color:c?l?"lightpink":"hotpink":l?"steelBlue":"orange"})]})},S=n(560),N=function(){var t=Object(r.useState)(!1),e=Object(o.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)([{id:1,title:"Task 1",description:"Description 1",done:!1},{id:2,title:"Task 2",description:"Description 2",done:!0},{id:3,title:"Task 3",description:"Description 3",done:!1}]),s=Object(o.a)(a,2);s[0],s[1];return Object(u.jsx)(h.a,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(b,{showAdd:n,setShow:function(){return c(!n)},addEnabled:false}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/",element:false}),Object(u.jsx)(l.a,{path:"/about",element:Object(u.jsx)(j,{})})]}),Object(u.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(u.jsxs)(C.a,{style:{width:"90%"},children:[Object(u.jsx)("ambientLight",{}),Object(u.jsx)("pointLight",{position:[5,8,0]}),Object(u.jsx)(y,{position:[-1.2,0,0]}),Object(u.jsx)(S.a,{})]})}),Object(u.jsx)(g,{}),Object(u.jsx)(d,{})]})})},T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,561)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),a(t),s(t)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),T()}},[[554,1,2]]]);
//# sourceMappingURL=main.945eda31.chunk.js.map