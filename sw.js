const CACHE_NAME = "neon-calculator-v1";

const urlsToCache = [
  "/ggrt/",
  "/ggrt/index.html",
  "/ggrt/manifest.json",
  "/ggrt/icon-192.png",
  "/ggrt/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
