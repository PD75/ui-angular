/*global require*/

// Include gulp
var gulp = require('gulp');

var build = require('./tasks/buildAll')();


gulp.task('build', build);
