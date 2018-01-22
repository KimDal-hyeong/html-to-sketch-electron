const packager = require('electron-packager');

const options = {
  dir: '.',
  out: 'app-build',
  name: 'HTML to Sketch',
  icon: 'resources/icon.icns',
  platform: 'darwin',
  arch: 'x64',
  overwrite: true,
  prune: true,
  ignore: [
    '.gitignore',
    'electronPackager.js',
    'gulpfile.js',
    'package-lock.json',
    'webpack.config.js',
    'yarn.lock',
    'README.md',
    /.*\.gif/,
  ]
};

packager(options)
  .then((appPaths) => {
    console.log('Build Complete : ' + appPaths)
  });