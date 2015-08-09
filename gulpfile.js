//获取gulp
var gulp = require('gulp');
	jshint = require('gulp-jshint'),
	less = require('gulp-less'),
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
//Less编译
gulp.task('less',function() {
	gulp.src('less/*.less')
		.pipe(less())
		.pipe(gulp.dest('css'))
});
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
    gulp.watch(['less/*.less','js/*.js','css/*.css','images/*.*'], function(event) {
    	console.info(event.path);
    	// changed、added、deleted、renamed
    	console.info(event.type);
    });
    gulp.watch('less/*.less',['less','mincss']);
    gulp.watch('css/*.css',['mincss']);
    gulp.watch('js/*.js',['jshint','minjs']);
    gulp.watch('images/*.*',['minimg']);
});
gulp.task('default',['auto']);
	
