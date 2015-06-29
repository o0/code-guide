'use strict';

const gulp = require('gulp');
const util = require('gulp-util');

const ngrok = require('ngrok');
const psi = require('psi');
const run = require('run-sequence');

let site = '127.0.0.1:3000';

gulp.task('pagespeed:mobile', function(done) {
  return psi.output(site, {
    strategy: 'mobile'
  }, done);
});

gulp.task('pagespeed:desktop', function(done) {
  return psi.output(site, {
    strategy: 'desktop'
  }, done);
});

gulp.task('ngrok', function(done) {
  return ngrok.connect(3000, function(err, url) {
    if (err) {
      console.error(err);
    }

    site = url;
    util.log('Tunneling', util.colors.cyan('127.0.0.1:3000'), 'to', util.colors.magenta(site));
    done();
  });
});

gulp.task('pagespeed', function() {
  run('ngrok', ['pagespeed:mobile', 'pagespeed:desktop'], process.exit);
});
