/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-doorbell',
  contentFor: function(type, config) {
    var apiKey = config.APP.DOORBELL_APIKEY

    if (apiKey && type === 'body-footer') {
      return `
      <script type="text/javascript">
        window.doorbellOptions = { appKey: '${apiKey}' }
        (function(w, d, t) {
          function l() {
            window.doorbellOptions.windowLoaded = true
            var g = d.createElement(t)
            g.id = 'doorbellScript'
            g.type = 'text/javascript'
            g.async = true
            g.src = 'https://embed.doorbell.io/button/3744?t=' + (new Date().getTime())
            (d.getElementsByTagName('head')[0]||d.getElementsByTagName('body')[0]).appendChild(g)
          }
          if (w.attachEvent) {
            w.attachEvent('onload', l)
          } else if (w.addEventListener) {
            w.addEventListener('load', l, false)
          } else {
            l()
          }
        }(window, document, 'script'))
      </script>`
    }
  }
};
