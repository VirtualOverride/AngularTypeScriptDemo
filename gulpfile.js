'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

var Config = require('./gulpfile.config');
var config = new Config();

wrench.readdirSyncRecursive('./src/gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./src/gulp/' + file)(config);
});

gulp.task('default', ['ts-lint', 'compile-ts', 'gen-ts-refs', 'inject-js', 'watch']);


