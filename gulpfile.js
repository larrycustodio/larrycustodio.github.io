const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();

gulp.task('sass', () => {
    return gulp.src('./assets/scss/**/*.scss')
        .pipe(sass('error',sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('/assets/css'))
        .pipe(browserSync.stream());
});

gulp.task('css', () => {
    return gulp.src('./assets/css/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/css'));
});

gulp.task('js', () => {

});

gulp.task("watch", () => {
    gulp.watch('./assets/scss/*.scss', ['sass','css']);
    gulp.watch('./assets/js/*.js', ['js']);
})

gulp.task("serve", () => {
    return nodemon({
        script: 'server/index.js',
        env: {
            NODE_ENV: 'development'
        }
    });
});

gulp.task("browser-sync", () => {
    browserSync.init({
        proxy: "localhost:8080/"
    })
});
gulp.task('default', ['sass', 'css', 'watch', 'serve','browser-sync']);

module.exports = gulp;
