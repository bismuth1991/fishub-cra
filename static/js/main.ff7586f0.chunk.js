(this["webpackJsonpfishhub-cra"]=this["webpackJsonpfishhub-cra"]||[]).push([[0],{1:function(e,t,a){"use strict";var n=a(4),r=a.n(n),c=a(5),s=a(7),o=a(0),u=a.n(o),i=a(8),l=function(e,t){var a=Object(o.useRef)();Object(o.useEffect)((function(){a.current=e}),[e]),Object(o.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),1e3*t);return function(){return clearInterval(e)}}}),[t])};a.d(t,"a",(function(){return p})),a.d(t,"d",(function(){return f})),a.d(t,"c",(function(){return d}));var m=Object(o.createContext)(),p=Object(o.createContext)(),f=function(){var e=Object(o.useContext)(m);if(void 0===e)throw new Error("useAuthState must be used within <AuthProvider>");return e},d=function(){var e=Object(o.useContext)(p);if(void 0===e)throw new Error("useAuthActions must be used within <AuthProvider>");return e},E={accessToken:"",accessTokenExpiresAt:1/0,user:"",email:"",errors:[],isLoading:!0},h=function(e,t){var a=t.type,n=t.payload;switch(a){case"KEEP_LOGIN_SUCCESS":case"SIGN_UP_SUCCESS":case"LOGIN_SUCCESS":case"KEEP_LOGIN_ERROR":case"SIGN_UP_ERROR":case"LOGIN_ERROR":case"LOGOUT_ERROR":case"CUSTOM_ERROR":return Object(s.a)({},e,{},n,{isLoading:!1});case"LOGOUT_SUCCESS":return Object(s.a)({},E,{isLoading:!1});default:throw new Error("[AuthContext] Unknown action type")}};t.b=function(e){var t=e.children,a=Object(o.useReducer)(h,E),n=Object(c.a)(a,2),s=n[0],f=n[1],d=Object(i.b)(),b=Object(o.useCallback)((function(e){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d({method:"GET",url:"/api/user",headers:{Authorization:"Bearer ".concat(e)}}));case 1:case"end":return t.stop()}}))}),[d]),v=Object(o.useMemo)((function(){return{login:function(e){var t,a,n,c;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.username,a=e.password,s.prev=1,s.next=4,r.a.awrap(d({method:"POST",url:"/api/login",data:{username:t,password:a}}));case 4:return n=s.sent,s.next=7,r.a.awrap(b(n.data.access_token));case 7:c=s.sent,f({type:"LOGIN_SUCCESS",payload:{accessToken:n.data.access_token,tokenExpiresAt:Date.now()+1e3*n.data.expires_in,user:c.data.name,email:c.data.email}}),s.next=14;break;case 11:s.prev=11,s.t0=s.catch(1),f({type:"LOGIN_ERROR",payload:{errors:s.t0.response.data.client_error}});case 14:case"end":return s.stop()}}),null,null,[[1,11]])},signUp:function(e){var t,a,n,c,s;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.name,a=e.email,n=e.password,o.prev=1,o.next=4,r.a.awrap(d({method:"POST",url:"/api/sign-up",data:{name:t,email:a,password:n}}));case 4:return c=o.sent,o.next=7,r.a.awrap(b(c.data.access_token));case 7:s=o.sent,f({type:"SIGN_UP_SUCCESS",payload:{accessToken:c.data.access_token,tokenExpiresAt:Date.now()+1e3*c.data.expires_in,user:s.data.name,email:s.data.email}}),o.next=14;break;case 11:o.prev=11,o.t0=o.catch(1),f({type:"SIGN_UP_ERROR",payload:{errors:o.t0.response.data.client_error}});case 14:case"end":return o.stop()}}),null,null,[[1,11]])},logout:function(e){d({method:"POST",url:"/api/logout",headers:{Authorization:"Bearer ".concat(e)}}).then((function(){f({type:"LOGOUT_SUCCESS"})})).catch((function(){f({type:"LOGOUT_ERROR",payload:{}})}))},dispatch:f}}),[d,b]),O=Object(o.useCallback)((function(){var e,t;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,r.a.awrap(d({method:"POST",url:"/api/keep-login"}));case 3:return e=a.sent,a.next=6,r.a.awrap(d({method:"GET",url:"/api/user",headers:{Authorization:"Bearer ".concat(e.data.access_token)}}));case 6:t=a.sent,f({type:"KEEP_LOGIN_SUCCESS",payload:{accessToken:e.data.access_token,tokenExpiresAt:Date.now()+1e3*e.data.expires_in,user:t.data.name,email:t.data.email}}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),f({type:"KEEP_LOGIN_ERROR",payload:{}});case 13:case"end":return a.stop()}}),null,null,[[0,10]])}),[d]);return Object(o.useEffect)((function(){(!s.accessToken||s.tokenExpiresAt-Date.now()<6e4)&&O()}),[O,s.accessToken,s.tokenExpiresAt]),l((function(){s.accessToken&&O()}),840),u.a.createElement(m.Provider,{value:s},u.a.createElement(p.Provider,{value:v},t))}},10:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1);t.a=function(){var e=Object(c.d)().errors;return r.a.createElement("ul",{className:"text-lg mt-1"},r.a.createElement("li",null,e.map((function(e,t){return r.a.createElement("p",{key:t,className:"text-fishub-error"},e)}))))}},11:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(2),s=a(1),o=a(29),u=a(30),i=a(34),l=a(31),m=a(37),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={hasError:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e,t){var a=this.context.dispatch;if(Object(c.d)(e))throw a({type:"CUSTOM_ERROR",payload:{errors:["You must login first"]}}),e}},{key:"render",value:function(){var e=this.state.hasError,t=this.props.children;return e?r.a.createElement("h1",null,"Something went wrong."):t}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(r.a.Component);p.contextType=s.a;var f=p;t.a=function(e){var t=e.children,a=Object(s.d)(),n=a.isLoading,o=a.user;return n?null:o?t:r.a.createElement(f,null,r.a.createElement(c.b,{to:"login"}))}},12:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement("h1",null,"Baits Page")}},25:function(e,t,a){"use strict";(function(e){var n=a(0),r=a.n(n),c=a(2),s=a(12),o=a(27),u=a(32),i=a(35),l=a(36),m=a(33);t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null),r.a.createElement("main",{className:"container pt-12 pb-6 px-4"},r.a.createElement(c.c,{basepath:"production"===e.end.NODE_ENV?"/fishub-cra":"/"},r.a.createElement(s.a,{path:"/"}),r.a.createElement(s.a,{path:"baits"}),r.a.createElement(o.a,{path:"tackle-box"}),r.a.createElement(u.a,{path:"activities"}),r.a.createElement(i.a,{path:"login"}),r.a.createElement(l.a,{path:"sign-up"}))))}}).call(this,a(14))},27:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(11);t.a=function(){return r.a.createElement(c.a,null,r.a.createElement("h1",null,"Tackle Box Page"))}},32:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(11);t.a=function(){return r.a.createElement(c.a,null,r.a.createElement("h1",null,"Activities Page"))}},33:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1),s=a(2),o="opacity-75 text-fishub-brand hover:opacity-100",u=function(e){return e.isCurrent?{className:"".concat(o," ").concat("border-b-2 border-fishub-green opacity-100")}:{className:o}},i=function(e){return e.isCurrent?{className:"".concat(o," ").concat("text-2xl"," ").concat("border-b-2 border-fishub-green opacity-100")}:{className:"".concat(o," ").concat("text-2xl")}},l=function(e){return r.a.createElement(s.a,Object.assign({getProps:u},e))},m=function(e){return r.a.createElement(s.a,Object.assign({getProps:i},e))},p=function(e){var t=e.user,a=Object(c.c)().logout,n=Object(c.d)().accessToken;return r.a.createElement("ul",{className:"flex"},r.a.createElement("li",{className:"text-fishub-brand"},r.a.createElement("i",{className:"far fa-user mr-1"}),t),r.a.createElement("li",{className:"ml-4"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(n)}},r.a.createElement("button",{type:"submit",className:"text-fishub-brand opacity-80 hover:opacity-100"},"Logout"))))},f=function(){return r.a.createElement("ul",{className:"flex"},r.a.createElement("li",{className:"mr-4"},r.a.createElement(l,{to:"login"},"Login")),r.a.createElement("li",null,r.a.createElement(l,{to:"sign-up"},"Sign Up")))},d=function(){var e=Object(c.d)(),t=e.isLoading,a=e.user;return t?r.a.createElement("p",{className:"flex justify-end px-6 py-3 bg-fishub-nav-auth text-fishub-nav-auth"},"Loading..."):r.a.createElement("nav",{className:"flex justify-end px-6 py-3 bg-fishub-nav-auth"},a?r.a.createElement(p,{user:a}):r.a.createElement(f,null))},E=function(){return r.a.createElement(s.a,{to:"/"},r.a.createElement("div",{className:"flex justify-center bg-fishub-nav-main opacity-80 pt-6 cursor-pointer"},r.a.createElement("svg",{height:"50",width:"50",enableBackground:"new 1 0 455.885 455.885",viewBox:"0 0 455.885 455.885",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",{className:"fill-current text-fishub-green"},r.a.createElement("path",{d:"m445.319 268.282c-23.536 0-60.354 14.135-77.955 34.354-23.834-20.916-75.513-38.657-123.127-50.092-17.319-26.133-18.825-46.286-17.214-58.239.43-3.19-.713-6.389-3.058-8.584-2.353-2.197-5.617-3.125-8.764-2.486-31.052 6.263-48.126 33.657-57.045 55.591-.386-.008-.839-.029-1.21-.029-48.111 0-117.503 38.999-117.503 87.11s69.392 87.11 117.503 87.11c1.603 0 3.369-.051 5.254-.133 17.363 9.357 37.679 15.107 52.645 15.107 18.38 0 9.387-8.636-1.477-22.044 54.018-10.344 124.856-31.203 153.995-56.779 17.608 20.228 54.419 34.355 77.955 34.355 31.816 0-18.365-25.8-18.365-57.624.002-31.818 50.183-57.617 18.366-57.617zm-352.049 58.617c-7.346 0-13.296-5.951-13.296-13.296s5.951-13.297 13.296-13.297c7.346 0 13.297 5.951 13.297 13.297s-5.951 13.296-13.297 13.296z"}),r.a.createElement("path",{d:"m16.458 248.389c-9.089 0-16.458 7.368-16.458 16.457 0 9.096 7.369 16.465 16.458 16.465 9.097 0 16.465-7.369 16.465-16.465 0-9.089-7.369-16.457-16.465-16.457z"}),r.a.createElement("path",{d:"m52.015 196.471c-6.946 0-12.57 5.624-12.57 12.569 0 6.946 5.624 12.57 12.57 12.57 6.944 0 12.569-5.624 12.569-12.57 0-6.945-5.625-12.569-12.569-12.569z"}),r.a.createElement("path",{d:"m28.493 149.613c12.244 0 22.163-9.92 22.163-22.156 0-12.243-9.92-22.164-22.163-22.164-12.236 0-22.156 9.921-22.156 22.164 0 12.236 9.92 22.156 22.156 22.156z"}),r.a.createElement("path",{d:"m63.397 53.369c7.034 0 12.733-5.699 12.733-12.74 0-7.034-5.699-12.732-12.733-12.732-7.042 0-12.74 5.698-12.74 12.732 0 7.041 5.698 12.74 12.74 12.74z"}))),r.a.createElement("span",{className:"self-end text-brandXl leading-none font-semibold text-fishub-brand uppercase ml-4"},"Fishub")))},h=function(){return r.a.createElement("nav",{className:"px-6 py-6 bg-fishub-nav-main opacity-80"},r.a.createElement("ul",{className:"flex justify-around"},r.a.createElement("li",null,r.a.createElement(m,{to:"baits"},"Baits")),r.a.createElement("li",null,r.a.createElement(m,{to:"tackle-box"},"Tackle Box")),r.a.createElement("li",null,r.a.createElement(m,{to:"activities"},"Activities"))))};t.a=function(){return r.a.createElement("header",null,r.a.createElement(d,null),r.a.createElement(E,null),r.a.createElement(h,null))}},35:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(9),s=a(5),o=a(2),u=a(10),i=a(1),l=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),m=Object(s.a)(l,2),p=m[0],f=m[1],d=Object(i.c)().login;return r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),d({username:a,password:p})}},r.a.createElement("h2",{className:"form__header"},"Login"),r.a.createElement(o.a,{to:"sign-up",className:"form__redirect-link"},"Need an account?"),r.a.createElement(u.a,null),r.a.createElement("input",{className:"form__input",type:"text",placeholder:"Email",id:"email",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{className:"form__input",type:"password",placeholder:"Password",id:"password",value:p,onChange:function(e){return f(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"form__button"},"Login"))};t.a=function(){return r.a.createElement(c.a,null,r.a.createElement(l,null))}},36:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(9),s=a(5),o=a(2),u=a(1),i=a(10),l=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),m=Object(s.a)(l,2),p=m[0],f=m[1],d=Object(n.useState)(""),E=Object(s.a)(d,2),h=E[0],b=E[1],v=Object(u.c)().signup;return r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),v({name:p,email:a,password:h})}},r.a.createElement("h2",{className:"form__header"},"Sign Up"),r.a.createElement(o.a,{to:"login",className:"form__redirect-link"},"Have an account?"),r.a.createElement(i.a,null),r.a.createElement("input",{className:"form__input",type:"text",placeholder:"Username",id:"username",value:p,onChange:function(e){return f(e.target.value)}}),r.a.createElement("input",{className:"form__input",type:"text",placeholder:"Email",id:"email",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{className:"form__input",type:"password",placeholder:"Password",id:"password",value:h,onChange:function(e){return b(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"form__button"},"Sign Up"))};t.a=function(){return r.a.createElement(c.a,null,r.a.createElement(l,null))}},38:function(e,t,a){e.exports=a(70)},43:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),s=a.n(c),o=(a(43),a(25)),u=a(1),i=a(8),l=function(){return r.a.createElement(i.a,null,r.a.createElement(u.b,null,r.a.createElement(o.a,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));var n=a(7),r=a(0),c=a.n(r),s=a(28),o=a.n(s),u=Object(r.createContext)(),i=function(){var e=Object(r.useContext)(u);if(void 0===e)throw new Error("useAxios must be used within <AxiosProvider>");return e};t.a=function(e){var t=e.children;return c.a.createElement(u.Provider,{value:function(e){return o()(Object(n.a)({headers:{"Content-Type":"application/json",Accept:"application/json"},baseURL:"http://127.0.0.1:8000",withCredentials:!0},e))}},t)}},9:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(2),s=a(1);t.a=function(e){var t=e.children,a=Object(s.d)(),n=a.isLoading,o=a.user;return n?null:o?r.a.createElement(c.b,{to:"baits",noThrow:!0}):t}}},[[38,1,2]]]);
//# sourceMappingURL=main.ff7586f0.chunk.js.map