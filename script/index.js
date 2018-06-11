const fs = require('fs');

const {webview, addressInput, pickerBtn, runBtn} = require(__dirname + '/script/getElements');
const {findFont} = require(__dirname + '/script/fontReplacer');
const {startPicker, stopPicker} = require(__dirname + '/script/handlePicker');
const runHtmlToSketch = require(__dirname + '/script/runHtmlToSketch');

runBtn.addEventListener('click', () => {
  runHtmlToSketch();
});

function findFontEvent(e) {
  if(e.newURL.search(/ttf|otf|woff|eot/g) !== -1) {
    findFont(webview);
  }
}

webview.addEventListener("dom-ready", function (e) {
  const script = fs.readFileSync(__dirname + '/webviewScript/webviewScript.bundle.js', 'utf8');
  webview.executeJavaScript(script);

  stopPicker();

  findFont(webview);
  webview.addEventListener("did-get-response-details", findFontEvent);
});

webview.addEventListener("load-commit", function (e) {
  webview.removeEventListener("did-get-response-details", findFontEvent);
  if(e.isMainFrame) {
    addressInput.value = e.url;
  }
});

webview.addEventListener('ipc-message', (event) => {
  switch (event.channel) {
    case 'picker-picked':
      runBtn.classList.add('SideBar__run-btn--picked-mode');
      break;
    case 'window-resize':
    case 'window-scroll':
      stopPicker();
      break;
    case 'reset-address-input':
      addressInput.value = '';
      break;
  }
});

webview.addEventListener('new-window', e => {
  webview.src = e.url;
});

addressInput.onkeydown = function (e) {
  if (e.key === 'Enter') {
    const url = addressInput.value;
    addressInput.value = url;
    webview.src = url.indexOf('//') === -1 ? 'http://' + url : url;
    addressInput.blur();
  }
};

addressInput.onfocus = function () {
  addressInput.select();
};