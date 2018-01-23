const packager = require('electron-packager');

const options = {
  dir: '.',
  out: 'app-build',
  name: 'HTML to Sketch',
  icon: 'resources/icon.icns',
  platform: 'darwin',
  arch: 'x64',
  overwrite: true,
  prune: false,
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

const commitRevision = require('child_process')
  .execSync('git rev-parse HEAD')
  .toString().trim();
process.env.COMMIT_REVISION = commitRevision;

packager(options)
  .then((appPaths) => {
    console.log('Build Complete : ' + appPaths)
  });