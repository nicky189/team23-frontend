(this.webpackJsonpproject4=this.webpackJsonpproject4||[]).push([[0],{118:function(e,t,c){},119:function(e,t,c){},120:function(e,t,c){},121:function(e,t,c){},125:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(0),r=c.n(i),s=c(10),j=c.n(s),l=(c(91),c(15)),a=c(16),d=c(18),h=c(17),b=(c.p,c(78)),O=c(11),o=c(164),x=(c(92),function(){return Object(n.jsxs)("body",{children:[Object(n.jsxs)("div",{class:"sidenav",children:[Object(n.jsx)("h1",{children:"STIM"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Home",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{class:"active",href:"/InventoryList",children:"Inventory"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Alerts",children:"Alerts"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/AddItem",children:"Add Item"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/SubItem",children:"Add SubItem"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Ordering",children:"Ordering"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Metrics",children:"Metrics"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Settings",children:"Settings"})})]})]}),Object(n.jsx)("div",{class:"top",children:Object(n.jsx)("div",{class:"logo",children:Object(n.jsx)("h1",{children:"Inventory List"})})}),Object(n.jsx)("div",{class:"mainContent",children:Object(n.jsxs)(o.a,{striped:!0,bordered:!0,hover:!0,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Item"}),Object(n.jsx)("th",{children:"Quantity"}),Object(n.jsx)("th",{children:"SKU"}),Object(n.jsx)("th",{children:"Available"}),Object(n.jsx)("th",{children:"Incoming"})]})}),Object(n.jsx)("tbody",{children:[{name:"Whipped Cream",quantity:"1 puff",sku:"001",available:550,incoming:0},{name:"Sugar",quantity:"1 gram",sku:"002",available:984,incoming:0},{name:"Coffee Beans",quantity:"100 grams",sku:"003",available:1587,incoming:0},{name:"Chocolate Syrup",quantity:"1 oz",sku:"004",available:58,incoming:128}].map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.quantity}),Object(n.jsx)("td",{children:e.sku}),Object(n.jsx)("td",{children:e.available}),Object(n.jsx)("td",{children:e.incoming})]},t)}))})]})})]})}),u=(c(93),function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(l.a)(this,c),(n=t.call(this,e)).state={data:[]},n}return Object(a.a)(c,[{key:"componentDidMount",value:function(){var e=this;return fetch("http://localhost:8080/getHeaders",{method:"GET",mode:"cors",headers:new Headers({"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*"})}).then((function(e){return e.json()})).then((function(t){console.log(JSON.stringify(t)),e.setState({data:t})})).then(console.log(this.state)).catch((function(e){console.log("Oops!")}))}},{key:"render",value:function(){return Object(n.jsxs)("body",{children:[Object(n.jsxs)("div",{class:"sidenav",children:[Object(n.jsx)("h1",{children:"STIM"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{class:"active",href:"/Home",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/InventoryList",children:"Inventory"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Alerts",children:"Alerts"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/AddItem",children:"Add Item"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/SubItem",children:"Add SubItem"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Ordering",children:"Ordering"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Metrics",children:"Metrics"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Settings",children:"Settings"})})]})]}),Object(n.jsx)("div",{class:"top",children:Object(n.jsx)("div",{class:"logo",children:Object(n.jsx)("h1",{children:"Your Dashboard"})})}),Object(n.jsx)("div",{class:"mainContent",children:Object(n.jsxs)("h1",{class:"dash",children:[Object(n.jsx)("pre",{children:JSON.stringify(this.state.data,null,2)}),"Hello, User!",Object(n.jsxs)("pre",{children:[Object(n.jsxs)("p",{children:["Access Token: ",this.state.data.access_token]}),Object(n.jsxs)("p",{children:["Realm ID: ",this.state.data.realm_id]}),Object(n.jsxs)("p",{children:["Refresh Token: ",this.state.data.refresh_token]})]})]})})]})}}]),c}(i.Component)),f=(c(94),c(28)),m=c(35),v=c(159),p=c(163),g=c(162),I=c(161),S=c(75),y=c.n(S),A=c(76),M=c.n(A),k=c(156),C=Object(k.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)},button:{margin:e.spacing(1)}}}}));var H=function(){var e=C(),t=Object(i.useState)([{subItem:"",amount:""}]),c=Object(m.a)(t,2),r=c[0],s=c[1],j=function(e){e.preventDefault(),alert("Item Added!"),console.log("InputFields",r)},l=function(e,t){var c=Object(f.a)(r);c[e][t.target.name]=t.target.value,s(c)};return Object(n.jsx)(v.a,{children:Object(n.jsxs)("form",{className:e.root,onSubmit:j,children:[r.map((function(e,t){return Object(n.jsxs)("div",{children:[Object(n.jsx)(p.a,{name:"subItem",label:"Sub Item",variant:"filled",value:e.subItem,onChange:function(e){return l(t,e)}}),Object(n.jsx)(p.a,{name:"amount",label:"Amount",variant:"filled",value:e.amount,onChange:function(e){return l(t,e)}}),Object(n.jsx)(I.a,{onClick:function(){return function(e){var t=Object(f.a)(r);t.splice(e,1),s(t)}(t)},children:Object(n.jsx)(y.a,{})}),Object(n.jsx)(I.a,{onClick:function(){s([].concat(Object(f.a)(r),[{subItem:"",amount:""}]))},children:Object(n.jsx)(M.a,{})})]},t)})),Object(n.jsx)(g.a,{className:e.button,variant:"contained",color:"primary",type:"submit",onClick:j,children:"Send"})]})})},T=Object(k.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}}}}));var L=function(){var e=T(),t=Object(i.useState)([{name:"",price:"",sku:""}]),c=Object(m.a)(t,2),r=c[0],s=c[1],j=function(e,t){var c=Object(f.a)(r);c[e][t.target.name]=t.target.value,s(c)};return Object(n.jsx)(v.a,{children:Object(n.jsx)("form",{className:e.root,onSubmit:function(e){e.preventDefault(),console.log("InputFields",r)},children:r.map((function(e,t){return Object(n.jsxs)("div",{children:[Object(n.jsx)(p.a,{name:"name",label:"Name",variant:"filled",value:e.name,onChange:function(e){return j(t,e)}}),Object(n.jsx)(p.a,{name:"price",label:"Price",variant:"filled",value:e.price,onChange:function(e){return j(t,e)}}),Object(n.jsx)(p.a,{name:"sku",label:"SKU",variant:"filled",value:e.sku,onChange:function(e){return j(t,e)}})]},t)}))})})},F=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("body",{children:[Object(n.jsxs)("div",{class:"sidenav",children:[Object(n.jsx)("h1",{children:"STIM"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Home",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/InventoryList",children:"Inventory"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Alerts",children:"Alerts"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{class:"active",href:"/AddItem",children:"Add Item"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/SubItem",children:"Add SubItem"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Ordering",children:"Ordering"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Metrics",children:"Metrics"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Settings",children:"Settings"})})]})]}),Object(n.jsx)("div",{class:"top",children:Object(n.jsx)("div",{class:"logo",children:Object(n.jsx)("h1",{children:"Add Product"})})}),Object(n.jsxs)("div",{class:"boxes",children:[Object(n.jsx)(L,{}),Object(n.jsx)("p",{}),Object(n.jsx)(H,{}),Object(n.jsx)("p",{})]})]})}}]),c}(i.Component),N=(c(99),c(77)),U=c.n(N),D=Object(k.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)},button:{margin:e.spacing(1)}}}}));var q=function(){var e=D(),t=Object(i.useState)([{name:"",sku:"",minUsability:""}]),c=Object(m.a)(t,2),r=c[0],s=c[1],j=function(e){e.preventDefault(),alert("Subitem Added!"),console.log("InputFields",r),U.a.get("http://localhost:8080/testEndPoint").then((function(e){return console.log(e)}))},l=function(e,t){var c=Object(f.a)(r);c[e][t.target.name]=t.target.value,s(c)};return Object(n.jsx)(v.a,{children:Object(n.jsxs)("form",{className:e.root,onSubmit:j,children:[r.map((function(e,t){return Object(n.jsxs)("div",{children:[Object(n.jsx)(p.a,{name:"name",label:"Name",variant:"filled",value:e.name,onChange:function(e){return l(t,e)}}),Object(n.jsx)(p.a,{name:"sku",label:"SKU",variant:"filled",value:e.sku,onChange:function(e){return l(t,e)}}),Object(n.jsx)(p.a,{name:"minUsability",label:"Minimum Usability",variant:"filled",value:e.minUsability,onChange:function(e){return l(t,e)}})]},t)})),Object(n.jsx)(g.a,{className:e.button,variant:"contained",color:"primary",type:"submit",onClick:j,children:"Send"})]})})},w=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(l.a)(this,c);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).onSubmit=function(e){console.log("The User has submitted Sub Item")},e}return Object(a.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("body",{children:[Object(n.jsxs)("div",{class:"sidenav",children:[Object(n.jsx)("h1",{children:"STIM"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Home",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/InventoryList",children:"Inventory"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Alerts",children:"Alerts"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/AddItem",children:"Add Item"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{class:"active",href:"/SubItem",children:"Add SubItem"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Ordering",children:"Ordering"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Metrics",children:"Metrics"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Settings",children:"Settings"})})]})]}),Object(n.jsx)("div",{class:"top",children:Object(n.jsx)("div",{class:"logo",children:Object(n.jsx)("h1",{children:"Add Sub Item"})})}),Object(n.jsx)("div",{class:"boxes",children:Object(n.jsx)(q,{})})]})}}]),c}(i.Component),P=(c(118),function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("body",{children:[Object(n.jsxs)("div",{class:"sidenav",children:[Object(n.jsx)("h1",{children:"STIM"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Home",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/InventoryList",children:"Inventory"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{class:"active",href:"/Alerts",children:"Alerts"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/AddItem",children:"Add Item"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/SubItem",children:"Add SubItem"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Ordering",children:"Ordering"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Metrics",children:"Metrics"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Settings",children:"Settings"})})]})]}),Object(n.jsx)("div",{class:"top",children:Object(n.jsx)("div",{class:"logo",children:Object(n.jsx)("h1",{children:"Alerts"})})})]})}}]),c}(i.Component)),J=(c(119),function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("body",{children:[Object(n.jsxs)("div",{class:"sidenav",children:[Object(n.jsx)("h1",{children:"STIM"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Home",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/InventoryList",children:"Inventory"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Alerts",children:"Alerts"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/AddItem",children:"Add Item"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/SubItem",children:"Add SubItem"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{class:"active",href:"/Ordering",children:"Ordering"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Metrics",children:"Metrics"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Settings",children:"Settings"})})]})]}),Object(n.jsx)("div",{class:"top",children:Object(n.jsx)("div",{class:"logo",children:Object(n.jsx)("h1",{children:"Ordering"})})})]})}}]),c}(i.Component)),B=(c(120),function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("body",{children:[Object(n.jsxs)("div",{class:"sidenav",children:[Object(n.jsx)("h1",{children:"STIM"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Home",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/InventoryList",children:"Inventory"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Alerts",children:"Alerts"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/AddItem",children:"Add Item"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/SubItem",children:"Add SubItem"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Ordering",children:"Ordering"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{class:"active",href:"/Metrics",children:"Metrics"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Settings",children:"Settings"})})]})]}),Object(n.jsx)("div",{class:"top",children:Object(n.jsx)("div",{class:"logo",children:Object(n.jsx)("h1",{children:"Metrics"})})})]})}}]),c}(i.Component)),E=(c(121),function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("body",{children:[Object(n.jsxs)("div",{class:"sidenav",children:[Object(n.jsx)("h1",{children:"STIM"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Home",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/InventoryList",children:"Inventory"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Alerts",children:"Alerts"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/AddItem",children:"Add Item"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/SubItem",children:"Add SubItem"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Ordering",children:"Ordering"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Metrics",children:"Metrics"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{class:"active",href:"/Settings",children:"Settings"})})]})]}),Object(n.jsx)("div",{class:"top",children:Object(n.jsx)("div",{class:"logo",children:Object(n.jsx)("h1",{children:"Settings"})})})]})}}]),c}(i.Component)),K=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return Object(n.jsx)(b.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)(O.c,{children:[Object(n.jsx)(O.a,{path:"/Home",component:u}),Object(n.jsx)(O.a,{path:"/AddItem",component:F}),Object(n.jsx)(O.a,{path:"/InventoryList",component:x}),Object(n.jsx)(O.a,{path:"/SubItem",component:w}),Object(n.jsx)(O.a,{path:"/Alerts",component:P}),Object(n.jsx)(O.a,{path:"/Ordering",component:J}),Object(n.jsx)(O.a,{path:"/Metrics",component:B}),Object(n.jsx)(O.a,{path:"/Settings",component:E})]})})})}}]),c}(i.Component),_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,166)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))};c(124);j.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(K,{})}),document.getElementById("root")),_()},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},99:function(e,t,c){}},[[125,1,2]]]);
//# sourceMappingURL=main.d36560fa.chunk.js.map