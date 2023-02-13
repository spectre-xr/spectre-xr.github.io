"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7487],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:0},i="How To Use",s={unversionedId:"user-interface/how-to-use",id:"user-interface/how-to-use",title:"How To Use",description:"Setting up",source:"@site/docs/user-interface/how-to-use.md",sourceDirName:"user-interface",slug:"/user-interface/how-to-use",permalink:"/docs/user-interface/how-to-use",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-interface/how-to-use.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"User Interface",permalink:"/docs/category/user-interface"},next:{title:"Scripting",permalink:"/docs/category/scripting-1"}},c={},u=[{value:"Setting up",id:"setting-up",level:3},{value:"Adjusting UIPointer",id:"adjusting-uipointer",level:3},{value:"Testing",id:"testing",level:3},{value:"NEED TO KNOW",id:"need-to-know",level:3}],l={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-use"},"How To Use"),(0,o.kt)("h3",{id:"setting-up"},"Setting up"),(0,o.kt)("p",null,"Drag and drop OctoHand_Left and OctoHand_Right prefabs in the scene."),(0,o.kt)("p",null,"Reference (for Oculus) OVRCameraRig to InputRoot of MultiSourceInputDataProvider for each hand."),(0,o.kt)("p",null,"Drag and drop OctoInputModule prefab somewhere in scene hierarchy. Make sure that there are no other input modules or event systems in the scene."),(0,o.kt)("p",null,"Drag and drop UIPointer prefab in the scene."),(0,o.kt)("h3",{id:"adjusting-uipointer"},"Adjusting UIPointer"),(0,o.kt)("p",null,"Reference corresponding hand skeleton and palm center to UIPointer component (right hand skeleton if you want to use pointer with the right hand)."),(0,o.kt)("p",null,'Reference corresponding Input providers to child game objects named "Hand" and "Controller".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"UI pointer componenet",src:n(9160).Z,width:"401",height:"630"})),(0,o.kt)("p",null,"Style your ray using RayVisuals."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Styling ray visuals",src:n(1689).Z,width:"542",height:"572"})),(0,o.kt)("h3",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Use pinch gestures to operate UI elements"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pinch gesture",src:n(6733).Z,width:"1920",height:"686"})),(0,o.kt)("h3",{id:"need-to-know"},"NEED TO KNOW"),(0,o.kt)("p",null,"UIPointer uses GraphicRaycaster to manipulate the canvas which means that canvas needs graphic elements. This can lead to unwanted behavior when no graphical elements are found on canvas. Make sure that every canvas has an Image that covers whole width and height of the canvas. You can make that picture transparent. Then your UIPointer will recognize the whole canvas."),(0,o.kt)("p",null,"Never rotate your UI elements by 180 degrees around Y axis, rather scale your element to negative value on X axis. That is because Z axis needs to point away from canvas!"),(0,o.kt)("p",null,"UIPointer component needs at least one concrete pointer to work (Hand or controller). That concrete pointer MUST be a childe of UIPointer component."))}p.isMDXComponent=!0},6733:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pinch-f0cbcf263b78ecd404e00dc320f1c682.png"},1689:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/stylerayvisuals-05d55a69b6f2ba868d5f8b4184d70d49.jpg"},9160:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/uipointer-ed5e5f76f8fd46fc6025188d450487d8.jpg"}}]);