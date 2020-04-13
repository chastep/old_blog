importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/13a2c4ede4d64bd4e701.js",
    "revision": "25f4cd3d2ff27b7795d35594373449cc"
  },
  {
    "url": "/_nuxt/1bae19deb7dc64af57df.js",
    "revision": "fd0ae31f856ea8ecd3e7d1966f107a4f"
  },
  {
    "url": "/_nuxt/1c49bbb32cee6e047adf.js",
    "revision": "f9317632c000e8891fe2a2964cbb109d"
  },
  {
    "url": "/_nuxt/30504a8e9eb2921cce4e.js",
    "revision": "fd2fdf825eefe451987afdefa2b25893"
  },
  {
    "url": "/_nuxt/3198549dbb13d8e1d8a0.js",
    "revision": "2865ccb5c7ff390f5234a83d926e93c9"
  },
  {
    "url": "/_nuxt/3a368f3696e73811e5ca.js",
    "revision": "919d156991f7e01136dc1a9d0edb662e"
  },
  {
    "url": "/_nuxt/483d38d0e9333c91c62f.js",
    "revision": "e2d8a07eba7c0a500821cc2b8a60881d"
  },
  {
    "url": "/_nuxt/544d348070e401fadc59.js",
    "revision": "5f3e3bb548d5e0ae6758cf0a152cbe78"
  },
  {
    "url": "/_nuxt/737dc14f67b888377a1a.js",
    "revision": "66a47a8e2fafeb20ff4cb0a3e5f16ef7"
  },
  {
    "url": "/_nuxt/88e24dbd86dfdb630a71.js",
    "revision": "e13a1fa4ff1124cefe95ae865c0f9132"
  },
  {
    "url": "/_nuxt/9dd0291906d6296ff96f.js",
    "revision": "5ae4af260bfde0e7808433562fa0b809"
  },
  {
    "url": "/_nuxt/a6fd23e050f69f9b7bd7.js",
    "revision": "0d65ceac2b15282985f46d7f1f8305db"
  },
  {
    "url": "/_nuxt/c977d5c04ab0961064f9.js",
    "revision": "e1446ed9e5e2bdbeb3f8734eb659695b"
  },
  {
    "url": "/_nuxt/dce45d8cac58f5f88d79.js",
    "revision": "989a090c9d34c707004d70f7bc6f294b"
  },
  {
    "url": "/_nuxt/deebafef49e1d0ef596a.js",
    "revision": "a86da3ddbb7d67241b66b1fe15c2a96f"
  }
], {
  "cacheId": "site",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
