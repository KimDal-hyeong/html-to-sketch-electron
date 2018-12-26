const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;
const { sketchtoolRunCommand } = require('@skpm/builder/lib/utils/webpackCommandPlugin/webpackShellPlugin');

const JSON_POSITION_COMMENT = '/*JSON*/';

async function runPlugin (json, callback) {
  const pluginCode = fs.readFileSync(path.resolve(__dirname, '../plugin/asketch2sketch.sketchplugin/Contents/Sketch/run.js'), 'utf8');
  const newPluginCode = pluginCode.split(JSON_POSITION_COMMENT).map((code, index) => (index === 1 ? json : code)).join(JSON_POSITION_COMMENT);
  fs.writeFileSync(path.resolve(__dirname, '../plugin/asketch2sketch.sketchplugin/Contents/Sketch/run.js'), newPluginCode);

  const command = sketchtoolRunCommand(path.resolve(__dirname, '../plugin/asketch2sketch.sketchplugin'), 'run');
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
