const {webview, webviewSizeView} = require('./getElements');

let timeOut;

function showSizeView() {
  webview.executeJavaScript('[window.innerWidth, window.innerHeight]', result => {
    webviewSizeView.innerText = result[0] + ' × ' + result[1];

    clearTimeout(timeOut);
    webviewSizeView.style.display = 'block';
    timeOut = setTimeout(() => {
      webviewSizeView.style.display = 'none';
    }, 2000);
  });

}

module.exports = {showSizeView};
