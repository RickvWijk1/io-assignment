if(!self.define){let e,r={};const n=(n,s)=>(n=new URL(n+".js",s).href,r[n]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=r,document.head.appendChild(e)}else e=n,importScripts(n),r()})).then((()=>{let e=r[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,i)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(r[l])return;let u={};const o=e=>n(e,l),t={module:{uri:l},exports:u,require:o};r[l]=Promise.all(s.map((e=>t[e]||o(e)))).then((e=>(i(...e),u)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/composables.91d1c8dd.js",revision:null},{url:"_nuxt/default.4c7efc3e.js",revision:null},{url:"_nuxt/default.f39cfaa9.css",revision:null},{url:"_nuxt/entry.e00c3375.js",revision:null},{url:"_nuxt/error-404.23f2309d.css",revision:null},{url:"_nuxt/error-404.c29e59df.js",revision:null},{url:"_nuxt/error-500.4605d774.js",revision:null},{url:"_nuxt/error-500.aa16ed4d.css",revision:null},{url:"_nuxt/error-component.7c0314b0.js",revision:null},{url:"_nuxt/index.231086b8.css",revision:null},{url:"_nuxt/index.7efb0489.js",revision:null},{url:"_nuxt/list.4d99781e.js",revision:null},{url:"_nuxt/list.6239f135.css",revision:null},{url:"_nuxt/workbox-window.prod.es5.295a6886.js",revision:null},{url:"_payload.js",revision:"d2d9723ee0b1f109283ec32845d66d26"},{url:"200",revision:"5592e8a082eef867cc6125d628c6319e"},{url:"404",revision:"5592e8a082eef867cc6125d628c6319e"},{url:"/",revision:"a4c7234d511d099e5ef3217747937445"},{url:"users/list/_payload.js",revision:"5d008a11255d1606845eaaa93625f51e"},{url:"users/list",revision:"8bce45ffa56fdb0b3cb75aa025157460"},{url:"manifest.webmanifest",revision:"2baa36329fd8193d95b1e49dc9b03179"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/io-assignment/")))}));
