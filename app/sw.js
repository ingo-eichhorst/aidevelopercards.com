self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('adc-companion-') || key.startsWith('adc-saved-')).map(key => caches.delete(key)))).then(() => self.clients.claim()).then(() => self.registration.unregister())));
