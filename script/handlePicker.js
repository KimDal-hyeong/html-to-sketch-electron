const {webview, pickerBtn, runBtn} = require(__dirname + '/getElements');

function startPicker() {
  webview.executeJavaScript('webviewScript.startPicker();');
  pickerBtn.removeEventListener('click', startPicker);
  pickerBtn.addEventListener('click', stopPicker);
  pickerBtn.classList.add('SideBar__pick-btn--stop-mode');
}

function stopPicker() {
  webview.executeJavaScript('webviewScript.stopPicker();');
  pickerBtn.removeEventListener('click', stopPicker);
  pickerBtn.addEventListener('click', startPicker);
  runBtn.classList.remove('SideBar__run-btn--picked-mode') ;
  pickerBtn.classList.remove('SideBar__pick-btn--stop-mode');
}

module.exports = {startPicker, stopPicker};