var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
const autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

var browserSync = require('browser-sync').create();



gulp.task('jade', function() {
    return gulp.src('app/jade/*.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(gulp.dest('app/dist')) // tell gulp our output folder
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        //.pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('app/css'))
        .pipe(gulp.dest('app/dist/css'))

        .pipe(browserSync.reload({
            stream: true
        }))
});





gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/jade/*.jade', ['jade']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});



gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})