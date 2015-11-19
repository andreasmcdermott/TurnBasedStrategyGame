var gulp = require('gulp');
var browserify = require('gulp-browserify');
var sourcemaps = require("gulp-sourcemaps");
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


gulp.task('scripts', [], function() {
  return gulp.src('./src/app.js')
    .pipe(browserify({ debug: true }))
    .pipe(sourcemaps.init())
    //.pipe(uglify())
    //.pipe(concat('app.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.js'], ['scripts']);
});

gulp.task('default', ['watch', 'scripts']);