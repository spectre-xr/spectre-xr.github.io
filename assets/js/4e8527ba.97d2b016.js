"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=o,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:10},r="Hand Bone",l={unversionedId:"input/hand-bone",id:"input/hand-bone",title:"Hand Bone",description:"-\tInitializes the HandBone's state as a consequence of HandBone being added to the HandSkeleton under the identity specified by the parameters of this method",source:"@site/docs/input/hand-bone.md",sourceDirName:"input",slug:"/input/hand-bone",permalink:"/docs/input/hand-bone",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/input/hand-bone.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Hand Skeleton",permalink:"/docs/input/hand-skeleton"},next:{title:"Platforms",permalink:"/docs/category/platforms"}},s={},d=[{value:"Protected methods",id:"protected-methods",level:3}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hand-bone"},"Hand Bone"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Initializes the HandBone's state as a consequence of HandBone being added to the HandSkeleton under the identity specified by the parameters of this method"),(0,o.kt)("li",{parentName:"ul"},"Important thing to note is that this method is intended only for a HandSkeleton to call it while the HandBone is being added to one, calling it manually from any other context is going to result in an exception being thrown; therefore you should never call it since the HandSkeleton does that as intended, regardless of the exact type of a HandSkeleton - this isn't an implementation dependent behaviour")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"void HandleRemovedFromHandSkeleton()\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This pretty much does the same as previously described method, only under the opposite circumstances and with opposite effects - uninitializes the HandBone after it is removed from the HandSkeleton it was last added to"),(0,o.kt)("li",{parentName:"ul"},"Same rules apply for calling this method, it is done by the HandSkeleton and it should never be done from anywhere else")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"void NotifyAddedToHandSkeleton()\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Performs some other minor internal initialization steps and sends out the internal callback on the HandBone that signals to the derived behaviours that the HandBone has been added to a HandSkeleton"),(0,o.kt)("li",{parentName:"ul"},"Again, just like it is with HandleAddedToHandSkeleton method, this is already getting called by the HandSkeleton at appropriate times, calling it from any other context is either going to throw an exception or it will have no effect at all")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"void NotifyRemovedFromHandSkeleton(HandSkeleton handSkeleton)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Like the previous method, but with opposite effects and on opposite circumstances, with the same rules about calling this method applying here as well")),(0,o.kt)("h3",{id:"protected-methods"},"Protected methods"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"virtual void OnAddedToHandSkeleton()\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Callback method that gets called when the HandBone is added to a HandSkeleton"),(0,o.kt)("li",{parentName:"ul"},"When this method is called, all of the HandBone's properties (HandSkeleton, BoneId, ParentBone etc.) are initialized and safe to use. The HandSkeleton the bone is added to also has its HandBone related state updated at this point as well")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"virtual void OnRemovedFromHandSkeleton(HandSkeleton handSkeleton)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Callback method that is called after the HandBone is removed from the HandSkeleton that is specified by the method parameter"),(0,o.kt)("li",{parentName:"ul"},"When this method is called, the HandBone's properties and all of the HandBone related state in the HandSkeleton is unitialized/reset. Identity of the HandBone, however, remains unchanged since it no longer affects anything, but it may be useful to derived behaviours at this point to know about it. BindPose is unaffected too")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"virtual void Reset()\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Unity built-in callback. This method performs an important task - when the bone gets reset in the editor, it reconstructs the HandBone's state and then it makes sure the HandBone reset takes place with all of the appropriate callbacks being sent and handled in both the HandBone and its HandSkeleton, but only if it was added to one. This keeps the state of the scene safe and valid just the same as the Reset method in the HandSkeleton script does"),(0,o.kt)("li",{parentName:"ul"},"With all that stated it should go without saying that base.Reset should be called from overriding methods")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"virtual void OnValidate()\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Unity built-in callback. Performs certain initialization steps for the HandBone and ensures its state is valid"),(0,o.kt)("li",{parentName:"ul"},"Always call base.OnValidate from OnValidate override method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"virtual void Awake() \n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Unity built-in callback. Performs certain initialization steps for the HandBone and ensures its state is valid"),(0,o.kt)("li",{parentName:"ul"},"Always call base.Awake from Awake override method")))}c.isMDXComponent=!0}}]);