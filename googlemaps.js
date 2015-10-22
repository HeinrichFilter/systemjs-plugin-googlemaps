function injectScript(src){
  return new Promise(function(resolve, reject) {
    window["__google_maps_callback__"] = function() {
      resolve('');
    }

    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = src;
    var t = document.getElementsByTagName('script')[0]; t.parentNode.insertBefore(s,t);
  });
}

exports.fetch = function(load) {
  var scriptUrl = load.address
  scriptUrl += (scriptUrl.indexOf('?') < 0)? '?' : '&';
  scriptUrl += "callback=__google_maps_callback__"
  return injectScript(scriptUrl);
};

exports.translate = function(load) {
  return 'module.exports = google.maps';
}
