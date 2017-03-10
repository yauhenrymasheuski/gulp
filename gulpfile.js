var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var merge = require('merge-stream');
var browserSync = require('browser-sync').create();


gulp.task('build', function() {
    var html = gulp.src('app/*.html')
        .pipe(gulp.dest('dist/'));

    var styles = gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));

    return merge(html, styles);
});


gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))

        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('clean:dist', function() {
    return del.sync('dist');
})


gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('app/scss/**/*.scss', ['sass']);
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