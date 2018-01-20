const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const generateWebpackConfig = require('@skpm/builder/lib/utils/webpackConfig').default;
const generateJsonPlugin = require('generate-json-webpack-plugin');

const {app} = require('electron').remote;

const pluginName = 'HTMLtoSketch';
const scriptName = 'asketch2sketch';
const pluginDirPath = path.resolve(app.getPath('appData'), 'HTML to Sketch Electron');
const contextPath = path.resolve(__dirname, '..');

const argv = {run: true};
const output = path.resolve(pluginDirPath, pluginName +'.sketchplugin');
const manifestFolder = path.resolve(contextPath, 'plugin');
const file = scriptName + ".js";
const identifiers = [ pluginName ];
const handlers = [ 'onRun' ];

const webpackConfig = generateWebpackConfig (
  argv,
  output,
  manifestFolder,
  {}
);

const manifestJsonPlugin = new generateJsonPlugin('manifest.json', {
  "commands": [
    {
      "identifier": pluginName,
      "script": scriptName + '.js',
    }
  ],
  "disableCocoaScriptPreprocessor": true
});

async function runPlugin (json, callback) {

  const asketchJsonPath = path.resolve(__dirname, '../plugin/page.asketch.json');
  fs.writeFileSync(asketchJsonPath, json);

  const webpackConfigRun = await webpackConfig(file, identifiers, handlers);

  // context 수정
  webpackConfigRun.context = contextPath;
  // node_modules의 js파일을 가져오기위해 exclude 제거
  delete webpackConfigRun.module.rules[0].exclude;
  // manifest.json 을 만드는 플러그인 추가
  webpackConfigRun.plugins.push(manifestJsonPlugin);

  const compiler = webpack(webpackConfigRun);

  compiler.run((err, stat)=>{
    if(err) {
      console.log(err);
      console.log(stat);
    }
    fs.unlinkSync(asketchJsonPath);
    callback();
  });
}

module.exports = runPlugin;

