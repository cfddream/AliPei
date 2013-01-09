"use strict";

window.onload = function () {
  var loginIframe = window.loginIframe
    , fd = loginIframe.document
    , i = fd.getElementById('safeSignCheck')
    , c = i.checked;
  fd.getElementById('password_input').onpaste= null;
  if (c) {
    fd.getElementById('safeSignCheck').click();
  }
}
