const fs = require('fs');
const {webview, alert} = require(__dirname + '/getElements');
const runPlugin = require(__dirname + '/runPlugin');
const {replaceFont} = require(__dirname + '/fontReplacer');

function runHtmlToSketch() {
  alert.classList.add('Alert--loading');
  webview.executeJavaScript('webviewScript.page2layers();', false, function (result) {
    let jsonString = replaceFont(JSON.stringify(result));

    runPlugin(jsonString, function() {
      alert.classList.remove('Alert--loading');
      alert.classList.add('Alert--done');
      setTimeout(function () {
        alert.classList.remove('Alert--done');
      }, 2000);
      webview.reload();
    });
  });
}

module.exports = runHtmlToSketch;