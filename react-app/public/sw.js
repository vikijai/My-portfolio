const CACHE_NAME = 'portfolio-cache-v4';
const APP_SHELL = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/portfolio-icon.jpg',
  '/images/vignesh-image-1.jpeg',
  '/images/work-CD.png',
  '/images/work-CC.png',
  '/images/work-EC.png',
  '/images/work3.png',
  '/resume/Vignesh_Sivalingam_FE_2026.pdf',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET') {
    return;
  }

  if (!request.url.startsWith(self.location.origin)) {
    return;
  }

  const shouldCacheAsset = ['style', 'script', 'worker'].includes(request.destination);

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() =>
          caches.match('/').then((cachedResponse) => cachedResponse || caches.match('/index.html'))
        )
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request)
        .then((response) => {
          if (response.ok && (shouldCacheAsset || request.destination === 'document' || request.destination === 'style' || request.destination === 'script')) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }

          return response;
        })
        .catch(() => {
          if (request.destination === 'document') {
            return caches.match('/').then((cachedResponse) => cachedResponse || caches.match('/index.html'));
          }

          return caches.match(request);
        });
    })
  );
});
