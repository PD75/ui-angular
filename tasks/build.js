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

  var pkg = require('../package.json');
  var banner = ['/**',
    ' * <%= pkg.name %> - v<%= pkg.version %>',
    ' * <%= pkg.description %> ',
    ' * <%= pkg.homepage %>',
    ' * <%= pkg.license %> License',
    ' **/',
    ''].join('\n');


  // console.log(__dirname);
  // console.log(origPath);
  // console.log(require.main.filename);

  var source = [];
  if ( typeof semantic.components !== 'undefined' && semantic.components ){
    for (var c = 0; c < semantic.components.length; c++) {
      source[c] = paths.source + '/**/' + semantic.components[c] + '.js';
      // console.log(source[c] + ' ' + c);
    }
    source[semantic.components.length] = paths.source + '/**/ui*.js';
  } else {
    source[0] = paths.source + '/**/*.js';

  }
  

  return function() {
    return gulp.src(source)
      .pipe(plugins.print())
      .pipe(plugins.eslint())
      .pipe(plugins.eslint.format())
      .pipe(plugins.ngAnnotate())
      .pipe(plugins.angularFilesort())
      .pipe(plugins.concat('ui-angular.js'))
      .pipe(plugins.header(banner, { pkg : pkg } ))
      .pipe(gulp.dest(paths.output))
      .pipe(plugins.print())
      .pipe(plugins.rename({
        suffix: ".min",
      }))
      .pipe(plugins.uglify())
      .pipe(plugins.header(banner, { pkg : pkg } ))
      .pipe(gulp.dest(paths.output))
      .pipe(plugins.print());
  };
};
