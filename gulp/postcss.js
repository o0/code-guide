'use strict';

const path = require('path');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const size = require('gulp-size');
const options = require(path.resolve('config/kit'));

const bs = require('browser-sync').get('kit');

const include = require('postcss-import');
const mixins = require('postcss-mixins');
const cssnext = require('cssnext');
const nested = require('postcss-nested');
const assets = require('postcss-assets');
const mqpacker = require('css-mqpacker');
const cssnano = require('cssnano');

let files = options.entry.css.map(function(file) {
  return path.join('app', 'css', file);
});

let plugins = [
  include(),
  mixins(),
  cssnext({
    browsers: options.browsers,
    import: false
  }),
  nested(),
  assets({
    loadPaths: options.discover,
    basePath: 'build/'
  }),
  mqpacker({
    sort: true
  }),
  cssnano({
    comments: {
      removeAll: true
    }
  })
];

gulp.task('postcss', function() {
  return gulp.src(files)
    .pipe(plumber({
      errorHandler: function(err) {
        console.error(err.plugin + ': ' + err.message);
        this.emit('end');
      }
    }))
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/css'))
    .pipe(bs.stream({match: '**/*.css'}))
    .pipe(size({showFiles: true}));
});

gulp.task('postcss:build', function() {
  return gulp.src(files)
    .pipe(postcss(plugins))
    .pipe(gulp.dest('build/css'))
    .pipe(size({showFiles: true}));
});
