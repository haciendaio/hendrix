var gulp = require('gulp');
var watch = require('gulp-watch');

var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['browserify'], function () {
    console.log('default task');
    gulp.watch('./app/**/*.js', ['browserify']);
});

gulp.task('browserify', function() {
  console.log('browserify')
  return browserify('./app/hendrix.js')
  .bundle()
  .pipe(source('hendrix-bundle.js'))
  .pipe(gulp.dest('./build/'))
});
