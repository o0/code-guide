'use strict';

const path = require('path');
const fs = require('fs-extra');

const root = path.resolve('build/');
const discover = ['img', 'fonts', 'files', 'css', 'js'].map(function(folder) {
  return path.resolve(root, folder);
});

module.exports = function(url) {
  let file;

  let found = discover.some(function(folder) {
    file = path.join(folder, url);
    return fs.existsSync(file);
  });

  if (found) {
    url = file.replace(root, '');
  }

  return url;
};
