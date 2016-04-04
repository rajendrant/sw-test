// register service worker

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw-test/sw.js', { scope: '/sw-test/' }).then(function(reg) {
    if(reg.installing) {
      console.log('Service worker installing');
    } else if(reg.waiting) {
      console.log('Service worker installed');
    } else if(reg.active) {
      console.log('Service worker active');
    }
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
  navigator.serviceWorker.ready.then(function(event) {
    console.log("ready", event);
    setTimeout(function() {
      fetch('https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2@2x.jpg',
            {headers:{'X-Custom-header': 'bar'}}).then(function(data) {
        console.log('fetch on ready complete');
      }).catch(function() {
        console.log('fetch on ready failed');
      })
    }, 3000);
  });
};

// function for loading each image via fetch() with an added custom header.

function imgLoad(imgJSON) {
  // return a promise for an image loading
  return new Promise(function(resolve, reject) {
    fetch(imgJSON.url, {headers:{'X-Custom-header': 'bar'}}).catch(function() {
      console.error("imgLoad fetch failed");
    }).then(function(data) {
        console.log("imgLoad fetch success");
        var arrayResponse = [];
        arrayResponse[0] = data;
        arrayResponse[1] = imgJSON;
        resolve(arrayResponse);
    });
  });
};

var imgSection = document.querySelector('section');

window.onload = function() {

  // load each set of image, alt text, name and caption
  for(i = 0; i<=Gallery.images.length-1; i++) {
    imgLoad(Gallery.images[i]).then(function(arrayResponse) {

      var myImage = document.createElement('img');
      var myFigure = document.createElement('figure');
      var myCaption = document.createElement('caption');
      var imageURL = window.URL.createObjectURL(arrayResponse[0]);

      myImage.src = imageURL;
      myImage.setAttribute('alt', arrayResponse[1].alt);
      myCaption.innerHTML = '<strong>' + arrayResponse[1].name + '</strong>: Taken by ' + arrayResponse[1].credit;

      imgSection.appendChild(myFigure);
      myFigure.appendChild(myImage);
      myFigure.appendChild(myCaption);

    }, function(Error) {
      console.log(Error);
    });
  };
};
