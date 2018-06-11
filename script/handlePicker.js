const {webview, pickerBtn, runBtn} = require(__dirname + '/getElements');

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

pickerBtn.addEventListener('click', startPicker);

module.exports = {startPicker, stopPicker};