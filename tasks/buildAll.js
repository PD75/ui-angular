/*global 
   require, 
   module,
*/



module.exports = function() {
  'use strict';

  // Include gulp
  var gulp = require('gulp');
  // Include plugins
  var plugins = require('gulp-load-plugins')();

  // console.log(__dirname);

  var source ='./src/**/*.js';
  var output = './dist/';

  // console.log(source);
  // console.log(output);

  return function() {
    return gulp.src(source)
      .pipe(plugins.print())
      .pipe(plugins.eslint())
      .pipe(plugins.eslint.format())
      .pipe(plugins.ngAnnotate())
      .pipe(plugins.angularFilesort())
      .pipe(plugins.concat('ui-angular.js'))
      .pipe(gulp.dest(output))
      .pipe(plugins.print())
      .pipe(plugins.rename({
        suffix: ".min",
      }))
      .pipe(plugins.uglify())
      .pipe(gulp.dest(output))
      .pipe(plugins.print());
  };
};
