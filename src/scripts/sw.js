import {} from 'workbox-precaching'

self.addEventListener('install', () => {
  console.log('Service worker: Installed')
  self.skipWaiting()
})

self.addEventListener('push', () => {
  console.log('Service Worker: Pushed')
})
