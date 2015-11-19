var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var sourcemaps = require("gulp-sourcemaps");
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var del = require('del');

var paths = ['src/**/*.js'];

gulp.task('clean', function(cb) {
  del(['dist'], cb);
});

gulp.task('scripts', ['clean'], function() {
  return gulp.src('src/app.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(browserify({debug: true}))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch(paths, ['scripts']);
});

gulp.task('default', ['watch', 'scripts']);
