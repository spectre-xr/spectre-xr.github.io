"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3113],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),h=i,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||a;return t?o.createElement(f,r(r({ref:n},c),{},{components:t})):o.createElement(f,r({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<a;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},357:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=t(7462),i=(t(7294),t(3905));const a={sidebar_position:2},r="Hand Skeleton Configuration",l={unversionedId:"input/hand-skeleton-configuration",id:"input/hand-skeleton-configuration",title:"Hand Skeleton Configuration",description:"- Class in OctoXR that exposes certain constant/read-only values pertaining to the configuration of a hand skeleton, such as list of all hand bone identities, the number of hand bones in a hand skeleton etc.",source:"@site/docs/input/hand-skeleton-configuration.md",sourceDirName:"input",slug:"/input/hand-skeleton-configuration",permalink:"/docs/input/hand-skeleton-configuration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/input/hand-skeleton-configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/input/input-description"},next:{title:"Hand Skeleton Pose Provider",permalink:"/docs/input/hand-skeleton-pose-provider"}},s={},d=[{value:"Public fields",id:"public-fields",level:3},{value:"Public methods",id:"public-methods",level:3},{value:"Additional notes",id:"additional-notes",level:3}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hand-skeleton-configuration"},"Hand Skeleton Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Class in OctoXR that exposes certain constant/read-only values pertaining to the configuration of a hand skeleton, such as list of all hand bone identities, the number of hand bones in a hand skeleton etc.")),(0,i.kt)("h3",{id:"public-fields"},"Public fields"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static readonly ReadOnlyCollection<HandBoneId> Bones\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A read-only collection that lists the identities of all unique hand bones ordered by their ID number/index. Basically this is HandBoneId enumeration converted to a list representation")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static readonly HandBoneKeyedReadOnlyCollection<HandBoneId?> ParentBones\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A read-only collection that lists the identities of parent bones for every bone that corresponds to the index into this list. This list can be indexed by zero-based integer or a HandBoneId. For example at index 2 or HandBoneId.ThumbFingerProximalPhalanx the value stored is HandBoneId.ThumbFingerMetacarpal, at index 7 or HandBoneId.MiddleFingerProximalPhalanx is HandBoneId.WristRoot etc. At index zero (WristRoot) is null, hence the nullable HandBoneId type of items is used")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static readonly HandBoneKeyedReadOnlyCollection<ReadOnlyCollection<HandBoneId>> ChildBones\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A read-only collection that lists the identities of child bones for every bone that corresponds to the index into this list. Like ParentBones field, this list can be indexed by zero-based integer or a HandBoneId. Every entry into this list is a read-only list (indexed by a zero-based integer) of identities for every child bone of the corresponding hand bone. For example at index zero (WristRoot) is a list that contains five items, i.e. five HandBoneId values, in order: ThumbFingerMetacarpal, IndexFingerProximalPhalanx, MiddleFingerProximalPhalanx, RingFingerProximalPhalanx, PinkyFingerProximalPhalanx. All other entries, with the exception of entries for finger tip bones (last 5 elements in the list) contain a list with one HandBoneId in it. Entries for finger tip bones are empty lists")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static readonly HandBoneKeyedReadOnlyCollection<ReadOnlyCollection<HandBoneId>> ChildRotatingBones\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This is mostly the same as ChildBones list, but with the finger tip bones excluded. To be more precise, finger tip bones in this list are not considered to be child bones of any bone, so they never appear in the entries in this collection. Note however that you can index into this list with finger tip bone identities, i.e. you can safely write the expression ChildRotatingBones","[HandBoneId.PinkyFingerTip]"," in code, but like with ChildBones collection the returned value is an empty list")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static readonly ReadOnlyCollection<HandFinger> Fingers\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"List of hand fingers in a hand skeleton. Similar to Bones collection this is HandFinger enumeration in its list form")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"HandFingerKeyedReadOnlyCollection<ReadOnlyCollection<HandBoneId>> FingerBones\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Collection of hand bones grouped by the finger they are attached to. Can be indexed with zero-based integer or a HandFinger. Every entry is a list indexed by a zero-based integer of identities of hand bones that belong the corresponding hand finger, meaning every entry is a list of 4 items in total")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"HandFingerKeyedReadOnlyCollection<ReadOnlyCollection<HandBoneId>> FingerRotatingBones\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Same as FingerBones, but non-rotating bones (finger tips) are excluded, so every entry is a list of 3 HandBoneId items")),(0,i.kt)("h3",{id:"public-methods"},"Public methods"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static bool IsFingerBone(HandBoneId bone)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Is the specified hand bone part of a finger - true for every bone except for the WristRoot")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static bool IsRotatingBone(HandBoneId bone)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Is the specified bone considered as rotating bone - true for every bone except for finger tip bones")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static bool IsFingerTipBone(HandBoneId bone)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Is the specified bone one of the finger tip bones")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static HandFinger? GetBoneFinger(HandBoneId bone)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Returns the hand finger that the specified bone is a part of, or null if the bone is not a part of any finger - WristRoot is the only bone that is not part of a finger")),(0,i.kt)("h3",{id:"additional-notes"},"Additional notes"),(0,i.kt)("p",null,"HandSkeletonConfiguration is a static class that contains hard-coded constant values and methods used throughout OctoXR. This class represents a source of truth when reasoning about hand skeleton and its structure and values defined in it are considered to be valid and reliable, meaning there is never any kind of validation performed on them by consuming code - they are taken as they are."))}u.isMDXComponent=!0}}]);