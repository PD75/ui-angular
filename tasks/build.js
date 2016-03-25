/*global require, module*/
module.exports = function(callback) {

var semantic = require('./semantic.json');
var paths = require('./ui-angular.json');

var source = [];
for (var c = 0; c < semantic.components.length; c++) {
  source[c] = './' + paths.source + '/**/' + semantic.components[c] + '.js';
  // console.log(source[c]+' '+c);  
}
source[c + 1] = './' + paths.source + '/**/ui*.js';
// Include gulp
var gulp = require('gulp');
// Include plugins
var plugins = require('gulp-load-plugins')();
  gulp.task('build', function() {
    return gulp.src(source)
      .pipe(plugins.print())
      .pipe(plugins.eslint())
      .pipe(plugins.eslint.format())
      .pipe(plugins.ngAnnotate())
      .pipe(plugins.angularFilesort())
      .pipe(plugins.concat('ui-angular.min.js'))
      .pipe(plugins.print())
      .pipe(plugins.uglify())
      .pipe(gulp.dest('./' + paths.output));
  });

};
  // return gulp.src('./' + paths.source + '/**/' + semantic.components + '.js')
