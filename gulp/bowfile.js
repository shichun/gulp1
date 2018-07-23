const gulp = require('gulp');
var wiredep = require('wiredep').stream;
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var useref = require('gulp-useref');
var minifyCss = require('gulp-minify-css');
var gulpif = require('gulp-if');

gulp.task('css-files', function() {
    var stream = gulp.src('./src/index.html')
        .pipe(useref()) //take a streem from index.html comment
        .pipe(gulpif('*.css', minifyCss())) // if .css file, minify
        .pipe(gulpif('*.css', gulp.dest('./dist'))); // copy to dist
    return stream;
});

// var edp = require('gulp-edp');

// gulp.src(
//     [
//         'src/**/*.js',
//         'bower_components/**/*.js',
//         '!bower_components/**/{demo,demo/**}',
//         '!bower_components/**/{test,test/**}'
//     ]
// )
//     .pipe(edp({
//         getProcessors: function() {
//             var moduleProcessor = new this.ModuleCompiler();
//             return [moduleProcessor];
//         }
//     }))
//     .pipe(gulp.dest('dist'));

gulp.task('bower-files', function() {

    var stream = gulp.src('./src/index.html')
        .pipe(wiredep({
            directory: 'bower_components' //inject dependencies
        }))
        .pipe(useref())
        .pipe(gulpif('*.js', ngAnnotate())) // ng-annotate if .js
        .pipe(gulpif('*.js', uglify())) // uglify if .js
        .pipe(gulpif('*.js', gulp.dest('./dist/lib'))); // paste to dist
    return stream;
});