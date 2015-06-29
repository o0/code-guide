'use strict';

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const size = require('gulp-size');

const bs = require('browser-sync').get('kit');

const mixins = require('postcss-mixins');
const nested = require('postcss-nested');
const cssnext = require('cssnext');
const assets = require('postcss-assets');
const mqpacker = require('css-mqpacker');

let plugins = [
  cssnext({
    browsers: 'last 2 versions, ie 10'
  }),
  mixins,
  nested,
  assets({
    loadPaths: ['img', 'fonts'],
    basePath: 'build/'
  }),
  mqpacker
];

gulp.task('postcss', function() {
  return gulp.src('app/css/style.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/css'))
    .pipe(bs.stream({match: '**/*.css'}))
    .pipe(size({showFiles: true}));
});
