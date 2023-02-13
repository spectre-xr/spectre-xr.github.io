"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),h=l(n),c=i,m=h["".concat(d,".").concat(c)]||h[c]||p[c]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=c;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[h]="string"==typeof e?e:i,s[1]=r;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:9},s="Hand Skeleton",r={unversionedId:"input/hand-skeleton",id:"input/hand-skeleton",title:"Hand Skeleton",description:"-\tHandSkeleton derived script that defines, as its name would suggest, a basic hand skeleton",source:"@site/docs/input/hand-skeleton.md",sourceDirName:"input",slug:"/input/hand-skeleton",permalink:"/docs/input/hand-skeleton",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/input/hand-skeleton.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Input Confidence Trigger",permalink:"/docs/input/input-confidence-trigger"},next:{title:"Hand Bone",permalink:"/docs/input/hand-bone"}},d={},l=[{value:"Visualized Hand Skeleton",id:"visualized-hand-skeleton",level:3},{value:"Skinned Mesh Visualized Hand Skeleton",id:"skinned-mesh-visualized-hand-skeleton",level:3},{value:"Armature Visualized Hand Skeleton",id:"armature-visualized-hand-skeleton",level:3}],u={toc:l};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hand-skeleton"},"Hand Skeleton"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HandSkeleton derived script that defines, as its name would suggest, a basic hand skeleton"),(0,i.kt)("li",{parentName:"ul"},"This HandSkeleton is suited for most common needs"),(0,i.kt)("li",{parentName:"ul"},"It moves itself and its HandBones to target poses by directly setting their Transforms' world space positions, rotations and scales"),(0,i.kt)("li",{parentName:"ul"},"It exposes one property - UpdateRun which is of a certain enumeration type that defines which Unity's update callback should be used to set the HandBone Transforms; it can be Update, FixedUpdate, LateUpdate or any combination of these")),(0,i.kt)("h3",{id:"visualized-hand-skeleton"},"Visualized Hand Skeleton"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Script that derives from HandSkeleton and is intended to be inherited by hand skeletons that serve the purpose of visualizing a hand in some special way"),(0,i.kt)("li",{parentName:"ul"},"Usual use for this type of HandSkeleton is to visualize another HandSkeleton, and the most common way to achieve this is to use a HandSkeletonSourcedPoseProvider on the HandSkeleton that needs to be visualized and having that pose provider assigned to the VisualizedHandSkeleton as its pose provider (via PoseProvider property), though there may be other ways to achieve this defined by the specific VisualizedHandSkeleton"),(0,i.kt)("li",{parentName:"ul"},"It uses the LateUpdate built-in callback to set the target pose which is set in the same way as it is set by the BasicHandSkeleton, LateUpdate is overridable if more custom behaviour is needed"),(0,i.kt)("li",{parentName:"ul"},"The way VisualizedHandSkeleton is defined and set up, it can serve as a visualization of another HandSkeleton or it can be a visualization in and of itself, you can attach any InputDataProvider to it just as with any other HandSkeleton")),(0,i.kt)("h3",{id:"skinned-mesh-visualized-hand-skeleton"},"Skinned Mesh Visualized Hand Skeleton"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A type of VisualizedHandSkeleton that uses skinned mesh for the hand visualization"),(0,i.kt)("li",{parentName:"ul"},"It requires SkinnedMeshRenderer attached to the same GameObject it is attached to, this renderer component can be used to set the mesh as well as all the other rendering properties provided by it"),(0,i.kt)("li",{parentName:"ul"},"SkinnedMeshVisualizedHandSkeleton is setting its attached HandBones' Transforms to the transforms array on the SkinnedMeshRenderer in the same order as they appear in the Bones list in the skeleton. Make sure the bindposes, bone weights and bone indices on the mesh used match the skeleton's bones in their number and indices at which they appear in the skeleton's bones list as otherwise SkinnedMeshRenderer might generate certain errors and/or warnings"),(0,i.kt)("li",{parentName:"ul"},"In order to make SkinnedMeshVisualizedHandSkeleton visualization of another HandSkeleton, HandSkeletonSourcedPoseProvider should be used as mentioned in the previous section about VisualizedHandSkeleton")),(0,i.kt)("h3",{id:"armature-visualized-hand-skeleton"},"Armature Visualized Hand Skeleton"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Another type of VisualizedHandSkeleton, this one visualizes the hand by using small spheres for hand bone joints and cylindrical segments that end up resembling sticks to represent connection of a bone with its child bones (meaning 5 segments for WristRoot bone is used and 1 for every other, except the finger tip bones which are only visualized by their joints). All these visualized components combined result in something that resembles a construction armature that is shaped like a hand"),(0,i.kt)("li",{parentName:"ul"},"For every bone visualization component, a separate GameObject is used with MeshRenderer component attached to it. This results in many separate meshes being used for visualizing a hand and these renderer components can are used for manipulating all the usual rendering options provided by them"),(0,i.kt)("li",{parentName:"ul"},"ArmatureVisualizedHandSkeleton uses its own special type of HandBone - ArmatureVisualizedHandBone, which manages its corresponding set of objects used as visualization components for the bone (one joint and possibly one or more segments). It exposes certain properties to provide simple and fast way of accessing each individual visualization component as well as some other rendering related properties"),(0,i.kt)("li",{parentName:"ul"},"Removing a bone from the ArmatureVisualizedHandSkeleton results in the bone's visualization components being disabled so that they no longer get rendered"),(0,i.kt)("li",{parentName:"ul"},"If you want to create a script for your own custom bone type to be used with a ArmatureVisualizedHandSkeleton, then have that script be derived from ArmatureVisualizedHandBone instead of HandBone"),(0,i.kt)("li",{parentName:"ul"},"Important to mention is that the ArmatureVisualizedHandSkeleton provides one additional way for making it act as a visualization of another HandSkeleton, in addition to using a HandSkeletonSourcePoseProvider. It exposes the certain HandSkeleton-typed property - VisualizationOf. Any HandSkeleton can be assigned to this property in order to make the ArmatureVisualizedHandSkeleton act as a visualization for the assigned one. This has one difference from using HandSkeletonSourcedPoseProvider - HandBones which are missing from the source HandSkeleton are removed from the ArmatureVisualizedHandSkeleton as well and if a HandBone is added to the source HandSkeleton, a corresponding bone gets added to the ArmatureVisualizedHandSkeleton. This behaviour does not occur when using a HandSkeletonSourcedPoseProvider method for visualizing other HandSkeletons")))}h.isMDXComponent=!0}}]);