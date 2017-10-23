const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();

gulp.task('sass', () => {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('assets/css'))
});

gulp.task('css', ['sass'], () => {
    return gulp.src('assets/css/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());    
});

gulp.task('js', () => {
    return gulp.src('assets/js/**/*.js')
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(uglify())
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest('public/js'))
    .pipe(browserSync.stream());    
});

gulp.task('watch', () => {
    gulp.watch('assets/scss/*.scss', ['sass','css']);
    gulp.watch('assets/js/*.js', ['js']);
})

gulp.task('serve', () => {
    return nodemon({
        script: 'server/index.js',
        env: {
            'NODE_ENV': 'development',
        }
    });
});

gulp.task('browser-sync', () => {
    browserSync.init({
        proxy: 'localhost:8080/'
    })
});
gulp.task('default', ['sass', 'css', 'watch', 'serve','browser-sync']);

module.exports = gulp;
