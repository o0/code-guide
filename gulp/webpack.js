'use strict';

const path = require('path');
const gulp = require('gulp');
const webpack = require('webpack-stream');

const bs = require('browser-sync').get('kit');

gulp.task('webpack', function() {
  let options = require(path.resolve('config/webpack.config'));

  options.devtool = 'source-map';
  options.debug = true;
  options.cache = true;

  return gulp.src('app/js/app.js')
    .pipe(webpack(options))
    .pipe(gulp.dest('build/js'))
    .pipe(bs.stream({once: true}));
});

gulp.task('webpack:build', function() {
  let options = require(path.resolve('config/webpack.config'));

  return gulp.src('app/js/app.js')
    .pipe(webpack(options))
    .pipe(gulp.dest('build/js'));
});
