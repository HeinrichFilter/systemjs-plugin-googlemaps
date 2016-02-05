# systemjs-plugin-googlemaps

SystemJS plugin to load Google Maps

```
jspm install systemjs-googlemaps=github:HeinrichFilter/systemjs-plugin-googlemaps
```

In config.js:

``` javascript
System.config({
  "paths": {
    // putting this in "map" breaks SystemJS builder
    "google-maps": "https://maps.googleapis.com/maps/api/js"
  },
  meta: {
    "google-maps": {
      "build": false, // exclude external Google Maps JS from SystemJS builder
      "loader": "systemjs-googlemaps"
    }
  },
  packages: {
    "https://maps.googleapis.com": {
      defaultExtension: false
    }
  },
});
```

lib/app.js:

``` javascript
import GoogleMaps from 'google-maps';

new GoogleMaps.Map(document.getElementById('map'), {
    center: {lat: -28.0, lng: 22.0},
    zoom: 6
});
```

index.html:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        html, body {
            height: 100%;
            margin: 0;
            padding: 0;
        }
        #map {
            height: 100%;
            width: 100%;
        }
    </style>
    <script src="jspm_packages/system.js"></script>
    <script src="config.js"></script>
    <script>
        System.import('lib/app.js')
    </script>
</head>
<body>
<div id="map"></div>
</body>
</html>
```

# References

This code was adapted from various places:

- https://github.com/millermedeiros/requirejs-plugins/blob/master/src/async.js
- https://github.com/systemjs/systemjs/issues/424
- https://github.com/systemjs/systemjs/issues/314
- https://github.com/systemjs/systemjs/issues/1085
