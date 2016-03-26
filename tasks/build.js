/*global 
   require, 
   module,
*/



module.exports = function(origPath) {
  'use strict';

  var semantic = require(origPath + '/semantic.json');
  var paths = require(origPath + '/ui-angular.json');

  // Include gulp
  var gulp = require('gulp');
  // Include plugins
  var plugins = require('gulp-load-plugins')();

  // console.log(__dirname);
  // console.log(origPath);
  // console.log(require.main.filename);

  var source = [];
  for (var c = 0; c < semantic.components.length; c++) {
    source[c] = paths.source + '/**/' + semantic.components[c] + '.js';
    // console.log(source[c] + ' ' + c);
  }
  source[semantic.components.length] = paths.source + '/**/ui*.js';

  return function() {
    return gulp.src(source)
      .pipe(plugins.print())
      .pipe(plugins.eslint())
      .pipe(plugins.eslint.format())
      .pipe(plugins.ngAnnotate())
      .pipe(plugins.angularFilesort())
      .pipe(plugins.concat('ui-angular.min.js'))
      .pipe(plugins.uglify())
      .pipe(gulp.dest(paths.output))
      .pipe(plugins.print());
  };
};
