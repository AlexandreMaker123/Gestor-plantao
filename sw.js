self.addEventListener('push', function(e) {
  const data = e.data ? e.data.json() : {};
  self.registration.showNotification(data.title || 'Plantões', {
    body: data.body || '',
    icon: '/icon.png',
    badge: '/icon.png',
    vibrate: [200, 100, 200]
  });
});

self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  e.waitUntil(clients.openWindow('/'));
});
