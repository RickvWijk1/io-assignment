if(!self.define){let e,r={};const n=(n,s)=>(n=new URL(n+".js",s).href,r[n]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=r,document.head.appendChild(e)}else e=n,importScripts(n),r()})).then((()=>{let e=r[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,l)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(r[i])return;let u={};const o=e=>n(e,i),t={module:{uri:i},exports:u,require:o};r[i]=Promise.all(s.map((e=>t[e]||o(e)))).then((e=>(l(...e),u)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/composables.77b33046.js",revision:null},{url:"_nuxt/default.8fd4b9f4.js",revision:null},{url:"_nuxt/default.a8d8e40d.css",revision:null},{url:"_nuxt/entry.4a0ab6b4.js",revision:null},{url:"_nuxt/error-404.23f2309d.css",revision:null},{url:"_nuxt/error-404.7cf84377.js",revision:null},{url:"_nuxt/error-500.624a217c.js",revision:null},{url:"_nuxt/error-500.aa16ed4d.css",revision:null},{url:"_nuxt/error-component.34905fcb.js",revision:null},{url:"_nuxt/index.159d4bbf.js",revision:null},{url:"_nuxt/index.d80c04e9.css",revision:null},{url:"_nuxt/list.61b298cc.js",revision:null},{url:"_nuxt/list.6239f135.css",revision:null},{url:"_nuxt/workbox-window.prod.es5.295a6886.js",revision:null},{url:"_payload.js",revision:"64c11e274a60865dfd28ab5fc26c2d7c"},{url:"200",revision:"3d9b69570944d740a545bd1521dab7ae"},{url:"404",revision:"3d9b69570944d740a545bd1521dab7ae"},{url:"/",revision:"4d71469d5dc23420588426660a3a12cd"},{url:"users/list/_payload.js",revision:"1c48ebbad925c1669e9914035316a279"},{url:"users/list",revision:"c72f51e23ed8d7d330ebbd0bc50e98cb"},{url:"manifest.webmanifest",revision:"e2154868f23ba95d6a045ad02579a501"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
