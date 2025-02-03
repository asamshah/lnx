const CACHE_NAME = 'site-static-v1';
const DYNAMIC_CACHE = 'site-dynamic-v1';

const STATIC_ASSETS = [
  '/offline.html',
  '/styles/main.css',
  '/scripts/main.js'
];

// Add service worker for caching and offline functionality
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== CACHE_NAME && key !== DYNAMIC_CACHE)
        .map(key => caches.delete(key))
      );
    })
  );
});

// Add dynamic caching strategy
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request).then(fetchResponse => {
          return caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(event.request.url, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
  );
}); 