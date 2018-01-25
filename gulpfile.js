const fs = require('fs');
const gulp = require('gulp');
const electron = require('electron-connect').server.create();
const execSync = require('child_process').execSync;

gulp.task('start', function () {

  const commitHash = execSync('git rev-parse HEAD').toString().trim();
  fs.writeFileSync('commitHash.json', JSON.stringify({commitHash}, null, 2));

  // Start browser process
  electron.start();

  // Restart browser process
  gulp.watch('app.js', electron.restart);

  // Reload renderer process
  gulp.watch(['index.html', 'src/*'], electron.reload);
});