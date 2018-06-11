const fs = require('fs');
const packager = require('electron-packager');
const appVersionPrefix = require('./package.json').versionPrefix;

const execSync = require('child_process').execSync;

const commitHash = execSync('git rev-parse HEAD').toString().trim();
const commitCount = execSync('git rev-list HEAD --count').toString().trim();

process.env.COMMIT_HASH = commitHash;

const options = {
  dir: '.',
  out: 'app-build',
  name: 'HTML to Sketch',
  icon: 'resources/icon.icns',
  platform: 'darwin',
  arch: 'x64',
  overwrite: true,
  prune: false,
  appVersion: appVersionPrefix + '.' + commitCount,
  ignore: [
    '.gitignore',
    'electronPackager.js',
    'gulpfile.js',
    'package-lock.json',
    'yarn.lock',
    'README.md',
    /.*\.gif/,
    'node_modules/gulp',
    'node_modules/electron$',
  ]
};

fs.writeFileSync('commitHash.json', JSON.stringify({commitHash}, null, 2));

packager(options)
  .then((appPaths) => {
    console.log('Build Complete : ' + appPaths);
    fs.unlinkSync('commitHash.json');
  });