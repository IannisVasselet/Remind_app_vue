if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const d=e=>i(e,r),l={module:{uri:r},exports:t,require:d};s[r]=Promise.all(n.map((e=>l[e]||d(e)))).then((e=>(o(...e),t)))}}define(["./workbox-e563e09c"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-33aa33af.js",revision:null},{url:"assets/index-c33d9f39.css",revision:null},{url:"assets/logo-277e0e97.svg",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"index.html",revision:"0424668b015d0dab83a71e70bd362636"},{url:"Logo.png",revision:"e2f88fc23e400163fc72c5c8bec98a04"},{url:"manifest.json",revision:"aea9dc54ee9ab67ed367077df2dc7645"},{url:"manifest.webmanifest",revision:"2522dea8e8f03a69a2be1a14248af7f6"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"2522dea8e8f03a69a2be1a14248af7f6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|ico)$/,new e.CacheFirst,"GET"),e.registerRoute(/\.(?:css|js|json)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https?.*/,new e.NetworkFirst({networkTimeoutSeconds:10,plugins:[]}),"GET")}));