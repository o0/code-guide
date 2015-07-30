'use strict';

const gulp = require('gulp');
const bs = require('browser-sync').get('kit');

gulp.task('serve', function() {
  bs.init({
    server: 'build/',
    notify: false,
    open: false,
    ui: false
  });

  gulp.watch('app/css/**/*.css', ['postcss']);
  gulp.watch('app/js/**/*.js', ['webpack']);
  gulp.watch('app/img/**/*.{jpg,png,webp,svg,gif,ico}', ['copy:image', bs.reload]);
  gulp.watch('app/templates/**/*.{hbs,js}', ['handlebars']);
});
