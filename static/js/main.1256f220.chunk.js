(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{103:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var r,c,a=n(0),o=n.n(a),i=n(24),u=n.n(i),s=n(9),l=n(23),d=n(61),b=n(25),f=n(8),j=n(29),p=n(62),h=n.n(p),g=n(7),O=n(4),x=n(11),v=n(49),m=n(17),y=Object(f.d)([],(r={},Object(O.a)(r,m.fetchContact.fulfilled,(function(e,t){return t.payload})),Object(O.a)(r,m.addContact.fulfilled,(function(e,t){return[t.payload].concat(Object(b.a)(e))})),Object(O.a)(r,m.deleteContact.fulfilled,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),r)),k=Object(f.d)("",Object(O.a)({},v.changeFilter,(function(e,t){return t.payload}))),C=Object(f.d)(!1,(c={},Object(O.a)(c,m.addContact.pending,(function(){return!0})),Object(O.a)(c,m.addContact.fulfilled,(function(){return!1})),Object(O.a)(c,m.addContact.rejected,(function(){return!1})),Object(O.a)(c,m.deleteContact.pending,(function(){return!0})),Object(O.a)(c,m.deleteContact.fulfilled,(function(){return!1})),Object(O.a)(c,m.deleteContact.rejected,(function(){return!1})),Object(O.a)(c,m.fetchContact.pending,(function(){return!0})),Object(O.a)(c,m.fetchContact.fulfilled,(function(){return!1})),Object(O.a)(c,m.fetchContact.rejected,(function(){return!1})),c)),I=Object(x.b)({items:y,filter:k,loading:C}),w=Object(b.a)(Object(f.f)({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})),S={key:"auth",storage:h.a,whitelist:["token"]},L=Object(f.a)({reducer:{auth:Object(j.g)(S,g.b),contacts:I},middleware:w,devTools:!1}),A=Object(j.h)(L),E=n(6),R=n(2),U={nav:{marginLeft:"25px",height:"100%",display:"flex",alignItems:"center"},link:{display:"flex",alignItems:"center",marginRight:"25px",textDecoration:"none",height:"100%",verticalAlign:"middle",fontWeight:700,fontSize:"30px",color:"#2A363B"},activeLink:{color:"#E84A5F",borderBottom:"5px solid #E84A5F"}};function W(){var e=Object(s.c)(g.c.getIsLoggedIn);return Object(R.jsxs)("nav",{style:U.nav,children:[Object(R.jsx)(l.b,{to:"/",exact:!0,style:U.link,activeStyle:U.activeLink,children:Object(R.jsx)("span",{children:"Home"})}),e&&Object(R.jsx)(l.b,{to:"/phonebook",exact:!0,style:U.link,activeStyle:U.activeLink,children:Object(R.jsx)("span",{children:"Phonebook"})})]})}var N=n(124),T=n(20),z=n(129),B=n(127),F=Object(N.a)((function(e){return{root:{display:"flex",alignItems:"center","& > *":{margin:e.spacing(2)}},title:Object(O.a)({flexGrow:1,display:"none",fontSize:"25px"},e.breakpoints.up("sm"),{display:"inline"})}})),V=Object(T.a)({root:{boxShadow:"none",textTransform:"none",fontSize:20,padding:"6px 20px",border:"3px solid",lineHeight:1.5,backgroundColor:"inherit",borderColor:"#000000",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{backgroundColor:"#fff",borderColor:"#fff",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#fff",borderColor:"#fff"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}})(z.a);function P(){var e=F(),t=Object(s.b)(),n=Object(s.c)(g.c.getUserName);return Object(R.jsxs)("div",{className:e.root,children:[Object(R.jsxs)(B.a,{className:e.title,variant:"h6",noWrap:!0,children:["Welcome ",n]}),Object(R.jsx)(V,{variant:"outlined",type:"button",onClick:function(){return t(g.a.logOut())},children:"Exit"})]})}var H=Object(T.a)({root:{boxShadow:"none",textTransform:"none",fontSize:20,padding:"6px 12px",border:"1px solid",lineHeight:1.5,backgroundColor:"#fff200",borderColor:"#035418",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{backgroundColor:"#ffae00",borderColor:"#275232",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#ff9100",borderColor:"#ffae00"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}})(z.a),D=Object(N.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}})),G={link:{display:"inline-block",textDecoration:"none",fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}};function M(){var e=D();return Object(R.jsxs)("div",{className:e.root,children:[Object(R.jsx)(H,{variant:"contained",color:"primary",children:Object(R.jsx)(l.b,{to:"/register",exact:!0,style:G.link,activeStyle:G.activeLink,children:"Sign Up"})}),Object(R.jsx)(H,{variant:"contained",color:"primary",children:Object(R.jsx)(l.b,{to:"/login",exact:!0,style:G.link,activeStyle:G.activeLink,children:"Login"})})]})}var J=n(128),_=Object(N.a)((function(e){return{root:{flexGrow:1,display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"row",height:"65px",maxWidth:"1400px"},AppBar:{display:"flex",flexDirection:"row",justifyContent:"center"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function q(){var e=Object(s.c)(g.c.getIsLoggedIn),t=Object(s.c)(g.c.getIsRefreshing),n=_();return Object(R.jsx)(J.a,{position:"fixed",className:n.AppBar,children:Object(R.jsxs)("div",{className:n.root,children:[Object(R.jsx)(W,{}),e&&!t?Object(R.jsx)(P,{}):Object(R.jsx)(M,{})]})})}var K=n(27),Q=n(3),X=["children","redirectTo"];function Y(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/login":n,c=Object(Q.a)(e,X),a=Object(s.c)(g.c.getIsLoggedIn),o=Object(s.c)(g.c.getError);return Object(R.jsx)(E.b,Object(K.a)(Object(K.a)({},c),{},{children:a&&!o?t:Object(R.jsx)(E.a,{to:r})}))}var Z=["children","restricted","redirectTo"];function $(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,c=e.redirectTo,a=void 0===c?"./":c,o=Object(Q.a)(e,Z),i=Object(s.c)(g.c.getIsLoggedIn)&&r;return Object(R.jsx)(E.b,Object(K.a)(Object(K.a)({},o),{},{children:i?Object(R.jsx)(E.a,{to:a}):t}))}n(103);var ee=n(41),te=(n(104),Object(a.lazy)((function(){return n.e(7).then(n.bind(null,196))}))),ne=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(6)]).then(n.bind(null,203))})),re=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,197))})),ce=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,204))})),ae=function(){var e=Object(s.c)(g.c.getIsRefreshing),t=Object(s.b)(),n=Object(s.c)(g.c.getError);return Object(a.useEffect)((function(){t(g.a.fetchCurrentUser())}),[t]),n&&ee.b.error("".concat(n),{toastId:"custom-id-yes",position:ee.b.POSITION.TOP_CENTER}),!e&&Object(R.jsxs)("div",{className:"mainWrapper",children:[Object(R.jsx)(ee.a,{}),Object(R.jsx)(q,{}),Object(R.jsx)(E.d,{children:Object(R.jsxs)(a.Suspense,{fallback:Object(R.jsx)("p",{children:"Loading..."}),children:[Object(R.jsx)($,{exact:!0,path:"/",children:Object(R.jsx)(te,{})}),Object(R.jsx)(Y,{path:"/phonebook",children:Object(R.jsx)(ne,{})}),Object(R.jsx)($,{exact:!0,path:"/login",restricted:!0,redirectTo:"./phonebook",children:Object(R.jsx)(re,{})}),Object(R.jsx)($,{exact:!0,path:"/register",restricted:!0,redirectTo:"./phonebook",children:Object(R.jsx)(ce,{})})]})})]})};u.a.render(Object(R.jsx)(o.a.StrictMode,{children:Object(R.jsx)(s.a,{store:L,children:Object(R.jsx)(d.a,{loading:null,persistor:A,children:Object(R.jsx)(l.a,{children:Object(R.jsx)(ae,{})})})})}),document.getElementById("root"))},17:function(e,t,n){"use strict";n.r(t),n.d(t,"fetchContact",(function(){return s})),n.d(t,"addContact",(function(){return l})),n.d(t,"deleteContact",(function(){return d}));var r=n(12),c=n.n(r),a=n(28),o=n(21),i=n.n(o),u=n(8),s=Object(u.c)("contacts/fetchContact",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,i.a.get("/contacts");case 4:return a=e.sent,o=a.data,e.abrupt("return",o);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),l=Object(u.c)("contacts/addContact",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,i.a.post("/contacts",t);case 4:return a=e.sent,o=a.data,e.abrupt("return",o);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),d=Object(u.c)("contacts/deleteContact",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,i.a.delete("/contacts/".concat(t));case 4:return e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}())},49:function(e,t,n){"use strict";n.r(t),n.d(t,"changeFilter",(function(){return c}));var r=n(8),c=Object(r.b)("contacts/changeFilter")},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(12),c=n.n(r),a=n(28),o=n(21),i=n.n(o),u=n(8);i.a.defaults.baseURL="https://connections-api.herokuapp.com/";var s,l=function(e){i.a.defaults.headers.common.Authorization="Bearer ".concat(e)},d=function(){i.a.defaults.headers.common.Authorization=""},b=Object(u.c)("auth/register",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,i.a.post("/users/signup",t);case 4:return a=e.sent,o=a.data,l(o.token),e.abrupt("return",o);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",r(e.t0.response.data));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),f=Object(u.c)("auth/login",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,i.a.post("/users/login",t);case 4:return a=e.sent,o=a.data,l(o.token),e.abrupt("return",o);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),j={register:b,logOut:Object(u.c)("auth/logout",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,i.a.post("/users/logout");case 4:d(),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),logIn:f,fetchCurrentUser:Object(u.c)("auth/refresh",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,o,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState().auth.token,a=n.getState().auth.error,null!==r&&null===a){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return l(r),e.prev=5,e.next=8,i.a.get("/users/current");case 8:return o=e.sent,u=o.data,e.abrupt("return",u);case 13:return e.prev=13,e.t0=e.catch(5),e.abrupt("return",n.rejectWithValue(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}())},p={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUserName:function(e){return e.auth.user.name},getIsRefreshing:function(e){return e.auth.isRefreshing},getError:function(e){return e.auth.error}},h=n(4),g=Object(u.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,error:null,isLoggedIn:!1,isRefreshing:!1},extraReducers:(s={},Object(h.a)(s,j.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0,e.error=null})),Object(h.a)(s,j.register.rejected,(function(e){e.error="Such user already exist",e.isLoggedIn=!1})),Object(h.a)(s,j.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0,e.error=null})),Object(h.a)(s,j.logIn.rejected,(function(e,t){e.error=t.payload,e.isLoggedIn=!1})),Object(h.a)(s,j.logOut.fulfilled,(function(e){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1,e.error=null})),Object(h.a)(s,j.fetchCurrentUser.pending,(function(e){e.isRefreshing=!0})),Object(h.a)(s,j.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isRefreshing=!1,e.error=null})),Object(h.a)(s,j.fetchCurrentUser.rejected,(function(e,t){e.isLoggedIn=!1,e.isRefreshing=!1,e.error=t.payload})),s)}).reducer}},[[105,3,4]]]);
//# sourceMappingURL=main.1256f220.chunk.js.map