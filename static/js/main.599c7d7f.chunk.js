(this["webpackJsonpwebsite-reactjs"]=this["webpackJsonpwebsite-reactjs"]||[]).push([[0],{30:function(e,A,t){},31:function(e,A,t){},33:function(e,A,t){},34:function(e,A,t){},35:function(e,A,t){},42:function(e,A,t){},43:function(e,A,t){"use strict";t.r(A);var c=t(1),s=t.n(c),n=t(22),a=t.n(n),r=(t(30),t(31),t(4)),i=t(2),o=t(14),l=t(3),j=t(25);function b(e){var A=e.toString(16);return 1===A.length?"0"+A:A}var u=function(e,A,t){return"#"+b(e)+b(A)+b(t)},g=t(0),d=function(e){var A=e.rgb,t=e.weight,s=e.hexColor,n=Object(c.useState)(!1),a=Object(l.a)(n,2),r=a[0],i=a[1],o=A.join(","),b=u.apply(void 0,Object(j.a)(A)),d="#".concat(s);return Object(c.useEffect)((function(){var e=setTimeout((function(){i(!1)}),3e3);return function(){return clearTimeout(e)}}),[r]),Object(g.jsxs)("article",{className:"color",style:{backgroundColor:"rgb(".concat(o,")")},onClick:function(){i(!0),navigator.clipboard.writeText(b)},children:[Object(g.jsxs)("p",{className:"color-p percent-value",children:[t,"%"]}),Object(g.jsx)("p",{className:"color-p color-value",children:d}),r&&Object(g.jsx)("p",{className:"alert",children:"copied to clipboard"})]})},h=t(19),O=t.n(h);t(33);var Q=function(){var e=Object(c.useState)(""),A=Object(l.a)(e,2),t=A[0],s=A[1],n=Object(c.useState)(10),a=Object(l.a)(n,2),r=a[0],i=a[1],j=Object(c.useState)(!1),b=Object(l.a)(j,2),u=b[0],h=b[1],Q=Object(c.useState)(new O.a("#25f162").all(r)),x=Object(l.a)(Q,2),C=x[0],m=x[1];return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"color-container",children:[Object(g.jsxs)("section",{className:"content",children:[Object(g.jsx)("h3",{className:"color-h3",children:"color generator"}),Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault();try{h(!1);var A=new O.a(t).all(r);m(A)}catch(u){h(!0)}},children:[Object(g.jsx)("input",{type:"text",value:t,onChange:function(e){s(e.target.value)},placeholder:"#25f162",className:"".concat(u?"input error":"input")}),Object(g.jsx)("input",{type:"number",onChange:function(e){i(e.target.value)},placeholder:"working on this",className:"input"}),Object(g.jsx)("button",{className:"submenu-btn",type:"submit",children:"Submit"})]})]}),Object(g.jsx)("section",{className:"colors",children:C.map((function(e,A){return Object(g.jsx)(d,Object(o.a)(Object(o.a)({},e),{},{hexColor:e.hex}),A)}))})]})})},x=(t(34),t.p+"static/media/logo.4658afbd.svg"),C=t(6),m=[{page:"products",links:[{label:"payment",icon:Object(g.jsx)(C.d,{}),url:"/products"},{label:"terminal",icon:Object(g.jsx)(C.d,{}),url:"/products"},{label:"connect",icon:Object(g.jsx)(C.d,{}),url:"/products"}]},{page:"developers",links:[{label:"plugins",icon:Object(g.jsx)(C.b,{}),url:"/products"},{label:"libraries",icon:Object(g.jsx)(C.b,{}),url:"/products"},{label:"help",icon:Object(g.jsx)(C.b,{}),url:"/products"},{label:"billing",icon:Object(g.jsx)(C.b,{}),url:"/products"}]},{page:"company",links:[{label:"about",icon:Object(g.jsx)(C.c,{}),url:"/products"},{label:"customers",icon:Object(g.jsx)(C.c,{}),url:"/products"}]}],p=s.a.createContext(),f=function(e){var A=e.children,t=Object(c.useState)(!1),s=Object(l.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)(!1),i=Object(l.a)(r,2),o=i[0],j=i[1],b=Object(c.useState)({page:"",links:[]}),u=Object(l.a)(b,2),d=u[0],h=u[1],O=Object(c.useState)({}),Q=Object(l.a)(O,2),x=Q[0],C=Q[1];return Object(g.jsx)(p.Provider,{value:{isSidebarOpen:n,openSidebar:function(){a(!0)},closeSidebar:function(){a(!1)},isSubmenuOpen:o,openSubmenu:function(e,A){var t=m.find((function(A){return A.page===e}));h(t),C(A),j(!0)},closeSubmenu:function(){j(!1)},page:d,location:x},children:A})},B=function(){return Object(c.useContext)(p)},k=function(){var e=B(),A=e.openSidebar,t=e.openSubmenu,c=e.closeSubmenu,s=function(e){var A=e.target.textContent,c=e.target.getBoundingClientRect(),s=(c.left+c.right)/2,n=c.bottom-3;t(A,{center:s,bottom:n})};return Object(g.jsx)("nav",{className:"sub-nav",onMouseOver:function(e){e.target.classList.contains("sub-link-btn")||c()},children:Object(g.jsxs)("div",{className:"sub-nav-center",children:[Object(g.jsxs)("div",{className:"sub-nav-header",children:[Object(g.jsx)("img",{src:x,className:"sub-nav-logo",alt:""}),Object(g.jsx)("button",{className:"sub-btn sub-toggle-btn",onClick:A,children:Object(g.jsx)(C.a,{})})]}),Object(g.jsxs)("ul",{className:"sub-nav-links",children:[Object(g.jsx)("li",{children:Object(g.jsx)("button",{className:"sub-link-btn",onMouseOver:s,children:"products"})}),Object(g.jsx)("li",{children:Object(g.jsx)("button",{className:"sub-link-btn",onMouseOver:s,children:"developers"})}),Object(g.jsx)("li",{children:Object(g.jsx)("button",{className:"sub-link-btn",onMouseOver:s,children:"company"})})]}),Object(g.jsx)("button",{className:"sub-btn sub-signin-btn",children:"Sign in"})]})})},I=t.p+"static/media/phone.ae907e63.svg",w=function(){var e=B().closeSubmenu;return Object(g.jsx)("section",{className:"sub-hero",onMouseOver:e,children:Object(g.jsxs)("div",{className:"sub-hero-center",children:[Object(g.jsxs)("article",{className:"sub-hero-info",children:[Object(g.jsxs)("h1",{className:"sub-h1",children:["Payments infrastructure ",Object(g.jsx)("br",{}),"for the internet"]}),Object(g.jsx)("p",{className:"sub-p",children:"Millions of companies of all sizes\u2014from startups to Fortune 500s\u2014use Stripe\u2019s software and APIs to accept payments, send payouts, and manage their businesses online."}),Object(g.jsx)("button",{className:"sub-btn",children:"Start now"})]}),Object(g.jsx)("article",{className:"sub-hero-images",children:Object(g.jsx)("img",{src:I,className:"sub-phone-img",alt:"phone"})})]})})},v=function(){var e=B(),A=e.isSidebarOpen,t=e.closeSidebar;return Object(g.jsx)("div",{className:"".concat(A?"sub-sidebar-wrapper show":"sub-sidebar-wrapper"),children:Object(g.jsxs)("aside",{className:"sub-sidebar",children:[Object(g.jsx)("button",{className:"sub-close-btn",onClick:t,children:Object(g.jsx)(C.e,{})}),Object(g.jsx)("div",{className:"sub-sidebar-links",children:m.map((function(e,A){var t=e.links,c=e.page;return Object(g.jsxs)("article",{children:[Object(g.jsx)("h4",{className:"sub-h4",children:c}),Object(g.jsx)("div",{className:"sub-sidebar-sublinks",children:t.map((function(e,A){var t=e.url,c=e.icon,s=e.label;return Object(g.jsxs)("a",{href:t,children:[c,s]},A)}))})]},A)}))})]})})},E=function(){var e=B(),A=e.isSubmenuOpen,t=e.page,s=t.page,n=t.links,a=e.location,r=Object(c.useRef)(null),i=Object(c.useState)("col-2"),o=Object(l.a)(i,2),j=o[0],b=o[1];return Object(c.useEffect)((function(){b("sub-col-2");var e=r.current,A=a.center,t=a.bottom;e.style.left="".concat(A,"px"),e.style.top="".concat(t,"px"),3===n.length&&b("sub-col-3"),n.length>3&&b("sub-col-4")}),[s,a,n]),Object(g.jsx)("aside",{className:"".concat(A?"sub-submenu show":"sub-submenu"),ref:r,children:Object(g.jsxs)("section",{children:[Object(g.jsx)("h4",{className:"sub-h4",children:s}),Object(g.jsx)("div",{className:"sub-submenu-center ".concat(j),children:n.map((function(e,A){var t=e.url,c=e.icon,s=e.label;return Object(g.jsxs)("a",{href:t,children:[c,s]},A)}))})]})})};var N=function(){return Object(g.jsx)("div",{className:"sub-container",children:Object(g.jsxs)(f,{children:[Object(g.jsx)(k,{}),Object(g.jsx)(v,{}),Object(g.jsx)(w,{}),Object(g.jsx)(E,{})]})})},D=(t(35),t(11)),F=t.n(D),H=t(16),P=s.a.createContext(),L=function(e){var A=e.children,t="abcdefghijklmnopqrstuvwxyz",s=t.charAt(Math.floor(Math.random()*t.length)),n=Object(c.useState)(!0),a=Object(l.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(s),j=Object(l.a)(o,2),b=j[0],u=j[1],d=Object(c.useState)([]),h=Object(l.a)(d,2),O=h[0],Q=h[1],x=Object(c.useCallback)(Object(H.a)(F.a.mark((function e(){var A,t,c,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").concat(b));case 4:return A=e.sent,e.next=7,A.json();case 7:t=e.sent,(c=t.drinks)?(s=c.map((function(e){return{id:e.idDrink,name:e.strDrink,image:e.strDrinkThumb,info:e.strAlcoholic,glass:e.strGlass}})),Q(s)):Q([]),i(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0),i(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])}))),[b]);return Object(c.useEffect)((function(){x()}),[b,x]),Object(g.jsx)(P.Provider,{value:{loading:r,cocktails:O,searchTerm:b,setSearchTerm:u},children:A})},M=function(){return Object(c.useContext)(P)},y=function(e){var A=e.image,t=e.name,c=e.id,s=e.info,n=e.glass;return Object(g.jsxs)("article",{className:"cocktail",children:[Object(g.jsx)("div",{className:"img-container",children:Object(g.jsx)("img",{src:A,alt:t})}),Object(g.jsxs)("div",{className:"cocktail-footer",children:[Object(g.jsx)("h3",{children:t}),Object(g.jsx)("h4",{children:n}),Object(g.jsx)("p",{children:s}),Object(g.jsx)(r.b,{to:"/website-reactjs/cocktails/cocktail/".concat(c),className:"btn btn-primary btn-details",children:"details"})]})]})},R=function(){return Object(g.jsx)("div",{className:"loader"})},S=function(){var e=M(),A=e.cocktails;return e.loading?Object(g.jsx)(R,{}):A.length<1?Object(g.jsx)("h2",{className:"section-title",children:"no cocktails matched your search criteria"}):Object(g.jsxs)("section",{className:"section",children:[Object(g.jsx)("h2",{className:"section-title",children:"cocktails"}),Object(g.jsx)("div",{className:"cocktails-center",children:A.map((function(e){return Object(g.jsx)(y,Object(o.a)({},e),e.id)}))})]})},J=function(){var e=M().setSearchTerm,A=s.a.useRef("");s.a.useEffect((function(){A.current.focus()}),[]);return Object(g.jsx)("section",{className:"section search",children:Object(g.jsx)("form",{className:"search-form",onSubmit:function(e){e.preventDefault()},children:Object(g.jsxs)("div",{className:"form-control",children:[Object(g.jsx)("label",{htmlFor:"name",children:"search your favorite cocktail"}),Object(g.jsx)("input",{type:"text",name:"name",id:"name",ref:A,onChange:function(){e(A.current.value)}})]})})})},W=function(){return Object(g.jsxs)("main",{children:[Object(g.jsx)(J,{}),Object(g.jsx)(S,{})]})},Y=function(){return Object(g.jsxs)("div",{className:"section about-section",children:[Object(g.jsx)("h1",{className:"section-title",children:"about us"}),Object(g.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae architecto qui adipisci in officiis, aperiam sequi atque perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione hic aspernatur error blanditiis?"})]})},G="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=",T=function(){var e=Object(i.f)().id,A=s.a.useState(!1),t=Object(l.a)(A,2),c=t[0],n=t[1],a=s.a.useState(null),o=Object(l.a)(a,2),j=o[0],b=o[1];if(s.a.useEffect((function(){function A(){return(A=Object(H.a)(F.a.mark((function A(){var t,c,s,a,r,i,o,l,j,u,g,d,h,O;return F.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,fetch("".concat(G).concat(e));case 3:return t=A.sent,A.next=6,t.json();case 6:(c=A.sent).drinks?(s=c.drinks[0],a=s.strDrink,r=s.strDrinkThumb,i=s.strAlcoholic,o=s.strCategory,l=s.strGlass,j=s.strInstructions,u=s.strIngredient1,g=s.strIngredient2,d=s.strIngredient3,h=s.strIngredient4,O=s.strIngredient5,b({name:a,image:r,info:i,category:o,glass:l,instructions:j,ingredients:[u,g,d,h,O]})):b(null),A.next=13;break;case 10:A.prev=10,A.t0=A.catch(0),console.log(A.t0);case 13:n(!1);case 14:case"end":return A.stop()}}),A,null,[[0,10]])})))).apply(this,arguments)}n(!0),function(){A.apply(this,arguments)}()}),[e]),c)return Object(g.jsx)(R,{});if(j){var u=j.name,d=j.image,h=j.category,O=j.info,Q=j.glass,x=j.instructions,C=j.ingredients;return Object(g.jsxs)("section",{className:"section cocktail-section",children:[Object(g.jsx)(r.b,{to:"/website-reactjs/cocktails",className:"btn btn-primary",children:"back home"}),Object(g.jsx)("h2",{className:"section-title",children:u}),Object(g.jsxs)("div",{className:"drink",children:[Object(g.jsx)("img",{src:d,alt:u}),Object(g.jsxs)("div",{className:"drink-info",children:[Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"drink-data",children:"name :"})," ",u]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"drink-data",children:"category :"})," ",h]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"drink-data",children:"info :"})," ",O]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"drink-data",children:"glass :"})," ",Q]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"drink-data",children:"instructions :"})," ",x]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"drink-data",children:"ingredients :"}),C.map((function(e,A){return e?Object(g.jsxs)("span",{children:[e,","]},A):null}))]})]})]})]})}return Object(g.jsx)("h2",{className:"section-title",children:"no cocktail to display"})},U=t.p+"static/media/logo.5bb3b58e.svg",q=function(){return Object(g.jsx)("nav",{className:"navbar",children:Object(g.jsxs)("div",{className:"nav-center",children:[Object(g.jsx)(r.b,{to:"/website-reactjs/cocktails",children:Object(g.jsx)("img",{src:U,alt:"logo",className:"logo"})}),Object(g.jsxs)("ul",{className:"nav-links",children:[Object(g.jsx)("li",{children:Object(g.jsx)(r.b,{to:"/website-reactjs/cocktails",children:"Home"})}),Object(g.jsx)("li",{children:Object(g.jsx)(r.b,{to:"/website-reactjs/cocktails/about",children:"About"})})]})]})})};var z=function(){return Object(g.jsx)(L,{children:Object(g.jsxs)(r.a,{children:[Object(g.jsx)(q,{}),Object(g.jsxs)(i.c,{children:[Object(g.jsx)(i.a,{exact:!0,path:"/website-reactjs/cocktails",children:Object(g.jsx)(W,{})}),Object(g.jsx)(i.a,{exact:!0,path:"/website-reactjs/cocktails/about",children:Object(g.jsx)(Y,{})}),Object(g.jsx)(i.a,{exact:!0,path:"/website-reactjs/cocktails/cocktail/:id",children:Object(g.jsx)(T,{})})]})]})})},K=(t(42),t.p+"static/media/logo.6ce24c58.svg"),X=t.p+"static/media/color.a101893b.png",Z=t.p+"static/media/stripe.3d11080e.png",V=t.p+"static/media/cocktail.9c99ae01.png",_=K,$=X,ee=Z,Ae=V;function te(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"home-container",children:[Object(g.jsxs)("div",{className:"home-header",children:[Object(g.jsx)("img",{src:_,alt:"logo",className:"home-logo"}),Object(g.jsx)("h3",{className:"home-title",children:"React js Projects:"})]}),Object(g.jsx)("div",{className:"underline"}),Object(g.jsxs)("div",{className:"home-main-container",children:[Object(g.jsx)(r.b,{to:"/website-reactjs/cocktails",children:Object(g.jsxs)("div",{className:"home-card",children:[Object(g.jsx)("img",{className:"home-project-logo",src:Ae,alt:"stripe",style:{width:"100%"}}),Object(g.jsx)("h4",{className:"home-project-title",children:"Cocktails"})]})}),Object(g.jsx)(r.b,{to:"/website-reactjs/stripe",children:Object(g.jsxs)("div",{className:"home-card",children:[Object(g.jsx)("img",{className:"home-project-logo",src:ee,alt:"stripe",style:{width:"100%"}}),Object(g.jsx)("h4",{className:"home-project-title",children:"Stripe SubMenu"})]})}),Object(g.jsx)(r.b,{to:"/website-reactjs/color",children:Object(g.jsxs)("div",{className:"home-card",children:[Object(g.jsx)("img",{className:"home-project-logo",src:$,alt:"Color",style:{width:"100%"}}),Object(g.jsx)("h4",{className:"home-project-title",children:"Color Generator"})]})})]}),Object(g.jsx)("footer",{children:Object(g.jsx)("a",{target:"_blank",href:"https://github.com/Ulrich-Tonmoy/website-reactjs",rel:"noreferrer",children:Object(g.jsx)("h4",{children:"Github"})})})]})})}var ce=function(){return Object(g.jsx)("div",{className:"error-page section",children:Object(g.jsxs)("div",{className:"error-container",children:[Object(g.jsx)("h1",{children:"oops! it's a dead end"}),Object(g.jsx)(r.b,{to:"/website-reactjs",className:"btn btn-primary",children:"back home"})]})})};var se=function(){return Object(g.jsxs)(r.a,{children:[Object(g.jsx)(r.b,{to:"/website-reactjs/",children:Object(g.jsx)("img",{src:"data:image/png;base64,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Cazi6ieB7A5iaFm/johDzwv0anzsfvDxOz4vRAyP8Wb9tZ0HgMuMX7j/wFmUWuuXEfEghsX+TttpurMe/3c/IqLWehRDKPj3Ze9qBj2ZS7DdagcAsqq1flxrfVJrfRsRzyPiH2Hx34Y7MXwvn9da39Zan9VaP249FCyBAAC3MC78zyLij4h4FBb9XboTw87AH4IA3J4AABuotX5Ua/0uhoV/v/E4Ge3HEAS+G7tEwA0JAHBDtdZPI+K3iHjcehbicUT8Nv5MgBsQAOAGaq1fx7D4rxqPwnurGELA160HgZ4IAHBN41n/09ZzcKGnYzfAkQBcgwAAVxjP+1+Hs/4e7EfEKyEAriYAwCXGheRVjDesogt7IQTAlQQAuNzPYfHv0V4MwQ24gAAAFxjP/Net52Bje+PPEPgAAQA+YLyd737rObi1fa8OgA8TAOCM8TXl2v7L8dR9AuA8AQDOex5u6bs0z1sPAHMjAMAJ43ax0t/y7DkKgNMEABiNLxtze9/leuylgfCeAADveTe/ZbsTw88YCAEAIuLd1f+3redg5761CwADAQAG++HqP4M74eWdEBECABxz9Z+HnzWEAADHr/tftZ6DyazcFwAEAIiI+EfrAZjcV60HgNYEAIh40HoAJrduPQC0JgCQ2tgId+OffPa8GoDsBACys/jn5WdPagIA2VkE8lq3HgBaEgDI7m+tB6AZP3tSEwDIzg5AXqvWA0BLAgAAJCQAAFmtWg8ALQkAQFar1gNASwIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACQkAABAQgIAACT019YD0NxerfVl6yEa2ms9AO147JOZAMCdiFi3HgIaWbceAFpxBAAACQkAAJCQAAAACQkAAJCQAAAACQkAAJCQAAAACQkAAJCQAAAACQkAAJCQAAAACQkAAJCQAAAACQkAAJCQAAAACQkAAJCQAAAACQkAAJCQAAAACQkAAJCQAAAACQkAAJCQAAAACQkAAJCQAAAACQkAAJCQAAAACQkAAJCQAAAACQkAAJCQAAAACQkAAJCQAAAACQkAAJBQaT1Aa7XWjyLi/1rPAcCk/qeU8mfrIVpKHwAiImqttfUMAEynlJJ+/XMEMDhoPQAAkzloPcAcCACDw9YDADAZz/khABx72XoAACbjOT90AN7RAwDIwfn/wA7Aey9aDwDAznmuHwkA7/279QAA7Jzn+pFtkBNqrW8j4k7rOQDYiaNSyv+2HmIu7ACc9qT1AADsjOf4E+wAnDDeFfCPsAsAsDRHEfFJ9rv/nWQH4ITxgSEhAizPE4v/aXYAzhh3AX6LiFXjUQDYjjcRcVcAOM0OwBnjA+Sb1nMAsDXfWPzPEwA+oJTyS3itKMAS/DQ+p3OGI4ALOAoA6N5hRNx39f9hdgAuMD5gvoihOQpAX44i4qHF/2ICwCVKKb9HxMPWcwBwY1+Mz+FcQAC4wnh2JAQA9ONhKeXX1kPMnQ7ANdVav4yI563nAOBSD0sp/2o9RA8EgBuotX4WET+HOwUCzM1RDIU/2/7X5AjgBsYtpfsxNEsBmIfDGG70Y/G/AQHghsYH2P2I+KH1LADED6WUe6WU/7YepDeOAG5hPBJ4GhF7rWcBSOYwhjv8KfttyA7ALZRSfi2l3IvhVQJvGo8DkMGbGIp+9yz+t2MHYIvGVwp8G3YEALbtMIZ39NPw3xIBYAdqrZ9GxFcRsQ5hAGBThxFxEBHPFPy2TwDYsVrrxzEEgXsxhIFVeH8BgLPejB+HEfE6Ig4U+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoIH/B1uF/HDvsBeAAAAAAElFTkSuQmCC",alt:"home",className:"home"})}),Object(g.jsxs)(i.c,{children:[Object(g.jsx)(i.a,{exact:!0,path:"/website-reactjs/",children:Object(g.jsx)(te,{})}),Object(g.jsx)(i.a,{exact:!0,path:"/website-reactjs/color",children:Object(g.jsx)(Q,{})}),Object(g.jsx)(i.a,{exact:!0,path:"/website-reactjs/stripe",children:Object(g.jsx)(N,{})}),Object(g.jsx)(i.a,{exact:!0,path:"/website-reactjs/cocktails",children:Object(g.jsx)(z,{})}),Object(g.jsx)(i.a,{exact:!0,path:"*",children:Object(g.jsx)(ce,{})})]})]})},ne=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(A){var t=A.getCLS,c=A.getFID,s=A.getFCP,n=A.getLCP,a=A.getTTFB;t(e),c(e),s(e),n(e),a(e)}))};a.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(se,{})}),document.getElementById("root")),ne()}},[[43,1,2]]]);
//# sourceMappingURL=main.599c7d7f.chunk.js.map