const {alert, alertFailTitle, alertFailText} = require('./getElements');

function closeFailAlert() {
  alert.classList.remove('Alert--fail');
  alertFailText.innerHTML = '';
  alertFailTitle.innerHTML = '';
}

function doneAlert() {
  alert.classList.remove('Alert--loading');
  alert.classList.add('Alert--done');
  setTimeout(function () {
    alert.classList.remove('Alert--done');
  }, 2000);
}

function failAlert(title, message) {
  alert.classList.remove('Alert--loading');
  alert.classList.add('Alert--fail');
  alertFailTitle.innerHTML = title;
  alertFailText.innerHTML = message;
}

module.exports = {closeFailAlert, doneAlert, failAlert};
