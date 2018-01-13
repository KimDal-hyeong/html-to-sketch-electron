const gulp = require('gulp');
const electron = require('electron-connect').server.create();

gulp.task('start', function () {

  // Start browser process
  electron.start();

  // Restart browser process
  gulp.watch('app.js', electron.restart);

  // Reload renderer process
  gulp.watch(['index.html', 'src/*'], electron.reload);
});