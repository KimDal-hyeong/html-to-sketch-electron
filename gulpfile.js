const gulp = require('gulp');
const electron = require('electron-connect').server.create();

gulp.task('start', function () {

  const commitRevision = require('child_process')
    .execSync('git rev-parse HEAD')
    .toString().trim();
  process.env.COMMIT_REVISION = commitRevision;

  // Start browser process
  electron.start();

  // Restart browser process
  gulp.watch('app.js', electron.restart);

  // Reload renderer process
  gulp.watch(['index.html', 'src/*'], electron.reload);
});