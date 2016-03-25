/*global require*/

var semantic = require('semantic.json');
var paths = require('ui-angular.json');

// Include gulp
var gulp = require('gulp');
// Include plugins
var plugins = require('gulp-load-plugins')();

gulp.task('build', function() {
  return gulp.src(paths.source + '/**/' + semantic.components + '.js')
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.ngAnnotate())
    .pipe(plugins.angularFilesort())
    .pipe(plugins.concat('ui-angular.min.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.output));
});


