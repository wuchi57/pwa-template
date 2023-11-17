const staticCacheKey = 'pwa-cache'

const assets = [
  '/',
  '/manifest.json',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/assets/img-1.png',
  '/assets/img-2.jpeg',
  '/assets/img-3.webp',
  '/assets/img-4.webp',
  '/assets/img-5.png',
  '/assets/img-6.jpg',
  '/assets/img-7.png',
]

self.addEventListener('install', installEvent => {
  installEvent.waitUntil(
      caches.open(staticCacheKey).then(cache => {
        cache.addAll(assets)
      })
  )
})

self.addEventListener('fetch', fetchEvent => {
  fetchEvent.respondWith(
      caches.match(fetchEvent.request)
          .then(res => {
            return res || fetch(fetchEvent.request)
          })
  )
})
