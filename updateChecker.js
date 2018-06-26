const requestPromise = require('request-promise');
const compareVersions = require('compare-versions');
const open = require("open");
const {app, dialog} = require('electron');

const downloadAnalystLink = 'https://kimdal-hyeong.github.io/html-to-sketch-electron/download-analyst/';
const latestReleaseApi = 'https://api.github.com/repos/KimDal-hyeong/html-to-sketch-electron/releases/latest';

module.exports =  async function() {
  const latestReleaseInfo = JSON.parse(await requestPromise(latestReleaseApi));

  if (compareVersions(latestReleaseInfo.tag_name, app.getVersion()) === 1) {
    const dialogOpts = {
      type: 'info',
      title: 'New version',
      buttons: ['Download', 'cancel'],
      message: '🤗 New version',
      detail: 'A new version is ready. Click the button to download.'
    };

    dialog.showMessageBox(dialogOpts, (response) => {
      if(response === 0) {
        open(downloadAnalystLink);
      }
    })
  }
};
