var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleancss     = require('gulp-clean-css');


gulp.task('styles', function () {
    return gulp.src('./assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 3 versions'], cascade: false}))
        .pipe(cleancss())
        .pipe(gulp.dest(''));
});

gulp.task('watch', function () {
    gulp.watch('assets/scss/**/*.scss', gulp.parallel('styles'));
});

gulp.task('default',  gulp.parallel('styles', 'watch'));