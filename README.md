# systemjs-plugin-googlemaps

SystemJS plugin to load Google Maps

```
jspm install github:HeinrichFilter/systemjs-plugin-googlemaps
```

In config.js:

``` javascript
System.config({
  map: {
    "googlemaps": "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places!HeinrichFilter/systemjs-plugin-googlemaps/googlemaps"
  }
});
```

In your app:

``` javascript
System.import('googlemaps').then(function (GoogleMaps) {
    new GoogleMaps.Map(document.getElementById('map'), {
        center: {lat: -28.0, lng: 22.0},
        zoom: 6
    });
});
```

# References

This code was adapted from various places:

- https://github.com/millermedeiros/requirejs-plugins/blob/master/src/async.js
- https://github.com/systemjs/systemjs/issues/424
- https://github.com/systemjs/systemjs/issues/314
