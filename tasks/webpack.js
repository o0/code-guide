'use strict';

const gulp = require('gulp');
const webpack = require('gulp-webpack');

const bs = require('browser-sync').get('kit');

gulp.task('webpack', function() {
  let options = require('./../webpack.config.js');

  options.devtool = 'source-map';
  options.debug = true;
  options.cache = true;

  return gulp.src('app/js/app.js')
    .pipe(webpack(options))
    .pipe(gulp.dest('build/js'))
    .pipe(bs.stream({once: true}));
});
