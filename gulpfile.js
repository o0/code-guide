'use strict';

const gulp = require('gulp');
const run = require('run-sequence');

require('browser-sync').create('kit');
require('require-dir')('./gulp');

gulp.task('start', ['copy'], function(done) {
  run(['postcss', 'webpack'], 'handlebars', 'serve', done);
});

gulp.task('build', ['copy'], function(done) {
  run(['postcss:build', 'webpack:build', 'images:build'], 'handlebars:build', done);
});
