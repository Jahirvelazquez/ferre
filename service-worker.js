const self = this;

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-cache').then(function(cache) {
        return cache.addAll([
          '/',
          './index.html',
          './Productos.html',
          './Contacto.css',
          './carrusel.css',
          './contacto.css',
          './index.css',
            './productos.css',
            './footer.css',
            './imagenes'

            
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });