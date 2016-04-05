this.onfetch = function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      console.log("fetch failure", event.request.url);
      return new Response("Request failed!");
    })
  );
}
