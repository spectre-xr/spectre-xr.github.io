"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:5},o="Hand Input Data Provider",s={unversionedId:"input/hand-input-data-provider",id:"input/hand-input-data-provider",title:"Hand Input Data Provider",description:"-\tScript that extends InputDataProvider with properties and functionalities that revolve more around hand tracking input sources",source:"@site/docs/input/hand-input-data-provider.md",sourceDirName:"input",slug:"/input/hand-input-data-provider",permalink:"/docs/input/hand-input-data-provider",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/input/hand-input-data-provider.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Input Data Provider",permalink:"/docs/input/input-data-provider"},next:{title:"Unity XR Controller Input Data Provider",permalink:"/docs/input/unity-xr-controller-input-data-provider"}},l={},p=[{value:"Public properties",id:"public-properties",level:3},{value:"Protected methods",id:"protected-methods",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hand-input-data-provider"},"Hand Input Data Provider"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Script that extends InputDataProvider with properties and functionalities that revolve more around hand tracking input sources"),(0,a.kt)("li",{parentName:"ul"},"It is also abstract and, like with InputDataProvider, implementing behaviours should use its public and protected API to manipulate its state\nMembers defined by HandInputDataProvider are as follows:")),(0,a.kt)("h3",{id:"public-properties"},"Public properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"HandFingerStateCollection Fingers { get; }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A read-only collection that can be indexed into by zero-based integer (0 to 4) or a HandFinger enumeration. It contains 5 elements, each corresponds to a hand finger from thumb to pinky finger, in order. Each entry describes certain input related state of its corresponding finger. Items in this collection are of HandFingerState type which defines following properties:"),(0,a.kt)("li",{parentName:"ul"},"IsPinching { get; } "),(0,a.kt)("li",{parentName:"ul"},"Indicates whether the finger is in pinching gesture at the moment"),(0,a.kt)("li",{parentName:"ul"},"PinchStrength { get; }"),(0,a.kt)("li",{parentName:"ul"},"Value from ","[0, 1]"," range that quantifies the strength with which the finger is pinching currently, 0 being the weakest and 1 being the maximum pinch strength"),(0,a.kt)("li",{parentName:"ul"},"Confidence { get; }"),(0,a.kt)("li",{parentName:"ul"},"Similar to InputDataProvider's Confidence property, it quantifies the level of tracking confidence with which the input source is detecting the finger state at the moment. Limited to ","[0, 1]"," range"),(0,a.kt)("li",{parentName:"ul"},"All of the values in this collection are false/zero as long as the inherited IsTracking property is false, i.e. IsPinching property is false and PinchStrength and Confidence properties are zero for every finger"),(0,a.kt)("li",{parentName:"ul"},"This collection is exposed in the HandInputDataProvider's inspector panel and its elements can be modified there to provide the opportunity for observing the effect of changing them while in edit mode. The collection itself, however, is read-only - meaning elements cannot be added or removed from it, nor can they be reordered. Properties of its elements cannot be changed if the IsTracking property is false, to reflect its run-time behaviour ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"bool IsSystemGestureInProgress { get; }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This property indicates whether there is some system-defined gesture in progress. This depends on the underlying platform input source and what is considered to be system gesture is defined by that platform, or if it provides that functionality at all"),(0,a.kt)("li",{parentName:"ul"},"This property is also always false if the input source is not tracked, i.e. if the IsTracking property is false"),(0,a.kt)("li",{parentName:"ul"},"Editable in the inspector panel")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"UnityEvent OnSystemGestureStart { get; }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Event sent whenever a system-defined gesture has been detected, i.e. whenever the value of IsSystemGestureInProgress changes from false to true"),(0,a.kt)("li",{parentName:"ul"},"Visible in the inspector and sent in edit mode as well")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"UnityEvent OnSystemGestureEnd { get; }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Event sent whenever a system-defined gesture has stopped, i.e. whenever the value of IsSystemGestureInProgress changes from true to false"),(0,a.kt)("li",{parentName:"ul"},"Visible in the inspector and sent in edit mode as well")),(0,a.kt)("h3",{id:"protected-methods"},"Protected methods"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"void SetFingerState(HandFinger finger, HandFingerState fingerState)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"void SetFingerState(int index, HandFingerState fingerState)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Intended for behaviours that derive from HandInputDataProvider to call this to set the detected input state of the finger specified by the first parameter. It has no effect if IsTracking is false")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"void SetIsSystemGestureInProgress(bool isSystemGestureInProgress)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sets the value of IsSystemGestureInProgress property. The relation between this method and IsSystemGestureInProgress property is equivalent to that of between InputDataProvider defined SetIsTracking method and IsTracking property - it handles the sending of the appropriate events depending on what value is being set and currently set value. Has no effect if IsTracking is false")))}u.isMDXComponent=!0}}]);