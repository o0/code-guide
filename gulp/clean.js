'use strict';

const fs = require('fs-extra');
const gulp = require('gulp');

gulp.task('clean', fs.emptyDir.bind(null, 'build'));
gulp.task('clean:templates', fs.remove.bind(null, 'build/templates'));
