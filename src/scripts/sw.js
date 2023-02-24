import CacheHelper from './utils/cache_helper';

const version = '1.0.0';
// const CACHE_NAME = `mypwa-${version}`;
const assetsToCache = [
  '/',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png',
  '/index.html',
  '/app.webmanifest',
  '/sw.bundle.js',
  '/app.bundle.js',
  // .......
];

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');

  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
  // TODO: Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');

  event.waitUntil(CacheHelper.deleteOldCache());
  // TODO: Delete old caches
});

self.addEventListener('fetch', (event) => {
  if (!event.request.url.startsWith('http')) {
    return;
  }
  event.respondWith(CacheHelper.revalidateCache(event.request));
  // event.respondWith(fetch(event.request));
  // TODO: Add/get fetch request to/from caches
});

// self.addEventListener('install', (event) => {
//   console.log('Installing service worker....');

//   // menyimpan appshell ke caches API
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => caches.addAll(assetsToCache))
//   );
// });

// self.addEventListener('activate', (event) => {
//   console.log('Activating service worker...');

//   // menghapus caches lama
//   event.waitUntil(
//     caches
//       .keys()
//       .then((cacheNames) =>
//         Promise.all(
//           cachesNames
//             .filter((name) => name !== CACHE_NAME)
//             .map((filteredName) => caches.delete(filteredName))
//         )
//       )
//   );
// });

// self.addEventListener('fetch', (event) => {
//   // service worker bisa menampilkan, bahkan memanipulasi request yang dilakukan client
//   console.log('FETCHING');
//   console.log(event.request);

//   // sebelum akhirnya mengirim request ke server.
//   event.respondWith(fetch(event.request));
// });

// self.addEventListener('message', (event) => {
//   // menampilkan data/pesan yang dikirim client
//   console.log(`Client mengirim pesan: ${event.data}`);
// });

// self.addEventListener('sync', function (event) {
//   console.log('SYNC');
//   if (event.tag === 'foo') {
//     event.waitUntil(doSomething());
//   }
// });

// const options = {
//   // ...
// };

// self.addEventListener('push', (event) => {
//   console.log('PUSH');
//   event.waitUntil(self.registration.showNotification('Halo Coder!', options));
// });
