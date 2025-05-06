'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fd07eaad8da63129ca0e3ec8940bb197",
"assets/AssetManifest.bin.json": "f90c283dced65b560b7864a30970112a",
"assets/AssetManifest.json": "e87d23b955584346a44a5f74b9ed96ae",
"assets/assets/generalShear.xlsx": "023562c4a80df328135cd487c83f5e6b",
"assets/assets/images/combined/reinforcementLeft.png": "d96017ffb2c6f50b63d1689a9c77380b",
"assets/assets/images/combined/reinforcementRight.png": "5a2ec31753ac86c83f56c4247451f25d",
"assets/assets/images/combined.png": "388f20583fc145639263d3d215913faa",
"assets/assets/images/combinedFooting.png": "1da1c25a9dc27509341c610c35bac144",
"assets/assets/images/deep/groupCircle.png": "3d3e88a4b00a8e66d49aed4afc7111c1",
"assets/assets/images/deep/groupSquare.png": "fafa8e89e76436c3487da0bbb66a1d9b",
"assets/assets/images/deep/indivCircle.png": "b0d83a1d95a5f0fbfea82c91bac9bb8e",
"assets/assets/images/deep/indivSquare.png": "d2fdddffc0050ef5b4b32fe8f7514489",
"assets/assets/images/design/design1.png": "fe762e11f32a2b75c5d7c7e060cafabd",
"assets/assets/images/design/design2.png": "165f1e0a1c19d342cf7a5f20c5281463",
"assets/assets/images/design/design3.png": "9153276a4802fa92301b9c1dfc6291b8",
"assets/assets/images/rectMomentLoading/rectMoment1-1.png": "e71cda9f2a10a9c3c885b76b1d4ef92b",
"assets/assets/images/rectMomentLoading/rectMoment10-1.png": "eee5c11ea7033dd0eeb89f8f6f9005e3",
"assets/assets/images/rectMomentLoading/rectMoment2-1.png": "df8a5749f82735aa950a2b798aac8dc9",
"assets/assets/images/rectMomentLoading/rectMoment3-1.png": "05ca5da264d2b44aae526e3c4f22084a",
"assets/assets/images/rectMomentLoading/rectMoment4-1.png": "64c392fc6583da3780e5f40e11c8003c",
"assets/assets/images/rectMomentLoading/rectMoment5-1.png": "cc112786eea60a82aeb71f1d83f1f2e4",
"assets/assets/images/rectMomentLoading/rectMoment6-1.png": "a13e395e434f9740af06f331ca8e190d",
"assets/assets/images/rectMomentLoading/rectMoment7-1.png": "a4995f00d770c13acebecd0f8908af14",
"assets/assets/images/rectMomentLoading/rectMoment8-1.png": "1f90948f9e2b2e67ddc847a46c7ba9cf",
"assets/assets/images/rectMomentLoading/rectMoment9-1.png": "cf7303e915d448dac7b1b03adf03c1c4",
"assets/assets/images/rectMomentTopView/rectTopView1-1.png": "042475bf7a0908b181766888ef8303f1",
"assets/assets/images/rectMomentTopView/rectTopView2-1.png": "f120f931020c8e723da33fd04aa4c772",
"assets/assets/images/rectMomentTopView/rectTopView3-1.png": "56af09bf754f0952b88fffb00cb3796e",
"assets/assets/images/rectMomentTopView/rectTopView4-1.png": "40478eb313671e98c72a56bb0d0ee639",
"assets/assets/images/retWall1-1.png": "f80825368dd30726ba1e543156db8b8a",
"assets/assets/images/retWall2-1.png": "335335f7f63477a9b34d1d62110d3af9",
"assets/assets/images/retWall3-1.png": "59d77b1332c3db20c6abb2d2e9b1f262",
"assets/assets/images/retWall4-1.png": "2f0121e3288937bd119ca12eafadc05e",
"assets/assets/images/retWall5-1.png": "ff5206b4dc54049fc9296efa21b67308",
"assets/assets/images/retWall6-1.png": "923f808e6df1c0733ecda9f33de9f56b",
"assets/assets/images/retWall7-1.png": "2c862388033fe0ddbe57de0afc30b68f",
"assets/assets/images/retWall8-1.png": "aeb30898e46fbc27a50403ecebbe3eb1",
"assets/assets/localShear.xlsx": "a84fbfcf121a31d5d374a5a9946a62fe",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "a33f987cde4becc5255ca33eb1da2a89",
"assets/NOTICES": "a4a828524dfa73f8ded93e1b58176122",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "af9693122275a0cee1336705f80dcb85",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2a9dea5eab49edcf51e2ef6a6c0937f5",
"/": "2a9dea5eab49edcf51e2ef6a6c0937f5",
"main.dart.js": "94ec73c670cdff5302d6e6a02c5293e7",
"manifest.json": "d7f5ccfd5983eb24185ff55d0b4e0db9",
"version.json": "0d2fdbe877e621bdf8c87032ddd00f76"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
