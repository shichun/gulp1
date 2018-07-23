const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('lint', function() {
    return gulp.src(['src/view/**/**.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});