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
const browserSync = require('browser-sync').create();

gulp.task('build-html', () =>
    gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./'))
);

gulp.task('build-sass', () =>
    gulp.src('src/scss/main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(plumber.stop())
        .pipe(gulp.dest('src/css'))
);

gulp.task('build-css', ['build-sass'], () =>
    gulp.src('src/css/main.css')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({ compatibility: '*' }))
        .pipe(sourcemaps.write())
        .pipe(plumber.stop())
        .pipe(gulp.dest('dist'))
);

gulp.task('build-js', () =>
    gulp.src('src/js/**/*.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('app.concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('app.concat.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(plumber.stop())
        .pipe(gulp.dest('dist'))
);
gulp.task('fonts', function () {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
})

gulp.task('html-watch', ['build-html'], done => {
    browserSync.reload();
    done();
});

gulp.task('css-watch', ['build-css'], done => {
    browserSync.reload();
    done();
});

gulp.task('js-watch', ['build-js'], done => {
    browserSync.reload();
    done();
});

gulp.task('watch', ['build-html', 'fonts', 'build-css', 'build-js'], () => {
    browserSync.init({
        proxy: "127.0.0.1:8081"
    });

    gulp.watch('src/**/*.html', ['html-watch']);
    gulp.watch('src/scss/**/*.scss', ['css-watch']),
    gulp.watch('src/js/**/*.js', ['js-watch'])
});


gulp.task('default', ['build-html', 'fonts', 'build-sass', 'build-css', 'build-js']);