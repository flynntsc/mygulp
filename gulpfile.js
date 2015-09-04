'use strict';
//获取gulp
var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	minJs = require('gulp-uglify'),
	minCss = require('gulp-minify-css'),
	minImg = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	browserSync = require('browser-sync').create(),
	path = {
		HTML: 'html/*.html',
		SASS: 'sass/*.scss',
		CSS: 'css/*.css',
		IMG: 'images/*',
		JS: 'js/*.js'
	};

// sass检验&编译
gulp.task('fnSass', function () {
 	gulp.src(path.SASS)
	 	.pipe(sourcemaps.init())

		// outputStyle:nested/expanded/compact/compressed
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	 	.pipe(sourcemaps.write())
		.pipe(gulp.dest('css'))
        // .pipe(browserSync.stream())
});

//Css合并&压缩
gulp.task('fnCss',function() {
	gulp.src(path.CSS)
		.pipe(concat('all.css'))
		.pipe(gulp.dest('dist/css'))
		.pipe(minCss())
		.pipe(rename('all.min.css'))
		.pipe(gulp.dest('dist/css'))
        // .pipe(browserSync.stream())
});
// 被迫独立拆分css自动刷新任务
gulp.task('fnDst',function() {
	gulp.src('dist/css/*.css')
		.pipe(browserSync.stream())
});

//Js检验&合并&压缩
gulp.task('fnJs',function() {
	gulp.src(path.JS)
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(minJs())
		.pipe(rename('all.min.js'))
		.pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream())
});

//处理图片
gulp.task('fnImg',function() {
	gulp.src(path.IMG)
		.pipe(minImg({
			progressive: true
		}))
		.pipe(gulp.dest('dist/images'))
});

//监视变化
gulp.task('fnAuto',function() {
	browserSync.init({
        server: './'
    });

    // 打印更改路径与事件
    // gulp.watch([path.HTML,path.JS,path.SASS,path.CSS,path.IMG], function(event) {
    // 	console.info(event.path);

    // 	// changed、added、deleted、renamed
    // 	console.info(event.type);
    // });

    gulp.watch(path.SASS,['fnSass']);
    gulp.watch(path.CSS,['fnCss']);
    gulp.watch(path.JS,['fnJs']);
    gulp.watch(path.IMG,['fnImg']);
    gulp.watch('dist/css/*.css',['fnDst']);
    gulp.watch(path.HTML).on('change',browserSync.reload);
});
gulp.task('default',['fnAuto']);
