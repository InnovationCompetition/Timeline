var gulp = require('gulp');

// 监控源码更改
var livereload = require('gulp-livereload');

// 动态重启服务器
var nodemon = require('gulp-nodemon');

// 编译文件
var pug = require('gulp-pug');
var livescript = require('gulp-livescript');
var sass = require('gulp-sass');

// 编译 pug 文件
gulp.task('pug', function() {
  return gulp.src('source/pug/*.pug')
             .pipe(pug())
             .pipe(gulp.dest('static/html'))
             .pipe(livereload());
});

// 编译 livescript 文件
gulp.task('ls', function() {
  return gulp.src('source/ls/*.ls')
             .pipe(livescript())
             .pipe(gulp.dest('static/js'))
             .pipe(livereload());
});

// 编译 sass 文件
gulp.task('sass', function() {
  return gulp.src('source/sass/*.sass')
             .pipe(sass())
             .pipe(gulp.dest('static/css'))
             .pipe(livereload());
});

// 监控源码更改
gulp.task('watch', function() {
  console.log(111);
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
