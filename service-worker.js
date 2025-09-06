self.addEventListener('install', (event)=>{
  event.waitUntil(
    caches.open('een-barcode-cache').then((cache)=>{
      return cache.addAll([
        '/',
        '/index.html',
        '/menu.html',
        '/barcode.html',
        '/datasolar.csv',
        '/datapertalite.csv',
        '/anime.jpg',
        '/anime2.jpg',
        '/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (event)=>{
  event.respondWith(
    caches.match(event.request).then((response)=>{
      return response || fetch(event.request);
    })
  );
});
