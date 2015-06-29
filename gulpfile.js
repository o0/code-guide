'use strict';

const gulp = require('gulp');
const run = require('run-sequence');

require('browser-sync').create('kit');
require('require-dir')('./tasks');

gulp.task('start', ['copy'], function(done) {
  run(['postcss', 'webpack'], 'handlebars', 'serve', done);
});
