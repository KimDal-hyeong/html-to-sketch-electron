const fs = require('fs');
const packager = require('electron-packager');

const appVersion = require('./package.json').version;

const execSync = require('child_process').execSync;

const commitHash = execSync('git rev-parse HEAD').toString().trim();
process.env.COMMIT_HASH = commitHash;

const options = {
  dir: '.',
  out: 'app-build',
  name: 'HTML to Sketch',
  icon: 'resources/icon.icns',
  platform: 'darwin',
  arch: 'x64',
  asar: true,
  overwrite: true,
  prune: false,
  appVersion: appVersion,
  ignore: [
    '.gitignore',
    'electronPackager.js',
    'downloadLink.json',
    'gulpfile.js',
    'package-lock.json',
    'yarn.lock',
    'README.md',
    'node_modules/gulp',
    'node_modules/electron$',
    /.*\.gif/,
    /.*\.zip/,
  ]
};

fs.writeFileSync('commitHash.json', JSON.stringify({commitHash}, null, 2));

packager(options)
  .then((appPaths) => {
    fs.unlinkSync('commitHash.json');
    console.log('Done app packaging.');

    const command = `ditto -c -k --sequesterRsrc --keepParent "${appPaths}/HTML to Sketch.app" "HTML-to-Sketch-app.zip"`;
    console.log('Archiving app to zip...');
    execSync(command);
  });