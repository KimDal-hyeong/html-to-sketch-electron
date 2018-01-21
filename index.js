const fs = require('fs');
const path = require('path');
const open = require("open");

const runPlugin = require('./script/runPlugin');

const adressInput = document.getElementsByClassName('Header__input')[0];
const webview = document.getElementsByClassName('Content__webview')[0];
const pickerBtn = document.getElementsByClassName('SideBar__pick-btn')[0];
const runBtn = document.getElementsByClassName('SideBar__run-btn')[0];
const alert = document.getElementsByClassName('Alert')[0];

// 이벤트
webview.addEventListener("dom-ready", function (e) {
  const script = fs.readFileSync(path.join(__dirname, './script/webviewScript.bundle.js'), 'utf8');
  webview.executeJavaScript(script);
  stopPicker();
});

webview.addEventListener("load-commit", function (e) {
  if(e.isMainFrame) {
    adressInput.value = e.url;
  }
});

adressInput.onkeydown = function (e) {
  if (e.key === 'Enter') {
    const url = adressInput.value;
    loadWebview(url);
    adressInput.blur();
  }
};

adressInput.onfocus = function () {
  adressInput.select();
};

webview.addEventListener('ipc-message', (event) => {
  switch (event.channel) {
    case 'picker-picked':
      runBtn.classList.add('SideBar__run-btn--picked-mode') ;
      break;
    case 'window-resize':
    case 'window-scroll':
      stopPicker();
      break;
    case 'open-browser':
      open(event.args[0]);
      break;
    case 'reset-address-input':
      adressInput.value = '';
      break;
  }
});

// 함수
function loadWebview(url) {
  adressInput.value = url;
  webview.src = url.indexOf('//') === -1 ? 'http://' + url : url;
}

function runSketch() {
  alert.classList.add('Alert--loading');
  webview.executeJavaScript('webviewScript.runPage2layers()', false, function (result) {
    const jsonString = JSON.stringify(result).replace(/sans-serif/g, 'Arial');
    runPlugin(jsonString, function () {
      alert.classList.remove('Alert--loading');
      alert.classList.add('Alert--done');
      setTimeout(function () {
        alert.classList.remove('Alert--done');
      }, 2000);
      webview.reload();
    });
  });
}

function startPicker() {
  webview.executeJavaScript('webviewScript.startPicker();');
  pickerBtn.setAttribute('onclick', 'stopPicker();');
  pickerBtn.classList.add('SideBar__pick-btn--stop-mode');
}

function stopPicker() {
  webview.executeJavaScript('webviewScript.stopPicker();');
  pickerBtn.setAttribute('onclick', 'startPicker();');
  runBtn.classList.remove('SideBar__run-btn--picked-mode') ;
  pickerBtn.classList.remove('SideBar__pick-btn--stop-mode');
}

