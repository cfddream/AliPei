"use strict";

var T = 3000
  , n = 0
  , ms = 233;

window.addEventListener('DOMContentLoaded', function () {
  var t = setInterval(function () {
    n += ms;
    if (n > T) {
      console.log('AliPei failed.');
      clearInterval(t);
    }
    var f = window.loginIframe
      , d = f.document
      , p , i;
    if (d) {
      p = d.getElementById('password_input');
      i = d.getElementById('safeSignCheck');
      if (i && i.checked) {
        p.onpaste= null;
        i.click();
        clearInterval(t);
      }
    }
  }, ms);
}, false);
