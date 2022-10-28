"use strict";(self.webpackChunkezekiel_enns=self.webpackChunkezekiel_enns||[]).push([[341],{9626:function(e,t,n){n.d(t,{Zo:function(){return s},ah:function(){return c}});var r=n(4942),o=n(7294);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=o.createContext({});function c(e){var t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):i(i({},t),e)}),[t,e])}var u={};function s(e){var t=e.components,n=e.children,r=e.disableParentContext,a=c(t);return r&&(a=t||u),o.createElement(l.Provider,{value:a},n)}},1046:function(e,t,n){n.d(t,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,i({key:t},e.attr),c(e.child))}))}function u(e){return function(t){return r.createElement(s,i({attr:i({},e.attr)},t),c(e.child))}}function s(e){var t=function(t){var n,o=e.attr,a=e.size,c=e.title,u=l(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},2821:function(e,t,n){n.r(t),n.d(t,{TempBody:function(){return d},default:function(){return h}});var r=n(9626),o=n(7294);function a(e){var t=Object.assign({h2:"h2",p:"p",br:"br",a:"a",em:"em"},(0,r.ah)(),e.components),n=t.Section;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Section",!0),o.createElement(n,null,o.createElement(t.h2,null,"Overview"),o.createElement(t.p,null,"This project has had a total of 4 itterations starting all the way back in 2017.",o.createElement(t.br),"\n","The first one was a simple website that used jquery it worked but looked really ugly.\nI learned after that and used a react app (which you can check out ",o.createElement(t.a,{href:"https://github.com/EzekielEnns/Portfolio/tree/v0-react"},"here")," ) after building it I started to relize",o.createElement(t.br),"\n","just how big the react ecosystem was and just the sheer level of custimization and configuration I need to understand\ninorder to build what I wanted. I decied for the sake of time I'd stick to my comfort zone, made a simple 3 mode app",o.createElement(t.br),"\n","and it looked alright. For the second version I learned I needed something a bit more managed so I",o.createElement(t.br),"\n","hence why I chose vuejs, it was lighter then angulare and it had really good documention which helped\nme understand just what you could do in react. That version looked great again all of these where\nmade in the course of a day which some fixes here and there. The current version is way better\nI focused on making things easier to modify and update, this ment using a single template and\nmaybe some markdown for content. This lead me to gatsby and man is it fun!"),o.createElement(t.p,null,o.createElement(t.a,{href:"https://github.com/EzekielEnns/Portfolio/tree/main"},"feel free to check it out on Git"),o.createElement(t.br),"\n",o.createElement(t.em,null,"note a code review will be added here soon")))}var i=function(e){void 0===e&&(e={});var t=Object.assign({},(0,r.ah)(),e.components).wrapper;return t?o.createElement(t,e,o.createElement(a,e)):a(e)};var l=n(1597),c=n(8263),u=n(5422),s=n(9499),m=n(3201),d=function(e){var t=e.id,n=void 0===t?"":t,r=e.children;return o.createElement("div",{className:c.kQ},o.createElement("div",{className:c.kt,id:n}," ",r," "))};function f(e){var t=e.children,n=(0,s.useLocation)().pathname;return console.log(n),o.createElement(o.Fragment,null,o.createElement("div",{id:"main"},o.createElement(r.Zo,{components:{Section:function(e){var t;return o.createElement("div",{className:c.kQ,id:null!==(t=null==e?void 0:e.name)&&void 0!==t?t:""},o.createElement("div",{className:c.kt}," ",e.children," "))}}},t)),o.createElement("div",{className:[c.$n,u.fL,u.L5].join(" ")},o.createElement("span",{className:[u.W$,u.WP,"/"!=n?u.R3:""].join(" ")},o.createElement(l.Link,{to:"/"},"Home")),o.createElement("span",{className:[u.q0,u.Dy].join(" ")}),o.createElement("span",{className:[u.q0,u.C8].join(" ")},o.createElement("a",{href:"https://www.linkedin.com/in/ezekiel-enns/",target:"_blank"}," ",o.createElement(m.ltd,null)," "),o.createElement("a",{href:"https://github.com/EzekielEnns",target:"_blank"}," ",o.createElement(m.hJX,null)," "),o.createElement("a",{href:"mailto:  ezekiel.enns@pm.me",target:"_blank"}," ",o.createElement(m.KKr,null)," "))))}function h(e){return o.createElement(f,e,o.createElement(i,e))}},5422:function(e,t,n){n.d(t,{C8:function(){return s},Dy:function(){return l},L5:function(){return r},R3:function(){return a},W$:function(){return i},WP:function(){return o},fL:function(){return c},q0:function(){return u}});var r="powerline-module--dracula-background--1qp2N",o="powerline-module--dracula-cyan--IpdQh",a="powerline-module--dracula-green--E-KyR",i="powerline-module--front--K42XT",l="powerline-module--notCurrent--mF888",c="powerline-module--powerline--YYr+3",u="powerline-module--powerlineComponent--6HLq9",s="powerline-module--side--dO6OM"},8263:function(e,t,n){n.d(t,{$n:function(){return a},kQ:function(){return r},kt:function(){return o}});var r="template-module--content--t40Ig",o="template-module--mdx--9WIUv",a="template-module--nav--qhf0z"},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-templates-template-tsx-content-file-path-home-ezekielenns-documents-work-portfolio-ezekiel-enns-content-my-portfolio-mdx-733b1c8032490bdb89c8.js.map