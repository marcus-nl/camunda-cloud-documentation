(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{432:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(450)),i={id:"control-flow",title:"Control Flow"},c={unversionedId:"product-manuals/zeebe/yaml-workflows/control-flow",id:"version-0.25/product-manuals/zeebe/yaml-workflows/control-flow",isDocsHomePage:!1,title:"Control Flow",description:"Control flow is about the order in which tasks are executed. The YAML format provides tools to decide which task is executed when.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/yaml-workflows/control-flow.md",slug:"/product-manuals/zeebe/yaml-workflows/control-flow",permalink:"/docs/0.25/product-manuals/zeebe/yaml-workflows/control-flow",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/yaml-workflows/control-flow.md",version:"0.25",sidebar:"version-0.25/Product Manuals",previous:{title:"Tasks",permalink:"/docs/0.25/product-manuals/zeebe/yaml-workflows/tasks"},next:{title:"Data Flow",permalink:"/docs/0.25/product-manuals/zeebe/yaml-workflows/data-flow"}},s=[{value:"Sequences",id:"sequences",children:[]},{value:"Data-based Conditions",id:"data-based-conditions",children:[]},{value:"Additional Resources",id:"additional-resources",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Control flow")," is about the order in which tasks are executed. The YAML format provides tools to decide which task is executed when."),Object(a.b)("h2",{id:"sequences"},"Sequences"),Object(a.b)("p",null,"In a sequence, a task is executed after the previous one is completed.\nBy default, tasks are executed top-down as they are declared in the YAML file."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"name: order-process\n\ntasks:\n    - id: collect-money\n      type: payment-service\n\n    - id: fetch-items\n      type: inventory-service\n\n    - id: ship-parcel\n      type: shipment-service\n")),Object(a.b)("p",null,"In the example above, the workflow starts with ",Object(a.b)("inlineCode",{parentName:"p"},"collect-money"),", followed by ",Object(a.b)("inlineCode",{parentName:"p"},"fetch-items")," and ends with ",Object(a.b)("inlineCode",{parentName:"p"},"ship-parcel"),"."),Object(a.b)("p",null,"We can use the ",Object(a.b)("inlineCode",{parentName:"p"},"goto")," and ",Object(a.b)("inlineCode",{parentName:"p"},"end")," attributes to define a different order:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"name: order-process\n\ntasks:\n    - id: collect-money\n      type: payment-service\n      goto: ship-parcel\n\n    - id: fetch-items\n      type: inventory-service\n      end: true\n\n    - id: ship-parcel\n      type: shipment-service\n      goto: fetch-items\n")),Object(a.b)("p",null,"In the above example, we have reversed the order of ",Object(a.b)("inlineCode",{parentName:"p"},"fetch-items")," and ",Object(a.b)("inlineCode",{parentName:"p"},"ship-parcel"),". Note that the ",Object(a.b)("inlineCode",{parentName:"p"},"end")," attribute is required so that workflow execution stops after ",Object(a.b)("inlineCode",{parentName:"p"},"fetch-items"),"."),Object(a.b)("h2",{id:"data-based-conditions"},"Data-based Conditions"),Object(a.b)("p",null,"Some workflows do not always execute the same tasks but need to pick and choose different tasks, based on variables of the workflow instance."),Object(a.b)("p",null,"We can use the ",Object(a.b)("inlineCode",{parentName:"p"},"switch")," attribute and conditions to decide on the next task."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"name: order-process\n\ntasks:\n    - id: collect-money\n      type: payment-service\n\n    - id: fetch-items\n      type: inventory-service\n      switch:\n          - case: totalPrice > 100\n            goto: ship-parcel-with-insurance\n\n          - default: ship-parcel\n\n    - id: ship-parcel-with-insurance\n      type: shipment-service-premium\n      end: true\n\n    - id: ship-parcel\n      type: shipment-service\n")),Object(a.b)("p",null,"In the above example, the order-process starts with ",Object(a.b)("inlineCode",{parentName:"p"},"collect-money"),", followed by ",Object(a.b)("inlineCode",{parentName:"p"},"fetch-items"),".\nIf the variable ",Object(a.b)("inlineCode",{parentName:"p"},"totalPrice")," is greater than 100, then it continues with ",Object(a.b)("inlineCode",{parentName:"p"},"ship-parcel-with-insurance"),". Otherwise, ",Object(a.b)("inlineCode",{parentName:"p"},"ship-parcel")," is chosen. In either case, the workflow instance ends after that."),Object(a.b)("p",null,"In the ",Object(a.b)("inlineCode",{parentName:"p"},"switch")," element, there is one ",Object(a.b)("inlineCode",{parentName:"p"},"case")," element per alternative to choose from. If none of the conditions evaluates to ",Object(a.b)("inlineCode",{parentName:"p"},"true"),", then the ",Object(a.b)("inlineCode",{parentName:"p"},"default")," element is evaluated. While ",Object(a.b)("inlineCode",{parentName:"p"},"default")," is not required, it is best practice to include to avoid errors at workflow runtime. Should such an error occur (i.e. no case is fulfilled and there is no default), then workflow execution stops and an incident is raised."),Object(a.b)("h2",{id:"additional-resources"},"Additional Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.25/product-manuals/zeebe/reference/expressions#boolean-expressions"}),"Boolean Expression"))))}p.isMDXComponent=!0},450:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);