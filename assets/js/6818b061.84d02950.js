"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7690],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(o),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return o?r.createElement(f,i(i({ref:t},p),{},{components:o})):r.createElement(f,i({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6163:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_position:0},i="How To Use",l={unversionedId:"locomotion/how-to-use",id:"locomotion/how-to-use",title:"How To Use",description:"Setting Up",source:"@site/docs/locomotion/how-to-use.md",sourceDirName:"locomotion",slug:"/locomotion/how-to-use",permalink:"/docs/locomotion/how-to-use",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/locomotion/how-to-use.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Locomotion",permalink:"/docs/category/locomotion"},next:{title:"Scripting",permalink:"/docs/category/scripting-3"}},c={},s=[{value:"Setting Up",id:"setting-up",level:3},{value:"Screen Fader",id:"screen-fader",level:3},{value:"Locomotion System",id:"locomotion-system",level:3},{value:"Create Teleport Destinations",id:"create-teleport-destinations",level:3},{value:"Teleport",id:"teleport",level:3}],p={toc:s};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-use"},"How To Use"),(0,n.kt)("h3",{id:"setting-up"},"Setting Up"),(0,n.kt)("p",null,"Drag and drop OctoHand_Left and OctoHand_Right prefabs as a child of TrackingSpace."),(0,n.kt)("p",null,"Reference (for Oculus) OVRCameraRig to InputRoot of MultiSourceInputDataProvider for each hand."),(0,n.kt)("p",null,"Drag and drop Teleport prefab as a child of OctoHand_Left or OctoHand_Right."),(0,n.kt)("p",null,"Drag and drop Footprints and Teleport Reticle prefabs somewhere in the scene hierarchy. Note that you can use your own custom ones."),(0,n.kt)("h3",{id:"screen-fader"},"Screen Fader"),(0,n.kt)("p",null,"In order to ease the motion sickness caused by immersive VR world, ScreenFader was implemented. In the sample scenes, It is mostly used to fade in and out while teleporting (blink teleport) and to fade in when the player is in an uncomfortable situation (perhaps on the edge of the building). Attach it to main camera (in this example CenterEyeAnchor). "),(0,n.kt)("p",null,"Provide it with the material from OctoXR/Materials folder."),(0,n.kt)("h3",{id:"locomotion-system"},"Locomotion System"),(0,n.kt)("p",null,"Attach LocomotionSystem component to the OVRCameraRig. Reference ScreenFader, CenterEyeCamera transform and Footprints game object. "),(0,n.kt)("h3",{id:"create-teleport-destinations"},"Create Teleport Destinations"),(0,n.kt)("p",null,"There are two types of teleport destinations. TeleportArea which represents larger area where player can freely teleport and TeleportAnchor where player teleports to the fixed location every time. Add a plane to the scene. Attach it with TeleportArea component and Ground component. Add another plane to the scene. Scale it down. This time attach it with TeleportAnchor component as well as Ground component."),(0,n.kt)("h3",{id:"teleport"},"Teleport"),(0,n.kt)("p",null,"There are multiple predefined types of teleport in the OctoXR. Hand tracking teleport and controller tracking teleport. Hand tracking teleport is divided into pinch teleport and custom gesture teleport (Use only one, disable the other). Reference LocomotionSystem, BasicHandSkeleton, TeleportReticle and InputDataProviders to corresponding hands on elements of Teleport prefab."))}d.isMDXComponent=!0}}]);