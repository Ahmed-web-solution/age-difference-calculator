const CACHE_NAME = 'age-calculator-v2';
const OFFLINE_URL = '/offline.html';

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/favicon-32.png',
  '/og-image.png',
  '/og-image.webp',
  '/manifest.json',
  '/offline.html',
  '/blog',
  '/blog/tags',
  '/privacy',
  '/terms',
  '/disclaimer',
  '/contact'
];

// Blog posts to cache
const BLOG_POSTS = [
  '/blog/how-age-gap-calculators-work',
  '/blog/understanding-age-differences-relationships',
  '/blog/age-calculation-methods-across-cultures'
];

// Blog images to cache
const BLOG_IMAGES = [
  '/blog-images/how-age-gap-calculators-work.webp',
  '/blog-images/understanding-age-differences-relationships.webp',
  '/blog-images/age-calculation-methods-across-cultures.webp'
];

// Install event - cache static assets, blog posts, and images
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Cache static assets
      cache.addAll(STATIC_ASSETS).catch(err => console.log('Cache static assets error:', err));
      // Cache blog posts
      cache.addAll(BLOG_POSTS).catch(err => console.log('Cache blog posts error:', err));
      // Cache blog images
      cache.addAll(BLOG_IMAGES).catch(err => console.log('Cache blog images error:', err));
      return Promise.resolve();
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches and notify clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all([
        // Delete old caches
        ...cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name)),
        // Claim all clients
        self.clients.claim()
      ]);
    }).then(() => {
      // Notify all clients about the update
      return self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({
            type: 'SW_UPDATED',
            message: 'New version available! Refresh to update.'
          });
        });
      });
    })
  );
});

// Fetch event - Network-first strategy for HTML, cache-first for assets
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  const { request } = event;
  const url = new URL(request.url);

  // Network-first strategy for HTML and API requests
  if (request.method === 'GET' && 
      (request.headers.get('accept')?.includes('text/html') || url.pathname.startsWith('/blog'))) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Update cache with fresh response
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          // Network failed, try cache
          return caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match(OFFLINE_URL).then(offlineResponse => {
                return offlineResponse || new Response('Offline', { status: 503 });
              });
            }
            return new Response('Network error', { status: 503 });
          });
        })
    );
    return;
  }

  // Cache-first strategy for CSS, JS, images, fonts
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached version and fetch in background
        fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, networkResponse);
            });
          }
        }).catch(() => {});
        return cachedResponse;
      }

      // Not in cache, fetch from network
      return fetch(request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
        }
        return networkResponse;
      });
    })
  );
});

// Listen for skip waiting message
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
