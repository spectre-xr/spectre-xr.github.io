"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8311],{3905:(t,e,o)=>{o.d(e,{Zo:()=>d,kt:()=>y});var n=o(7294);function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,i=function(t,e){if(null==t)return{};var o,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(i[o]=t[o]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}var s=n.createContext({}),u=function(t){var e=n.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},d=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var o=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=u(o),h=i,y=c["".concat(s,".").concat(h)]||c[h]||p[h]||r;return o?n.createElement(y,a(a({ref:e},d),{},{components:o})):n.createElement(y,a({ref:e},d))}));function y(t,e){var o=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=o.length,a=new Array(r);a[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:i,a[1]=l;for(var u=2;u<r;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},4499:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=o(7462),i=(o(7294),o(3905));const r={sidebar_position:6},a="Unity XR Controller Input Data Provider",l={unversionedId:"input/unity-xr-controller-input-data-provider",id:"input/unity-xr-controller-input-data-provider",title:"Unity XR Controller Input Data Provider",description:"There are three concrete XRControllerCondition implementations:",source:"@site/docs/input/unity-xr-controller-input-data-provider.md",sourceDirName:"input",slug:"/input/unity-xr-controller-input-data-provider",permalink:"/docs/input/unity-xr-controller-input-data-provider",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/input/unity-xr-controller-input-data-provider.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Hand Input Data Provider",permalink:"/docs/input/hand-input-data-provider"},next:{title:"Multi Source Input Data Provider",permalink:"/docs/input/multi-source-input-data-provider"}},s={},u=[{value:"BinaryXRControllerCondition",id:"binaryxrcontrollercondition",level:3},{value:"ConstantXRControllerCondition",id:"constantxrcontrollercondition",level:3},{value:"Custom XR controller condition",id:"custom-xr-controller-condition",level:3}],d={toc:u};function c(t){let{components:e,...o}=t;return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"unity-xr-controller-input-data-provider"},"Unity XR Controller Input Data Provider"),(0,i.kt)("p",null,"There are three concrete XRControllerCondition implementations:\nButtonActionXRControllerCondition\nThis is probably the most commonly used condition for triggering hand poses, it is fulfilled when a specified XR controller button is pressed or touched. When exactly will it be fulfilled is configured via two properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"XRControllerButton Button { get; set; }\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Specifies which XR controller button should be checked")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"XRControllerButtonAction Action { get; set; }\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Specifies an action that should be performed with the controller button in order for the condition to evaluate to true - it can be either Press or Touch")),(0,i.kt)("h3",{id:"binaryxrcontrollercondition"},"BinaryXRControllerCondition"),(0,i.kt)("p",null,"As briefly mentioned before, this condition consists of two XRControllerCondition's that could be viewed as the binary condition's child conditions. When binary condition is being evaluated, it will recursively evaluate its child conditions (call their Evaluate methods) and combine their evaluation results with a boolean logical operation that can be specified via property. Operation can be AND, OR or XOR. In addition to that, binary condition will also aggregate button values resulting from its child conditions in order to output the final button value. Aggregation method can also be specified via property and it can be set to one of several values - use button value from the binary condition's left child condition and ignore the other one's or vice-versa, or use one of the math functions on the two button values: average, maximum or minimum.\nProperties of the BinaryXRControllerCondition:\nXRControllerCondition Condition1 { get; set; }"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first condition nested in the binary condition, or binary condition's left child condition"),(0,i.kt)("li",{parentName:"ul"},"Null value is not allowed")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"BooleanBinaryOp Op { get; set; }\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The binary boolean logic operation to perform between the evaluation results of the binary condition's child conditions when the binary condition is being evaluated")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"XRControllerCondition Condition2 { get; set; }\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The second condition nested in the binary condition, or binary condition's right child condition"),(0,i.kt)("li",{parentName:"ul"},"Null value is not allowed")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"BinaryXRControllerConditionButtonValueCombine ButtonValueCombine { get; set; }\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Specifies how should the binary condition combine the button values resulting from evaluations of its child conditions in order to arrive to the final button value\nBinary condition is a very powerful construct, it is essentially what allows for specifying complex conditions that should be fulfilled in order to trigger different hand skeleton poses in the context of a UnityXRControllerInputDataProvider.\nFor example, if you want to trigger some specific hand pose when primary XR controller button is being touched, but only if the grip button is pressed, you would set BinaryXRControllerCondition to the corresponding XRControllerPoseTrigger's Condition (or choose the Binary value for the pose trigger's ConditionType in Unity editor), then set a ButtonActionXRControllerCondition instance for binary condition's Condition1 and also repeat the same for the binary condition's Condition2 (again, if you want to do this via editor UI, just choose ButtonAction for the ConditionType1 and ConditionType2 properties under the binary condition's UI section). After that you just need to configure Condition1 and Condition2: for Condition1 set Button to Primary and Action to Touch, for Condition2 set Button to Grip and Action to Press. Finally set the binary condition's Op to And and choose whichever value you want for ButtonValueCombine. That is how you would define the given condition for triggering desired hand pose.\nThis was still relatively simple example. With the combination of all different types of conditions, the ability to nest them inside binary conditions (including other binary conditions as well) and Invert property of a condition you can define any kind of button state-based condition with very complex logic behind it.")),(0,i.kt)("h3",{id:"constantxrcontrollercondition"},"ConstantXRControllerCondition"),(0,i.kt)("p",null,"The most simple type of XRControllerCondition. It always evaluates to true, i.e. its EvaluateCore method always returns true and for button value outputs 1. Consequently, if its Invert property is set to true, it always evaluates to false. Note however that for button value it will still output 1."),(0,i.kt)("h3",{id:"custom-xr-controller-condition"},"Custom XR controller condition"),(0,i.kt)("p",null,"While you can can certainly implement your own XRControllerCondition and then use it in the context of a UnityXRControllerInputDataProvider, you will not be able to set it via Unity editor UI to a pose trigger's Condition or a binary condition's Condition1 or Condition2 because of the previously mentioned ways of setting those properties (via ConditionType). This is because of the Unity editor's restrictions imposed when dealing with references to abstract classes. In future versions of OctoXR this may be implemeneted in some more advanced way to allow for setting those properties using editor UI, but for now, you will only ever going to be able to set them to your own condition type via code."))}c.isMDXComponent=!0}}]);