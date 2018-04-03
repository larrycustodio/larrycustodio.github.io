const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

gulp.task('build-html', () =>
    gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
);

gulp.task('compile-sass', () =>
    gulp.src('src/scss/main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(plumber.stop())
        .pipe(gulp.dest('src/css'))
);

gulp.task('build-css', () =>
    gulp.src('src/css/main.css')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({ compatibility: '*' }))
        .pipe(sourcemaps.write())
        .pipe(plumber.stop())
        .pipe(gulp.dest('dist'))
);

gulp.task('build-js', () =>
    gulp.src('src/js/*.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('app.concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('app.concat.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(plumber.stop())
        .pipe(gulp.dest('dist'))
);

gulp.task('default', ['build-html', 'compile-sass', 'build-css', 'build-js']);

gulp.task('watch', ()=>{
    gulp.watch('src/**/*.html', ['build-html']),
    gulp.watch('src/scss/**/*.scss', ['compile-sass', 'build-css']),
    gulp.watch('src/js/**/*.js', ['build-js'])
});