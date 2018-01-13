const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

module.exports = function runPlugin(json, callback) {

  fs.writeFileSync(path.resolve(__dirname, '../plugin/asketch2sketch/page.asketch.json'), json);
  const buildedPluginFolderUrl = path.resolve(__dirname, '../build');

  if (!fs.existsSync(buildedPluginFolderUrl)) {
    fs.mkdirSync(buildedPluginFolderUrl);
  }

  const command = exec('cd plugin && skpm-build && skpm-build --run');
  command.stdout.on('data', function(data) {
    console.log(data);
  });
  command.stderr.on('data', function(data) {
    console.log(data);
  });
  command.on('close', function () {
    callback();
  })
};