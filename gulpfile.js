/*global require, __dirname*/

// Include gulp
var gulp = require('gulp');

var build = require('./tasks/build')(__dirname);


gulp.task('build',build);
