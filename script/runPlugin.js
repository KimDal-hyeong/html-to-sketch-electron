const path = require('path');
const exec = require('child_process').exec;
const { sketchtoolRunCommand } = require('@skpm/builder/lib/utils/webpackCommandPlugin/webpackShellPlugin');

async function runPlugin (json, callback) {
  const command = sketchtoolRunCommand(path.resolve(__dirname, '../plugin/asketch2sketch.sketchplugin'), 'run', {context: { json }});
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });

  callback();
}

module.exports = runPlugin;
