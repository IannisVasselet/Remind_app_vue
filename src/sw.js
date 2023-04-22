import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
    ({ request }) => request.mode === 'navigate',
    new StaleWhileRevalidate({
        cacheName: 'pages',
    })
);

registerRoute(
    ({ request }) => request.destination === 'script' || request.destination === 'style',
    new StaleWhileRevalidate({
        cacheName: 'assets',
    })
);

const CACHE_NAME = 'my-app-cache';
const urlsToCache = [
    '/',
    '/index.html',
    '/favicon.ico',
    '/manifest.json',
    '/logo.png',
    // Ajoutez les autres fichiers statiques nécessaires à votre application
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        }),
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        }),
    );
});
