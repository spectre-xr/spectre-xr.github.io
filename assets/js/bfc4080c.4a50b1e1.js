"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6717],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:0},o="UIPointer",c={unversionedId:"user-interface/scripting/ui-pointer",id:"user-interface/scripting/ui-pointer",title:"UIPointer",description:"Main pointer component. Needs a concrete IPointer implementation as a child in order to work.",source:"@site/docs/user-interface/scripting/ui-pointer.md",sourceDirName:"user-interface/scripting",slug:"/user-interface/scripting/ui-pointer",permalink:"/docs/user-interface/scripting/ui-pointer",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"defaultSidebar",previous:{title:"Scripting",permalink:"/docs/category/scripting-1"},next:{title:"Interactions",permalink:"/docs/category/interactions"}},l={},s=[{value:"Public Events",id:"public-events",level:3},{value:"Public Methods",id:"public-methods",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"uipointer"},"UIPointer"),(0,i.kt)("p",null,"Main pointer component. Needs a concrete IPointer implementation as a child in order to work."),(0,i.kt)("p",null,"Currently there are two concrete pointers (hand and controller). If you wish to implement your custom Pointer, just implement IPointer interface and put that component as a child of this game object."),(0,i.kt)("h3",{id:"public-events"},"Public Events"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"UnityEvent OnStartSelect\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Will be invoked when pointer is hovering over UI element and start action is detected")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"UnityEvent OnStopSelect\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Will be invoked when start action ends")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"UnityEvent OnPointerEnterCanvas\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"UnityEvent OnPointerExitCanvas\n")),(0,i.kt)("h3",{id:"public-methods"},"Public Methods"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"void UpdateCanvases()\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you create canvas at runtime, call this method to update the pointer canvases list")))}u.isMDXComponent=!0}}]);