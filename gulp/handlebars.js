'use strict';

const fs = require('fs-extra');
const gulp = require('gulp');
const merge = require('merge');

const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const size = require('gulp-size');

const bs = require('browser-sync').get('kit');

const configure = function() {
  fs.ensureDirSync('./app/templates/partials');
  fs.ensureDirSync('./app/templates/helpers');

  let helpers = merge(
    require('hbs-helpers'),
    require('require-dir')('./../app/templates/helpers')
  );

  return {
    ignorePartials: true,
    batch: ['./app/templates/partials'],
    helpers: helpers
  };
};

gulp.task('handlebars', function() {
  return gulp.src('app/templates/*.hbs')
    .pipe(handlebars({}, configure()))
    .pipe(rename({extname: '.html'}))
    .pipe(gulp.dest('build'))
    .pipe(size({showFiles: true}))
    .pipe(bs.stream({once: true}));
});

gulp.task('handlebars:build', function() {
  return gulp.src('app/templates/*.hbs')
    .pipe(handlebars({}, configure()))
    .pipe(rename({extname: '.html'}))
    .pipe(gulp.dest('build'))
    .pipe(size({showFiles: true}));
});
