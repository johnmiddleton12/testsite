(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(12),a=n.n(c),o=(n(19),n(10)),i=n(14),u=n(3),l=n(0),d=function(e){var t=e.color,n=e.text,r=e.setShow;return Object(l.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})},b=n(2),j=function(e){var t=e.title,n=e.showAdd,r=e.setShow,s=Object(b.e)();return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsxs)("h1",{children:[" Dapp Header - ",t]}),"/"===s.pathname&&Object(l.jsx)(d,{text:n?"Close":"Add",color:n?"red":"steelBlue",setShow:r})]})};j.defaultProps={title:"Main Page"};var h=j,p=n(6),O=function(){return Object(l.jsxs)("footer",{children:[Object(l.jsx)("p",{children:"Copyright \xa9 2021"}),Object(l.jsx)(p.b,{to:"/about",children:"About"})]})},x=n(13),f=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(l.jsxs)("div",{className:"task ".concat(t.done?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(l.jsxs)("h3",{children:[t.title," ","-"," ",t.done?"Done":"Not done",Object(l.jsx)(x.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(l.jsx)("p",{children:t.description})]})},m=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(l.jsx)(l.Fragment,{children:t.map((function(e){return Object(l.jsx)(f,{task:e,onDelete:n,onToggle:r},e.id)}))})},v=function(e){var t=e.onAdd,n=Object(r.useState)(""),s=Object(u.a)(n,2),c=s[0],a=s[1],o=Object(r.useState)(""),i=Object(u.a)(o,2),d=i[0],b=i[1],j=Object(r.useState)(!1),h=Object(u.a)(j,2),p=h[0],O=h[1];return Object(l.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),c?(t({title:c,description:d,done:p}),a(""),b(""),O(!1)):alert("Please add a task!")},children:[Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Task"}),Object(l.jsx)("input",{type:"text",placeholder:"Add Task",value:c,onChange:function(e){return a(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Description"}),Object(l.jsx)("input",{type:"text",placeholder:"Add Description",value:d,onChange:function(e){return b(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control form-control-check",children:[Object(l.jsx)("label",{children:"Set Reminder"}),Object(l.jsx)("input",{type:"checkbox",value:p,onChange:function(e){return O(e.currentTarget.checked)}})]}),Object(l.jsx)("input",{className:"btn btn-block",type:"submit",value:"Save Task"})]})},k=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:"Version 1.0.0"}),Object(l.jsx)(p.b,{to:"/",children:"Go back"})]})},g=n(5),w=n.n(g),y=n(8),C=function(){var e=Object(y.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=14;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:return t=e.sent,n={status:"Use the button above to mint your NFT!",address:t[0]},e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 12:e.next=15;break;case 14:return e.abrupt("return",{address:"",status:Object(l.jsx)("span",{children:Object(l.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(l.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",rel:"noreferrer",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=17;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_accounts"});case 4:if(!((t=e.sent).length>0)){e.next=9;break}return e.abrupt("return",{address:t[0],status:"Use the button above to mint your NFT!"});case 9:return e.abrupt("return",{address:"",status:"\ud83e\udd8a Connect to Metamask using the button below."});case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 15:e.next=18;break;case 17:return e.abrupt("return",{address:"",status:Object(l.jsx)("span",{children:Object(l.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)(""),a=Object(u.a)(c,2),o=a[0],i=a[1];Object(r.useEffect)((function(){function e(){return e=Object(y.a)(w.a.mark((function e(){var t,n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,n=t.address,r=t.status,s(n),i(r),b();case 8:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var d=function(){var e=Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,i(t.status),s(t.address);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function b(){window.ethereum?window.ethereum.on("accountsChanged",(function(e){e.length>0?(s(e[0]),i("Use the above button to mint your NFT!")):(s(""),i("\ud83e\udd8a Connect to Metamask using the top right button."))})):i(Object(l.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]}))}return Object(l.jsxs)("div",{className:"crypto-box",children:[Object(l.jsx)("p",{id:"status",children:o}),Object(l.jsx)("button",{onClick:d,className:"btn btn-connect",children:n.length>0?"Connected: "+String(n).substring(0,6)+"..."+String(n).substring(38):Object(l.jsx)("span",{children:"Connect Wallet"})})]})},T=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)([{id:1,title:"Task 1",description:"Description 1",done:!1},{id:2,title:"Task 2",description:"Description 2",done:!0},{id:3,title:"Task 3",description:"Description 3",done:!1}]),a=Object(u.a)(c,2),d=a[0],j=a[1];return Object(l.jsx)(p.a,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(h,{title:"Hello",showAdd:n,setShow:function(){return s(!n)}}),Object(l.jsxs)(b.c,{children:[Object(l.jsx)(b.a,{path:"/",element:Object(l.jsxs)(l.Fragment,{children:[n&&Object(l.jsx)(v,{onAdd:function(e){var t=d[d.length-1].id+1;j([].concat(Object(i.a)(d),[Object(o.a)(Object(o.a)({},e),{},{id:t})]))}}),d.length>0?Object(l.jsx)(m,{tasks:d,onDelete:function(e){j(d.filter((function(t){return t.id!==e})))},onToggle:function(e){j(d.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{done:!t.done}):t})))}}):Object(l.jsx)("h1",{children:"No tasks"})]})}),Object(l.jsx)(b.a,{path:"/about",element:Object(l.jsx)(k,{})})]}),Object(l.jsx)(N,{}),Object(l.jsx)(O,{})]})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(T,{})}),document.getElementById("root")),D()}},[[22,1,2]]]);
//# sourceMappingURL=main.ac6cd066.chunk.js.map