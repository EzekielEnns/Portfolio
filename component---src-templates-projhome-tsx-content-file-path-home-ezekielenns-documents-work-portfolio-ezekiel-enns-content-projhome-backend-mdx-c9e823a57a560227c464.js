"use strict";(self.webpackChunkezekiel_enns=self.webpackChunkezekiel_enns||[]).push([[141],{9626:function(e,t,n){n.d(t,{Zo:function(){return s},ah:function(){return i}});var r=n(4942),o=n(7294);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=o.createContext({});function i(e){var t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):a(a({},t),e)}),[t,e])}var u={};function s(e){var t=e.components,n=e.children,r=e.disableParentContext,l=i(t);return r&&(l=t||u),o.createElement(c.Provider,{value:l},n)}},1046:function(e,t,n){n.d(t,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function i(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),i(e.child))}))}function u(e){return function(t){return r.createElement(s,a({attr:a({},e.attr)},t),i(e.child))}}function s(e){var t=function(t){var n,o=e.attr,l=e.size,i=e.title,u=c(e,["attr","size","title"]),s=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(o)}},3557:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(9626),o=n(7294);function l(e){var t=Object.assign({h1:"h1",p:"p"},(0,r.ah)(),e.components);return o.createElement(o.Fragment,null,o.createElement(t.h1,null,"Backend"),"\n",o.createElement(t.p,null,"the backend is my faviorte place to be. Its so much fun figuring out\nthe logistics of data and what makes sense for the frontend. As a Backend\nengineer It's important to make sure your public faceing endpoints make sense."))}var a=function(e){void 0===e&&(e={});var t=Object.assign({},(0,r.ah)(),e.components).wrapper;return t?o.createElement(t,e,o.createElement(l,e)):l(e)},c=n(1597),i=n(3125);function u(e){var t=e.children,n=e.data.allMdx.edges;return console.log(n),o.createElement(i.Z,null,o.createElement(i.b,{id:"test"},t,o.createElement("div",{className:"projGrid"},n.map((function(e,t){var n,r,l=e.node,a=l.frontmatter,i=l.internal;return o.createElement("div",{onClick:function(){return(0,c.navigate)("/"+i.contentFilePath.split("/").pop().slice(0,-4))},key:t},o.createElement("h1",null,null!==(n=null==a?void 0:a.title)&&void 0!==n?n:i.contentFilePath.split("/").pop().slice(0,-4)),null!==(r=null==a?void 0:a.hook)&&void 0!==r?r:"Comming soon")})))))}function s(e){return o.createElement(u,e,o.createElement(a,e))}},3125:function(e,t,n){n.d(t,{Z:function(){return m},b:function(){return s}});var r=n(7294),o=n(1597),l=n(8263),a=n(5422),c=n(9499),i=n(9626),u=n(3201),s=function(e){var t=e.id,n=void 0===t?"":t,o=e.children;return r.createElement("div",{className:l.kQ},r.createElement("div",{className:l.kt,id:n}," ",o," "))};function m(e){var t=e.children,n=(0,c.useLocation)().pathname;return console.log(n),r.createElement(r.Fragment,null,r.createElement("div",{id:"main"},r.createElement(i.Zo,{components:{Section:function(e){var t;return r.createElement("div",{className:l.kQ,id:null!==(t=null==e?void 0:e.name)&&void 0!==t?t:""},r.createElement("div",{className:l.kt}," ",e.children," "))}}},t)),r.createElement("div",{className:[l.$n,a.fL,a.L5].join(" ")},r.createElement("span",{className:[a.W$,a.WP,"/"!=n?a.R3:""].join(" ")},r.createElement(o.Link,{to:"/"},"Home")),r.createElement("span",{className:[a.q0,a.Dy].join(" ")}),r.createElement("span",{className:[a.q0,a.C8].join(" ")},r.createElement("a",{href:"https://www.linkedin.com/in/ezekiel-enns/",target:"_blank"}," ",r.createElement(u.ltd,null)," "),r.createElement("a",{href:"https://github.com/EzekielEnns",target:"_blank"}," ",r.createElement(u.hJX,null)," "),r.createElement("a",{href:"mailto:  ezekiel.enns@pm.me",target:"_blank"}," ",r.createElement(u.KKr,null)," "))))}},5422:function(e,t,n){n.d(t,{C8:function(){return s},Dy:function(){return c},L5:function(){return r},R3:function(){return l},W$:function(){return a},WP:function(){return o},fL:function(){return i},q0:function(){return u}});var r="powerline-module--dracula-background--1qp2N",o="powerline-module--dracula-cyan--IpdQh",l="powerline-module--dracula-green--E-KyR",a="powerline-module--front--K42XT",c="powerline-module--notCurrent--mF888",i="powerline-module--powerline--YYr+3",u="powerline-module--powerlineComponent--6HLq9",s="powerline-module--side--dO6OM"},8263:function(e,t,n){n.d(t,{$n:function(){return l},kQ:function(){return r},kt:function(){return o}});var r="template-module--content--t40Ig",o="template-module--mdx--9WIUv",l="template-module--nav--qhf0z"},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-templates-projhome-tsx-content-file-path-home-ezekielenns-documents-work-portfolio-ezekiel-enns-content-projhome-backend-mdx-c9e823a57a560227c464.js.map