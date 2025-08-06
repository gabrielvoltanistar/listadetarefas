const CACHE_NAME = 'pwa-task-list-v1';
const urlsToCache = [
    '/listadetarefas/',
    '/listadetarefas/index.html',
    '/listadetarefas/style.css',
    '/listadetarefas/manifest.json',
    '/listadetarefas/icons/icon-192x192.png',
    '/listadetarefas/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
