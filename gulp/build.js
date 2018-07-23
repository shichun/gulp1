'use strict';
const gulp = require('gulp'), cssmin = require('gulp-cssmin');
gulp.task('copy-html-files', function() {
    var stream = gulp.src('./src/view/**/*.html') // stream source
        .pipe(gulp.dest('./dist/view/')); // copy to dist/views
    return stream;
});
gulp.task('copy-js-files', function() {
    var stream = gulp.src(['bower_components/jquery/dist/jquery.js', './src/library/**/*']) // stream source
        .pipe(gulp.dest('./dist/view/js')); // copy to dist/views
    return stream;
});

var runSequence = require('run-sequence');
/* some other plugins go here */
/* define our tasks here */
gulp.task('build', function(callback) {
    runSequence(
        'css-files',
        'bower-files',
        'copy-html-files',
        'copy-js-files',
        /* other tasks maybe */
        callback);
});
// var clean = require('gulp-clean');
var del = require('del');
// gulp.task('clean', function() {
// var stream = gulp.src('./dist', { read: false })
//     .pipe(clean());
// return stream
// });
gulp.task('clean', (cb) => {
    return del(['dist'], cb);
});