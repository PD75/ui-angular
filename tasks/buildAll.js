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

  var pkg = require('../package.json');
  var banner = ['/**',
    ' * <%= pkg.name %> - v<%= pkg.version %>',
    ' * <%= pkg.description %> ',
    ' * <%= pkg.homepage %>',
    ' * <%= pkg.license %> License',
    ' **/',
    ''].join('\n');

  var source ='./src/**/*.js';
  var output = './dist/';


  return function() {
    return gulp.src(source)
      .pipe(plugins.print())
      .pipe(plugins.eslint())
      .pipe(plugins.eslint.format())
      .pipe(plugins.ngAnnotate())
      .pipe(plugins.angularFilesort())
      .pipe(plugins.concat('ui-angular.js'))
      .pipe(plugins.header(banner, { pkg : pkg } ))
      .pipe(gulp.dest(output))
      .pipe(plugins.print())
      .pipe(plugins.rename({
        suffix: ".min",
      }))
      .pipe(plugins.uglify())
      .pipe(plugins.header(banner, { pkg : pkg } ))
      .pipe(gulp.dest(output))
      .pipe(plugins.print());
  };
};
