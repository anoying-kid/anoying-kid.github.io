'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "29153a7661ed5708b1862a8bdc7d8026",
"/": "29153a7661ed5708b1862a8bdc7d8026",
"main.dart.js": "f13ee764dcf9986413f1cf25fe6bdf64",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "f4876e8ecdb03b67f769dc6ffda205d6",
"icons/Icon-192.png": "270549c3a8bca752e5f56c276abc1b1b",
"icons/Icon-maskable-192.png": "804ff63cca391b3c8320cdd93c098e20",
"icons/Icon-maskable-512.png": "804ff63cca391b3c8320cdd93c098e20",
"icons/Icon-512.png": "804ff63cca391b3c8320cdd93c098e20",
"manifest.json": "93b84529b40e34db250de0f6b47d1572",
".git/config": "9be39009df5d156959b3d18deff8b6aa",
".git/objects/59/de36efbc61b923578a6b2e6cf2d332eb8152d0": "f5cda198cec4b221a225bb935ec6b499",
".git/objects/59/81bbf7adba109249e050f9983ed4452904c5b7": "3e76f445be535678dd17defc0fcea2f6",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "bcdb121b48c166c5d22e1468320a62f2",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "1a8ec11d61f9193f1b84391f4ff607bc",
".git/objects/34/7ad217674144c0d891b1a156d84ac215b2523a": "c0ddf46107aace102ce549e89e0162ba",
".git/objects/d1/61b2a29b792b10bf0c71ecb42f04161cdfa0ee": "7897a85af4bf877630149895f7f41c54",
".git/objects/d6/57b9b440c1c8b4dc4c1ef515c46b16123896b6": "33e07941c24a7d2b21bc493c6e051482",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "fd4077bdd6e78092c2590334cd2e4adb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "b1bfda8eb29e326a32fc89e9c85ae8dd",
".git/objects/c7/c2924af14aff9207a702c9ab798060035d1981": "fc85eb0fd92e08fb2d1750f9b6b7c02a",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d1bd03faa2307e273558a266af9137e5",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "9a990f3af0764c0597d34eee31ac5b45",
".git/objects/74/9123bcb201b169ea4c6251ac0f7dd042e57a34": "c5449dbba2c804ccb44e615774a37a43",
".git/objects/8a/b7dfd1a559519f61e664775ed8fe2818338bab": "cafa8993e58198f1a1a90c7cdcdd5af3",
".git/objects/2f/df1aeda9309137afdac05b4c247995edc45393": "87eec836f483c3f65a7417b9240c4687",
".git/objects/09/157e7210bd2ecf17ea5a1b99b904d8457fca9d": "4df280fc5d27e085d6c72e52782c4b28",
".git/objects/91/cd8d5edf3d371f7636d285cd43a23b00495925": "e7895aad1f920c15cfcdd29f2219acb8",
".git/objects/62/1880aa4eaa71263b23fe25f3b4672c1c4a5f63": "5b7a6d43c9479c3358ebf86d9387b1ee",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "bb9574ed7cb1d141f894d620747ed2eb",
".git/objects/6d/429edde6e58a0844a01266e347c15d17fb26a4": "15db2de80c2aaa85d7962f0aff710280",
".git/objects/6d/379e34bf3e048ce399bf3110cf24e7d254bdd5": "f2d167f86a76b87093b3b0069f47b1a5",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "23cf995e86ed0d89e7f722e29761fbec",
".git/objects/55/e0b1a5533e4d1474be0ed37b5c7935dafef6c0": "33468359b67dd2d4e248ff5e6c13a5ba",
".git/objects/97/fa792c3c863fcfcfb54ff150319555b57bf9fc": "97fa038e1e371585083a7d09524a9cde",
".git/objects/d4/19bafb4a5d55656b5998263b56363dcce8c0d1": "66eda2e2e4ac915f9b5578ee4f7a66af",
".git/objects/b1/5d675eb206336e9812be39997bd15b82cf0be7": "50449551ba31e5004c4a4491abb050d5",
".git/objects/a9/1552f4eae3529f57c9cb4fa91284fb3f79e4fa": "6fef8d43cdc3d620939994cdc877fc9a",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "a97b1067ce25e8f45f4f49a4a8117ed6",
".git/objects/a8/27d8cbbcda7c29eaa3597b43ae6838fd5c6a35": "b623d9cfc08d56f92d4872836c9f4feb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "d3184f8d69b8aa198a5a7a210764ede9",
".git/objects/f9/2f10318cd7b0ae1570a52fb2a0169b3083d4fc": "d0a23d62d110c2bcd38865734643dc0e",
".git/objects/f7/0737c79fd290d3c9c07425922e7c76dd8e6647": "4426aad67afe1fd81865f44a15a056ca",
".git/objects/e0/d3032fe487eee75a9b53dd2a8c2a8d87b3eafe": "ad6c1258a62c88f8acc65f00e5ee1d4c",
".git/objects/2c/91484e3178169dd2ce1a931599ceb08aa7fae1": "ddac82d0c2cea22e859e437de2b55cb7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "5a97e1409617516f21f4a27552287f75",
".git/objects/77/3bf215012373d4001468143e53500c841055a8": "e4aeb890f98ee40d1651bcaa5c766fb2",
".git/objects/48/08d0a871ecee2639f9dc40ead6a50913d1fd65": "56e11141b24648ec17b622aec0701770",
".git/objects/23/3898c775110e5153fbb8e5ad2f10105d554e70": "c2a649594cbc29774a48c99be55fb3c3",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "3db61a28ddf5b372a0bb9c1aebee3548",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "e33c70e0eae492a795d978ed34591073",
".git/objects/1c/d025961bc821fcbc63005dca001a4a963afb56": "5f002b3387214765c2b10ae6619283fb",
".git/objects/82/546f222b5aceb0a387d279c20aa4061adf14ca": "c6d6d827c459d9d001929bbf58143dfd",
".git/objects/8b/dcdc4b6d73c31903a9f8ab4cc09626bf217142": "b24d2cfbd99cf1bdd5340e412606f2ca",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "388ffa478f931ee7b1fc44958bb62e45",
".git/logs/refs/heads/master": "388ffa478f931ee7b1fc44958bb62e45",
".git/logs/refs/remotes/origin/master": "b732e07bf1df9b32cd8dc5d5e71bd1d9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "3007f87b0aafa47c97f9cdce67b499d3",
".git/refs/remotes/origin/master": "3007f87b0aafa47c97f9cdce67b499d3",
".git/index": "5cabe65f7d6f34efbb70a2bd8556bf35",
".git/COMMIT_EDITMSG": "57bddaf349fbe08f3ea88fb2164c7416",
"assets/AssetManifest.json": "06115c00de58505481689d08b4cd7471",
"assets/NOTICES": "114c29e5eb2ed6ad0c1df6c197cb584f",
"assets/FontManifest.json": "ff21150c7b81fd662680fde8db3ff16b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Montserrat-Light.ttf": "a17f43cc60643d965636985afc00a221",
"assets/fonts/Montserrat-Bold.ttf": "d14ad1035ae6da4e5a71eca362a8d696",
"assets/fonts/Montserrat-Regular.ttf": "34de1239b12123b85ff1a68b58835a1f",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/document.png": "c5a9265acef6aa86c38a07c219246d80",
"assets/assets/bluetooth.png": "ccf368fc292ed2bee7acb6e3a061c715",
"assets/assets/design.png": "daca0931bbd1b5943ed7559f3037fe2b",
"assets/assets/work.png": "c6662670f5fac383cface958bcd6b9ee",
"assets/assets/code.png": "e6ee369964bb27adc43a951e1650ecb3",
"assets/assets/python.png": "2922c3ac7a1dd61fbf4dc8aeb4801de9",
"assets/assets/devop.png": "ad11e50fe0a03cbf7961ad23ccdc0e66",
"assets/assets/embedded.png": "a90df1ceb3546792bf1b3871f1af5675",
"assets/assets/avatar_emoji.jpg": "b54050dc3b49918f934085d16aa4c715",
"assets/assets/avatar.png": "f4876e8ecdb03b67f769dc6ffda205d6",
"assets/assets/algorithms.png": "927494b84059ac3fabadab8ecf4d4e53",
"assets/assets/devops.png": "858d62284a54275d542e27a0aa9cebef",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
