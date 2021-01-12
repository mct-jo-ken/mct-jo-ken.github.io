'use strict';
 
const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const sassGlob = require("gulp-sass-glob");

sass.compiler = require('node-sass');


gulp.task('scss', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sassGlob()) // Sassの@importにおけるglobを有効にする
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('scss:compile', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sassGlob()) // Sassの@importにおけるglobを有効にする
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./css'));
});

// gulp.task('scss:watch', function () {
//   gulp.watch('./scss/**', ['sass']);
// });
