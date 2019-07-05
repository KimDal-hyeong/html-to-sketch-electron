const {content, webview, webviewWidthControllerInput} = require('./getElements');
const {showSizeView} = require('./handleSizeView');

function handleBlur(e) {
  const width = e.target.value;

  localStorage.setItem('webviewWidth', width);

  if (width === '') {
    content.style.width = '100%';
    webview.style.width = '100%';
    return;
  }

  content.style.width = parseInt(width) + 255 + 'px';
  webview.style.width = width + 'px';

  setTimeout(showSizeView, 10);
}

function setFromStorage() {
  const width = localStorage.getItem('webviewWidth');
  webviewWidthControllerInput.value = width;
  content.style.width = parseInt(width) + 255 + 'px';
  webview.style.width = width + 'px';
}

module.exports = {handleBlur, setFromStorage};
