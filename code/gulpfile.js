var gulp = require('gulp');

// 监控源码更改
var livereload = require('gulp-livereload');

// 动态重启服务器
var nodemon = require('gulp-nodemon');

// 编译文件
var pug = require('gulp-pug');
var livescript = require('gulp-livescript');
var sass = require('gulp-sass');

// 压缩文件
var htmlmin = require('gulp-htmlmin');
var uglifycss = require('gulp-uglifycss');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var imageop = require('gulp-image-optimization');

// 压缩图片
gulp.task('jpg_', function() {
  return gulp.src('source/img/*.jpg')
             .pipe(imageop({
                optimizationLevel: 5,
                progressive: true,
                interlaced: true
              }))
             .pipe(gulp.dest('static/img'))
             .pipe(livereload());
});
gulp.task('jpg', function() {
  return gulp.src('source/img/demo/*.jpg')
             .pipe(imageop({
                optimizationLevel: 5,
                progressive: true,
                interlaced: true
              }))
             .pipe(gulp.dest('static/img/demo'))
             .pipe(livereload());
});

// 编译 pug 文件
gulp.task('pug', function() {
  return gulp.src('source/pug/*.pug')
             .pipe(pug())
             .pipe(htmlmin({collapseWhitespace: true}))
             .pipe(gulp.dest('static/html'))
             .pipe(livereload());
});

// 编译 livescript 文件
gulp.task('ls', function() {
  return gulp.src('source/ls/*.ls')
             .pipe(livescript())
             .pipe(ngAnnotate())
             .pipe(uglify())
             .pipe(gulp.dest('static/js'))
             .pipe(livereload());
});

// 编译 sass 文件
gulp.task('sass', function() {
  return gulp.src('source/sass/*.sass')
             .pipe(sass())
             .pipe(uglifycss({
                "maxLineLen": 80,
                "uglyComments": false
              }))
             .pipe(gulp.dest('static/css'))
             .pipe(livereload());
});

// 监控源码更改
gulp.task('watch', ['jpg_', 'jpg'], function() {
  livereload.listen();
  gulp.watch('source/pug/*.pug', ['pug']);
  gulp.watch('source/ls/*.ls', ['ls']);
  gulp.watch('source/sass/*.sass', ['sass']);
});

// 动态重启服务器
gulp.task('server', function() {
  nodemon({
    'script': 'index.js',
    'ignore': 'static/js/*.js'
  });
});

gulp.task('default', ['server', 'watch']);
