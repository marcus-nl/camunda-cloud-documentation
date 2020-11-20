(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(244)),s=n(249),c=n(250),i={id:"deploy-your-process-and-start-process-instance",title:"Deploy your process and start a process instance"},l={unversionedId:"guides/getting-started/deploy-your-process-and-start-process-instance",id:"guides/getting-started/deploy-your-process-and-start-process-instance",isDocsHomePage:!1,title:"Deploy your process and start a process instance",description:'<Tabs groupId="modeler" defaultValue="console" values={',source:"@site/docs/guides/getting-started/deploy-your-process-and-start-process-instance.md",slug:"/guides/getting-started/deploy-your-process-and-start-process-instance",permalink:"/docs/guides/getting-started/deploy-your-process-and-start-process-instance",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/guides/getting-started/deploy-your-process-and-start-process-instance.md",version:"current",sidebar:"camundaCloud",previous:{title:"Model your first Process",permalink:"/docs/guides/getting-started/model-your-first-process"},next:{title:"Implement a Service Task",permalink:"/docs/guides/getting-started/implement-service-task"}},u=[],d={rightToc:u};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)(s.a,{groupId:"modeler",defaultValue:"console",values:[{label:"Console Modeler",value:"console"},{label:"Zeebe Modeler",value:"desktop"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"console",mdxType:"TabItem"},Object(a.b)("p",null,'You can now use the "Save & Deploy" button to deploy the newly created process to your cluster'),Object(a.b)("p",null,Object(a.b)("img",{alt:"console-modeler-deploy",src:n(423).default})),Object(a.b)("p",null,"Deployment can take a few seconds, but you should get a confirmation for successfull deployment."),Object(a.b)("p",null,Object(a.b)("img",{alt:"console-modeler-deploy-successfull",src:n(424).default})),Object(a.b)("p",null,"You can now start a new process instance. For this example you can just start an instance with an empty payload."),Object(a.b)("p",null,Object(a.b)("img",{alt:"console-modeler-start-instance",src:n(425).default})),Object(a.b)("p",null,"Once the instance is started, you'll get a confirmation with a link to jump into Operate directly."),Object(a.b)("p",null,Object(a.b)("img",{alt:"console-modeler-start-instance-done",src:n(426).default}))),Object(a.b)(c.a,{value:"desktop",mdxType:"TabItem"},Object(a.b)("p",null,"On the right side of the navigation menu there are buttons for deploying and starting workflows."),Object(a.b)("p",null,Object(a.b)("img",{alt:"zeebe-modeler-deploy",src:n(427).default})),Object(a.b)("p",null,"In the deployment dialog, the connection information must now be specified: ClusterId, ClientId and ClientSecret. Click Deploy to ",Object(a.b)("strong",{parentName:"p"},"deploy")," the workflow. Use the Play button from the navigation to ",Object(a.b)("strong",{parentName:"p"},"start a new instance"),"."))))}p.isMDXComponent=!0},244:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},245:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},247:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},248:function(e,t,n){"use strict";var r=n(0),o=n(247);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},249:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(248),s=n(245),c=n(47),i=n.n(c),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,d=e.values,p=e.groupId,f=Object(a.a)(),b=f.tabGroupChoices,m=f.setTabGroupChoices,y=Object(r.useState)(c),g=y[0],O=y[1],v=Object(r.useState)(!1),j=v[0],w=v[1];if(null!=p){var h=b[p];null!=h&&h!==g&&d.some((function(e){return e.value===h}))&&O(h)}var k=function(e){O(e),null!=p&&m(p,e)},x=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},E=function(){w(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",E)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(s.a)("tabs__item",i.a.tabItem,{"tabs__item--active":g===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),C(e)},onFocus:function(){return k(t)},onClick:function(){k(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},250:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}},423:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cloud-modeler-deploy-780eb46f2dddf94175badae510ce149a.png"},424:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cloud-modeler-deploy-successfull-f29a6ee8ec43a07ef178f97523c3a781.png"},425:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cloud-modeler-start-instance-01e9604eb1f16ff9bf411250a42beb85.png"},426:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cloud-modeler-start-instance-done-cd3fa918f9573cc912fd76153ba12e59.png"},427:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/zeebe-modeler-deploy-514037b4bc9886282b77637a88a6e837.png"}}]);