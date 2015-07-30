'use strict';

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('images:build', function() {
  return gulp.src('build/img/**/*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('build/img'));
});
