'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4ce520fd842d56c4f910d2bb56b64cf5",
"assets/assets/font/RobotoSlab-Regular.ttf": "2e935203e7200edebf345ee19a80f435",
"assets/assets/icons/coin.svg": "f7c1068aa9a1d895c7f7879421622fd7",
"assets/assets/icons/logo.png": "332d03aa821855534bdb1aa4d5f8eb77",
"assets/assets/icons/logo.svg": "b5e699313949f9603e7d95442681a2cc",
"assets/assets/icons/stages.svg": "7a3a6996e304847b73fb2ea78e389a20",
"assets/assets/icons/warn.svg": "77f8cef7226983fb731d0c35dc4c50c2",
"assets/assets/images/angle_1.jpg": "405171b32b2909533de97a3c4333cc9d",
"assets/assets/images/angle_2.jpg": "f74ad07328dc046e8d5df16073746c9d",
"assets/assets/images/angle_3.jpg": "9e073f166c9a74246dddd538da75001d",
"assets/assets/images/angle_4.jpg": "c690f2b61103e3672b27c93a4bb9c6f6",
"assets/assets/images/arc_1.jpg": "5b46037ef222365bee9cf0499069c9a6",
"assets/assets/images/arc_2.jpg": "99b07c1b6146aecdb8420e1c1215d76b",
"assets/assets/images/arc_3.jpg": "89d984e2cd796667df25f095afafe58e",
"assets/assets/images/arc_4.jpg": "987e968d856fe0141d3525dd5faa3cc8",
"assets/assets/images/binary_1.jpg": "3b7c5cf5487f8c35695510b9f47620ef",
"assets/assets/images/binary_2.jpg": "16339f7d915338bc0f28faa0612f85a1",
"assets/assets/images/binary_3.jpg": "7252771c428e7ce30dfa08b0cf123a96",
"assets/assets/images/binary_4.jpg": "f20855f50281300eede03b4076798d4d",
"assets/assets/images/chord_1.jpg": "33f88ee90b907bb7a45917aae8825315",
"assets/assets/images/chord_2.jpg": "f9383d132c79ca36c2402a23fe7ff3b9",
"assets/assets/images/chord_3.jpg": "7f40372df11793b7ade16253336e87b1",
"assets/assets/images/chord_4.jpg": "33ca252d5e78f0c81c61485b56610895",
"assets/assets/images/constant_1.jpg": "1d2ef2094e0dd841fe4915a2017102c6",
"assets/assets/images/constant_2.jpg": "95ffd9030ef7b50f3fad0f23c5eea01a",
"assets/assets/images/constant_3.jpg": "77aae3bf59572b04d82cbb981feef87a",
"assets/assets/images/constant_4.jpg": "a14529044522e17d077cff1bfad3576f",
"assets/assets/images/decrease_1.jpg": "0de57a1dfeaa83fba3df590146091b84",
"assets/assets/images/decrease_2.jpg": "316903422ef58c8ee14244f782c10931",
"assets/assets/images/decrease_3.jpg": "04152060aa079da742acdf9c0458ca16",
"assets/assets/images/decrease_4.jpg": "9f9dbe13146248949d09180fcac1c044",
"assets/assets/images/denominator_1.jpg": "62b95768a2e2e0fbe031cb7349eeb63a",
"assets/assets/images/denominator_2.jpg": "c2a7f2e9143f286c02bfc25ccdc1ef3b",
"assets/assets/images/denominator_3.jpg": "3ef6cbbbdc380ce0f7a18014c27fcbec",
"assets/assets/images/denominator_4.jpg": "f0f2c75fcebbd3636a8ede81e1dec5cc",
"assets/assets/images/exponent_1.jpg": "859266992895db5bb2773ff80f14fdb4",
"assets/assets/images/exponent_2.jpg": "9ea0126cf2cd3785da201df8d5ad7fd1",
"assets/assets/images/exponent_3.jpg": "8f09b9725850b493ca3a941f952a3cd8",
"assets/assets/images/exponent_4.jpg": "cbf11821a4f815f819cec6b9af5ad36c",
"assets/assets/images/expression_1.jpg": "9795445e36d101eb8f6be0585c796cae",
"assets/assets/images/expression_2.jpg": "833ace24179cc77b21a504088470e664",
"assets/assets/images/expression_3.jpg": "7ee4c0091941bbb848fce4e13bd6ae84",
"assets/assets/images/expression_4.jpg": "9c890043ef573c324087c4839c86fbbb",
"assets/assets/images/factorial_1.jpg": "1a592e7d2579b4dac60cc74f473f99c0",
"assets/assets/images/factorial_2.jpg": "1ad65fd2d7ea52eb1b07425843dc24dd",
"assets/assets/images/factorial_3.jpg": "7da808a0a4e61dbaf6f3b64724034679",
"assets/assets/images/factorial_4.jpg": "6f2e13c776423b651d7102072de910b8",
"assets/assets/images/formula_1.jpg": "e9b50b9c7a03751d0d09e07965653411",
"assets/assets/images/formula_2.jpg": "7e8803fc33dfac88ceab246e236c4f92",
"assets/assets/images/formula_3.jpg": "39df3e5ebaf766ff25a01f8f0400c74c",
"assets/assets/images/formula_4.jpg": "72fc58b848c3c9dbb78b2c183157bf30",
"assets/assets/images/frequency_1.jpg": "811dc88e3bc5bd3dbdac13ab98d1a8b5",
"assets/assets/images/frequency_2.jpg": "72028dd0d3758561a293db339b228514",
"assets/assets/images/frequency_3.jpg": "76d96a654e3719aef80ee4a5182b0fd6",
"assets/assets/images/frequency_4.jpg": "c1d46340797db5ef5b9b06233d0ae4f3",
"assets/assets/images/function_1.jpg": "f2c70a73d0509fefda58c64fe07cabba",
"assets/assets/images/function_2.jpg": "3e7a459c16b7920350ca8bfca216d738",
"assets/assets/images/function_3.jpg": "39b4a96441f47251b11a3e5b6028a97b",
"assets/assets/images/function_4.jpg": "4d8220d40a0421e04910e2b907859bcb",
"assets/assets/images/graph_1.jpg": "e870c012e0d7ac0ae089102149a5bdd7",
"assets/assets/images/graph_2.jpg": "b8f446d72ba0a65d2c5f332aa3a2d7d1",
"assets/assets/images/graph_3.jpg": "eb057034f1b8dbc2ce03e49b60a41a92",
"assets/assets/images/graph_4.jpg": "3475026a63c8fbbdf7271edb476178b7",
"assets/assets/images/imaginary_number_1.jpg": "a57b8161518ea9863618d8ccba6bf83d",
"assets/assets/images/imaginary_number_2.jpg": "3f21e44b2371c76c857f752ea034a7ea",
"assets/assets/images/imaginary_number_3.jpg": "d1bfb78438554692765c13d35155fd3a",
"assets/assets/images/imaginary_number_4.jpg": "dba7fb0877289370fc66e51a4170411f",
"assets/assets/images/infinity_1.jpg": "f7c7e0af6fa12aaaa03b9b02713a1856",
"assets/assets/images/infinity_2.jpg": "3dcaee0ae141695a32d174cd7de8dc87",
"assets/assets/images/infinity_3.jpg": "6092dfdd787ac465c96a17c86728c0b9",
"assets/assets/images/infinity_4.jpg": "08bb2e4b0fc756b001e8851a60c1ecc6",
"assets/assets/images/intersection_1.jpg": "e3a1bf44fddaab285a20f9caafadbbde",
"assets/assets/images/intersection_2.jpg": "a74c81e539b2d7316e77afe34df30364",
"assets/assets/images/intersection_3.jpg": "4178af75a65c12e4456a3ce6f3240702",
"assets/assets/images/intersection_4.jpg": "cdb3c9b4b2c651d151e7cdf7a43d6dfd",
"assets/assets/images/matrix_1.jpg": "fa46679f33b9e56be2a303c8c8519a56",
"assets/assets/images/matrix_2.jpg": "4227c31eb32f7856c61d5d2cce89b970",
"assets/assets/images/matrix_3.jpg": "296d216f373fcf10c0f3e0cd603b1fdc",
"assets/assets/images/matrix_4.jpg": "32a4bbf52717a7317a9412310ded0ed2",
"assets/assets/images/numerator_1.jpg": "611c43061337bab4ddc056c97cd1cced",
"assets/assets/images/numerator_2.jpg": "a44a78993c2557e20232fed76b8d1f6b",
"assets/assets/images/numerator_3.jpg": "29c8dbb56f0ddd8111a32fcd82310343",
"assets/assets/images/numerator_4.jpg": "a53c0e435ba9e0ea48a852fe886a445f",
"assets/assets/images/segment_1.jpg": "79bdf326d8e4ceb6ca4c7eda8959c62a",
"assets/assets/images/segment_2.jpg": "14b00d63e247ec6937fdce2f5aaa97a5",
"assets/assets/images/segment_3.jpg": "0a9fb8b7b24ed1aad0acfaa7984a6b54",
"assets/assets/images/segment_4.jpg": "3bd9f442b477cdc987d0c26cc3dae461",
"assets/assets/sounds/click.wav": "d94c1be6d1da27259b4e14b01f14b6df",
"assets/assets/sounds/coin.wav": "cf81c32b9e6e2dfc77e42f55b431c7be",
"assets/assets/sounds/coins.wav": "1aa5ba3d304c30e95c0a8f9b10f99634",
"assets/assets/sounds/error.wav": "e937001aa551f7ea0a3d0106b0b98bbb",
"assets/assets/sounds/load.wav": "8fb75c98bb5ee8764a33b368b68caeb5",
"assets/FontManifest.json": "66d20e3c1badb71b935aa5fd63eee9a3",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "276c029fcc83503803e3a1dd6f1d2a9c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0ced1b3471a175a5b6765f84289f9417",
"/": "0ced1b3471a175a5b6765f84289f9417",
"main.dart.js": "f68be15f157a6d9fefa8450af32ce491",
"manifest.json": "0845a3282377915864eae5649b6c8213",
"version.json": "7eb6808597213e14ba57dce551e6f257"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
