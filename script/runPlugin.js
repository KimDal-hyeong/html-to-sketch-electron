const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;
const { sketchtoolRunCommand } = require('@skpm/builder/lib/utils/webpackCommandPlugin/webpackShellPlugin');
const { app } = require('electron').remote;
const pluginDirPath = path.resolve(app.getPath('appData'), 'HTML to Sketch Electron');

const JSON_POSITION_COMMENT = '/*JSON*/';

async function runPlugin (json, callback) {
  // appData에 플러그인이 있는지 확인하고 없으면 복사
  if (!fs.existsSync(path.resolve(pluginDirPath, 'asketch2sketch.sketchplugin'))) {
    fs.mkdirSync(path.resolve(pluginDirPath, 'asketch2sketch.sketchplugin'));
    fs.mkdirSync(path.resolve(pluginDirPath, 'asketch2sketch.sketchplugin/Contents'));
    fs.mkdirSync(path.resolve(pluginDirPath, 'asketch2sketch.sketchplugin/Contents/Sketch'));
    fs.copyFileSync(path.resolve(__dirname, '../plugin/asketch2sketch.sketchplugin/Contents/Sketch/run.js'), path.resolve(pluginDirPath, 'asketch2sketch.sketchplugin/Contents/Sketch/run.js'));
    fs.copyFileSync(path.resolve(__dirname, '../plugin/asketch2sketch.sketchplugin/Contents/Sketch/manifest.json'), path.resolve(pluginDirPath, 'asketch2sketch.sketchplugin/Contents/Sketch/manifest.json'));
  }

  const pluginCode = fs.readFileSync(path.resolve(pluginDirPath, 'asketch2sketch.sketchplugin/Contents/Sketch/run.js'), 'utf8');
  const newPluginCode = pluginCode.split(JSON_POSITION_COMMENT).map((code, index) => (index === 1 ? json : code)).join(JSON_POSITION_COMMENT);
  fs.writeFileSync(path.resolve(pluginDirPath, 'asketch2sketch.sketchplugin/Contents/Sketch/run.js'), newPluginCode);

  const command = sketchtoolRunCommand(path.resolve(pluginDirPath, 'asketch2sketch.sketchplugin'), 'run');
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    callback();
  });
}

module.exports = runPlugin;
