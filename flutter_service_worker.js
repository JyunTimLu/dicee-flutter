'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/main.dart.js": "ccc60bd4b2e307f5835237af6e7040cc",
"/manifest.json": "7469542d1e7f0c8256cc6b9c0eab4871",
"/index.html": "c8dd50567bfbbc9672b07c42be864785",
"/assets/images/dice2.png": "524559a3d0e61efa7b8a165bd2bad0da",
"/assets/images/dice4.png": "3c7e0c5d05aeaa567bb90faf18f79f38",
"/assets/images/dice1.png": "5e0580134cde323cc6e2d54254b1a605",
"/assets/images/dice5.png": "ae4a1c88865e22a54c7aeb91f18db784",
"/assets/images/dice6.png": "2d7642d5229bb083f5e59cf1cee4aa28",
"/assets/images/dice3.png": "683bc715f147a48b2e2dcabf2d573a05",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/LICENSE": "1a80be6c5724a31e6f9c9e06dba53b63",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/AssetManifest.json": "6e9d159bea854be178c61faa18323cda"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
