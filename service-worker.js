// Add service worker for caching and offline functionality
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('static-cache').then((cache) => {
      return cache.addAll([
        '/offline.html',
        '/styles/main.css',
        '/scripts/main.js'
      ]);
    })
  );
}); 