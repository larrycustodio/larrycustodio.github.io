const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', () =>
    gulp.src('src/scss/main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(plumber.stop())
        .pipe(gulp.dest('src/css'))
);

gulp.task('css', () =>
    gulp.src('src/css/main.css')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({ compatibility: '*' }))
        .pipe(sourcemaps.write())
        .pipe(plumber.stop())
        .pipe(gulp.dest('dist'))
);

gulp.task('js', () =>
    gulp.src('src/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'))
);

gulp.task('cssify', ['sass','css']);

gulp.task('default', ['sass', 'css', 'js']);
