var gulp = require('gulp');

var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', function () {
    console.log('default task');
    return browserify('./app/hendrix.js')
    .bundle()
    .pipe(source('hendrix-bundle.js'))
    .pipe(gulp.dest('./build/'))
});
