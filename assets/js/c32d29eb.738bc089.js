"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:l,values:d,groupId:m,className:h}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===l?l:l??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,s.U)(),[P,O]=(0,r.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=m){const e=y[m];null!=e&&e!==P&&f.some((t=>t.value===e))&&O(e)}const T=e=>{const t=e.currentTarget,n=w.indexOf(t),a=f[n].value;a!==P&&(E(t),O(a),null!=m&&k(m,String(a)))},j=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},h)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:e=>w.push(e),onKeyDown:j,onClick:T},l,{className:(0,o.Z)("tabs__item",p,l?.className,{"tabs__item--active":P===t})}),n??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},1527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const i={sidebar_position:2},s="IHandPoseComponent",c={unversionedId:"hand-pose-detection/scripting/hand-pose-component",id:"hand-pose-detection/scripting/hand-pose-component",title:"IHandPoseComponent",description:"",source:"@site/docs/hand-pose-detection/scripting/hand-pose-component.md",sourceDirName:"hand-pose-detection/scripting",slug:"/hand-pose-detection/scripting/hand-pose-component",permalink:"/docs/hand-pose-detection/scripting/hand-pose-component",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"HandPose",permalink:"/docs/hand-pose-detection/scripting/hand-pose"},next:{title:"HandShapeCreator",permalink:"/docs/hand-pose-detection/scripting/hand-shape-creator"}},u={},p=[{value:"Public Methods",id:"public-methods",level:3},{value:"Implementations",id:"implementations",level:3},{value:"HandPoseShape",id:"handposeshape",level:3},{value:"HandPoseOrientation",id:"handposeorientation",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ihandposecomponent"},"IHandPoseComponent"),(0,r.kt)("p",null,"Interface for detecting hand pose\nCurrently there are two implementations: HandPoseShape and HandPoseOrientation. "),(0,r.kt)("p",null,"If you want to make your own requirement for hand pose to be detected, just implement this interface and attach the component on the same game object as HandPose component."),(0,r.kt)("h3",{id:"public-methods"},"Public Methods"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"bool Detect()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"void InjectHandSkeleton(HandSkeleton)\n")),(0,r.kt)("h3",{id:"implementations"},"Implementations"),(0,r.kt)("h3",{id:"handposeshape"},"HandPoseShape"),(0,r.kt)("h3",{id:"handposeorientation"},"HandPoseOrientation"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"handposeshape",label:"HandPoseShape",default:!0,mdxType:"TabItem"},(0,r.kt)("h2",null,"HandPoseShape"),"Hand pose shape is defined by multiple smaller hand shape components.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",null,"Public Methods"),(0,r.kt)("code",null,"void AddHandShape(HandShape)"),(0,r.kt)("li",null,"If you create your shapes in runtime, add them using this method.")),(0,r.kt)(l.Z,{value:"handposeorientation",label:"HandPoseOrientation",mdxType:"TabItem"},(0,r.kt)("h2",null,"HandPoseOrientation"),"Hand pose orientation in regards to the main camera.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",null,"Public Properties"),(0,r.kt)("code",null,"PoseOrientation PoseOrientation"),(0,r.kt)("li",null,"Defines the correct hand pose orientation"),(0,r.kt)("br",null),(0,r.kt)("h2",null,"Orientation Explanation"),(0,r.kt)("img",{src:"/img/handposeorientation.jpg"}),(0,r.kt)("ul",null,"Palm Forward - Palm similar to camera forward vector."),(0,r.kt)("ul",null,"Palm Right - Palm similar to camera right vector."),(0,r.kt)("ul",null,"Fingers Forward - Fingers similar to camera forward vector."),(0,r.kt)("ul",null,"Fingers Right - Fingers similar to camera right vector."))))}m.isMDXComponent=!0}}]);