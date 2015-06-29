'use strict';

const gulp = require('gulp');
const size = require('gulp-size');
const run = require('run-sequence');

let files = [
  'app/**/*',
  '!app/css/**/*',
  '!app/js/**/*',
  '!app/templates/**/*'
];

gulp.task('copy', function(done) {
  run('clean', 'copy:build', 'clean:templates', done);
});

gulp.task('copy:build', function() {
  return gulp.src(files, {dot: true})
    .pipe(gulp.dest('build'))
    .pipe(size());
});

gulp.task('copy:image', function() {
  return gulp.src('app/img/**/*.{jpg,png,svg}')
    .pipe(gulp.dest('build/img'));
});

gulp.task('copy:fonts', function() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('build/fonts'));
});
