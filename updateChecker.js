const requestPromise = require('request-promise');
const compareVersions = require('compare-versions');
const open = require('open');
const {app, dialog} = require('electron');

const downloadAnalystLink = 'https://kimdal-hyeong.github.io/html-to-sketch-electron/download-analyst/?utm_source=update-alert';
const latestReleaseApi = 'https://api.github.com/repos/KimDal-hyeong/html-to-sketch-electron/releases/latest';

module.exports =  async function() {
  const latestReleaseInfo = JSON.parse(await requestPromise({
    url: latestReleaseApi,
    headers: {
      'User-Agent': 'html-to-sketch-electron',
    },
  }));
  const latestVersion = latestReleaseInfo.tag_name;

  if (compareVersions(latestVersion, app.getVersion()) === 1) {
    const dialogOpts = {
      type: 'info',
      title: 'New version',
      buttons: ['Download', 'cancel'],
      message: '🤗 New version ' + latestVersion,
      detail: 'A new version is ready. Click the button to download.'
    };

    dialog.showMessageBox(dialogOpts, (response) => {
      if(response === 0) {
        open(downloadAnalystLink);
      }
    })
  }
};
