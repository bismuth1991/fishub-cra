(this["webpackJsonpfishhub-cra"]=this["webpackJsonpfishhub-cra"]||[]).push([[0],{31:function(e,t,a){e.exports=a(61)},36:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),s=a.n(c),l=(a(36),a(2)),o=a(10),i=function(){return r.a.createElement("h1",null,"Baits Page")},u=function(){return r.a.createElement("h1",null,"Tackle Box Page")},m=function(){return r.a.createElement("h1",null,"Activities Page")},p=a(9),E=a(6),f=a.n(E),d=a(11),h=a(28),v=a.n(h),b=Object(n.createContext)(),O=function(e){var t=e.children;return r.a.createElement(b.Provider,{value:function(e){return v()(Object(d.a)({headers:{"Content-Type":"application/json",Accept:"application/json"},baseURL:"http://127.0.0.1:8000",withCredentials:!0},e))}},t)},x=function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),1e3*t);return function(){return clearInterval(e)}}}),[t])},g=Object(n.createContext)(),_=Object(n.createContext)(),w=function(){var e=Object(n.useContext)(g);if(void 0===e)throw new Error("useAuthState must be used within <AuthProvider>");return e},N=function(){var e=Object(n.useContext)(_);if(void 0===e)throw new Error("useAuthActions must be used within <AuthProvider>");return e},k={accessToken:"",accessTokenExpiresAt:1/0,user:"",email:"",errors:[],isLoading:!0},y=function(e,t){var a=t.type,n=t.payload;switch(a){case"KEEP_LOGIN_SUCCESS":case"SIGN_UP_SUCCESS":case"LOGIN_SUCCESS":case"KEEP_LOGIN_ERROR":case"SIGN_UP_ERROR":case"LOGIN_ERROR":case"LOGOUT_ERROR":case"CUSTOM_ERROR":return Object(d.a)({},e,{},n,{isLoading:!1});case"LOGOUT_SUCCESS":return Object(d.a)({},k,{isLoading:!1});case"CLEAR_ERROR":return Object(d.a)({},e,{errors:[]});default:throw new Error("[AuthContext] Unknown action type")}},S=function(e){var t=e.children,a=Object(n.useReducer)(y,k),c=Object(p.a)(a,2),s=c[0],l=c[1],o=function(){var e=Object(n.useContext)(b);if(void 0===e)throw new Error("useAxios must be used within <AxiosProvider>");return e}(),i=Object(n.useCallback)((function(e){return f.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o({method:"GET",url:"/api/user",headers:{Authorization:"Bearer ".concat(e)}}));case 1:case"end":return t.stop()}}))}),[o]),u=Object(n.useMemo)((function(){return{login:function(e){var t,a,n,r;return f.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.username,a=e.password,c.prev=1,c.next=4,f.a.awrap(o({method:"POST",url:"/api/login",data:{username:t,password:a}}));case 4:return n=c.sent,c.next=7,f.a.awrap(i(n.data.access_token));case 7:r=c.sent,l({type:"LOGIN_SUCCESS",payload:{accessToken:n.data.access_token,tokenExpiresAt:Date.now()+1e3*n.data.expires_in,user:r.data.name,email:r.data.email}}),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(1),l({type:"LOGIN_ERROR",payload:{errors:c.t0.response.data.client_error}});case 14:case"end":return c.stop()}}),null,null,[[1,11]])},signUp:function(e){var t,a,n,r,c;return f.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.name,a=e.email,n=e.password,s.prev=1,s.next=4,f.a.awrap(o({method:"POST",url:"/api/sign-up",data:{name:t,email:a,password:n}}));case 4:return r=s.sent,s.next=7,f.a.awrap(i(r.data.access_token));case 7:c=s.sent,l({type:"SIGN_UP_SUCCESS",payload:{accessToken:r.data.access_token,tokenExpiresAt:Date.now()+1e3*r.data.expires_in,user:c.data.name,email:c.data.email}}),s.next=14;break;case 11:s.prev=11,s.t0=s.catch(1),l({type:"SIGN_UP_ERROR",payload:{errors:s.t0.response.data.client_error}});case 14:case"end":return s.stop()}}),null,null,[[1,11]])},logout:function(e){o({method:"POST",url:"/api/logout",headers:{Authorization:"Bearer ".concat(e)}}).then((function(){l({type:"LOGOUT_SUCCESS"})})).catch((function(){l({type:"LOGOUT_ERROR",payload:{}})}))},dispatch:l}}),[o,i]),m=Object(n.useCallback)((function(){var e,t;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.awrap(o({method:"POST",url:"/api/keep-login"}));case 3:return e=a.sent,a.next=6,f.a.awrap(o({method:"GET",url:"/api/user",headers:{Authorization:"Bearer ".concat(e.data.access_token)}}));case 6:t=a.sent,l({type:"KEEP_LOGIN_SUCCESS",payload:{accessToken:e.data.access_token,tokenExpiresAt:Date.now()+1e3*e.data.expires_in,user:t.data.name,email:t.data.email}}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),l({type:"KEEP_LOGIN_ERROR",payload:{}});case 13:case"end":return a.stop()}}),null,null,[[0,10]])}),[o]);return Object(n.useEffect)((function(){(!s.accessToken||s.tokenExpiresAt-Date.now()<6e4)&&m()}),[m,s.accessToken,s.tokenExpiresAt]),x((function(){s.accessToken&&m()}),840),r.a.createElement(g.Provider,{value:s},r.a.createElement(_.Provider,{value:u},t))},j=function(){var e=w().errors;return r.a.createElement("ul",{className:"text-lg mt-1"},r.a.createElement("li",null,e.map((function(e,t){return r.a.createElement("p",{key:t,className:"text-fishub-error"},e)}))))},C=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),o=Object(p.a)(s,2),i=o[0],u=o[1],m=N().login;return r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),m({username:a,password:i})}},r.a.createElement("h2",{className:"form__header"},"Login"),r.a.createElement(l.b,{to:"/sign-up",className:"form__redirect-link"},"Need an account?"),r.a.createElement(j,null),r.a.createElement("input",{className:"form__input",type:"text",placeholder:"Email",id:"email",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{className:"form__input",type:"password",placeholder:"Password",id:"password",value:i,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"form__button"},"Login"))},R=function(){return r.a.createElement(C,null)},U=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),o=Object(p.a)(s,2),i=o[0],u=o[1],m=Object(n.useState)(""),E=Object(p.a)(m,2),f=E[0],d=E[1],h=N().signup;return r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),h({name:i,email:a,password:f})}},r.a.createElement("h2",{className:"form__header"},"Sign Up"),r.a.createElement(l.b,{to:"/login",className:"form__redirect-link"},"Have an account?"),r.a.createElement(j,null),r.a.createElement("input",{className:"form__input",type:"text",placeholder:"Username",id:"username",value:i,onChange:function(e){return u(e.target.value)}}),r.a.createElement("input",{className:"form__input",type:"text",placeholder:"Email",id:"email",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{className:"form__input",type:"password",placeholder:"Password",id:"password",value:f,onChange:function(e){return d(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"form__button"},"Sign Up"))},L=function(){return r.a.createElement(U,null)},P=function(e){var t=e.user,a=N().logout,n=w().accessToken;return r.a.createElement("ul",{className:"flex"},r.a.createElement("li",{className:"text-fishub-brand"},r.a.createElement("i",{className:"far fa-user mr-1"}),t),r.a.createElement("li",{className:"ml-4"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(n)}},r.a.createElement("button",{type:"submit",className:"text-fishub-brand opacity-80 hover:opacity-100"},"Logout"))))},T=function(){return r.a.createElement("ul",{className:"flex"},r.a.createElement("li",{className:"mr-4"},r.a.createElement(l.c,{to:"/login",className:"nav-link",activeClassName:"nav-link--active"},"Login")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/sign-up",className:"nav-link",activeClassName:"nav-link--active"},"Sign Up")))},A=function(){var e=w(),t=e.isLoading,a=e.user;return t?r.a.createElement("p",{className:"flex justify-end px-6 py-3 bg-fishub-nav-auth text-fishub-nav-auth"},"Loading..."):r.a.createElement("nav",{className:"flex justify-end px-6 py-3 bg-fishub-nav-auth"},a?r.a.createElement(P,{user:a}):r.a.createElement(T,null))},G=function(){return r.a.createElement(l.b,{to:"/"},r.a.createElement("div",{className:"flex justify-center bg-fishub-nav-main opacity-80 pt-6 cursor-pointer"},r.a.createElement("svg",{height:"50",width:"50",enableBackground:"new 1 0 455.885 455.885",viewBox:"0 0 455.885 455.885",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",{className:"fill-current text-fishub-green"},r.a.createElement("path",{d:"m445.319 268.282c-23.536 0-60.354 14.135-77.955 34.354-23.834-20.916-75.513-38.657-123.127-50.092-17.319-26.133-18.825-46.286-17.214-58.239.43-3.19-.713-6.389-3.058-8.584-2.353-2.197-5.617-3.125-8.764-2.486-31.052 6.263-48.126 33.657-57.045 55.591-.386-.008-.839-.029-1.21-.029-48.111 0-117.503 38.999-117.503 87.11s69.392 87.11 117.503 87.11c1.603 0 3.369-.051 5.254-.133 17.363 9.357 37.679 15.107 52.645 15.107 18.38 0 9.387-8.636-1.477-22.044 54.018-10.344 124.856-31.203 153.995-56.779 17.608 20.228 54.419 34.355 77.955 34.355 31.816 0-18.365-25.8-18.365-57.624.002-31.818 50.183-57.617 18.366-57.617zm-352.049 58.617c-7.346 0-13.296-5.951-13.296-13.296s5.951-13.297 13.296-13.297c7.346 0 13.297 5.951 13.297 13.297s-5.951 13.296-13.297 13.296z"}),r.a.createElement("path",{d:"m16.458 248.389c-9.089 0-16.458 7.368-16.458 16.457 0 9.096 7.369 16.465 16.458 16.465 9.097 0 16.465-7.369 16.465-16.465 0-9.089-7.369-16.457-16.465-16.457z"}),r.a.createElement("path",{d:"m52.015 196.471c-6.946 0-12.57 5.624-12.57 12.569 0 6.946 5.624 12.57 12.57 12.57 6.944 0 12.569-5.624 12.569-12.57 0-6.945-5.625-12.569-12.569-12.569z"}),r.a.createElement("path",{d:"m28.493 149.613c12.244 0 22.163-9.92 22.163-22.156 0-12.243-9.92-22.164-22.163-22.164-12.236 0-22.156 9.921-22.156 22.164 0 12.236 9.92 22.156 22.156 22.156z"}),r.a.createElement("path",{d:"m63.397 53.369c7.034 0 12.733-5.699 12.733-12.74 0-7.034-5.699-12.732-12.733-12.732-7.042 0-12.74 5.698-12.74 12.732 0 7.041 5.698 12.74 12.74 12.74z"}))),r.a.createElement("span",{className:"self-end text-brandXl leading-none font-semibold text-fishub-brand uppercase ml-4"},"Fishub")))},I=function(){return r.a.createElement("nav",{className:"px-6 py-6 bg-fishub-nav-main opacity-80"},r.a.createElement("ul",{className:"flex justify-around"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/baits",className:"nav-link text-2xl",activeClassName:"nav-link--active"},"Baits")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/tackle-box",className:"nav-link text-2xl",activeClassName:"nav-link--active"},"Tackle Box")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/activities",className:"nav-link text-2xl",activeClassName:"nav-link--active"},"Activities"))))},B=function(){return r.a.createElement("header",null,r.a.createElement(A,null),r.a.createElement(G,null),r.a.createElement(I,null))},z=a(13),D=function(e){var t=e.component,a=Object(z.a)(e,["component"]),c=w().user,s=N().dispatch,l=Object(o.g)();return Object(n.useEffect)((function(){"PUSH"===l.action&&s({type:"CLEAR_ERROR"})}),[s,l.action]),r.a.createElement(o.b,Object.assign({},a,{render:function(e){return c?r.a.createElement(o.a,{to:"/baits"}):r.a.createElement(t,e)}}))},K=function(e){var t=e.component,a=Object(z.a)(e,["component"]),n=w().user,c=N().dispatch;return r.a.createElement(o.b,Object.assign({},a,{render:function(e){return c({type:"CUSTOM_ERROR",payload:{errors:["You have to log in first"]}}),n?r.a.createElement(t,e):r.a.createElement(o.a,{to:"/login"})}}))},M=function(){return r.a.createElement(l.a,{basename:"/fishub-cra"},r.a.createElement(B,null),r.a.createElement("main",{className:"container pt-12 pb-6 px-4"},r.a.createElement(o.d,null,r.a.createElement(D,{path:"/login",component:R}),r.a.createElement(D,{path:"/sign-up",component:L}),r.a.createElement(K,{path:"/tackle-box",component:u}),r.a.createElement(K,{path:"/activities",component:m}),r.a.createElement(o.b,{path:"/baits",component:i}),r.a.createElement(o.b,{path:"/",component:i}))))},H=function(){return r.a.createElement(O,null,r.a.createElement(S,null,r.a.createElement(M,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.fa87081f.chunk.js.map