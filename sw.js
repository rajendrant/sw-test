
this.addEventListener('fetch', function(event) {
  if (event.request.url.endsWith(".jpg")) {
    event.respondWith(
      fetch(event.request).catch(function() {
        console.log("fetch failure", event.request.url);
        return new Response("Request failed!");
      })
    );
  }
});


this.addEventListener('install', function(event) {
  console.log("on install");
  event.waitUntil(self.skipWaiting());
  //window.location.reload();
});

this.addEventListener('activate', function(event) {
  console.log("on activate");
  event.waitUntil(self.clients.claim().then(function() {
    fetch('https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2@2x.jpg',
          {headers:{'X-Custom-header': 'bar'}}).then(function(data) {
      console.log('fetch on activate complete');
    }).catch(function() {
      console.log('fetch on activate failed');
    });
  }));
  
  fetch('https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2@2x.jpg',
        {headers:{'X-Custom-header': 'bar'}}).then(function(data) {
    console.log('fetch on activate complete');
  }).catch(function() {
    console.log('fetch on activate failed');
  });
});

