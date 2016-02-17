function injectScript(src) {
    return new Promise(function (resolve, reject) {
        window["__google_maps_callback__"] = function () {
            resolve('');
        }

        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = src;
        var t = document.getElementsByTagName('script')[0];
        if (t) { t.parentNode.insertBefore(s, t); }
        else { var h = document.getElementsByTagName("head")[0]; h.appendChild(s); }
    });
}

exports.fetch = function (load) {
    var scriptUrl = load.address
    scriptUrl += (scriptUrl.indexOf('?') < 0) ? '?' : '&';
    scriptUrl += "callback=__google_maps_callback__"
    return injectScript(scriptUrl).then(function () {
        return 'module.exports = google.maps';
    });
};
