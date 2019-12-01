const gulp       	= require('gulp');
const sass 			= require('gulp-sass');
const watch 		= require('gulp-watch');
const autoprefixer 	= require('gulp-autoprefixer');
const cleancss 		= require('gulp-clean-css');
const browserSync 	= require('browser-sync').create();

 		

gulp.task('styles', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 3 versions'], cascade: false}))
        .pipe(cleancss())
        .pipe(browserSync.stream())
        .pipe(gulp.dest('./css/'));

});


gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', gulp.parallel('styles'));
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default',  gulp.parallel('styles', 'watch'));