// public/sw.js
const CACHE_NAME = "hb-portfolio-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/logo.png",
  "/favicon.ico",
  "/og-image.png",
  "/twitter-image.png",
  // Add other static assets or CSS/JS bundles if needed
];

// Install event - caching app shell
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service Worker: Caching app shell");
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Activate event - cleanup old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("Service Worker: Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache first, fallback to network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(event.request)
        .then((response) => {
          // Cache the new response dynamically
          return caches.open(CACHE_NAME).then((cache) => {
            if (
              event.request.url.startsWith(self.location.origin) &&
              event.request.method === "GET"
            ) {
              cache.put(event.request, response.clone());
            }
            return response;
          });
        })
        .catch(() => {
          // Fallback page if offline
          if (event.request.mode === "navigate") {
            return caches.match("/index.html");
          }
        });
    })
  );
});
