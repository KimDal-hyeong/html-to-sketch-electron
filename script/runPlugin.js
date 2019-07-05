const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;
const { sketchtoolRunCommand } = require('@skpm/builder/lib/utils/webpackCommandPlugin/webpackShellPlugin');
const { app } = require('electron').remote;

const jsonPath = path.resolve(app.getPath('appData'), 'html-to-sektch-electron', 'json.json');

async function runPlugin (json, callback) {
  fs.writeFileSync(jsonPath, json);

  const command = sketchtoolRunCommand(
    path.resolve(__dirname, '../plugin', 'asketch2sketch.sketchplugin'),
    'run',
    { context: { jsonPath } }
  );

  exec(command, (error, stdout) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    callback(stdout.trim());
  });
}

module.exports = runPlugin;
