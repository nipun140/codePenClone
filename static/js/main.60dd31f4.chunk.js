(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{33:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(10),r=c.n(a),o=c(3),s=(c(17),c(18),c(19),c(20),c(21),c(22),c(23),c(9),c(24),c(26),c(11)),l=c(12),i=c(8),u=c(0);function j(e){var t=e.language,c=e.displayTitle,a=e.value,r=e.onChange,j=e.customStyle;var b=Object(n.useState)(!1),d=Object(o.a)(b,2),O=d[0],p=d[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{style:j,className:"editor-container ".concat(O?"expanded":""),children:[Object(u.jsxs)("div",{className:"editor-title",children:[Object(u.jsx)("span",{children:c}),Object(u.jsx)("button",{onClick:function(){p((function(e){return!e}))},children:Object(u.jsx)(l.a,{icon:O?i.a:i.b})})]}),Object(u.jsx)(s.Controlled,{onBeforeChange:function(e,t,c){r(c)},value:a,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,lineNumbers:!0,autoCloseTags:!0,matchBrackets:!0,extraKeys:{"Ctrl-Space":"autocomplete"},mode:t,theme:"material",keyMap:"sublime"}})]})})}var b=function(){var e,t,c;null!==localStorage.getItem("codePenData")?(e=JSON.parse(localStorage.getItem("codePenData"))[0],t=JSON.parse(localStorage.getItem("codePenData"))[1],c=JSON.parse(localStorage.getItem("codePenData"))[2]):(e="",t="",c="",localStorage.setItem("codePenData",JSON.stringify([e,t,c])));var a=Object(n.useState)(e),r=Object(o.a)(a,2),s=r[0],l=r[1],i=Object(n.useState)(t),b=Object(o.a)(i,2),d=b[0],O=b[1],p=Object(n.useState)(c),m=Object(o.a)(p,2),f=m[0],h=m[1],g=Object(n.useState)(""),S=Object(o.a)(g,2),x=S[0],y=S[1],v=Object(n.useState)(!0),w=Object(o.a)(v,2),C=w[0],N=w[1],J=Object(n.useState)(!0),T=Object(o.a)(J,2),k=T[0],D=T[1],E=Object(n.useState)(!0),I=Object(o.a)(E,2),P=I[0],B=I[1],L=Object(n.useRef)(!0),M=Object(n.useRef)(!0),R=Object(n.useRef)(!0),W=Object(n.useState)(window.innerWidth),z=Object(o.a)(W,2),F=z[0],H=z[1];function K(){H(window.innerWidth)}return F>=768?(L.current=!0,M.current=!0,R.current=!0):(L.current=!0,M.current=!1,R.current=!1),Object(n.useEffect)((function(){console.log(" ref change riggered"),N(L.current),D(M.current),B(R.current)}),[L.current,M.current,R.current]),Object(n.useEffect)((function(){return window.addEventListener("resize",K),function(){window.removeEventListener("resize",K)}}),[]),Object(n.useEffect)((function(){var e=setTimeout((function(){y("<html><head><style>".concat(d,"</style></head><body>").concat(s,"</body><script>").concat(f,"<\/script></html>"))}),250);return function(){clearTimeout(e)}}),[s,d,f]),Object(n.useEffect)((function(){localStorage.setItem("codePenData",JSON.stringify([s,d,f]))}),[s,d,f]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"pane-container",children:[Object(u.jsxs)("div",{className:"pane top-pane",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{style:{color:C?"yellow":"white"},onClick:function(){N(!0),D(!1),B(!1)},children:"HTML"}),Object(u.jsx)("button",{style:{color:k?"yellow":"white"},onClick:function(e){N(!1),D(!0),B(!1)},children:"CSS"}),Object(u.jsx)("button",{style:{color:P?"yellow":"white"},onClick:function(e){N(!1),D(!1),B(!0)},children:"JS"})]}),Object(u.jsx)(j,{language:"xml",customStyle:{display:C?"flex":"none"},displayTitle:"HTML",value:s,onChange:l}),Object(u.jsx)(j,{language:"css",customStyle:{display:k?"flex":"none"},displayTitle:"CSS",value:d,onChange:O}),Object(u.jsx)(j,{language:"javascript",customStyle:{display:P?"flex":"none"},displayTitle:"JS",value:f,onChange:h})]}),Object(u.jsx)("div",{className:"pane bottom-pane",children:Object(u.jsx)("iframe",{srcDoc:x,title:"output ",frameBorder:"0",sandbox:"allow-scripts",width:"100%",height:"100%"})})]})})};r.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.60dd31f4.chunk.js.map