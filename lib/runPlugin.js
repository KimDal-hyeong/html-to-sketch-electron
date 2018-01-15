const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const generateWebpackConfig = require('@skpm/builder/lib/utils/webpackConfig').default;


const argv = {run: true};
const output = path.resolve(__dirname, '../build/HTMLtoSketch.sketchplugin');
const manifestFolder = path.resolve(__dirname, '../plugin/asketch2sketch');
const skpmConfig = {
  main: '../build/HTMLtoSketch.sketchplugin',
  manifest: 'asketch2sketch/manifest.json',
  version: undefined,
  homepage: undefined,
  description: undefined,
  name: 'HTMLtoSketch',
  title: undefined,
  appcast: undefined,
  resources: [],
  babel: undefined,
  repository: '',
  author: undefined,
  test: {}
};

const file = "./asketch2sketch.js";
const identifiers = [ 'HTMLtoSketch' ];
const handlers = [ 'onRun' ];

const webpackConfig = generateWebpackConfig (
  argv,
  output,
  manifestFolder,
  skpmConfig
);

async function runPlugin (json, callback) {

  console.log(output);
  console.log(manifestFolder);


  fs.writeFileSync(path.resolve(__dirname, '../plugin/asketch2sketch/page.asketch.json'), json);

  const webpackConfigRun = await webpackConfig(file, identifiers, handlers);
  const compiler = webpack(webpackConfigRun);

  compiler.run((err, stat)=>{
    callback();
  });
}

module.exports = runPlugin;