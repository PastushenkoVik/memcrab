(this.webpackJsonpmemcrab=this.webpackJsonpmemcrab||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,a){e.exports=a(42)},,,,,,,,,,,function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),u=a.n(o),c=a(2),i=a(1),m=a(3),l=a(12),s="SET::COLUMNS::NUMBER",b="SET::HIGLIGHT::CELLS::NNUMBER",f="SET::MATRIX",h="SET::ROWS::NUMBER",p=function(e){return{payload:e,type:s}},g=function(e){return{payload:e,type:f}},N=function(e){return Math.abs(Math.floor(Number(e)))};var d=Object(m.createStore)((function(e,t){var a=s,n=h,r=b,o=f;switch(t.type){case o:return Object(i.a)(Object(i.a)({},e),{},{matrix:t.payload});case a:return Object(i.a)(Object(i.a)({},e),{},{columnsNumber:N(t.payload)});case n:return Object(i.a)(Object(i.a)({},e),{},{rowsNumber:N(t.payload)});case r:return Object(i.a)(Object(i.a)({},e),{},{highlightCellsNumber:N(t.payload)>e.columnsNumber*e.rowsNumber?e.columnsNumber*e.rowsNumber:N(t.payload)});default:return e}}),{columnsNumber:0,highlightCellsNumber:0,matrix:[],rowsNumber:0},Object(l.devToolsEnhancer)(p())),v=(a(26),a(9)),E=a.n(v),x=a(14),y=(a(35),Object(c.b)((function(e,t){return{Amount:t.matrixItem.Amount,ID:t.matrixItem.ID,highlightCellsNumber:e.highlightCellsNumber+1,isHiglight:t.matrixItem.isHiglight,matrix:e.matrix,percentage:t.percentage}}))((function(e){var t=e.matrix,a=e.Amount,o=e.highlightCellsNumber,u=e.ID,c=e.isHiglight,m=e.percentage,l=Object(n.useState)(!1),s=Object(x.a)(l,2),b=s[0],f=s[1],h=function(e){return"".concat(Number(100*e).toFixed(1),"%")},p={backgroundImage:"linear-gradient(to right, orange 0% ".concat(h(m),", lemonchiffon ").concat(h(m)," 100%)")};return r.a.createElement("button",{type:"button",className:"matrix__item ".concat(c?"matrix__item_higlight":""),style:b?p:{},onClick:function(){return e=u,void d.dispatch(g(t.map((function(t){return t.ID===e?Object(i.a)(Object(i.a)({},t),{},{Amount:t.Amount+1}):t}))));var e},onMouseEnter:function(){f(!0);var e=t.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{amountDelta:Math.abs(e.Amount-a)})})).sort((function(e,t){return e.amountDelta<t.amountDelta?-1:e.amountDelta>t.amountDelta?1:0})).slice(1,o);d.dispatch(g(t.map((function(t){return e.some((function(e){return e.ID===t.ID}))?Object(i.a)(Object(i.a)({},t),{},{isHiglight:!0}):Object(i.a)(Object(i.a)({},t),{},{isHiglight:!1})}))))},onMouseLeave:function(){f(!1),d.dispatch(g(t.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{isHiglight:!1})}))))}},b?r.a.createElement("span",{className:"matrix__button-text"},h(m)):r.a.createElement("span",{className:"matrix__button-text"},a))}))),j=(a(36),function(e){var t=e.amount;return r.a.createElement("div",{className:"matrix__row-sum"},t)});j.defaultProps={amount:0};var O=j,w=(a(37),function(e){var t=e.amount;return r.a.createElement("div",{className:"matrix__column-average"},t)}),I=(a(38),function(e,t){return{Amount:Math.floor(1e3*Math.random()),ID:t,isHiglight:!1}}),A=Object(c.b)((function(e){return{columnsNumber:e.columnsNumber,matrix:e.matrix,rowsNumber:e.rowsNumber}}))((function(e){var t=e.columnsNumber,a=e.matrix,o=e.rowsNumber;Object(n.useEffect)((function(){var e=Array(t*o).fill(0).map(I);d.dispatch(g(e))}),[t,o]);var u={gridTemplateColumns:"repeat(".concat(t+1,", 1fr)"),gridTemplateRows:"repeat(".concat(o+1,", 1fr)")},c=Array(o).fill(0).map((function(e,n){return a.reduce((function(e,a,r){return r>=n*t&&r<(n+1)*t?e+a.Amount:e}),0)})),i=[];return c.length&&(i=Array(t).fill(0).map((function(e,n){for(var r=0,u=n;u<=t*o-1;u+=t)r+="undefined"===typeof a[u]?0:a[u].Amount;return Math.floor(r/o)}))),r.a.createElement("div",{className:"matrix",style:u},a.map((function(e,a){return a%t===t-1?r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{key:e.ID,matrixItem:e,percentage:e.Amount/c[Math.floor(a/t)]}),r.a.createElement(O,{key:E.a.generate(),amount:c[Math.floor(a/t)]})):r.a.createElement(y,{key:e.ID,matrixItem:e,percentage:e.Amount/c[Math.floor(a/t)]})})),i.map((function(e){return r.a.createElement(w,{key:E.a.generate(),amount:e})})))})),M=(a(39),function(e){var t=e.inputLabel,a=e.inputHandler,n=e.val,o=t.split(" ").join("-").toLowerCase();return r.a.createElement("label",{htmlFor:o,className:"main-form__label"},t,r.a.createElement("input",{id:o,className:"main-form__input",type:"number",onChange:function(e){return t=e.target.value,d.dispatch(a(t));var t},value:n}))}),_=(a(40),[{action:function(e){return{payload:e,type:h}},text:"Row Number"},{action:p,text:"Column Number"},{action:function(e){return{payload:e,type:b}},text:"Higlight Cell Number"}]),C=function(e){return r.a.createElement(M,{key:e.text.split(" ").join(""),inputLabel:e.text,inputHandler:e.action,val:e.value})},D=Object(c.b)((function(e){return{columnsNumber:e.columnsNumber,highlightCellsNumber:e.highlightCellsNumber,rowsNumber:e.rowsNumber}}))((function(e){var t=e.columnsNumber,a=e.highlightCellsNumber,n=e.rowsNumber;return _[0].value=n,_[1].value=t,_[2].value=a,r.a.createElement("form",{className:"main-form"},_.map(C))})),H=a(13),k=a.n(H);a(41);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:k.a,className:"App-logo",alt:"logo"}),r.a.createElement(D,null)),r.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:d},r.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.a4768b95.chunk.js.map