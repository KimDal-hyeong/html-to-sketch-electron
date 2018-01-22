const requestPromise = require('request-promise');
const compareVersions = require('compare-versions');
const open = require("open");
const {app, dialog} = require('electron');

const downloadLinksUrl = 'https://raw.githubusercontent.com/KimDal-hyeong/html-to-sketch-electron/master/downloadLink.json';

module.exports =  async function() {
  const updatesJson = JSON.parse(await requestPromise(downloadLinksUrl));

  if (compareVersions(updatesJson.version, app.getVersion()) === 1) {
    const dialogOpts = {
      type: 'info',
      title: 'New version',
      buttons: ['Go to download', 'cancel'],
      message: '🤗 New version',
      detail: 'A new version is ready. Click the button to download.'
    };

    dialog.showMessageBox(dialogOpts, (response) => {
      if(response === 0) {
        open(updatesJson.link);
      }
    })
  }
};
