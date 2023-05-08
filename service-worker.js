const CACHE_NAME = 'my-app-cache';
const urlsToCache = [
    '/',
    '/index.html',
    '/src/main.js',
    // Ajout des composants
    '/src/components/Category.vue',
    '/src/components/Home.vue',
    '/src/components/Theme.vue',
    '/src/components/Card.vue',
    '/src/components/Revision.vue',
    '/src/App.vue',
    // Ajout du store
    '/src/stores/categoryStore.js',
    '/src/store.js',
    // Ajout des routes
    '/src/router/index.js',
    // Ajout des styles
    '/src/assets/main.css',
    '/src/assets/base.css',
];


self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
