(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__nAUxi",total:"Cart_total__FU29f",actions:"Cart_actions__2TQ5D","button--alt":"Cart_button--alt__RMbg6",button:"Cart_button__Dk2Gr"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2fd9I",summary:"CartItem_summary__1jzVf",price:"CartItem_price__KHQwd",amount:"CartItem_amount__olxzu",actions:"CartItem_actions__zGmKZ"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__31s5N",icon:"HeaderCartButton_icon__dAHG4",badge:"HeaderCartButton_badge__Iwmfa",bump:"HeaderCartButton_bump__1_XHx"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__piwtX",description:"MealItem_description__2jPDI",price:"MealItem_price__3PuSx"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3RIqn",modal:"Modal_modal__2F7Lr","slide-down":"Modal_slide-down__VRzXQ"}},function(e,t,n){e.exports={header:"Header_header__1PrfE","main-image":"Header_main-image__15uRG"}},,,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__2Y4fG","meals-appear":"AvailableMeals_meals-appear__25ziK"}},function(e,t,n){e.exports={card:"Card_card__3inew"}},function(e,t,n){e.exports={form:"MealItemForm_form__3kG1C"}},function(e,t,n){e.exports={input:"Input_input__12pYC"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__3G5Xv"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(15),c=n.n(a),i=(n(28),n(3)),r=n(1),o=n.n(r),s=n(7),l=n.n(s),m=n(0),u=function(e){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:e.className,children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},d=o.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),j=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useContext)(d).items,s=o.reduce((function(e,t){return e+ +t.amount}),0),j="".concat(l.a.button,"  ").concat(a?l.a.bump:"");return Object(r.useEffect)((function(){if(0!==o.length){c(!0);var e=setTimeout((function(){c(!1),console.log("resetted ")}),300);return function(){console.log("ran"),clearTimeout(e)}}}),[o]),Object(m.jsxs)("button",{onClick:e.onClick,className:j,children:[Object(m.jsx)(u,{className:l.a.icon}),"Your Cart",Object(m.jsx)("span",{className:l.a.badge,children:s})]})},b=n(12),x=n.n(b),O=n.p+"static/media/meals.2971f633.jpg",_=function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("header",{className:x.a.header,children:[Object(m.jsx)("h2",{className:"logo",href:"/",children:"ReactMeals"}),Object(m.jsx)(j,{onClick:e.onShowCart})]}),Object(m.jsx)("div",{className:x.a["main-image"],children:Object(m.jsx)("img",{src:O,alt:""})})]})},p=n(16),h=n.n(p),f=n(17),C=n.n(f),v=function(e){return Object(m.jsx)("div",{className:"".concat(C.a.card," ").concat(e.className?e.className:""),children:e.children})},g=n(10),A=n.n(g),N=n(18),I=n.n(N),y=n(2),M=n(19),w=n.n(M),R=o.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:w.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(y.a)({ref:t,onChange:e.onChange},e.input))]})})),k=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useRef)();return Object(m.jsxs)("form",{className:I.a.form,onSubmit:function(t){t.preventDefault();var n=o.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(m.jsx)(R,{ref:o,input:{type:"number",id:"amount_"+e.id,min:"-10",max:"5",step:"1",defaultValue:"1"},label:"Amount"}),Object(m.jsx)("button",{type:"submit",children:"+ Add"}),!a&&Object(m.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},H=function(e){var t=Object(r.useContext)(d),n="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:A.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("p",{className:A.a.description,children:e.description}),Object(m.jsx)("span",{className:A.a.price,children:n})]}),Object(m.jsx)("div",{children:Object(m.jsx)(k,{onAddToCart:function(n){var a={id:e.id,price:e.price,amount:n,name:e.name};t.addItem(a)},id:e.id})})]})},T=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],E=function(e){var t=T.map((function(e){return Object(m.jsx)(H,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(m.jsx)("section",{className:h.a.meals,children:Object(m.jsx)(v,{children:Object(m.jsx)("ul",{children:t})})})},F=n(20),B=n.n(F),D=function(){return Object(m.jsxs)("section",{className:B.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},S=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(D,{}),Object(m.jsx)(E,{})]})},z=n(4),G=n.n(z),P=n(5),V=n.n(P),X=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:V.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:V.a.summary,children:[Object(m.jsx)("span",{className:V.a.price,children:t}),Object(m.jsxs)("span",{className:V.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:V.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Y=n(11),K=n.n(Y),Q=n(8),$=n.n(Q),q=function(e){return Object(m.jsx)("div",{className:K.a.backdrop,onClick:e.onClose})},J=function(e){return Object(m.jsx)(v,{className:K.a.modal,children:Object(m.jsx)("div",{className:K.a.content,children:e.children})})},U=document.getElementById("overlays"),L=function(e){return Object(m.jsxs)(m.Fragment,{children:[$.a.createPortal(Object(m.jsx)(q,{onClose:e.onClose}),U),$.a.createPortal(Object(m.jsx)(J,{children:e.children}),U)]})},Z=function(e){var t=Object(r.useContext)(d),n=function(e){t.addItem(Object(y.a)(Object(y.a)({},e),{},{amount:1}))},a=function(e){t.removeItem(e)},c=t.items,i="$".concat(t.totalAmount.toFixed(2)),o=t.items>0;console.log(t.totalAmount,"Errror");var s=c.map((function(e){return Object(m.jsx)(X,{price:e.price,name:e.name,amount:e.amount,onRemove:a.bind(null,e.id),onAdd:n.bind(null,e)},e.id)}));return Object(m.jsxs)(L,{onClose:e.onClose,children:[Object(m.jsx)("ul",{className:G.a["cart-items"],children:s}),Object(m.jsxs)("div",{className:G.a.total,children:[Object(m.jsx)("h2",{children:"Total Amount"}),Object(m.jsx)("span",{children:i})]}),Object(m.jsxs)("div",{className:G.a.actions,children:[Object(m.jsx)("button",{onClick:e.onClose,className:G.a["button--alt"],children:"Close"}),o&&Object(m.jsx)("button",{className:G.a.button,onClick:function(){console.log("Ordering..."),e.onClose()},children:"Order"})]})]})},W=n(13),ee={items:[],totalAmount:0},te=function(e,t){if("ADD_CART_ITEM"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(y.a)(Object(y.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(W.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE_CART_ITEM"===t.type){var o,s=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[s],m=e.totalAmount-l.price;if(1===l.amount)o=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(y.a)(Object(y.a)({},l),{},{amount:l.amount-1});(o=Object(W.a)(e.items))[s]=u}return{items:o,totalAmount:m}}return ee},ne=function(e){var t=Object(r.useReducer)(te,ee),n=Object(i.a)(t,2),a=n[0],c=n[1],o={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD_CART_ITEM",item:e})},removeItem:function(e){c({type:"REMOVE_CART_ITEM",id:e})}};return Object(m.jsx)(d.Provider,{value:o,children:e.children})};var ae=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)(ne,{children:[n&&Object(m.jsx)(Z,{onClose:function(){a(!1)}}),Object(m.jsx)(_,{onShowCart:function(){a(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(S,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(ae,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.cef8b958.chunk.js.map