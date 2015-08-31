'use strict';
//获取gulp
var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	minjs = require('gulp-uglify'),
	mincss = require('gulp-minify-css'),
	minImg = require('gulp-imagemin'),
	rename = require('gulp-rename');
//Js语法检查
gulp.task('jshint',function() {
	gulp.src('js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
});
// sass编译
// outputStyle:nested/expanded/compact/compressed
gulp.task('sass', function () {
 	gulp.src('sass/*.scss')
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(gulp.dest('css'));
});
// sass调试
// gulp.src('sass/*.scss')
// 	.pipe(sourcemaps.init())
//     .pipe(sass())
// 	.pipe(sourcemaps.write())
// 	.pipe(gulp.dest('css'));
//Css合并&压缩
gulp.task('mincss',function() {
	gulp.src('css/*.css')
		.pipe(concat('all.css'))
		.pipe(gulp.dest('dist/css'))
		.pipe(mincss())
		.pipe(rename('all.min.css'))
		.pipe(gulp.dest('dist/css'))
});
//Js合并&压缩
gulp.task('minjs',function() {
	gulp.src('js/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(minjs())
		.pipe(rename('all.min.js'))
		.pipe(gulp.dest('dist/js'))
});
//图片压缩
gulp.task('minimg',function() {
	gulp.src('images/*.*')
		.pipe(minImg({
			progressive: true
		}))
		.pipe(gulp.dest('dist/images'))
});
//监视变化
gulp.task('auto', function () {
    gulp.watch(['sass/*.scss','js/*.js','css/*.css','images/*.*'], function(event) {
    	console.info(event.path);

    	// changed、added、deleted、renamed
    	console.info(event.type);
    });
    gulp.watch('sass/*.scss',['sass','mincss']);
    gulp.watch('css/*.css',['mincss']);
    gulp.watch('js/*.js',['jshint','minjs']);
    gulp.watch('images/*.*',['minimg']);
});
gulp.task('default',['auto']);
	