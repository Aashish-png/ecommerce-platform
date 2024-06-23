// serviceWorker.js

const CACHE_NAME = 'ecommerce-cache-v1';

self.addEventListener('install', event => {
  console.log('Service Worker installed');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        return cache.addAll([
          'https://fakestoreapi.com/products'
        ]);
      })
  );
});

self.addEventListener('fetch', event => {
  console.log('Fetch event intercepted:', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('Response served from cache:', event.request.url);
          return response;
        }
        console.log('Fetching from network:', event.request.url);
        return fetch(event.request);
      })
  );
});
